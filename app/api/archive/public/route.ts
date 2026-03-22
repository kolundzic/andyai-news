import snapshot from "../../../../data/public-archive/archive-snapshot.json";

export async function GET() {
  return Response.json(snapshot);
}
