const cards = [
  {
    title: "Storage Discipline",
    value: "internal + public projection",
    note: "Audio assets live in canonical storage first, then project into public routes.",
  },
  {
    title: "Integrity Fields",
    value: "checksum / size / duration",
    note: "Every asset record carries verification-ready metadata.",
  },
  {
    title: "Linked Bundle",
    value: "audio + metadata + transcript + captions",
    note: "Each asset is treated as a bundle, not just a media file.",
  },
];

export default function AdminAudioAssetsPage() {
  return (
    <main style={{ padding: 24, fontFamily: "sans-serif" }}>
      <h1>AndyAI News — Audio Asset Storage</h1>
      <p>v1.4.0-c introduces a canonical storage and metadata layer for audio assets.</p>
      <div style={{ display: "grid", gap: 16, marginTop: 20 }}>
        {cards.map((card) => (
          <section key={card.title} style={{ border: "1px solid #ddd", borderRadius: 12, padding: 16 }}>
            <h2 style={{ margin: 0 }}>{card.title}</h2>
            <p style={{ fontWeight: 700 }}>{card.value}</p>
            <p>{card.note}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
