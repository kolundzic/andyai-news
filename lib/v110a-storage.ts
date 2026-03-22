export const V110_STORAGE_KEYS = {
  autosaveDraft: "andyai-news:v110a:autosave-draft",
  autosaveMeta: "andyai-news:v110a:autosave-meta",
  liveDayCandidate: "andyai-news:v110a:live-day-candidate",
  newsletterPrefs: "andyai-news:v110a:newsletter-prefs"
} as const;

export function safeLoadJSON<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function safeSaveJSON<T>(key: string, value: T): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // fail-soft by design
  }
}

export function nowIso(): string {
  return new Date().toISOString();
}
