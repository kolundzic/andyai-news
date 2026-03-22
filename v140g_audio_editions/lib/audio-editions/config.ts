import type { AudioEditionFallbackMode } from "./types";

export const AUDIO_EDITION_SUPPORTED_LOCALES = ["en", "sr", "jp"] as const;

export const AUDIO_EDITION_DEFAULT_FALLBACK: Record<string, AudioEditionFallbackMode> = {
  en: "none",
  sr: "transcript_only",
  jp: "transcript_only",
};

export const AUDIO_EDITION_DEFAULT_VOICE: Record<string, string> = {
  en: "neutral_news_en_01",
  sr: "neutral_news_sr_01",
  jp: "neutral_news_jp_01",
};
