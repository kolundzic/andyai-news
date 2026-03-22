import snapshot from "@/data/voice-prep/voice-snapshot.json";
import {
  VOICE_PREP_DEFAULT_VOICE_BY_LOCALE,
  VOICE_PREP_SUPPORTED_LOCALES,
  VOICE_PREP_TARGET_DURATION_SEC,
} from "./config";
import type { VoicePrepEntry, VoicePrepLocale, VoicePrepSnapshot } from "./types";

export function getVoicePrepSnapshot(): VoicePrepSnapshot {
  return snapshot as VoicePrepSnapshot;
}

export function getVoicePrepEntries(): VoicePrepEntry[] {
  return getVoicePrepSnapshot().entries;
}

export function getVoicePrepEntriesForLocale(locale: VoicePrepLocale): VoicePrepEntry[] {
  return getVoicePrepEntries().filter((entry) => entry.locale === locale);
}

export function getVoicePrepOverview() {
  return {
    locales: VOICE_PREP_SUPPORTED_LOCALES,
    defaults: VOICE_PREP_DEFAULT_VOICE_BY_LOCALE,
    targetDurationSec: VOICE_PREP_TARGET_DURATION_SEC,
    totalEntries: getVoicePrepEntries().length,
  };
}
