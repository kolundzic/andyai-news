import { NextResponse } from "next/server";
import { getAdminBridgeSnapshot } from "@/lib/admin-bridge/helpers";

export async function GET() {
  return NextResponse.json(getAdminBridgeSnapshot());
}
