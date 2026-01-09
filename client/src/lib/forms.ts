import { config } from "@/config";

export interface FormData {
  [key: string]: string | undefined;
}

const STORAGE_KEYS = {
  join: "utiles67_join_submissions",
  question: "utiles67_question_submissions",
  engagement: "utiles67_engagement_submissions",
};

function getStoredSubmissions(key: string): FormData[] {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
}

function saveToLocalStorage(key: string, data: FormData): void {
  const existing = getStoredSubmissions(key);
  existing.push({
    ...data,
    timestamp: new Date().toISOString(),
    pageUrl: window.location.href,
  });
  localStorage.setItem(key, JSON.stringify(existing));
}

async function postToEndpoint(url: string, data: FormData): Promise<boolean> {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.ok;
  } catch {
    return false;
  }
}

export async function submitJoinForm(data: FormData): Promise<boolean> {
  saveToLocalStorage(STORAGE_KEYS.join, data);
  
  if (config.formJoinUrl) {
    return postToEndpoint(config.formJoinUrl, data);
  }
  return true;
}

export async function submitQuestionForm(data: FormData): Promise<boolean> {
  saveToLocalStorage(STORAGE_KEYS.question, data);
  
  if (config.formQuestionUrl) {
    return postToEndpoint(config.formQuestionUrl, data);
  }
  return true;
}

export async function submitEngagementForm(data: FormData): Promise<boolean> {
  saveToLocalStorage(STORAGE_KEYS.engagement, data);
  
  if (config.formEngagementUrl) {
    return postToEndpoint(config.formEngagementUrl, data);
  }
  return true;
}

export function isHoneypotFilled(value: string | undefined): boolean {
  return !!value && value.trim() !== "";
}
