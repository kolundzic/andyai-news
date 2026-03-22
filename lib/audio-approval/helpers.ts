import { AUDIO_APPROVAL_ALLOWED_TRANSITIONS, AUDIO_APPROVAL_DEFAULT_STATE } from "./config";
import type { AudioApprovalRecord, AudioApprovalState } from "./types";

export function createAudioApprovalRecord(partial: Omit<AudioApprovalRecord, "approval_state" | "created_at" | "updated_at"> & Partial<Pick<AudioApprovalRecord, "approval_state" | "created_at" | "updated_at">>): AudioApprovalRecord {
  const now = new Date().toISOString();
  return {
    ...partial,
    approval_state: partial.approval_state ?? AUDIO_APPROVAL_DEFAULT_STATE,
    created_at: partial.created_at ?? now,
    updated_at: partial.updated_at ?? now
  };
}

export function canTransitionAudioApproval(from: AudioApprovalState, to: AudioApprovalState): boolean {
  return AUDIO_APPROVAL_ALLOWED_TRANSITIONS[from]?.includes(to) ?? false;
}

export function summarizeApprovalState(record: AudioApprovalRecord): string {
  return `${record.locale.toUpperCase()} ${record.role} → ${record.approval_state}`;
}
