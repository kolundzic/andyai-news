export type FeatureStatus = "planned" | "skeleton" | "next" | "done";

export type V110FeatureCard = {
  id: string;
  title: string;
  status: FeatureStatus;
  summary: string;
  whyItMatters: string;
  nextStep: string;
};

export type MultiDayNavState = {
  currentDate: string;
  availableDates: string[];
};

export type DraftAutosaveState = {
  enabled: boolean;
  lastSavedAt: string | null;
  storageKey: string;
};

export type LiveDaySwitchState = {
  currentLiveDate: string | null;
  candidateDate: string | null;
};

export type NewsletterExportState = {
  format: "markdown" | "html" | "text";
  includeCover: boolean;
  includeSummariesOnly: boolean;
};

export const V110_FEATURE_CARDS: V110FeatureCard[] = [
  {
    id: "multi-day-navigation",
    title: "Multi-day navigation",
    status: "skeleton",
    summary: "Preview slot for switching between daily datasets and published issues.",
    whyItMatters: "Turns single-day editing into a real daily operations workflow.",
    nextStep: "Bind available dates to manifest and data directory discovery."
  },
  {
    id: "draft-autosave",
    title: "Draft autosave",
    status: "skeleton",
    summary: "Local-first autosave layer for preserving admin work during editing sessions.",
    whyItMatters: "Reduces risk of lost work and makes the operator workflow calmer.",
    nextStep: "Wire editor state into localStorage with timestamped save receipts."
  },
  {
    id: "manifest-live-switch",
    title: "Manifest helper / live day switch",
    status: "skeleton",
    summary: "Preview slot for selecting the active live day in a safer guided flow.",
    whyItMatters: "Reduces manual manifest mistakes and speeds up publishing.",
    nextStep: "Add guided manifest write flow with validation and confirmation."
  },
  {
    id: "newsletter-export",
    title: "Newsletter export",
    status: "skeleton",
    summary: "Preview slot for email / bulletin-friendly output generation.",
    whyItMatters: "Creates immediate content reuse across channels.",
    nextStep: "Map story dataset into export-ready markdown, html, and text outputs."
  }
];
