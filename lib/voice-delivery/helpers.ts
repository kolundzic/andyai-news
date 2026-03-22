import type { VoiceDeliveryHookRecord } from "./types";

export function createVoiceDeliveryHook(
  editionId: string,
  locale: string,
  target: string
): VoiceDeliveryHookRecord {
  return { editionId, locale, target };
}
