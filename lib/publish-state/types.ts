export type PublishState =
  | "draft"
  | "review"
  | "scheduled"
  | "published"
  | "archived";

export interface PublishStateRecord {
  editionId: string;
  locale: string;
  state: PublishState;
  updatedAt: string;
}
