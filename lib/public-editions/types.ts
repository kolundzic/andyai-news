export type PublicEditionLocale = "en" | "sr" | "jp";

export interface PublicEditionSnapshot {
  day: string;
  locale: PublicEditionLocale;
  slug: string;
  title: string;
  publishState: "draft" | "ready" | "published";
}
