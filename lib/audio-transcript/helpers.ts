import { AUDIO_TRANSCRIPT_DEFAULTS, AUDIO_TRANSCRIPT_VERSION } from "./config";
import type { AudioStructuredTranscript, AudioTranscriptSegment } from "./types";

export function makeTranscriptUrls(locale: string, day: string, slug: string) {
  return {
    transcript_url: `/audio/${locale}/${day}/${slug}.txt`,
    captions_url: `/audio/${locale}/${day}/${slug}.vtt`,
    structured_transcript_url: `/audio/${locale}/${day}/${slug}.transcript.json`,
  };
}

export function buildStructuredTranscript(input: {
  asset_id: string;
  edition_id: string;
  day: string;
  locale: string;
  role: AudioStructuredTranscript["role"];
  full_text: string;
  segments: AudioTranscriptSegment[];
  generated_at: string;
}): AudioStructuredTranscript {
  const { asset_id, edition_id, day, locale, role, full_text, segments, generated_at } = input;
  return {
    transcript_version: AUDIO_TRANSCRIPT_VERSION,
    asset_id,
    edition_id,
    day,
    locale,
    role,
    full_text,
    segments,
    generated_at,
    sync_mode: AUDIO_TRANSCRIPT_DEFAULTS.sync_mode,
  };
}

export function toWebVtt(segments: AudioTranscriptSegment[]): string {
  const fmt = (ms: number) => {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const millis = ms % 1000;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(millis).padStart(3, "0")}`;
  };

  const body = segments
    .map((segment) => `${fmt(segment.start_ms)} --> ${fmt(segment.end_ms)}\n${segment.text}`)
    .join("\n\n");

  return `WEBVTT\n\n${body}\n`;
}
