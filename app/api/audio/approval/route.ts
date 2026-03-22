import snapshot from "@/data/audio-approval/approval-snapshot.json";

export async function GET() {
  return Response.json(snapshot);
}
