import snapshot from "@/data/audio-jobs/queue-snapshot.json";
import type { AudioJob, AudioJobStatus } from "./types";
import {
  AUDIO_DEFAULT_FORMAT,
  AUDIO_DEFAULT_MAX_ATTEMPTS,
  AUDIO_DEFAULT_PROVIDER,
} from "./config";

const ALLOWED_TRANSITIONS: Record<AudioJobStatus, AudioJobStatus[]> = {
  not_requested: ["queued"],
  queued: ["claimed", "cancelled"],
  claimed: ["rendering", "failed", "queued"],
  rendering: ["rendered", "failed"],
  rendered: ["review_pending", "stale"],
  failed: ["queued", "cancelled"],
  stale: ["queued", "archived"],
  review_pending: ["approved", "cancelled", "stale"],
  approved: ["publish_ready", "stale"],
  publish_ready: ["published", "stale"],
  published: ["archived", "stale"],
  archived: [],
  cancelled: [],
};

export function getAudioQueueSnapshot(): { jobs: AudioJob[] } {
  return snapshot as { jobs: AudioJob[] };
}

export function canTransitionAudioJob(
  from: AudioJobStatus,
  to: AudioJobStatus,
): boolean {
  return ALLOWED_TRANSITIONS[from]?.includes(to) ?? false;
}

export function makeAudioJobId(input: {
  day: string;
  edition: string;
  locale: string;
  sourceKind: string;
  version?: number;
}): string {
  const edition = input.edition.replace(/[^a-zA-Z0-9-]/g, "-");
  const sourceKind = input.sourceKind.replace(/_/g, "-");
  return `audjob_${input.day}_${edition}_${input.locale}_${sourceKind}_v${input.version ?? 1}`;
}

export function makeQueuedAudioJob(input: {
  edition_id: string;
  day: string;
  locale: string;
  source_kind: AudioJob["source_kind"];
  source_ref: string;
  source_text_hash: string;
  voice_profile: string;
  priority?: number;
}): AudioJob {
  const now = new Date().toISOString();
  return {
    job_id: makeAudioJobId({
      day: input.day,
      edition: input.edition_id,
      locale: input.locale,
      sourceKind: input.source_kind,
    }),
    edition_id: input.edition_id,
    day: input.day,
    locale: input.locale,
    source_kind: input.source_kind,
    source_ref: input.source_ref,
    source_text_hash: input.source_text_hash,
    voice_profile: input.voice_profile,
    provider: AUDIO_DEFAULT_PROVIDER,
    format: AUDIO_DEFAULT_FORMAT,
    priority: input.priority ?? 50,
    status: "queued",
    attempt_count: 0,
    max_attempts: AUDIO_DEFAULT_MAX_ATTEMPTS,
    created_at: now,
    updated_at: now,
    claimed_at: null,
    completed_at: null,
    error_code: null,
    error_message: null,
  };
}
