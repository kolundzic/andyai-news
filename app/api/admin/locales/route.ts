import { NextResponse } from "next/server";
import { buildLocaleStructureSnapshot } from "@/lib/locales/helpers";

export async function GET() {
  return NextResponse.json(buildLocaleStructureSnapshot());
}
