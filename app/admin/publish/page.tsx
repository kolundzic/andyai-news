import snapshot from "@/data/publish-state/publish-snapshot.json";
import { getReleaseBadge } from "@/lib/publish-state/helpers";

export default function PublishAdminPage() {
  const items = snapshot.items ?? [];

  return (
    <main style={{
      minHeight: "100vh",
      padding: "32px",
      color: "#e8eefc",
      background: "linear-gradient(135deg, #020817 0%, #0b1f4d 60%, #0f172a 100%)",
      fontFamily: "Arial, sans-serif"
    }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <div style={{ marginBottom: "24px" }}>
          <div style={{ fontSize: "14px", opacity: 0.85, marginBottom: "8px" }}>AndyAI News</div>
          <h1 style={{ fontSize: "54px", lineHeight: 1.05, margin: "0 0 16px 0" }}>
            Publish State &amp; Release Discipline
          </h1>
          <p style={{ fontSize: "22px", lineHeight: 1.5, maxWidth: "980px", margin: 0, opacity: 0.96 }}>
            First delivery-grade publishing control layer for the v1.3.0 publishing / delivery series:
            explicit state, controlled release track, and clean production-vs-preview discipline.
          </p>
        </div>

        <section style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "16px",
          marginBottom: "28px"
        }}>
          <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "16px", padding: "18px" }}>
            <div style={{ fontSize: "13px", opacity: 0.8 }}>Release</div>
            <div style={{ fontSize: "28px", fontWeight: 700, marginTop: "8px" }}>{snapshot.version}</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "16px", padding: "18px" }}>
            <div style={{ fontSize: "13px", opacity: 0.8 }}>Production lane</div>
            <div style={{ fontSize: "28px", fontWeight: 700, marginTop: "8px" }}>{snapshot.production_lane}</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "16px", padding: "18px" }}>
            <div style={{ fontSize: "13px", opacity: 0.8 }}>Preview lane</div>
            <div style={{ fontSize: "28px", fontWeight: 700, marginTop: "8px" }}>{snapshot.preview_lane}</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "16px", padding: "18px" }}>
            <div style={{ fontSize: "13px", opacity: 0.8 }}>Discipline</div>
            <div style={{ fontSize: "22px", fontWeight: 700, marginTop: "8px" }}>Explicit publish state</div>
          </div>
        </section>

        <section style={{ marginBottom: "28px" }}>
          <h2 style={{ fontSize: "30px", margin: "0 0 14px 0" }}>Release rules</h2>
          <div style={{ display: "grid", gap: "12px" }}>
            {snapshot.release_discipline.map((rule: string) => (
              <div key={rule} style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: "14px",
                padding: "14px 16px",
                fontSize: "18px",
                lineHeight: 1.45
              }}>
                {rule}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: "30px", margin: "0 0 14px 0" }}>Operational sections</h2>
          <div style={{ display: "grid", gap: "14px" }}>
            {items.map((item: any) => (
              <div key={item.section} style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: "16px",
                padding: "18px"
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                  <div>
                    <div style={{ fontSize: "25px", fontWeight: 700 }}>{item.section}</div>
                    <div style={{ fontSize: "18px", opacity: 0.9, marginTop: "6px" }}>{item.notes}</div>
                  </div>
                  <div style={{
                    padding: "8px 12px",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,0.08)",
                    fontSize: "15px",
                    fontWeight: 700,
                    textTransform: "uppercase"
                  }}>
                    {getReleaseBadge(item.state)}
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px", marginTop: "16px" }}>
                  <div>
                    <div style={{ fontSize: "12px", opacity: 0.75 }}>State</div>
                    <div style={{ fontSize: "18px", marginTop: "4px" }}>{item.state}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "12px", opacity: 0.75 }}>Track</div>
                    <div style={{ fontSize: "18px", marginTop: "4px" }}>{item.release_track}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "12px", opacity: 0.75 }}>Route</div>
                    <div style={{ fontSize: "18px", marginTop: "4px" }}>{item.route}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
