import photosJson from "@/content/campaign.photos.json";

export const CDN_BASE_URL = "https://pub-b18faf7762044b018cdf29445a4ba5c7.r2.dev";
export const CAMPAIGN_FOLDER = "Image-campagne";

export interface CampaignPhoto {
  file: string;
  src: string;
  alt: string;
  caption: string;
}

interface CampaignPhotoEntry {
  file: string;
  alt?: string;
  caption?: string;
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

function buildCampaignPhotoUrl(file: string) {
  return `${CDN_BASE_URL}/${CAMPAIGN_FOLDER}/${encodeURIComponent(file)}`;
}

function fallbackFromStaticJson(): CampaignPhoto[] {
  const entries = photosJson as CampaignPhotoEntry[];
  return entries
    .filter((entry) => Boolean(entry.file && entry.file.trim()))
    .map((entry) => {
      const label = buildLabel(entry.file);
      return {
        file: entry.file,
        src: buildCampaignPhotoUrl(entry.file),
        alt: entry.alt?.trim() || label,
        caption: entry.caption?.trim() || label,
      };
    });
}

export async function fetchCampaignPhotos(): Promise<CampaignPhoto[]> {
  try {
    const response = await fetch("/api/campaign-photos");
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const payload = (await response.json()) as { photos?: CampaignPhoto[] };
    if (Array.isArray(payload.photos) && payload.photos.length > 0) {
      return payload.photos;
    }
  } catch {
    // fall through to static fallback
  }
  return fallbackFromStaticJson();
}
