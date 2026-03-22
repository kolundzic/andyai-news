import {
  AUDIO_PUBLIC_DEFAULT_ROLE,
  AUDIO_PUBLIC_PLAYER_VERSION,
  AUDIO_PUBLIC_ROUTE_BASE,
} from "./config";
import type { PublicAudioPlayerContract, PublicAudioStatus } from "./types";

export function buildPublicAudioUrl(locale: string, day: string, slug = "main-brief.mp3") {
  return `${AUDIO_PUBLIC_ROUTE_BASE}/${locale}/${day}/${slug}`;
}

export function buildPublicAudioMetadataUrl(locale: string, day: string, slug = "main-brief.json") {
  return `${AUDIO_PUBLIC_ROUTE_BASE}/${locale}/${day}/${slug}`;
}

export function buildPublicAudioTranscriptUrl(locale: string, day: string, slug = "main-brief.txt") {
  return `${AUDIO_PUBLIC_ROUTE_BASE}/${locale}/${day}/${slug}`;
}

export function buildPublicAudioCaptionsUrl(locale: string, day: string, slug = "main-brief.vtt") {
  return `${AUDIO_PUBLIC_ROUTE_BASE}/${locale}/${day}/${slug}`;
}

export function makePublicAudioContract(input: {
  asset_id: string;
  edition_id: string;
  day: string;
  locale: string;
  status?: PublicAudioStatus;
  published?: boolean;
  stale?: boolean;
  duration_sec?: number;
  voice_profile?: string;
  title?: string;
}) : PublicAudioPlayerContract {
  const status = input.status ?? "ready";
  const published = input.published ?? status === "ready";
  const stale = input.stale ?? status === "stale";
  return {
    player_version: AUDIO_PUBLIC_PLAYER_VERSION,
    asset_id: input.asset_id,
    edition_id: input.edition_id,
    day: input.day,
    locale: input.locale,
    role: AUDIO_PUBLIC_DEFAULT_ROLE,
    title: input.title ?? "Listen to today’s edition",
    audio_url: buildPublicAudioUrl(input.locale, input.day),
    metadata_url: buildPublicAudioMetadataUrl(input.locale, input.day),
    transcript_url: buildPublicAudioTranscriptUrl(input.locale, input.day),
    captions_url: buildPublicAudioCaptionsUrl(input.locale, input.day),
    mime_type: "audio/mpeg",
    duration_sec: input.duration_sec ?? 412,
    voice_profile: input.voice_profile ?? `neutral_news_${input.locale}_01`,
    generated_at: new Date(`${input.day}T09:00:00Z`).toISOString(),
    published,
    stale,
    status,
    message: status === "ready" ? "Public audio contract resolved." : "Public audio contract not yet ready.",
  };
}
