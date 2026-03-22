import type { PublishState } from "./types";

export const DEFAULT_PUBLISH_STATE: PublishState = "draft";

export const PUBLISH_STATE_ORDER: PublishState[] = [
  "draft",
  "review",
  "scheduled",
  "published",
  "archived",
];
