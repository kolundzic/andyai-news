import type { VoicePrepLocale } from "./types";

export const VOICE_PREP_SUPPORTED_LOCALES: VoicePrepLocale[] = ["en", "sr", "jp"];

export const VOICE_PREP_DEFAULT_VOICE_BY_LOCALE: Record<VoicePrepLocale, string> = {
  en: "neutral_news_en_01",
  sr: "neutral_news_sr_01",
  jp: "neutral_news_jp_01",
};

export const VOICE_PREP_TARGET_DURATION_SEC = 120;
