"use client";

import { useMemo, useState } from "react";
import {
  V110_FEATURE_CARDS,
  type DraftAutosaveState,
  type LiveDaySwitchState,
  type MultiDayNavState,
  type NewsletterExportState
} from "@/lib/v110a-types";
import {
  V110_STORAGE_KEYS,
  nowIso,
  safeLoadJSON,
  safeSaveJSON
} from "@/lib/v110a-storage";

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>{title}</h2>
      {subtitle ? (
        <p style={{ opacity: 0.8, lineHeight: 1.5, margin: 0 }}>{subtitle}</p>
      ) : null}
    </div>
  );
}

function StatusBadge({ status }: { status: "planned" | "skeleton" | "next" | "done" }) {
  const label =
    status === "planned"
      ? "planned"
      : status === "skeleton"
      ? "skeleton"
      : status === "next"
      ? "next"
      : "done";

  return (
    <span
      style={{
        display: "inline-block",
        padding: "4px 10px",
        borderRadius: 999,
        border: "1px solid rgba(255,255,255,0.18)",
        fontSize: 12,
        textTransform: "uppercase",
        letterSpacing: 0.5,
        opacity: 0.9
      }}
    >
      {label}
    </span>
  );
}

function Card({
  title,
  status,
  summary,
  whyItMatters,
  nextStep
}: {
  title: string;
  status: "planned" | "skeleton" | "next" | "done";
  summary: string;
  whyItMatters: string;
  nextStep: string;
}) {
  return (
    <div
      style={{
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: 16,
        padding: 16,
        background: "rgba(255,255,255,0.03)"
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
        <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>{title}</h3>
        <StatusBadge status={status} />
      </div>

      <p style={{ marginTop: 12, marginBottom: 12, lineHeight: 1.6 }}>{summary}</p>

      <div style={{ fontSize: 14, lineHeight: 1.6, opacity: 0.92 }}>
        <p style={{ marginTop: 0 }}>
          <strong>Why it matters:</strong> {whyItMatters}
        </p>
        <p style={{ marginBottom: 0 }}>
          <strong>Next step:</strong> {nextStep}
        </p>
      </div>
    </div>
  );
}

export default function AdminV110AShell() {
  const [multiDay, setMultiDay] = useState<MultiDayNavState>({
    currentDate: "2026-03-22",
    availableDates: ["2026-03-22", "2026-03-21", "2026-03-20"]
  });

  const [autosave, setAutosave] = useState<DraftAutosaveState>(() =>
    safeLoadJSON<DraftAutosaveState>(V110_STORAGE_KEYS.autosaveMeta, {
      enabled: true,
      lastSavedAt: null,
      storageKey: V110_STORAGE_KEYS.autosaveDraft
    })
  );

  const [liveDay, setLiveDay] = useState<LiveDaySwitchState>(() =>
    safeLoadJSON<LiveDaySwitchState>(V110_STORAGE_KEYS.liveDayCandidate, {
      currentLiveDate: "2026-03-22",
      candidateDate: "2026-03-22"
    })
  );

  const [newsletter, setNewsletter] = useState<NewsletterExportState>(() =>
    safeLoadJSON<NewsletterExportState>(V110_STORAGE_KEYS.newsletterPrefs, {
      format: "markdown",
      includeCover: true,
      includeSummariesOnly: false
    })
  );

  const exportPreview = useMemo(() => {
    return [
      "# AndyAI News Bulletin",
      "",
      `Date: ${liveDay.candidateDate ?? multiDay.currentDate}`,
      `Format: ${newsletter.format}`,
      `Include cover: ${newsletter.includeCover ? "yes" : "no"}`,
      `Summaries only: ${newsletter.includeSummariesOnly ? "yes" : "no"}`
    ].join("\n");
  }, [liveDay.candidateDate, multiDay.currentDate, newsletter]);

  function simulateAutosave() {
    const next = {
      ...autosave,
      lastSavedAt: nowIso()
    };
    setAutosave(next);
    safeSaveJSON(V110_STORAGE_KEYS.autosaveMeta, next);
  }

  function rememberLiveDayCandidate(nextDate: string) {
    const next = {
      ...liveDay,
      candidateDate: nextDate
    };
    setLiveDay(next);
    safeSaveJSON(V110_STORAGE_KEYS.liveDayCandidate, next);
  }

  function rememberNewsletterPrefs(next: NewsletterExportState) {
    setNewsletter(next);
    safeSaveJSON(V110_STORAGE_KEYS.newsletterPrefs, next);
  }

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px 80px 20px" }}>
      <div style={{ marginBottom: 24 }}>
        <p style={{ margin: 0, opacity: 0.7, fontSize: 14 }}>AndyAI News / Admin / v1.1.0-a</p>
        <h1 style={{ marginTop: 8, marginBottom: 10, fontSize: 36, lineHeight: 1.1 }}>
          Operator Upgrade Pack — Skeleton Preview
        </h1>
        <p style={{ margin: 0, maxWidth: 760, lineHeight: 1.7, opacity: 0.9 }}>
          This route is a safe preview layer for the next admin upgrade cycle. It introduces non-breaking UI slots,
          local-first state placeholders, and feature direction for the next release steps.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 14,
          marginBottom: 28
        }}
      >
        {V110_FEATURE_CARDS.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            status={item.status}
            summary={item.summary}
            whyItMatters={item.whyItMatters}
            nextStep={item.nextStep}
          />
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 16
        }}
      >
        <section
          style={{
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 16,
            padding: 16,
            background: "rgba(255,255,255,0.03)"
          }}
        >
          <SectionTitle
            title="Multi-day navigation slot"
            subtitle="Placeholder state for browsing daily issues before wiring it to manifest and filesystem-backed data."
          />
          <label style={{ display: "block", fontSize: 14, marginBottom: 8 }}>Current working date</label>
          <select
            value={multiDay.currentDate}
            onChange={(e) => setMultiDay({ ...multiDay, currentDate: e.target.value })}
            style={{ width: "100%", padding: 10, borderRadius: 10, marginBottom: 12 }}
          >
            {multiDay.availableDates.map((date) => (
              <option key={date} value={date}>
                {date}
              </option>
            ))}
          </select>
          <p style={{ margin: 0, opacity: 0.8, lineHeight: 1.6 }}>
            Current placeholder dates are hardcoded for preview. Next step is manifest-backed discovery.
          </p>
        </section>

        <section
          style={{
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 16,
            padding: 16,
            background: "rgba(255,255,255,0.03)"
          }}
        >
          <SectionTitle
            title="Draft autosave slot"
            subtitle="Local-first skeleton that proves the save-state shape before wiring it to the real editor fields."
          />
          <p style={{ marginTop: 0, lineHeight: 1.6 }}>
            <strong>Enabled:</strong> {autosave.enabled ? "yes" : "no"}
            <br />
            <strong>Last saved:</strong> {autosave.lastSavedAt ?? "not saved yet"}
            <br />
            <strong>Storage key:</strong> {autosave.storageKey}
          </p>
          <button
            onClick={simulateAutosave}
            style={{ padding: "10px 14px", borderRadius: 10, cursor: "pointer" }}
          >
            Simulate autosave
          </button>
        </section>

        <section
          style={{
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 16,
            padding: 16,
            background: "rgba(255,255,255,0.03)"
          }}
        >
          <SectionTitle
            title="Manifest helper / live day switch"
            subtitle="Safer preview for choosing which daily dataset becomes the active live issue."
          />
          <p style={{ lineHeight: 1.6 }}>
            <strong>Current live date:</strong> {liveDay.currentLiveDate ?? "not set"}
          </p>
          <label style={{ display: "block", fontSize: 14, marginBottom: 8 }}>Candidate live date</label>
          <select
            value={liveDay.candidateDate ?? ""}
            onChange={(e) => rememberLiveDayCandidate(e.target.value)}
            style={{ width: "100%", padding: 10, borderRadius: 10 }}
          >
            {multiDay.availableDates.map((date) => (
              <option key={date} value={date}>
                {date}
              </option>
            ))}
          </select>
        </section>

        <section
          style={{
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 16,
            padding: 16,
            background: "rgba(255,255,255,0.03)"
          }}
        >
          <SectionTitle
            title="Newsletter export slot"
            subtitle="Preview output mode for later markdown/html/text bulletin generation."
          />
          <div style={{ display: "grid", gap: 10 }}>
            <label style={{ fontSize: 14 }}>
              Format
              <select
                value={newsletter.format}
                onChange={(e) =>
                  rememberNewsletterPrefs({
                    ...newsletter,
                    format: e.target.value as "markdown" | "html" | "text"
                  })
                }
                style={{ width: "100%", padding: 10, borderRadius: 10, marginTop: 6 }}
              >
                <option value="markdown">markdown</option>
                <option value="html">html</option>
                <option value="text">text</option>
              </select>
            </label>

            <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <input
                type="checkbox"
                checked={newsletter.includeCover}
                onChange={(e) =>
                  rememberNewsletterPrefs({
                    ...newsletter,
                    includeCover: e.target.checked
                  })
                }
              />
              include cover
            </label>

            <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <input
                type="checkbox"
                checked={newsletter.includeSummariesOnly}
                onChange={(e) =>
                  rememberNewsletterPrefs({
                    ...newsletter,
                    includeSummariesOnly: e.target.checked
                  })
                }
              />
              summaries only
            </label>

            <pre
              style={{
                marginBottom: 0,
                padding: 14,
                borderRadius: 12,
                overflowX: "auto",
                background: "rgba(0,0,0,0.25)",
                lineHeight: 1.5
              }}
            >
{exportPreview}
            </pre>
          </div>
        </section>
      </div>
    </main>
  );
}
