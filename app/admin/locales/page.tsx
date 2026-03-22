import { buildLocaleStructureSnapshot } from "@/lib/locales/helpers";

export default function AdminLocalesPage() {
  const snapshot = buildLocaleStructureSnapshot();

  return (
    <main style={{ padding: 24, display: "grid", gap: 16 }}>
      <div>
        <h1 style={{ margin: 0 }}>Admin Locales</h1>
        <p style={{ marginTop: 8 }}>
          Multilingual structure bridge for AndyAI News.
        </p>
      </div>

      <section
        style={{
          border: "1px solid #e5e7eb",
          borderRadius: 12,
          padding: 16,
          background: "#fff",
        }}
      >
        <h2 style={{ marginTop: 0 }}>Structure Snapshot</h2>
        <p>
          Default locale: <strong>{snapshot.defaultLocale}</strong>
        </p>
        <ul>
          {snapshot.locales.map((locale) => (
            <li key={locale.code}>
              <strong>{locale.code}</strong> — {locale.label} / {locale.nativeLabel}
            </li>
          ))}
        </ul>
      </section>

      <section
        style={{
          border: "1px solid #e5e7eb",
          borderRadius: 12,
          padding: 16,
          background: "#fff",
        }}
      >
        <h2 style={{ marginTop: 0 }}>Notes</h2>
        <ul>
          {snapshot.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
