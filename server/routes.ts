import type { Express } from "express";
import { createServer, type Server } from "http";

type CampaignPhoto = {
  file: string;
  src: string;
  alt: string;
  caption: string;
};

const CDN_BASE_URL = "https://pub-b18faf7762044b018cdf29445a4ba5c7.r2.dev";
const CAMPAIGN_FOLDER = "Image-campagne";
const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"];

function isImageFile(value: string) {
  const lower = value.toLowerCase();
  return IMAGE_EXTENSIONS.some((ext) => lower.endsWith(ext));
}

function cleanName(value: string) {
  return value
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function buildLabel(file: string) {
  const cleaned = cleanName(file);
  return cleaned.length > 0 ? cleaned : "Photo de campagne";
}

function parseHtmlAnchors(html: string, listingUrl: URL) {
  const anchors = Array.from(html.matchAll(/href=["']([^"']+)["']/gi))
    .map((match) => match[1])
    .filter(Boolean);

  const files = anchors
    .map((href) => {
      try {
        const resolved = new URL(href, listingUrl);
        const pathname = decodeURIComponent(resolved.pathname);
        return pathname.split("/").pop() ?? "";
      } catch {
        return "";
      }
    })
    .filter((file) => isImageFile(file));

  return Array.from(new Set(files));
}

function parseXmlKeys(xml: string, folder: string) {
  const prefix = `${folder}/`;
  const files = Array.from(xml.matchAll(/<Key>([^<]+)<\/Key>/g))
    .map((match) => decodeURIComponent(match[1]))
    .filter((key) => key.startsWith(prefix))
    .map((key) => key.slice(prefix.length))
    .filter((file) => isImageFile(file));

  return Array.from(new Set(files));
}

function buildPhotoSrc(file: string) {
  return `${CDN_BASE_URL}/${CAMPAIGN_FOLDER}/${encodeURIComponent(file)}`;
}

async function loadCampaignPhotosFromCdn() {
  const folderPrefix = `${CAMPAIGN_FOLDER}/`;
  const listingUrls = [
    new URL(`${CDN_BASE_URL}/?list-type=2&prefix=${encodeURIComponent(folderPrefix)}`),
    new URL(`${CDN_BASE_URL}/${CAMPAIGN_FOLDER}/`),
  ];
  const errors: string[] = [];

  for (const listingUrl of listingUrls) {
    try {
      const response = await fetch(listingUrl.href, {
        headers: { Accept: "text/html,application/xml,text/xml,application/json" },
      });

      if (!response.ok) {
        errors.push(`${listingUrl.href} -> HTTP ${response.status}`);
        continue;
      }

      const raw = await response.text();
      let files: string[] = [];

      if (raw.trim().startsWith("<")) {
        files = raw.includes("<Key>")
          ? parseXmlKeys(raw, CAMPAIGN_FOLDER)
          : parseHtmlAnchors(raw, listingUrl);
      } else {
        try {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed)) {
            files = parsed
              .map((entry) => (typeof entry === "string" ? entry : entry?.file))
              .filter((value): value is string => Boolean(value && isImageFile(value)));
          }
        } catch {
          files = [];
        }
      }

      if (files.length > 0) {
        return files.map((file): CampaignPhoto => ({
          file,
          src: buildPhotoSrc(file),
          alt: buildLabel(file),
          caption: buildLabel(file),
        }));
      }

      errors.push(`${listingUrl.href} -> empty listing`);
    } catch (error) {
      errors.push(
        `${listingUrl.href} -> ${
          error instanceof Error ? error.message : "unknown fetch error"
        }`,
      );
    }
  }

  throw new Error(`CDN listing unavailable (${errors.join(" | ")})`);
}

function toCampaignPhotos(files: string[]) {
  return files.map((file): CampaignPhoto => ({
    file,
    src: buildPhotoSrc(file),
    alt: buildLabel(file),
    caption: buildLabel(file),
  }));
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  app.get("/api/campaign-photos", async (_req, res) => {
    try {
      const photos = await loadCampaignPhotosFromCdn();
      res.json({
        photos,
        count: photos.length,
        source: `${CDN_BASE_URL}/${CAMPAIGN_FOLDER}/`,
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unknown error while listing photos";
      res.status(502).json({ photos: [], count: 0, message });
    }
  });

  return httpServer;
}
