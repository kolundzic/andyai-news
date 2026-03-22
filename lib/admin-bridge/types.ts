export type AdminLane = "production" | "preview";

export type AdminSectionKey =
  | "dashboard"
  | "editions"
  | "newsletter"
  | "archive"
  | "locales"
  | "audio";

export type BridgeMigrationStatus =
  | "legacy"
  | "bridged"
  | "preview_only"
  | "planned";

export interface AdminBridgeSection {
  key: AdminSectionKey;
  label: string;
  description: string;
  productionPath?: string | null;
  previewPath?: string | null;
  status: BridgeMigrationStatus;
}

export interface AdminBridgeSnapshot {
  version: "v1.2.0-a";
  generatedAt: string;
  safePreviewBasePath: string;
  productionBasePath: string;
  sections: AdminBridgeSection[];
}
