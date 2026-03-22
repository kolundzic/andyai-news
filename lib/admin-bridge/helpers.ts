import { ADMIN_BRIDGE_SNAPSHOT } from "./config";
import type { AdminBridgeSection, AdminLane, AdminSectionKey } from "./types";

export function getAdminBridgeSnapshot() {
  return ADMIN_BRIDGE_SNAPSHOT;
}

export function getAdminBridgeSection(key: AdminSectionKey): AdminBridgeSection | undefined {
  return ADMIN_BRIDGE_SNAPSHOT.sections.find((section) => section.key === key);
}

export function getAdminBridgePath(key: AdminSectionKey, lane: AdminLane): string | null {
  const section = getAdminBridgeSection(key);

  if (!section) {
    return null;
  }

  return lane === "production"
    ? section.productionPath ?? null
    : section.previewPath ?? null;
}

export function listBridgedSections() {
  return ADMIN_BRIDGE_SNAPSHOT.sections.filter((section) => section.status === "bridged");
}
