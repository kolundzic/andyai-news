import Link from "next/link";
import { getPublicEditionSnapshot, isSupportedPublicEditionLocale } from "@/lib/public-editions/helpers";

type PageProps = {
  params: {
    locale: string;
    day: string;
  };
};

export default function PublicEditionPage({ params }: PageProps) {
  const locale = params.locale;
  const day = params.day;

  if (!isSupportedPublicEditionLocale(locale)) {
    return (
      <main style={{ padding: 24 }}>
        <h1>Unsupported locale</h1>
        <p>Allowed locales: en, sr, jp.</p>
      </main>
    );
  }

  const record = getPublicEditionSnapshot(day).find((item) => item.locale === locale);

  if (!record) {
    return (
      <main style={{ padding: 24 }}>
        <h1>Edition not found</h1>
        <p>No public edition record found for this locale/day.</p>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: 24,
        color: "#f5f7fb",
        background: "linear-gradient(135deg, #020617 0%, #0b1f46 60%, #07111f 100%)",
      }}
    >
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <p style={{ opacity: 0.8, marginBottom: 12 }}>AndyAI News</p>
        <h1 style={{ fontSize: 46, lineHeight: 1.08, margin: 0 }}>{record.title}</h1>
        <p style={{ fontSize: 20, opacity: 0.92 }}>{record.hero_headline}</p>

        <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", marginTop: 24 }}>
          <section style={{ border: "1px solid rgba(255,255,255,0.14)", borderRadius: 18, padding: 18, background: "rgba(255,255,255,0.04)" }}>
            <div style={{ opacity: 0.7 }}>Locale</div>
            <div style={{ fontSize: 28, fontWeight: 700 }}>{record.locale.toUpperCase()}</div>
          </section>
          <section style={{ border: "1px solid rgba(255,255,255,0.14)", borderRadius: 18, padding: 18, background: "rgba(255,255,255,0.04)" }}>
            <div style={{ opacity: 0.7 }}>Day</div>
            <div style={{ fontSize: 28, fontWeight: 700 }}>{record.day}</div>
          </section>
          <section style={{ border: "1px solid rgba(255,255,255,0.14)", borderRadius: 18, padding: 18, background: "rgba(255,255,255,0.04)" }}>
            <div style={{ opacity: 0.7 }}>State</div>
            <div style={{ fontSize: 28, fontWeight: 700 }}>{record.state}</div>
          </section>
        </div>

        <section style={{ marginTop: 28, border: "1px solid rgba(255,255,255,0.14)", borderRadius: 20, padding: 20, background: "rgba(255,255,255,0.04)" }}>
          <h2 style={{ marginTop: 0 }}>Edition Summary</h2>
          <p style={{ fontSize: 18, lineHeight: 1.6 }}>{record.summary}</p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 16 }}>
            <Link href={record.archive_route} style={{ color: "#c8ddff" }}>Open archive route</Link>
            <Link href="/admin/publish" style={{ color: "#c8ddff" }}>Open publish admin</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
