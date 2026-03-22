import { NextResponse } from "next/server";
import { createVoiceDeliverySnapshot } from "@/lib/voice-delivery/helpers";

export async function GET() {
  const snapshot = createVoiceDeliverySnapshot("2026-03-22");
  return NextResponse.json(snapshot);
}
