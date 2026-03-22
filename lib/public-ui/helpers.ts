import { FeaturedCardData } from "./types";

export function getHomepageFeaturedCards(): FeaturedCardData[] {
  return [
    {
      title: "Daily AI Edition",
      description: "Structured, locale-aware issue pages ready for publishing and archive expansion.",
      href: "/en/edition/2026-03-22",
      badge: "Edition",
    },
    {
      title: "Archive Route",
      description: "Public archive path prepared for day-by-day browsing and future replay flows.",
      href: "/archive/en/2026-03-22",
      badge: "Archive",
    },
    {
      title: "Audio Lane",
      description: "Audio production foundation is now in place: jobs, providers, assets, transcript, approval, editions, archive.",
      href: "/admin/audio/queue",
      badge: "Audio",
    },
  ];
}
