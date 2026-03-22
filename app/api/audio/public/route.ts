import { NextResponse } from "next/server";
import { makePublicAudioContract } from "@/lib/audio-public/helpers";

export async function GET() {
  return NextResponse.json({
    ok: true,
    route: "/api/audio/public",
    contract: makePublicAudioContract({
      asset_id: "audasset_2026-03-22_main_en_daily-brief_v1",
      edition_id: "2026-03-22-main",
      day: "2026-03-22",
      locale: "en",
    }),
  });
}
