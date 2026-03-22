import type { ArchiveLocale, PublicArchiveRouteRecord, PublicArchiveSnapshot } from "./types";
import { DEFAULT_ARCHIVE_DAY } from "./config";

export function makePublicArchiveHref(locale: ArchiveLocale, day: string, slug: string): string {
  return `/archive/${locale}/${day}/${slug}`;
}

export function makeArchiveRecord(input: {
  locale: ArchiveLocale;
  day?: string;
  slug: string;
  title: string;
  status?: "published" | "draft" | "archived";
}): PublicArchiveRouteRecord {
  const day = input.day ?? DEFAULT_ARCHIVE_DAY;
  return {
    id: `${input.locale}-${day}-${input.slug}`,
    day,
    locale: input.locale,
    slug: input.slug,
    title: input.title,
    status: input.status ?? "published",
    href: makePublicArchiveHref(input.locale, day, input.slug),
  };
}

export function buildArchiveSnapshot(records: PublicArchiveRouteRecord[]): PublicArchiveSnapshot {
  return {
    version: "v1.3.0-b",
    generated_at: "2026-03-22T00:00:00Z",
    records,
  };
}
