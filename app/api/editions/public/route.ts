import { NextResponse } from "next/server";
import { makePublicEditionSnapshot } from "@/lib/public-editions/helpers";

export async function GET() {
  return NextResponse.json({
    ok: true,
    editions: [
      makePublicEditionSnapshot("2026-03-22", "en"),
      makePublicEditionSnapshot("2026-03-22", "sr"),
      makePublicEditionSnapshot("2026-03-22", "jp"),
    ],
  });
}
