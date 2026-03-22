import { NextResponse } from "next/server";
import { getHistorySnapshot } from "@/lib/history/helpers";

export async function GET() {
  return NextResponse.json({
    ok: true,
    mode: "history",
    snapshot: getHistorySnapshot(),
  });
}
