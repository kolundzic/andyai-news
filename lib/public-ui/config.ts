import type { PublicUiCtaCard, PublicUiSurfaceContent } from "@/lib/public-ui/types";

export const PUBLIC_UI_SURFACE: PublicUiSurfaceContent = {
  badge: "AndyAI News",
  title: "AI news delivery, archive, newsletter, and audio surfaces",
  description:
    "A cleaner public layer for editions, archive reading, newsletter prompts, and the growing audio production lane.",
};

export const HOMEPAGE_CTA_CARDS: PublicUiCtaCard[] = [
  {
    title: "Latest Edition",
    description: "Open the latest public edition page with cleaner hierarchy and stronger reading flow.",
    href: "/en/edition/2026-03-22",
    cta: "Open edition",
  },
  {
    title: "Archive",
    description: "Browse the archive surface by locale and day with a more readable public layout.",
    href: "/archive/en/2026-03-22",
    cta: "Open archive",
  },
  {
    title: "Audio Lane",
    description: "Jump into the audio production lane now connected to queue, storage, transcript, approval, and archive.",
    href: "/admin/audio/queue",
    cta: "Open audio lane",
  },
  {
    title: "Newsletter",
    description: "Review the newsletter delivery surface and tighter publishing bridge for outbound issues.",
    href: "/admin/newsletter/delivery",
    cta: "Open newsletter lane",
  },
];
