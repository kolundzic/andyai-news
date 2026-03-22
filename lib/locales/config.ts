import type { LocaleDefinition, SupportedLocale } from "./types";

export const DEFAULT_LOCALE: SupportedLocale = "en";

export const SUPPORTED_LOCALES: LocaleDefinition[] = [
  {
    code: "en",
    label: "English",
    nativeLabel: "English",
    defaultDirection: "ltr",
    enabled: true,
    isDefault: true,
  },
  {
    code: "sr",
    label: "Serbian",
    nativeLabel: "Srpski",
    defaultDirection: "ltr",
    enabled: true,
  },
  {
    code: "jp",
    label: "Japanese",
    nativeLabel: "日本語",
    defaultDirection: "ltr",
    enabled: true,
  },
];
