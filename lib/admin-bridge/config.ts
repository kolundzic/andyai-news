import type { AdminBridgeSnapshot } from "./types";

export const ADMIN_BRIDGE_SNAPSHOT: AdminBridgeSnapshot = {
  version: "v1.2.0-a",
  generatedAt: "2026-03-22T00:00:00Z",
  safePreviewBasePath: "/admin/v110a",
  productionBasePath: "/admin",
  sections: [
    {
      key: "dashboard",
      label: "Dashboard",
      description: "Central operator entry point.",
      productionPath: "/admin",
      previewPath: "/admin/v110a",
      status: "bridged",
    },
    {
      key: "editions",
      label: "Editions",
      description: "Edition and day workflow bridge.",
      productionPath: "/admin/editions",
      previewPath: "/admin/v110a/editions",
      status: "planned",
    },
    {
      key: "newsletter",
      label: "Newsletter",
      description: "Newsletter compose and export lane.",
      productionPath: "/admin/newsletter",
      previewPath: "/admin/v110a/newsletter",
      status: "preview_only",
    },
    {
      key: "archive",
      label: "Archive",
      description: "Archive and history lane.",
      productionPath: "/admin/archive",
      previewPath: "/admin/v110a/archive",
      status: "planned",
    },
    {
      key: "locales",
      label: "Locales",
      description: "Locale-aware editorial structure.",
      productionPath: "/admin/locales",
      previewPath: "/admin/v110a/locales",
      status: "planned",
    },
    {
      key: "audio",
      label: "Audio",
      description: "Reserved bridge slot for later audio packs.",
      productionPath: "/admin/audio",
      previewPath: "/admin/v110a/audio",
      status: "planned",
    },
  ],
};
