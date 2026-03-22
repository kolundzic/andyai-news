import { DEFAULT_PUBLIC_EDITION_SLUG } from "./config";
import type { PublicEditionLocale, PublicEditionSnapshot } from "./types";

export function makePublicEditionSnapshot(day: string, locale: PublicEditionLocale): PublicEditionSnapshot {
  return {
    day,
    locale,
    slug: `${locale}-${DEFAULT_PUBLIC_EDITION_SLUG}-${day}`,
    title: `AndyAI News ${locale.toUpperCase()} Edition — ${day}`,
    publishState: "ready",
  };
}
