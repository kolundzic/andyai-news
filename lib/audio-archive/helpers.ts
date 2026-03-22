import type { AudioArchiveRecord, AudioArchiveStatus, AudioReplayStatus } from "./types";
import { AUDIO_ARCHIVE_DEFAULT_RETENTION } from "./config";

export function makeAudioArchiveRecord(input: Omit<AudioArchiveRecord, "retention_class" | "created_at" | "updated_at"> & { retention_class?: AudioArchiveRecord["retention_class"] }) {
  const now = new Date().toISOString();
  return {
    ...input,
    retention_class: input.retention_class ?? AUDIO_ARCHIVE_DEFAULT_RETENTION[input.role] ?? "standard",
    created_at: now,
    updated_at: now,
  } satisfies AudioArchiveRecord;
}

export function canReplay(status: AudioReplayStatus) {
  return status === "available";
}

export function isArchiveHealthy(status: AudioArchiveStatus) {
  return status === "active" || status === "superseded";
}

export function retentionSummary(record: AudioArchiveRecord) {
  return `${record.retention_class}:${record.replay_status}:${record.archive_status}`;
}
