export type PublicAudioStatus =
  | "ready"
  | "pending"
  | "unavailable"
  | "stale"
  | "withdrawn";

export interface PublicAudioPlayerContract {
  player_version: "1";
  asset_id: string;
  edition_id: string;
  day: string;
  locale: string;
  role: "daily_brief" | "newsletter_brief" | "article_summary" | "edition_intro" | "archive_replay";
  title: string;
  audio_url?: string | null;
  metadata_url?: string | null;
  transcript_url?: string | null;
  captions_url?: string | null;
  mime_type?: string | null;
  duration_sec?: number | null;
  voice_profile?: string | null;
  generated_at?: string | null;
  published: boolean;
  stale: boolean;
  status: PublicAudioStatus;
  message?: string | null;
}
