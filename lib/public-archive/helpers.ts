import type { PublicArchiveEntry } from "./types";

export function createArchiveEntry(locale: string, day: string, title: string): PublicArchiveEntry {
  return { locale, day, title, status: "published" };
}
