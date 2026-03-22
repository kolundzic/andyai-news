export type PublishState =
  | "draft"
  | "review_ready"
  | "approved"
  | "scheduled"
  | "published"
  | "withdrawn";

export interface PublishTransition {
  from: PublishState;
  to: PublishState;
  allowed: boolean;
}

export interface PublishSnapshotItem {
  section: string;
  state: PublishState;
  release_track: "preview" | "production";
  route: string;
  notes: string;
}

export interface PublishSnapshot {
  version: string;
  title: string;
  production_lane: string;
  preview_lane: string;
  release_discipline: string[];
  states: PublishState[];
  items: PublishSnapshotItem[];
}
