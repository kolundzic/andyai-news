import {
  PUBLIC_UI_BODY,
  PUBLIC_UI_CARD,
  PUBLIC_UI_CONTAINER,
  PUBLIC_UI_META_PILL,
  PUBLIC_UI_SURFACE,
  PUBLIC_UI_TITLE,
} from "./config";
import type { PublicInfoCard, PublicMetaItem } from "./types";

export function joinClasses(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function getPublicUiFoundation() {
  return {
    container: PUBLIC_UI_CONTAINER,
    surface: PUBLIC_UI_SURFACE,
    card: PUBLIC_UI_CARD,
    pill: PUBLIC_UI_META_PILL,
    title: PUBLIC_UI_TITLE,
    body: PUBLIC_UI_BODY,
  };
}

export function buildEditionMeta(locale: string, day: string): PublicMetaItem[] {
  return [
    { label: "Locale", value: locale.toUpperCase() },
    { label: "Edition date", value: day },
    { label: "Status", value: "Published" },
  ];
}

export function buildArchiveMeta(locale: string, day: string): PublicMetaItem[] {
  return [
    { label: "Archive", value: "Daily issue" },
    { label: "Locale", value: locale.toUpperCase() },
    { label: "Day", value: day },
  ];
}

export function buildEditionCards(locale: string, day: string): PublicInfoCard[] {
  return [
    {
      title: "Listen to this edition",
      body: `Audio delivery lane is prepared for ${locale.toUpperCase()} edition ${day}.`,
      href: `/admin/audio/player`,
      cta: "Preview audio contract",
    },
    {
      title: "Newsletter snapshot",
      body: "Newsletter delivery and structured publishing payloads are connected to this public edition flow.",
      href: `/admin/newsletter/delivery`,
      cta: "Open delivery lane",
    },
    {
      title: "Archive continuity",
      body: "This edition is linked to archive-aware routing so public and historical reading can stay consistent.",
      href: `/archive/${locale}/${day}`,
      cta: "Open archive view",
    },
  ];
}

export function buildArchiveCards(locale: string, day: string): PublicInfoCard[] {
  return [
    {
      title: "Historical issue memory",
      body: `Archive routing for ${locale.toUpperCase()} on ${day} is active and ready for replay-oriented layers.`,
      href: `/admin/history`,
      cta: "Open history lane",
    },
    {
      title: "Audio archive lane",
      body: "Audio archive and replay structures now sit behind the archive surface, ready for future public polish.",
      href: `/admin/audio/archive`,
      cta: "Open audio archive",
    },
    {
      title: "Return to edition",
      body: "Jump back into the live public edition route for the same locale/day spine.",
      href: `/${locale}/edition/${day}`,
      cta: "Open edition",
    },
  ];
}
