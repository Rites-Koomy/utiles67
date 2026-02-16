import photosJson from "@/content/campaign.photos.json";

export const CDN_BASE_URL = "https://pub-b18faf7762044b018cdf29445a4ba5c7.r2.dev";
export const CAMPAIGN_FOLDER = "Image-campagne";

export interface CampaignPhotoEntry {
  file: string;
  alt: string;
  caption: string;
}

export interface CampaignPhoto extends CampaignPhotoEntry {
  src: string;
}

export function buildCampaignPhotoUrl(entry: CampaignPhotoEntry) {
  const encodedFile = encodeURI(entry.file);
  const prefix = CAMPAIGN_FOLDER.startsWith("/")
    ? CAMPAIGN_FOLDER
    : `/${CAMPAIGN_FOLDER}`;
  return `${CDN_BASE_URL}${prefix}/${encodedFile}`;
}

export const campaignPhotos: CampaignPhoto[] = (
  photosJson as CampaignPhotoEntry[]
).map((entry) => ({
  ...entry,
  src: buildCampaignPhotoUrl(entry),
}));
