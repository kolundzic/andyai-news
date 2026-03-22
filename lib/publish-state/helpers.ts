import { DEFAULT_PUBLISH_STATE, PUBLISH_STATE_ORDER } from "./config";
import type { PublishState, PublishStateRecord } from "./types";

export function createPublishStateRecord(
  editionId: string,
  locale: string,
  state: PublishState = DEFAULT_PUBLISH_STATE
): PublishStateRecord {
  return {
    editionId,
    locale,
    state,
    updatedAt: new Date().toISOString(),
  };
}

export function isValidPublishTransition(
  fromState: PublishState,
  toState: PublishState
): boolean {
  return PUBLISH_STATE_ORDER.indexOf(toState) >= PUBLISH_STATE_ORDER.indexOf(fromState);
}
