export type ArchiveLocale = "en" | "sr" | "jp";

export interface PublicArchiveRouteRecord {
  id: string;
  day: string;
  locale: ArchiveLocale;
  slug: string;
  title: string;
  status: "published" | "draft" | "archived";
  href: string;
}

export interface PublicArchiveSnapshot {
  version: string;
  generated_at: string;
  records: PublicArchiveRouteRecord[];
}
