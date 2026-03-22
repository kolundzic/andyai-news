import { NextResponse } from "next/server";
import { getVoicePrepOverview, getVoicePrepSnapshot } from "@/lib/voice-prep/helpers";

export async function GET() {
  return NextResponse.json({
    ok: true,
    overview: getVoicePrepOverview(),
    snapshot: getVoicePrepSnapshot(),
  });
}
