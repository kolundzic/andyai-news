export interface PublicArchiveEntry {
  locale: string;
  day: string;
  title: string;
  status: "draft" | "published" | "archived";
}
