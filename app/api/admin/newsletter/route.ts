import { NextResponse } from "next/server";
import snapshot from "@/data/newsletter-binding/newsletter-snapshot.json";

export async function GET() {
  return NextResponse.json(snapshot);
}
