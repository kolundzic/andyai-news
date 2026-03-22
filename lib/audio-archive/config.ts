import type { AudioRetentionClass } from "./types";

export const AUDIO_ARCHIVE_DEFAULT_RETENTION: Record<string, AudioRetentionClass> = {
  daily_brief: "permanent",
  newsletter_brief: "standard",
  article_summary: "standard",
  edition_intro: "compact",
  archive_replay: "permanent",
};

export const AUDIO_REPLAY_DEFAULT_MODE = "original_replay" as const;
