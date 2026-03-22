import { DEFAULT_PUBLIC_EDITION_DAY, PUBLIC_EDITION_LOCALES, PUBLIC_EDITIONS_VERSION } from "./config";
import type { PublicEditionLocale, PublicEditionRecord } from "./types";

export function isSupportedPublicEditionLocale(value: string): value is PublicEditionLocale {
  return PUBLIC_EDITION_LOCALES.includes(value as PublicEditionLocale);
}

export function makePublicEditionRoute(locale: PublicEditionLocale, day: string = DEFAULT_PUBLIC_EDITION_DAY) {
  return `/${locale}/edition/${day}`;
}

export function makePublicArchiveRoute(locale: PublicEditionLocale, day: string = DEFAULT_PUBLIC_EDITION_DAY) {
  return `/archive/${locale}/${day}`;
}

export function getPublicEditionSnapshot(day: string = DEFAULT_PUBLIC_EDITION_DAY): PublicEditionRecord[] {
  return PUBLIC_EDITION_LOCALES.map((locale) => ({
    edition_id: `${day}-main-${locale}`,
    day,
    locale,
    state: "published",
    title: `AndyAI News ${locale.toUpperCase()} Edition`,
    summary: `Locale-specific public edition for ${locale.toUpperCase()} on ${day}.`,
    hero_headline: `Top AI stories for ${day} (${locale.toUpperCase()})`,
    primary_route: makePublicEditionRoute(locale, day),
    archive_route: makePublicArchiveRoute(locale, day),
  }));
}

export function getPublicEditionsMeta() {
  return {
    version: PUBLIC_EDITIONS_VERSION,
    locales: PUBLIC_EDITION_LOCALES,
    default_day: DEFAULT_PUBLIC_EDITION_DAY,
  };
}
