import type { Express } from "express";
import { createServer, type Server } from "http";
import { readFile } from "node:fs/promises";
import path from "node:path";

type CampaignPhoto = {
  file: string;
  src: string;
  alt: string;
  caption: string;
};

type ManifestImage = {
  name?: string;
  url?: string;
};

type CampaignManifest = {
  prefix?: string;
  images?: ManifestImage[];
};

const CDN_BASE_URL = "https://pub-b18faf7762044b018cdf29445a4ba5c7.r2.dev";
const CAMPAIGN_FOLDER = "Image-campagne";
const MANIFEST_URL = `${CDN_BASE_URL}/${CAMPAIGN_FOLDER}/manifest.json`;
const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".gif"];

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

function toPhotoEntry(name: string, url?: string): CampaignPhoto {
  const normalizedName = decodeURIComponent(name).trim();
  const safeName = normalizedName.split("/").pop() ?? normalizedName;
  const src =
    url && url.startsWith("http")
      ? url
      : `${CDN_BASE_URL}/${CAMPAIGN_FOLDER}/${encodeURIComponent(safeName)}`;
  const label = cleanName(safeName) || "Photo de campagne";
  return {
    file: safeName,
    src,
    alt: label,
    caption: label,
  };
}

function normalizeManifest(manifest: CampaignManifest): CampaignPhoto[] {
  const images = Array.isArray(manifest.images) ? manifest.images : [];
  const dedupe = new Map<string, CampaignPhoto>();

  for (const image of images) {
    const name = image?.name?.trim() ?? "";
    const url = image?.url?.trim() ?? "";
    if (!name || !isImageFile(name)) continue;
    const entry = toPhotoEntry(name, url);
    dedupe.set(entry.file.toLowerCase(), entry);
  }

  return Array.from(dedupe.values()).sort((a, b) =>
    a.file.localeCompare(b.file, "fr", { sensitivity: "base" }),
  );
}

type StaticCampaignEntry = {
  file: string;
  alt?: string;
  caption?: string;
};

async function readStaticFallback(): Promise<CampaignPhoto[]> {
  const filePath = path.resolve(process.cwd(), "client/src/content/campaign.photos.json");
  const raw = await readFile(filePath, "utf-8");
  const parsed = JSON.parse(raw) as StaticCampaignEntry[];
  const dedupe = new Map<string, CampaignPhoto>();

  for (const entry of parsed) {
    const name = (entry.file ?? "").trim();
    if (!name || !isImageFile(name)) continue;
    const normalized = toPhotoEntry(name);
    dedupe.set(normalized.file.toLowerCase(), {
      ...normalized,
      alt: entry.alt?.trim() || normalized.alt,
      caption: entry.caption?.trim() || normalized.caption,
    });
  }

  return Array.from(dedupe.values()).sort((a, b) =>
    a.file.localeCompare(b.file, "fr", { sensitivity: "base" }),
  );
}

async function loadCampaignPhotos(): Promise<{
  photos: CampaignPhoto[];
  source: "manifest" | "static-fallback";
}> {
  try {
    const response = await fetch(MANIFEST_URL, {
      headers: { Accept: "application/json" },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const manifest = (await response.json()) as CampaignManifest;
    const photos = normalizeManifest(manifest);

    if (photos.length > 0) {
      return { photos, source: "manifest" };
    }
    throw new Error("manifest has no valid image entries");
  } catch {
    const photos = await readStaticFallback();
    return { photos, source: "static-fallback" };
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express,
): Promise<Server> {
  app.get("/api/campaign-photos", async (_req, res) => {
    try {
      const { photos, source } = await loadCampaignPhotos();
      res.json({
        photos,
        count: photos.length,
        source,
        manifestUrl: MANIFEST_URL,
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unknown error while loading photos";
      res.status(502).json({ photos: [], count: 0, message, manifestUrl: MANIFEST_URL });
    }
  });

  return httpServer;
}
