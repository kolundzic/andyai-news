export type PublicUiTone = "neutral" | "accent" | "muted";

export interface PublicMetaItem {
  label: string;
  value: string;
}

export interface PublicInfoCard {
  title: string;
  body: string;
  href?: string;
  cta?: string;
}

export interface PublicSectionHeader {
  eyebrow?: string;
  title: string;
  description?: string;
}
