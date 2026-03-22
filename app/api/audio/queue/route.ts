import { NextResponse } from "next/server";
import { getAudioQueueSnapshot } from "@/lib/audio-jobs/helpers";

export async function GET() {
  return NextResponse.json(getAudioQueueSnapshot());
}
