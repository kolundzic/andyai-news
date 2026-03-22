import { ALLOWED_TRANSITIONS, PUBLISH_STATES } from "./config";
import type { PublishSnapshot, PublishState } from "./types";

export function isValidPublishState(value: string): value is PublishState {
  return PUBLISH_STATES.includes(value as PublishState);
}

export function canTransition(from: PublishState, to: PublishState): boolean {
  return ALLOWED_TRANSITIONS[from]?.includes(to) ?? false;
}

export function getReleaseBadge(state: PublishState): string {
  switch (state) {
    case "published":
      return "live";
    case "approved":
      return "approved";
    case "scheduled":
      return "scheduled";
    case "review_ready":
      return "review";
    case "withdrawn":
      return "withdrawn";
    default:
      return "draft";
  }
}

export function summarizeSnapshot(snapshot: PublishSnapshot) {
  return {
    version: snapshot.version,
    items: snapshot.items.length,
    publishedCount: snapshot.items.filter((item) => item.state === "published").length,
    previewCount: snapshot.items.filter((item) => item.release_track === "preview").length,
  };
}
