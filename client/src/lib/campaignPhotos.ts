export const CDN_BASE_URL = "https://pub-b18faf7762044b018cdf29445a4ba5c7.r2.dev";
export const CAMPAIGN_FOLDER = "Image-campagne";

export interface CampaignPhoto {
  file: string;
  src: string;
  alt: string;
  caption: string;
}

export async function fetchCampaignPhotos(): Promise<CampaignPhoto[]> {
  const response = await fetch("/api/campaign-photos");

  if (!response.ok) {
    throw new Error(`Unable to load campaign photos: HTTP ${response.status}`);
  }

  const payload = (await response.json()) as { photos?: CampaignPhoto[] };
  return Array.isArray(payload.photos) ? payload.photos : [];
}
