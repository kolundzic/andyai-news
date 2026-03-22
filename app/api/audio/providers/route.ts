import { NextResponse } from "next/server";
import snapshot from "@/data/tts-provider/provider-snapshot.json";

export async function GET() {
  return NextResponse.json(snapshot);
}
