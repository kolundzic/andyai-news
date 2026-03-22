import { makeNewsletterDeliverySnapshot } from "@/lib/newsletter-delivery/helpers";

export default function NewsletterDeliveryAdminPage() {
  const snapshot = makeNewsletterDeliverySnapshot("2026-03-22");

  return (
    <main style={{ padding: 24 }}>
      <h1>Newsletter Delivery Integration</h1>
      <p>Delivery-grade newsletter payload preview by locale and day.</p>
      <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
        {snapshot.items.map((item) => (
          <section
            key={`${item.locale}-${item.day}`}
            style={{
              border: "1px solid #ddd",
              borderRadius: 12,
              padding: 16,
            }}
          >
            <h2 style={{ marginTop: 0 }}>
              {item.locale.toUpperCase()} — {item.day}
            </h2>
            <p><strong>Status:</strong> {item.status}</p>
            <p><strong>Subject:</strong> {item.subject}</p>
            <p><strong>Edition:</strong> {item.editionUrl}</p>
            <p><strong>Archive:</strong> {item.archiveUrl}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
