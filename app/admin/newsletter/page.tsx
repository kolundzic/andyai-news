import snapshot from "@/data/newsletter-binding/newsletter-snapshot.json";

export default function AdminNewsletterPage() {
  return (
    <main style={{ padding: 24, fontFamily: "Arial, sans-serif" }}>
      <h1>AndyAI News — Newsletter Binding</h1>
      <p>Deterministic compose bridge for edition/day/locale-aware newsletter payloads.</p>

      <section style={{ marginTop: 24 }}>
        <h2>Current Snapshot</h2>
        <ul>
          <li><strong>Edition:</strong> {snapshot.editionId}</li>
          <li><strong>Day:</strong> {snapshot.day}</li>
          <li><strong>Locale:</strong> {snapshot.locale}</li>
          <li><strong>Status:</strong> {snapshot.status}</li>
          <li><strong>Items:</strong> {snapshot.itemCount}</li>
        </ul>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Subject</h2>
        <p>{snapshot.subject}</p>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Bound Items</h2>
        <ol>
          {snapshot.items.map((item) => (
            <li key={item.id} style={{ marginBottom: 12 }}>
              <strong>{item.title}</strong>
              <div>{item.summary}</div>
              <small>{item.category} · {item.slug}</small>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
