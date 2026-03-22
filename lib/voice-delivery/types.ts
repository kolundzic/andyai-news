export type VoiceDeliveryStatus =
  | "idle"
  | "prepared"
  | "hooked"
  | "ready"
  | "blocked";

export interface VoiceDeliveryHook {
  id: string;
  editionDay: string;
  locale: string;
  channel: "web" | "newsletter" | "archive" | "voice";
  status: VoiceDeliveryStatus;
  route: string;
  enabled: boolean;
  notes?: string;
}

export interface VoiceDeliverySnapshot {
  version: "v1.3.0-e";
  generatedAt: string;
  hooks: VoiceDeliveryHook[];
}
