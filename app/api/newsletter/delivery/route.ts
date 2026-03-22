import snapshot from "../../../../data/newsletter-delivery/delivery-snapshot.json";

export async function GET() {
  return Response.json(snapshot);
}
