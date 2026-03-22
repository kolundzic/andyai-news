import {
  AUDIO_EDITION_DEFAULT_FALLBACK,
  AUDIO_EDITION_DEFAULT_VOICE,
} from "./config";
import type {
  AudioEdition,
  AudioEditionFallbackMode,
  AudioEditionMatrixRow,
  AudioEditionReadinessState,
  AudioEditionRole,
} from "./types";

export function makeAudioEditionId(day: string, editionId: string, locale: string) {
  const safeEdition = editionId.replace(/[^a-zA-Z0-9-]+/g, "-");
  return `audedition_${day}_${safeEdition}_${locale}`;
}

export function getDefaultFallbackMode(locale: string): AudioEditionFallbackMode {
  return AUDIO_EDITION_DEFAULT_FALLBACK[locale] ?? "text_only";
}

export function getDefaultVoiceProfile(locale: string): string {
  return AUDIO_EDITION_DEFAULT_VOICE[locale] ?? "neutral_news_en_01";
}

export function makeAudioEdition(input: {
  editionId: string;
  day: string;
  locale: string;
  role: AudioEditionRole;
  sourceRef: string;
  sourceTextHash: string;
  currentAssetId?: string | null;
  readinessState?: AudioEditionReadinessState;
}): AudioEdition {
  const now = new Date().toISOString();
  return {
    audio_edition_id: makeAudioEditionId(input.day, input.editionId, input.locale),
    edition_id: input.editionId,
    day: input.day,
    locale: input.locale,
    role: input.role,
    source_ref: input.sourceRef,
    source_text_hash: input.sourceTextHash,
    voice_profile: getDefaultVoiceProfile(input.locale),
    provider_preference: ["provider_a", "mock_tts"],
    current_asset_id: input.currentAssetId ?? null,
    readiness_state: input.readinessState ?? "queued",
    fallback_mode: getDefaultFallbackMode(input.locale),
    created_at: now,
    updated_at: now,
  };
}

export function toMatrixRow(edition: AudioEdition): AudioEditionMatrixRow {
  return {
    locale: edition.locale,
    role: edition.role,
    source_ready: true,
    audio_ready: edition.readiness_state === "published" || edition.readiness_state === "ready_internal",
    transcript_ready: edition.fallback_mode === "transcript_only" || edition.readiness_state === "published",
    readiness_state: edition.readiness_state,
    fallback_mode: edition.fallback_mode,
  };
}
