export type AudioAssetRole =
  | "daily_brief"
  | "newsletter_brief"
  | "article_summary"
  | "edition_intro"
  | "archive_replay";

export interface AudioAssetRecord {
  asset_id: string;
  job_id: string;
  edition_id: string;
  day: string;
  locale: string;
  role: AudioAssetRole;
  source_ref: string;
  source_text_hash: string;
  provider: string;
  voice_profile: string;
  format: "mp3" | "wav" | "ogg";
  mime_type: string;
  storage_path: string;
  metadata_path: string;
  transcript_path?: string | null;
  captions_path?: string | null;
  public_url?: string | null;
  public_metadata_url?: string | null;
  public_captions_url?: string | null;
  size_bytes: number;
  duration_sec: number;
  checksum_sha256: string;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface AudioAssetManifest {
  edition_id: string;
  day: string;
  locale: string;
  assets: Array<{
    role: AudioAssetRole;
    asset_id: string;
    public_url: string;
    duration_sec: number;
    published: boolean;
  }>;
  generated_at: string;
}
