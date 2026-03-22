export type PublicCardTone = "primary" | "secondary" | "muted";

export interface PublicThemeConfig {
  siteName: string;
  tagline: string;
  locales: string[];
  heroTitle: string;
  heroSubtitle: string;
}

export interface PublicCardItem {
  title: string;
  description: string;
  href: string;
  tone: PublicCardTone;
}
