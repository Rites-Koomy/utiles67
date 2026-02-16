import { createHash } from "node:crypto";
import { readFile, writeFile, mkdir, stat } from "node:fs/promises";
import path from "node:path";
import dns from "node:dns/promises";
import net from "node:net";
import ipaddr from "ipaddr.js";

const LINKS_FILE = path.resolve("client/src/content/actu.links.json");
const OUTPUT_FILE = path.resolve("client/src/content/actu.previews.json");
const CACHE_DIR = path.resolve(".cache/link-previews");
const SCRIPT_NAME = "build-link-previews";
const ENV_TTL_HOURS = Number(process.env.LINK_PREVIEW_TTL_HOURS ?? "24");
const TTL_HOURS = Number.isNaN(ENV_TTL_HOURS)
  ? 24
  : Math.max(24, ENV_TTL_HOURS);
const TTL_MS = TTL_HOURS * 60 * 60 * 1000;
const FETCH_TIMEOUT_MS = (() => {
  const raw = Number(process.env.LINK_PREVIEW_TIMEOUT_MS ?? "8000");
  return Number.isNaN(raw) ? 8000 : raw;
})();
const ALLOWED_DOMAINS = (process.env.ALLOWED_PREVIEW_DOMAINS ?? "")
  .split(",")
  .map((value) => value.trim().toLowerCase())
  .filter(Boolean);
const USER_AGENT = "utiles67-link-preview/1.0 (+https://utiles67.fr)";

type ActuLink = {
  id: string;
  url: string;
  publishedAt?: string;
  sourceLabel?: string;
  pinned?: boolean;
};

type ActuPreview = {
  id: string;
  url: string;
  title: string;
  description?: string | null;
  image?: string | null;
  siteName?: string | null;
  domain: string;
  sourceLabel?: string;
  publishedAt?: string;
  pinned?: boolean;
  fetchedAt: string;
  fallback?: boolean;
  error?: string;
};

type CachedPreview = {
  fetchedAt: string;
  preview: Pick<ActuPreview, "title" | "description" | "image" | "siteName" | "domain">;
};

const BLOCKED_IP_RANGES = new Set([
  "unspecified",
  "broadcast",
  "multicast",
  "loopback",
  "linkLocal",
  "uniqueLocal",
  "private",
  "reserved",
  "carrierGradeNat",
  "documentation",
]);

const hostSafetyCache = new Map<string, boolean>();

async function ensureCacheDir() {
  await mkdir(CACHE_DIR, { recursive: true });
  await mkdir(path.dirname(OUTPUT_FILE), { recursive: true });
}

function normalizeDomain(value: string) {
  return value.trim().toLowerCase();
}

function isDomainAllowed(host: string) {
  if (!ALLOWED_DOMAINS.length) return true;
  const normalized = normalizeDomain(host);
  return ALLOWED_DOMAINS.some(
    (allowed) =>
      normalized === allowed || normalized.endsWith(`.${allowed}`),
  );
}

function isIpPrivate(address: string) {
  try {
    if (net.isIP(address) === 0) {
      return true;
    }
    const parsed = ipaddr.parse(address);
    return BLOCKED_IP_RANGES.has(parsed.range());
  } catch {
    return true;
  }
}

async function assertHostSafe(host: string) {
  if (hostSafetyCache.get(host)) return;
  if (!isDomainAllowed(host)) {
    throw new Error(`"${host}" is not allowed by ALLOWED_PREVIEW_DOMAINS`);
  }

  const records = await dns.lookup(host, { all: true });
  if (!records.length) {
    throw new Error(`unable to resolve ${host}`);
  }

  for (const record of records) {
    if (isIpPrivate(record.address)) {
      throw new Error(`blocking private/reserved IP for ${host}`);
    }
  }

  hostSafetyCache.set(host, true);
}

async function readCache(url: string) {
  const key = createHash("sha256").update(url).digest("hex");
  const cachePath = path.join(CACHE_DIR, `${key}.json`);
  try {
    const entry = await readFile(cachePath, "utf-8");
    const parsed: CachedPreview = JSON.parse(entry);
    const age = Date.now() - new Date(parsed.fetchedAt).getTime();
    if (age <= TTL_MS) {
      return parsed;
    }
  } catch {
    // ignore and refetch
  }
  return null;
}

async function writeCache(url: string, preview: CachedPreview) {
  const key = createHash("sha256").update(url).digest("hex");
  const cachePath = path.join(CACHE_DIR, `${key}.json`);
  try {
    await writeFile(cachePath, JSON.stringify(preview, null, 2), "utf-8");
  } catch (error) {
    console.error(`${SCRIPT_NAME}: failed to write cache`, error);
  }
}

function decodeHtml(value: string) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function resolveMetaImage(value: string, base: URL) {
  if (!value) return null;
  try {
    return new URL(value, base.href).href;
  } catch {
    return null;
  }
}

