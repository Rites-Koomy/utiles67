export const CDN_BASE_URL = "https://pub-b18faf7762044b018cdf29445a4ba5c7.r2.dev";
export const CAMPAIGN_FOLDER = "Image-campagne";

export interface CampaignPhoto {
  file: string;
  src: string;
  alt: string;
  caption: string;
}

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"];

function normalizeFolder(folder: string) {
  return folder.replace(/^\/+|\/+$/g, "");
}

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
  const folder = normalizeFolder(CAMPAIGN_FOLDER);
  return `${CDN_BASE_URL}/${folder}/${encodeURIComponent(file)}`;
}

export async function fetchCampaignPhotos(): Promise<CampaignPhoto[]> {
  const folder = normalizeFolder(CAMPAIGN_FOLDER);
  const listingUrl = new URL(`${CDN_BASE_URL}/${folder}/`);

  const response = await fetch(listingUrl.href, {
    headers: { Accept: "text/html,application/xml,text/xml,application/json" },
  });

  if (!response.ok) {
    throw new Error(`Unable to load CDN folder listing: HTTP ${response.status}`);
  }

  const raw = await response.text();
  let files: string[] = [];

  if (raw.trim().startsWith("<")) {
    files = raw.includes("<Key>")
      ? parseXmlKeys(raw, folder)
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

  return files.map((file) => ({
    file,
    src: buildPhotoSrc(file),
    alt: buildLabel(file),
    caption: buildLabel(file),
  }));
}
