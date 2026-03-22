export type AudioSyncMode = "none" | "segment";

export interface AudioTranscriptSegment {
  segment_id: string;
  index: number;
  text: string;
  start_ms: number;
  end_ms: number;
}

export interface AudioStructuredTranscript {
  transcript_version: "1";
  asset_id: string;
  edition_id: string;
  day: string;
  locale: string;
  role: "daily_brief" | "newsletter_brief" | "article_summary" | "edition_intro" | "archive_replay";
  full_text: string;
  segments: AudioTranscriptSegment[];
  generated_at: string;
  sync_mode: AudioSyncMode;
  transcript_url?: string | null;
  captions_url?: string | null;
}
