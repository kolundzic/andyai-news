import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from "./config";
import type { LocaleStructureSnapshot, SupportedLocale } from "./types";

export function getSupportedLocales() {
  return SUPPORTED_LOCALES;
}

export function getDefaultLocale(): SupportedLocale {
  return DEFAULT_LOCALE;
}

export function isSupportedLocale(value: string): value is SupportedLocale {
  return SUPPORTED_LOCALES.some((locale) => locale.code === value);
}

export function getLocaleByCode(value: string) {
  return SUPPORTED_LOCALES.find((locale) => locale.code === value) ?? null;
}

export function getEnabledLocales() {
  return SUPPORTED_LOCALES.filter((locale) => locale.enabled);
}

export function buildLocaleStructureSnapshot(): LocaleStructureSnapshot {
  return {
    generatedAt: new Date().toISOString(),
    defaultLocale: DEFAULT_LOCALE,
    locales: getEnabledLocales(),
    notes: [
      "Multilingual structure bridge active.",
      "Locale-aware content spine prepared.",
      "Safe overlay only; /admin/v110a remains unchanged.",
    ],
  };
}
