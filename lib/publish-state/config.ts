import type { PublishState } from "./types";

export const PUBLISH_STATES: PublishState[] = [
  "draft",
  "review_ready",
  "approved",
  "scheduled",
  "published",
  "withdrawn",
];

export const PRODUCTION_LANE = "/admin";
export const PREVIEW_LANE = "/admin/v110a";

export const ALLOWED_TRANSITIONS: Record<PublishState, PublishState[]> = {
  draft: ["review_ready", "withdrawn"],
  review_ready: ["approved", "draft", "withdrawn"],
  approved: ["scheduled", "published", "withdrawn"],
  scheduled: ["published", "withdrawn"],
  published: ["withdrawn"],
  withdrawn: ["draft"],
};
