import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { CampaignPhotoEntry, buildCampaignPhotoUrl } from "@/lib/campaignPhotos";

const PHOTOS_FILE = path.resolve("client/src/content/campaign.photos.json");
const INVALID_REPORT_FILE = path.resolve(
  "client/src/content/campaign.photos.invalid.json",
);

type ValidationResult = {
  entry: CampaignPhotoEntry;
  url: string;
  ok: boolean;
  status?: number;
  reason?: string;
};

async function checkPhoto(entry: CampaignPhotoEntry): Promise<ValidationResult> {
  const url = buildCampaignPhotoUrl(entry);
  try {
    const response = await fetch(url, {
      method: "HEAD",
    });

    if (response.ok) {
      return { entry, url, ok: true, status: response.status };
    }

    if (response.status === 405) {
      const fallback = await fetch(url, { method: "GET" });
      if (fallback.ok) {
        return { entry, url, ok: true, status: fallback.status };
      }
      return {
        entry,
        url,
        ok: false,
        status: fallback.status,
        reason: "GET fallback failed",
      };
    }

    return {
      entry,
      url,
      ok: false,
      status: response.status,
      reason: "HEAD returned non-ok status",
    };
  } catch (error) {
    return {
      entry,
      url,
      ok: false,
      reason: error instanceof Error ? error.message : "unknown",
    };
  }
}

async function run() {
  const raw = await readFile(PHOTOS_FILE, "utf-8");
  const entries = JSON.parse(raw) as CampaignPhotoEntry[];

  const validated = await Promise.all(entries.map((entry) => checkPhoto(entry)));

  const invalid = validated.filter((result) => !result.ok);

  console.log("Photo validation report:");
  validated.forEach((result) => {
    console.log(
      `${result.ok ? "✅" : "❌"} ${result.url} ${
        result.status ? `(HTTP ${result.status})` : ""
      } ${result.reason ?? ""}`,
    );
  });

  if (invalid.length) {
    console.warn(`\n${invalid.length} photo(s) invalid`);
    await writeFile(
      INVALID_REPORT_FILE,
      JSON.stringify(
        invalid.map((result) => ({
          file: result.entry.file,
          caption: result.entry.caption,
          alt: result.entry.alt,
          url: result.url,
          status: result.status,
          reason: result.reason,
        })),
        null,
        2,
      ),
      "utf-8",
    );
    console.log(`Invalid entries written to ${INVALID_REPORT_FILE}`);
  } else {
    console.log("All photos validated.");
    await writeFile(INVALID_REPORT_FILE, "[]", "utf-8");
  }
}

run().catch((error) => {
  console.error("validate-photos failed", error);
  process.exit(1);
});
