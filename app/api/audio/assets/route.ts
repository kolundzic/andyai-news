import snapshot from "@/data/audio-storage/assets-snapshot.json";

export async function GET() {
  return Response.json(snapshot);
}
