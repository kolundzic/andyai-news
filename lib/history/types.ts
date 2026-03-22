export type EditionLifecycle =
  | "draft"
  | "active"
  | "archived";

export interface HistoryEditionRecord {
  edition_id: string;
  day: string;
  locale: string;
  title: string;
  summary?: string | null;
  lifecycle: EditionLifecycle;
  source: "live" | "snapshot" | "archive";
  created_at: string;
  updated_at: string;
}

export interface HistorySnapshot {
  version: "1";
  generated_at: string;
  current_day: string;
  editions: HistoryEditionRecord[];
}
