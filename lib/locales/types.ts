export type SupportedLocale = "en" | "sr" | "jp";

export interface LocaleDefinition {
  code: SupportedLocale;
  label: string;
  nativeLabel: string;
  defaultDirection: "ltr" | "rtl";
  enabled: boolean;
  isDefault?: boolean;
}

export interface LocaleStructureSnapshot {
  generatedAt: string;
  defaultLocale: SupportedLocale;
  locales: LocaleDefinition[];
  notes: string[];
}
