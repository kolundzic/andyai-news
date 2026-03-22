export const AUDIO_TRANSCRIPT_VERSION = "1" as const;

export const AUDIO_TRANSCRIPT_DEFAULTS = {
  sync_mode: "segment" as const,
  caption_format: "vtt" as const,
  transcript_format: "txt" as const,
};
