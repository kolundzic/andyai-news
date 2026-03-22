export type AudioEditionRole =
  | "daily_brief"
  | "newsletter_brief"
  | "article_summary"
  | "edition_intro"
  | "archive_replay";

export type AudioEditionReadinessState =
  | "missing"
  | "queued"
  | "rendering"
  | "review"
  | "ready_internal"
  | "published"
  | "stale"
  | "withdrawn";

export type AudioEditionFallbackMode =
  | "none"
  | "transcript_only"
  | "text_only"
  | "preview_hidden";

export interface AudioEdition {
  audio_edition_id: string;
  edition_id: string;
  day: string;
  locale: string;
  role: AudioEditionRole;
  source_ref: string;
  source_text_hash: string;
  voice_profile: string;
  provider_preference?: string[];
  current_asset_id?: string | null;
  readiness_state: AudioEditionReadinessState;
  fallback_mode: AudioEditionFallbackMode;
  created_at: string;
  updated_at: string;
}

export interface AudioEditionMatrixRow {
  locale: string;
  role: AudioEditionRole;
  source_ready: boolean;
  audio_ready: boolean;
  transcript_ready: boolean;
  readiness_state: AudioEditionReadinessState;
  fallback_mode: AudioEditionFallbackMode;
}
