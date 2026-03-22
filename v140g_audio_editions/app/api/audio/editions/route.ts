import { NextResponse } from "next/server";
import snapshot from "@/data/audio-editions/editions-snapshot.json";

export async function GET() {
  return NextResponse.json(snapshot);
}
