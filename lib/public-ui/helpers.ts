import { publicThemeConfig } from "./config";
import type { PublicCardItem, PublicCardTone } from "./types";

export function getLocaleLabel(locale: string): string {
  const labels: Record<string, string> = {
    en: "English",
    sr: "Serbian",
    jp: "Japanese",
  };
  return labels[locale] ?? locale.toUpperCase();
}

export function getToneClasses(tone: PublicCardTone): string {
  if (tone === "primary") {
    return "border-white/25 bg-white/10";
  }
  if (tone === "secondary") {
    return "border-cyan-400/25 bg-cyan-400/10";
  }
  return "border-white/10 bg-white/5";
}

export function getHomepageCards(): PublicCardItem[] {
  return [...publicThemeConfig.locales].map((locale) => ({
    title: `${getLocaleLabel(locale)} Edition`,
    description: `Open the ${getLocaleLabel(locale).toLowerCase()} public edition surface.`,
    href: `/${locale}/edition/2026-03-22`,
    tone: locale === "en" ? "primary" : locale === "sr" ? "secondary" : "muted",
  }));
}
