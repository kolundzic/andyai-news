import type { VoiceDeliveryHook, VoiceDeliverySnapshot } from "./types";

export function makeVoiceDeliveryRoute(locale: string, day: string) {
  return `/${locale}/edition/${day}`;
}

export function createVoiceDeliveryHook(
  locale: string,
  day: string,
  channel: VoiceDeliveryHook["channel"],
): VoiceDeliveryHook {
  return {
    id: `voice-hook:${locale}:${day}:${channel}`,
    editionDay: day,
    locale,
    channel,
    status: "prepared",
    route: makeVoiceDeliveryRoute(locale, day),
    enabled: true,
    notes: "Initial voice delivery hook prepared.",
  };
}

export function createVoiceDeliverySnapshot(
  day: string,
  locales: string[] = ["en", "sr", "jp"],
): VoiceDeliverySnapshot {
  return {
    version: "v1.3.0-e",
    generatedAt: new Date().toISOString(),
    hooks: locales.map((locale) => createVoiceDeliveryHook(locale, day, "voice")),
  };
}
