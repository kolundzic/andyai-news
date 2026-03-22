import type { AudioJobStatus } from "./types";

export const AUDIO_QUEUE_NAME = "default-audio-queue";
export const AUDIO_DEFAULT_MAX_ATTEMPTS = 3;
export const AUDIO_DEFAULT_PROVIDER = "mock_tts";
export const AUDIO_DEFAULT_FORMAT = "mp3";

export const AUDIO_ACTIVE_STATUSES: AudioJobStatus[] = [
  "queued",
  "claimed",
  "rendering",
  "review_pending",
];
