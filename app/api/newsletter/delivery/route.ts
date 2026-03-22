import { NextResponse } from "next/server";
import { makeNewsletterDeliverySnapshot } from "@/lib/newsletter-delivery/helpers";

export async function GET() {
  return NextResponse.json(makeNewsletterDeliverySnapshot("2026-03-22"));
}
