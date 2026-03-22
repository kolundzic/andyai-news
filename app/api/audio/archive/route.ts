import snapshot from "@/data/audio-archive/archive-snapshot.json";

export async function GET() {
  return Response.json(snapshot);
}
