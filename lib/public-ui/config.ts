import type { PublicThemeConfig, PublicCardItem } from "./types";

export const publicThemeConfig: PublicThemeConfig = {
  siteName: "AndyAI News",
  tagline: "AI news, editions, archive, and audio-ready publishing.",
  locales: ["en", "sr", "jp"],
  heroTitle: "AndyAI News",
  heroSubtitle: "Structured AI news publishing with multilingual editions, archive memory, and audio-ready delivery.",
};

export const publicHomepageCards: PublicCardItem[] = [
  {
    title: "Today’s Edition",
    description: "Open the latest locale-specific edition page.",
    href: "/en/edition/2026-03-22",
    tone: "primary",
  },
  {
    title: "Archive",
    description: "Browse the public archive by locale and day.",
    href: "/archive/en/2026-03-22",
    tone: "secondary",
  },
  {
    title: "Audio Lane",
    description: "Audio contracts, transcript flow, and publish discipline are now in place.",
    href: "/admin/audio/queue",
    tone: "muted",
  },
];
