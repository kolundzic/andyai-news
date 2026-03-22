import type { PublicUiCtaCard, PublicUiHero, PublicUiNavLink } from "@/lib/public-ui/types";

export const PUBLIC_UI_HERO: PublicUiHero = {
  badge: "AndyAI News",
  title: "AI news, archive, newsletter, and audio surfaces in one cleaner public experience.",
  description:
    "A more consistent public layer connecting editions, archive navigation, newsletter delivery, and the growing audio production lane.",
};

export const PUBLIC_UI_PRIMARY_NAV: PublicUiNavLink[] = [
  { label: "Home", href: "/" },
  { label: "Latest Edition", href: "/en/edition/2026-03-22" },
  { label: "Archive", href: "/archive/en/2026-03-22" },
];

export const PUBLIC_UI_HOME_CARDS: PublicUiCtaCard[] = [
  {
    title: "Read the Latest Edition",
    description: "Open the latest edition with cleaner hierarchy and stronger reading flow.",
    href: "/en/edition/2026-03-22",
    cta: "Open edition",
  },
  {
    title: "Browse the Archive",
    description: "Move through archive views by locale and day with clearer structure.",
    href: "/archive/en/2026-03-22",
    cta: "Open archive",
  },
  {
    title: "Audio Surface",
    description: "Queue, provider, transcript, approval, editions, and archive now connect into one audio lane.",
    href: "/admin/audio/player",
    cta: "Open audio surface",
  },
  {
    title: "Newsletter Delivery",
    description: "Jump from public reading flow into the newsletter delivery surface.",
    href: "/admin/newsletter/delivery",
    cta: "Open newsletter",
  },
];
