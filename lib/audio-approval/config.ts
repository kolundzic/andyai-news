import type { AudioApprovalState } from "./types";

export const AUDIO_APPROVAL_DEFAULT_STATE: AudioApprovalState = "rendered_unreviewed";

export const AUDIO_APPROVAL_ALLOWED_TRANSITIONS: Record<AudioApprovalState, AudioApprovalState[]> = {
  rendered_unreviewed: ["review_in_progress", "rejected", "stale"],
  review_in_progress: ["approved_internal", "rejected", "stale"],
  approved_internal: ["publish_ready", "stale"],
  publish_ready: ["published_public", "stale", "withdrawn"],
  published_public: ["replaced", "withdrawn", "stale"],
  replaced: [],
  withdrawn: [],
  rejected: [],
  stale: []
};
