export type AudioJobStatus =
  | "not_requested"
  | "queued"
  | "claimed"
  | "rendering"
  | "rendered"
  | "failed"
  | "stale"
  | "review_pending"
  | "approved"
  | "publish_ready"
  | "published"
  | "archived"
  | "cancelled";

export type AudioSourceKind =
  | "daily_brief"
  | "newsletter_brief"
  | "article_summary"
  | "edition_intro"
  | "archive_replay";

export interface AudioJob {
  job_id: string;
  edition_id: string;
  day: string;
  locale: string;
  source_kind: AudioSourceKind;
  source_ref: string;
  source_text_hash: string;
  voice_profile: string;
  provider: string;
  format: "mp3" | "wav" | "ogg";
  priority: number;
  status: AudioJobStatus;
  attempt_count: number;
  max_attempts: number;
  worker_id?: string | null;
  lease_expires_at?: string | null;
  created_at: string;
  updated_at: string;
  claimed_at?: string | null;
  completed_at?: string | null;
  error_code?: string | null;
  error_message?: string | null;
}
