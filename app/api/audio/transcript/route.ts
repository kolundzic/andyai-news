import { NextResponse } from "next/server";
import { buildStructuredTranscript, makeTranscriptUrls, toWebVtt } from "@/lib/audio-transcript/helpers";

export async function GET() {
  const urls = makeTranscriptUrls("en", "2026-03-22", "main-brief");
  const transcript = buildStructuredTranscript({
    asset_id: "audasset_2026-03-22_main_en_daily-brief_v1",
    edition_id: "2026-03-22-main",
    day: "2026-03-22",
    locale: "en",
    role: "daily_brief",
    full_text: "Good evening. Here is your AndyAI News daily brief for March 22, 2026.",
    generated_at: "2026-03-22T09:05:00Z",
    segments: [
      { segment_id: "seg_001", index: 0, text: "Good evening.", start_ms: 0, end_ms: 1100 },
      { segment_id: "seg_002", index: 1, text: "Here is your AndyAI News daily brief for March 22, 2026.", start_ms: 1100, end_ms: 4200 },
    ],
  });

  return NextResponse.json({
    ok: true,
    ...urls,
    transcript,
    captions_preview: toWebVtt(transcript.segments),
  });
}
