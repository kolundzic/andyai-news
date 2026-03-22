export type VoicePrepLocale = "en" | "sr" | "jp";

export type VoicePrepStatus =
  | "draft"
  | "ready"
  | "blocked";

export interface VoicePrepEntry {
  id: string;
  editionDay: string;
  locale: VoicePrepLocale;
  title: string;
  summary: string;
  scriptPreview: string;
  targetDurationSec: number;
  preferredVoice: string;
  status: VoicePrepStatus;
  notes?: string;
}

export interface VoicePrepSnapshot {
  version: string;
  generatedAt: string;
  entries: VoicePrepEntry[];
}
