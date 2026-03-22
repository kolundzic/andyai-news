import snapshot from "@/data/publish-state/publish-snapshot.json";

export async function GET() {
  return Response.json(snapshot);
}
