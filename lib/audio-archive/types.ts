export type AudioArchiveStatus =
  | "active"
  | "superseded"
  | "withdrawn"
  | "missing_asset"
  | "corrupted";

export type AudioReplayStatus =
  | "available"
  | "disabled"
  | "needs_rerender"
  | "internal_only";

export type AudioRetentionClass =
  | "permanent"
  | "standard"
  | "compact"
  | "ephemeral";

export interface AudioArchiveRecord {
  archive_record_id: string;
  edition_id: string;
  day: string;
  locale: string;
  role: "daily_brief" | "newsletter_brief" | "article_summary" | "edition_intro" | "archive_replay";
  official_asset_id: string;
  source_ref: string;
  source_text_hash: string;
  published_at: string;
  archive_status: AudioArchiveStatus;
  replay_status: AudioReplayStatus;
  retention_class: AudioRetentionClass;
  superseded_by_asset_id?: string | null;
  notes?: string | null;
  created_at: string;
  updated_at: string;
}
