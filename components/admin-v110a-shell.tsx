"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  V110_FEATURE_CARDS,
  type DraftAutosaveState,
  type LiveDaySwitchState,
  type NewsletterExportState
} from "@/lib/v110a-types";
import type { V110ManifestSummary } from "@/lib/v110a-manifest";
import {
  V110_STORAGE_KEYS,
  nowIso,
  safeLoadJSON,
  safeSaveJSON
} from "@/lib/v110a-storage";

type SaveState = "idle" | "saving" | "saved";

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
      {status}
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

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "140px 1fr",
        gap: 12,
        padding: "8px 0",
        borderBottom: "1px solid rgba(255,255,255,0.08)"
      }}
    >
      <strong>{label}</strong>
      <span style={{ wordBreak: "break-word", opacity: 0.9 }}>{value}</span>
    </div>
  );
}

function SaveBadge({ state }: { state: SaveState }) {
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
        opacity: 0.95
      }}
    >
      {state}
    </span>
  );
}

export default function AdminV110AShell({
  manifestSummary
}: {
  manifestSummary: V110ManifestSummary;
}) {
  const availableDates = manifestSummary.issues.map((issue) => issue.date);

  const [workingDate, setWorkingDate] = useState<string>(
    manifestSummary.liveDate ?? availableDates[0] ?? ""
  );

  const [autosave, setAutosave] = useState<DraftAutosaveState>(() =>
    safeLoadJSON<DraftAutosaveState>(V110_STORAGE_KEYS.autosaveMeta, {
      enabled: true,
      lastSavedAt: null,
      storageKey: V110_STORAGE_KEYS.autosaveDraft
    })
  );

  const [saveState, setSaveState] = useState<SaveState>("idle");

  const [draftText, setDraftText] = useState<string>(() =>
    safeLoadJSON<string>(V110_STORAGE_KEYS.autosaveDraft, "")
  );

  const [liveDay, setLiveDay] = useState<LiveDaySwitchState>(() =>
    safeLoadJSON<LiveDaySwitchState>(V110_STORAGE_KEYS.liveDayCandidate, {
      currentLiveDate: manifestSummary.liveDate,
      candidateDate: manifestSummary.liveDate ?? availableDates[0] ?? null
    })
  );

  const [newsletter, setNewsletter] = useState<NewsletterExportState>(() =>
    safeLoadJSON<NewsletterExportState>(V110_STORAGE_KEYS.newsletterPrefs, {
      format: "markdown",
      includeCover: true,
      includeSummariesOnly: false
    })
  );

  const saveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const savedBadgeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const firstRenderRef = useRef(true);

  const selectedIssue = useMemo(() => {
    return (
      manifestSummary.issues.find((issue) => issue.date === workingDate) ??
      manifestSummary.issues[0] ??
      null
    );
  }, [manifestSummary.issues, workingDate]);

  const exportPreview = useMemo(() => {
    return [
      "# AndyAI News Bulletin",
      "",
      `Date: ${liveDay.candidateDate ?? workingDate}`,
      `Format: ${newsletter.format}`,
      `Include cover: ${newsletter.includeCover ? "yes" : "no"}`,
      `Summaries only: ${newsletter.includeSummariesOnly ? "yes" : "no"}`
    ].join("\n");
  }, [liveDay.candidateDate, workingDate, newsletter]);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    if (!autosave.enabled) return;

    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    if (savedBadgeTimeoutRef.current) clearTimeout(savedBadgeTimeoutRef.current);

    setSaveState("saving");

    saveTimeoutRef.current = setTimeout(() => {
      safeSaveJSON(V110_STORAGE_KEYS.autosaveDraft, draftText);

      const nextMeta = {
        ...autosave,
        lastSavedAt: nowIso()
      };

      setAutosave(nextMeta);
      safeSaveJSON(V110_STORAGE_KEYS.autosaveMeta, nextMeta);
      setSaveState("saved");

      savedBadgeTimeoutRef.current = setTimeout(() => {
        setSaveState("idle");
      }, 1200);
    }, 350);

    return () => {
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    };
  }, [draftText, autosave.enabled]);

  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
      if (savedBadgeTimeoutRef.current) clearTimeout(savedBadgeTimeoutRef.current);
    };
  }, []);

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

  function restoreDraft() {
    const restored = safeLoadJSON<string>(V110_STORAGE_KEYS.autosaveDraft, "");
    setDraftText(restored);

    const restoredMeta = safeLoadJSON<DraftAutosaveState>(V110_STORAGE_KEYS.autosaveMeta, {
      enabled: true,
      lastSavedAt: null,
      storageKey: V110_STORAGE_KEYS.autosaveDraft
    });
    setAutosave(restoredMeta);
    setSaveState("idle");
  }

  function clearDraft() {
    setDraftText("");
    const nextMeta = {
      ...autosave,
      lastSavedAt: null
    };
    setAutosave(nextMeta);
    safeSaveJSON(V110_STORAGE_KEYS.autosaveDraft, "");
    safeSaveJSON(V110_STORAGE_KEYS.autosaveMeta, nextMeta);
    setSaveState("idle");
  }

  function toggleAutosave(nextEnabled: boolean) {
    const nextMeta = {
      ...autosave,
      enabled: nextEnabled
    };
    setAutosave(nextMeta);
    safeSaveJSON(V110_STORAGE_KEYS.autosaveMeta, nextMeta);
    setSaveState("idle");
  }

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 20px 80px 20px" }}>
      <div style={{ marginBottom: 24 }}>
        <p style={{ margin: 0, opacity: 0.7, fontSize: 14 }}>AndyAI News / Admin / v1.1.0-c</p>
        <h1 style={{ marginTop: 8, marginBottom: 10, fontSize: 36, lineHeight: 1.1 }}>
          Operator Upgrade Pack — Draft Autosave
        </h1>
        <p style={{ margin: 0, maxWidth: 760, lineHeight: 1.7, opacity: 0.9 }}>
          This step upgrades the safe preview route with local-first autosave behavior, restore/clear controls,
          and visible save state feedback without touching the main admin workflow.
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
            status={
              item.id === "multi-day-navigation"
                ? "done"
                : item.id === "draft-autosave"
                ? "done"
                : item.status
            }
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
            title="Multi-day navigation"
            subtitle="Manifest-backed issue discovery and working-date selection."
          />

          <p style={{ marginTop: 0, lineHeight: 1.6 }}>
            <strong>Current live date:</strong> {manifestSummary.liveDate ?? "not detected"}
            <br />
            <strong>Available issues:</strong> {manifestSummary.issues.length}
          </p>

          <label style={{ display: "block", fontSize: 14, marginBottom: 8 }}>Working date</label>
          <select
            value={workingDate}
            onChange={(e) => setWorkingDate(e.target.value)}
            style={{ width: "100%", padding: 10, borderRadius: 10, marginBottom: 16 }}
          >
            {manifestSummary.issues.map((issue) => (
              <option key={issue.date} value={issue.date}>
                {issue.date}
              </option>
            ))}
          </select>

          {selectedIssue ? (
            <div
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 14,
                padding: 14,
                background: "rgba(0,0,0,0.15)"
              }}
            >
              <h3 style={{ marginTop: 0, marginBottom: 10, fontSize: 18 }}>Selected issue metadata</h3>
              <MetaRow label="Date" value={selectedIssue.date} />
              <MetaRow label="Title" value={selectedIssue.title} />
              <MetaRow label="Dataset file" value={selectedIssue.file} />
              <MetaRow label="Cover path" value={selectedIssue.cover} />
            </div>
          ) : (
            <p style={{ marginBottom: 0, opacity: 0.85 }}>
              No issue metadata could be derived from the manifest.
            </p>
          )}
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
            title="Draft autosave"
            subtitle="Real local-first autosave preview with save-state feedback and recovery controls."
          />

          <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap", marginBottom: 12 }}>
            <SaveBadge state={saveState} />
            <span style={{ fontSize: 14, opacity: 0.9 }}>
              <strong>Last saved:</strong> {autosave.lastSavedAt ?? "not saved yet"}
            </span>
          </div>

          <label style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 12 }}>
            <input
              type="checkbox"
              checked={autosave.enabled}
              onChange={(e) => toggleAutosave(e.target.checked)}
            />
            autosave enabled
          </label>

          <textarea
            value={draftText}
            onChange={(e) => setDraftText(e.target.value)}
            placeholder="Type a draft note, issue summary, operator note, or newsletter intro here..."
            style={{
              width: "100%",
              minHeight: 180,
              borderRadius: 12,
              padding: 12,
              resize: "vertical",
              lineHeight: 1.6,
              marginBottom: 12
            }}
          />

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button
              onClick={restoreDraft}
              style={{ padding: "10px 14px", borderRadius: 10, cursor: "pointer" }}
            >
              Restore draft
            </button>
            <button
              onClick={clearDraft}
              style={{ padding: "10px 14px", borderRadius: 10, cursor: "pointer" }}
            >
              Clear draft
            </button>
          </div>
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
            {availableDates.map((date) => (
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
