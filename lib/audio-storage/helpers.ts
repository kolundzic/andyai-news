import { AUDIO_STORAGE_CONFIG } from "./config";
import type { AudioAssetRecord, AudioAssetRole } from "./types";

export function makeAudioStoragePath(editionId: string, locale: string, assetId: string, format: string) {
  return `${AUDIO_STORAGE_CONFIG.storageRoot}/${editionId}/${locale}/${assetId}.${format}`;
}

export function makeAudioPublicPath(locale: string, day: string, slug: string, format: string) {
  return `${AUDIO_STORAGE_CONFIG.publicRoot}/${locale}/${day}/${slug}.${format}`;
}

export function makeAudioAssetId(day: string, edition: string, locale: string, role: AudioAssetRole, version = 1) {
  return `audasset_${day}_${edition}_${locale}_${role}_v${version}`;
}

export function buildAudioAssetRecord(input: Omit<AudioAssetRecord, "created_at" | "updated_at">): AudioAssetRecord {
  const now = new Date().toISOString();
  return {
    ...input,
    created_at: now,
    updated_at: now,
  };
}
