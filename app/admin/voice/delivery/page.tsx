import { createVoiceDeliverySnapshot } from "@/lib/voice-delivery/helpers";

export default function VoiceDeliveryAdminPage() {
  const snapshot = createVoiceDeliverySnapshot("2026-03-22");

  return (
    <main style={{ padding: 24 }}>
      <h1>AndyAI News — Voice Delivery Hooks</h1>
      <p>Minimal admin surface for v1.3.0-e voice delivery hooks.</p>

      <div style={{ marginTop: 24, display: "grid", gap: 16 }}>
        {snapshot.hooks.map((hook) => (
          <section
            key={hook.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 12,
              padding: 16,
              background: "#fff",
            }}
          >
            <h2 style={{ marginTop: 0 }}>
              {hook.locale.toUpperCase()} · {hook.channel}
            </h2>
            <p><strong>Route:</strong> {hook.route}</p>
            <p><strong>Status:</strong> {hook.status}</p>
            <p><strong>Enabled:</strong> {hook.enabled ? "yes" : "no"}</p>
            <p><strong>Notes:</strong> {hook.notes}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
