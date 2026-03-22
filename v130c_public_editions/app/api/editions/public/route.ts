import { NextResponse } from "next/server";
import { getPublicEditionSnapshot, getPublicEditionsMeta } from "@/lib/public-editions/helpers";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const day = searchParams.get("day") ?? undefined;

  return NextResponse.json({
    ok: true,
    meta: getPublicEditionsMeta(),
    editions: getPublicEditionSnapshot(day),
  });
}
