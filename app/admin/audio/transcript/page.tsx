export default function AudioTranscriptAdminPage() {
  const sections = [
    { title: "Transcript Snapshot", state: "ready", detail: "Plain transcript + structured transcript contract." },
    { title: "Caption Track", state: "ready", detail: "WebVTT lane for public audio player compatibility." },
    { title: "Sync Mode", state: "segment", detail: "Segment-level timing for transcript and captions." },
    { title: "Next", state: "publish", detail: "Approval and publish governance layer connects next." },
  ];

  return (
    <main style={{ padding: 24 }}>
      <h1>AndyAI News Admin — Audio Transcript / Caption / Sync</h1>
      <p>Transcript, caption, and sync preview lane for the audio subsystem.</p>
      <div style={{ display: "grid", gap: 16, marginTop: 24 }}>
        {sections.map((section) => (
          <section key={section.title} style={{ border: "1px solid #ddd", borderRadius: 12, padding: 16 }}>
            <h2 style={{ marginTop: 0 }}>{section.title}</h2>
            <p><strong>Status:</strong> {section.state}</p>
            <p>{section.detail}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
