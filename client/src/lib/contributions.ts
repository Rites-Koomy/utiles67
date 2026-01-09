import { config } from "@/config";

export interface Contribution {
  type: "support" | "help" | "comment";
  measureId: string;
  timestamp: string;
  text?: string;
  contact?: {
    name?: string;
    email?: string;
    quartier?: string;
  };
  pageUrl: string;
  userAgent?: string;
}

const STORAGE_KEY = "utiles67_contributions";
const VOTES_KEY = "utiles67_votes";

export function getStoredContributions(): Contribution[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

export function getUserVotes(): Record<string, string[]> {
  try {
    return JSON.parse(localStorage.getItem(VOTES_KEY) || "{}");
  } catch {
    return {};
  }
}

export function hasUserVoted(measureId: string, type: "support" | "help"): boolean {
  const votes = getUserVotes();
  return votes[measureId]?.includes(type) || false;
}

export function markUserVoted(measureId: string, type: "support" | "help"): void {
  const votes = getUserVotes();
  if (!votes[measureId]) votes[measureId] = [];
  if (!votes[measureId].includes(type)) {
    votes[measureId].push(type);
  }
  localStorage.setItem(VOTES_KEY, JSON.stringify(votes));
}

export async function saveContribution(contribution: Contribution): Promise<void> {
  const existing = getStoredContributions();
  existing.push(contribution);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));

  if (config.formEngagementUrl) {
    try {
      await fetch(config.formEngagementUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contribution),
      });
    } catch (e) {
      console.warn("Failed to send contribution to endpoint:", e);
    }
  }
}

export function getBaseCountForMeasure(measureId: string, type: "support" | "reaction"): number {
  const hash = measureId.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  if (type === "support") {
    return 200 + (hash % 300);
  }
  return 10 + (hash % 20);
}

export function getLocalIncrements(measureId: string): { supports: number; reactions: number } {
  const contributions = getStoredContributions();
  const forMeasure = contributions.filter(c => c.measureId === measureId);
  
  return {
    supports: forMeasure.filter(c => c.type === "support").length,
    reactions: forMeasure.filter(c => c.type === "comment" || c.type === "help").length,
  };
}

export function clearContributions(): void {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(VOTES_KEY);
}
