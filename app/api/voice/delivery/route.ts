import snapshot from "../../../../data/voice-delivery/voice-delivery-snapshot.json";

export async function GET() {
  return Response.json(snapshot);
}
