export type PublicEditionLocale = "en" | "sr" | "jp";

export type PublicEditionState =
  | "draft"
  | "review"
  | "published"
  | "archived";

export interface PublicEditionRecord {
  edition_id: string;
  day: string;
  locale: PublicEditionLocale;
  state: PublicEditionState;
  title: string;
  summary: string;
  hero_headline: string;
  primary_route: string;
  archive_route: string;
}
