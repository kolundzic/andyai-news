import Link from "next/link";

export default function PublicArchiveDayPage({
  params,
}: {
  params: { locale: string; day: string };
}) {
  const { locale, day } = params;

  return (
    <main style={{
      minHeight: "100vh",
      padding: "32px 24px",
      color: "#f5f7fb",
      background: "linear-gradient(90deg, #031127 0%, #0b2a62 100%)",
      fontFamily: "Arial, sans-serif"
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ fontSize: 18, opacity: 0.9, marginBottom: 16 }}>AndyAI News</div>
        <h1 style={{ fontSize: 54, lineHeight: 1.05, margin: "0 0 18px 0" }}>Public Archive</h1>
        <p style={{ fontSize: 24, lineHeight: 1.45, maxWidth: 1100, margin: "0 0 28px 0" }}>
          Locale-specific public archive route for published daily editions.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 18, marginBottom: 32 }}>
          <div>Locale</div><div>{locale}</div>
          <div>Day</div><div>{day}</div>
          <div>Route</div><div>{`/archive/${locale}/${day}`}</div>
          <div>Purpose</div><div>Public archive surface for published editions and future audio/archive delivery.</div>
        </div>

        <div style={{
          border: "1px solid rgba(255,255,255,0.18)",
          borderRadius: 18,
          padding: 22,
          background: "rgba(255,255,255,0.06)"
        }}>
          <h2 style={{ fontSize: 30, marginTop: 0 }}>Archive navigation</h2>
          <div style={{ display: "grid", gap: 12 }}>
            <Link href={`/archive/${locale}/${day}/main-brief`} style={{ color: "#dce8ff", fontSize: 22 }}>
              Open main brief archive route
            </Link>
            <Link href="/api/archive/public" style={{ color: "#dce8ff", fontSize: 22 }}>
              Open public archive API snapshot
            </Link>
            <Link href="/admin/history" style={{ color: "#dce8ff", fontSize: 22 }}>
              Back to admin history
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
