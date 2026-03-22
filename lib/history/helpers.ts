import snapshot from "@/data/history/history-snapshot.json";
import type { HistoryEditionRecord, HistorySnapshot } from "./types";

export function getHistorySnapshot(): HistorySnapshot {
  return snapshot as HistorySnapshot;
}

export function listHistoryEditions(): HistoryEditionRecord[] {
  return getHistorySnapshot().editions;
}

export function listHistoryDays(): string[] {
  return Array.from(new Set(listHistoryEditions().map((item) => item.day))).sort().reverse();
}

export function getHistoryEditionById(editionId: string): HistoryEditionRecord | undefined {
  return listHistoryEditions().find((item) => item.edition_id === editionId);
}

export function listHistoryEditionsByDay(day: string): HistoryEditionRecord[] {
  return listHistoryEditions().filter((item) => item.day === day);
}
