import { makePublicAudioContract } from "@/lib/audio-public/helpers";

export default function AdminAudioPlayerPage() {
  const sample = makePublicAudioContract({
    asset_id: "audasset_2026-03-22_main_en_daily-brief_v1",
    edition_id: "2026-03-22-main",
    day: "2026-03-22",
    locale: "en",
  });

  return (
    <main style={{ padding: 24 }}>
      <h1>AndyAI News — Audio Player Contract</h1>
      <p>Minimal public audio route and player contract preview for v1.4.0-d.</p>
      <pre style={{ whiteSpace: "pre-wrap", padding: 16, border: "1px solid #333", borderRadius: 8 }}>
        {JSON.stringify(sample, null, 2)}
      </pre>
    </main>
  );
}
