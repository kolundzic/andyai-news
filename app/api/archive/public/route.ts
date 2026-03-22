import { NextResponse } from "next/server";
import { buildArchiveSnapshot, makeArchiveRecord } from "@/lib/public-archive/helpers";

export async function GET() {
  const snapshot = buildArchiveSnapshot([
    makeArchiveRecord({
      locale: "en",
      day: "2026-03-22",
      slug: "main-brief",
      title: "Main Brief",
      status: "published",
    }),
    makeArchiveRecord({
      locale: "sr",
      day: "2026-03-22",
      slug: "main-brief",
      title: "Glavni pregled",
      status: "published",
    }),
    makeArchiveRecord({
      locale: "jp",
      day: "2026-03-22",
      slug: "main-brief",
      title: "メインブリーフ",
      status: "published",
    }),
  ]);

  return NextResponse.json(snapshot);
}
