import snapshot from "../../../../data/public-editions/edition-snapshot.json";

export async function GET() {
  return Response.json(snapshot);
}