function parseMeta(html: string) {
  const metas: Record<string, string> = {};
  const metaRegex = /<meta\s+([^>]+?)\/?>/gi;
  const attrRegex = /([^\s=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^>\s]+)))?/gi;
  let metaMatch: RegExpExecArray | null;

  while ((metaMatch = metaRegex.exec(html))) {
    const attrString = metaMatch[1];
    attrRegex.lastIndex = 0;
    const attributes: Record<string, string> = {};

    let attrMatch: RegExpExecArray | null;
    while ((attrMatch = attrRegex.exec(attrString))) {
      const name = attrMatch[1].toLowerCase();
      const value = attrMatch[2] ?? attrMatch[3] ?? attrMatch[4] ?? "";
      attributes[name] = value;
    }

    const key =
      attributes.property ?? attributes.name ?? attributes.itemprop ?? null;
    const content = attributes.content;
    if (key && content) {
      metas[key.toLowerCase()] = content;
    }
  }

  return metas;
}

function extractTitle(html: string) {
  const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (!match) return null;
  return decodeHtml(match[1].trim());
}

async function fetchPreviewHtml(url: string) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent": USER_AGENT,
        Accept: "text/html,application/xhtml+xml",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return await response.text();
  } finally {
    clearTimeout(timer);
  }
}

function pickValue<T extends string | undefined | null>(
  metas: Record<string, string>,
  keys: string[],
  fallback?: T,
): string | null {
  for (const key of keys) {
    if (key in metas) {
      const value = metas[key];
      if (value) {
        return value;
      }
    }
  }
  return fallback ?? null;
}

async function buildPreview(link: ActuLink): Promise<ActuPreview> {
  const normalizedUrl = new URL(link.url);
  const previewBase = {
    id: link.id,
    url: normalizedUrl.href,
    domain: normalizedUrl.hostname,
    sourceLabel: link.sourceLabel,
    publishedAt: link.publishedAt,
    pinned: link.pinned ?? false,
    fetchedAt: new Date().toISOString(),
  };

  try {
    await assertHostSafe(normalizedUrl.hostname);
    const cached = await readCache(normalizedUrl.href);
    if (cached) {
      return {
        ...previewBase,
        ...cached.preview,
        fetchedAt: cached.fetchedAt,
      };
    }

    const html = await fetchPreviewHtml(normalizedUrl.href);
    const metas = parseMeta(html);

    const title =
      pickValue(metas, [
        "og:title",
        "twitter:title",
        "title",
        "sailthru.title",
      ]) ?? extractTitle(html) ?? normalizedUrl.hostname;
    const description = pickValue(metas, [
      "og:description",
      "twitter:description",
      "description",
    ]);
    const image = resolveMetaImage(
      pickValue(metas, ["og:image", "twitter:image", "image"]),
      normalizedUrl,
    );
    const siteName =
      pickValue(metas, ["og:site_name", "application-name"]) ??
      normalizedUrl.hostname;

    const previewPayload = {
      title: decodeHtml(title),
      description: description ? decodeHtml(description) : null,
      image,
      siteName: siteName ? decodeHtml(siteName) : normalizedUrl.hostname,
      domain: normalizedUrl.hostname,
    };

    await writeCache(normalizedUrl.href, {
      fetchedAt: new Date().toISOString(),
      preview: previewPayload,
    });

    return {
      ...previewBase,
      ...previewPayload,
    };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "lecture indisponible";
    console.error(`${SCRIPT_NAME}: failed to fetch ${link.url}:`, message);
    return {
      ...previewBase,
      title: link.sourceLabel ?? normalizedUrl.hostname,
      description: null,
      image: null,
      siteName: link.sourceLabel ?? normalizedUrl.hostname,
      fallback: true,
      error: message,
    };
  }
}

async function loadLinks(): Promise<ActuLink[]> {
  const raw = await readFile(LINKS_FILE, "utf-8");
  return JSON.parse(raw);
}

function compareLinks(a: ActuPreview, b: ActuPreview) {
  if ((a.pinned ? 1 : 0) !== (b.pinned ? 1 : 0)) {
    return a.pinned ? -1 : 1;
  }

  const aDate = a.publishedAt ? Date.parse(a.publishedAt) : 0;
  const bDate = b.publishedAt ? Date.parse(b.publishedAt) : 0;
  return bDate - aDate;
}

async function run() {
  console.log(`${SCRIPT_NAME}: starting (${new Date().toISOString()})`);
  await ensureCacheDir();
  const links = await loadLinks();
  const previews: ActuPreview[] = [];

  for (const link of links) {
    try {
      previews.push(await buildPreview(link));
    } catch (error) {
      console.error(`${SCRIPT_NAME}: unexpected failure for ${link.url}`, error);
    }
  }

  previews.sort(compareLinks);
  await writeFile(OUTPUT_FILE, JSON.stringify(previews, null, 2), "utf-8");
  console.log(
    `${SCRIPT_NAME}: wrote ${previews.length} preview(s) to ${OUTPUT_FILE}`,
  );
}

run().catch((error) => {
  console.error(`${SCRIPT_NAME}: fatal`, error);
  process.exit(1);
});
