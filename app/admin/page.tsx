'use client';

import { useMemo, useRef, useState } from 'react';
import { availableDates, getLatestPayload, getPayloadByDate } from '@/components/news';

type Story = {
  id: number;
  title: string;
  summary: string;
  impact: string;
  whyItMatters: string;
  content: string[];
  keyPoints: string[];
};

type ValidationIssue = {
  level: 'error' | 'warning';
  message: string;
};

function createEmptyStory(id: number): Story {
  return {
    id,
    title: '',
    summary: '',
    impact: '',
    whyItMatters: '',
    content: ['', '', ''],
    keyPoints: ['', '', ''],
  };
}

function makeDraftFromDate(date: string, sourcePayload?: any) {
  const base = sourcePayload ?? getLatestPayload();

  return {
    ...base,
    date,
    coverImage: `/covers/${date}-cover.jpg`,
    news: Array.isArray(base.news)
      ? base.news.map((story: Story, index: number) => ({
          id: index + 1,
          title: story.title ?? '',
          summary: story.summary ?? '',
          impact: story.impact ?? '',
          whyItMatters: story.whyItMatters ?? '',
          content: Array.isArray(story.content) ? story.content.slice(0, 3) : ['', '', ''],
          keyPoints: Array.isArray(story.keyPoints) ? story.keyPoints.slice(0, 3) : ['', '', ''],
        }))
      : Array.from({ length: 9 }, (_, idx) => createEmptyStory(idx + 1)),
  };
}

function validatePayload(payload: any): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  if (!payload || typeof payload !== 'object') {
    return [{ level: 'error', message: 'Payload is not a valid object.' }];
  }

  if (!payload.date || !/^\d{4}-\d{2}-\d{2}$/.test(payload.date)) {
    issues.push({ level: 'error', message: 'Date is missing or not in YYYY-MM-DD format.' });
  }

  if (!payload.title?.trim()) {
    issues.push({ level: 'error', message: 'Top-level title is required.' });
  }

  if (!payload.subtitle?.trim()) {
    issues.push({ level: 'warning', message: 'Subtitle is empty.' });
  }

  if (!payload.coverImage?.trim()) {
    issues.push({ level: 'error', message: 'Cover image path is required.' });
  }

  if (!Array.isArray(payload.news)) {
    issues.push({ level: 'error', message: 'news must be an array.' });
    return issues;
  }

  if (payload.news.length !== 9) {
    issues.push({ level: 'warning', message: `Expected 9 stories, found ${payload.news.length}.` });
  }

  payload.news.forEach((story: Story, index: number) => {
    const label = `Story ${story?.id ?? index + 1}`;

    if (story?.id !== index + 1) {
      issues.push({ level: 'warning', message: `${label}: ID should usually be ${index + 1}.` });
    }

    if (!story?.title?.trim()) {
      issues.push({ level: 'error', message: `${label}: title is required.` });
    }
    if (!story?.summary?.trim()) {
      issues.push({ level: 'error', message: `${label}: summary is required.` });
    }
    if (!story?.impact?.trim()) {
      issues.push({ level: 'warning', message: `${label}: impact is empty.` });
    }
    if (!story?.whyItMatters?.trim()) {
      issues.push({ level: 'warning', message: `${label}: whyItMatters is empty.` });
    }

    if (!Array.isArray(story?.content) || story.content.length < 3) {
      issues.push({ level: 'warning', message: `${label}: content should contain at least 3 paragraphs.` });
    } else {
      story.content.forEach((paragraph, pIndex) => {
        if (!String(paragraph ?? '').trim()) {
          issues.push({ level: 'warning', message: `${label}: paragraph ${pIndex + 1} is empty.` });
        }
      });
    }

    if (!Array.isArray(story?.keyPoints) || story.keyPoints.length < 3) {
      issues.push({ level: 'warning', message: `${label}: keyPoints should contain at least 3 entries.` });
    } else {
      story.keyPoints.forEach((point, kIndex) => {
        if (!String(point ?? '').trim()) {
          issues.push({ level: 'warning', message: `${label}: key point ${kIndex + 1} is empty.` });
        }
      });
    }
  });

  return issues;
}

function sanitizePayload(raw: any) {
  const stories = Array.isArray(raw?.news) ? raw.news : [];

  return {
    date: String(raw?.date ?? '').trim(),
    title: String(raw?.title ?? '').trim(),
    subtitle: String(raw?.subtitle ?? '').trim(),
    coverImage: String(raw?.coverImage ?? '').trim(),
    news: stories.map((story: Story, index: number) => ({
      id: Number(story?.id ?? index + 1),
      title: String(story?.title ?? '').trim(),
      summary: String(story?.summary ?? '').trim(),
      impact: String(story?.impact ?? '').trim(),
      whyItMatters: String(story?.whyItMatters ?? '').trim(),
      content: Array.isArray(story?.content)
        ? story.content.map((item) => String(item ?? '').trim())
        : [],
      keyPoints: Array.isArray(story?.keyPoints)
        ? story.keyPoints.map((item) => String(item ?? '').trim())
        : [],
    })),
  };
}

function getPublishChecklist(payload: any, issues: ValidationIssue[]) {
  const storyCount = Array.isArray(payload?.news) ? payload.news.length : 0;
  const errors = issues.filter((item) => item.level === 'error').length;
  const warnings = issues.filter((item) => item.level === 'warning').length;
  const date = String(payload?.date ?? '').trim();
  const expectedCover = date ? `/covers/${date}-cover.jpg` : '';
  const actualCover = String(payload?.coverImage ?? '').trim();

  return [
    {
      label: 'Date is set',
      ok: !!date && /^\d{4}-\d{2}-\d{2}$/.test(date),
      detail: date || 'Missing',
    },
    {
      label: 'Exactly 9 stories',
      ok: storyCount === 9,
      detail: `${storyCount} stories`,
    },
    {
      label: 'No validation errors',
      ok: errors === 0,
      detail: `${errors} errors`,
    },
    {
      label: 'Cover image path present',
      ok: !!actualCover,
      detail: actualCover || 'Missing',
    },
    {
      label: 'Cover path matches date convention',
      ok: !!date && actualCover === expectedCover,
      detail: expectedCover ? `Expected ${expectedCover}` : 'Set date first',
    },
    {
      label: 'Warnings reviewed',
      ok: warnings === 0,
      detail: `${warnings} warnings`,
    },
  ];
}

function buildPublishPack(payload: any) {
  const date = String(payload?.date ?? '').trim() || 'YYYY-MM-DD';
  const jsonFilename = `news-${date}.json`;
  const jsonRepoPath = `data/${jsonFilename}`;
  const coverWebPath = String(payload?.coverImage ?? '').trim() || `/covers/${date}-cover.jpg`;
  const coverPublicPath = coverWebPath.startsWith('/') ? `public${coverWebPath}` : `public/${coverWebPath}`;
  const manifestNote = `Set data/manifest.json -> defaultDate to "${date}" when this becomes the live day.`;

  return {
    date,
    jsonFilename,
    jsonRepoPath,
    coverWebPath,
    coverPublicPath,
    manifestNote,
    steps: [
      `Download ${jsonFilename} from this admin page.`,
      `Place ${jsonFilename} into ${jsonRepoPath}.`,
      `Place your cover image into ${coverPublicPath}.`,
      `Check that coverImage inside JSON equals ${coverWebPath}.`,
      `If this is the live day, update data/manifest.json defaultDate to "${date}".`,
      'Run npm run dev and verify homepage + all 9 story pages.',
      'Commit the JSON + cover image + manifest change when ready.',
    ],
  };
}

export default function AdminPage() {
  const defaultPayload = getLatestPayload();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedDate, setSelectedDate] = useState(defaultPayload.date);
  const [draftDate, setDraftDate] = useState('');
  const [payload, setPayload] = useState(() => JSON.stringify(defaultPayload, null, 2));
  const [mode, setMode] = useState<'form' | 'json'>('form');
  const [status, setStatus] = useState('');
  const [coverHintDismissed, setCoverHintDismissed] = useState(false);

  const parsed = useMemo(() => {
    try {
      return JSON.parse(payload);
    } catch {
      return null;
    }
  }, [payload]);

  const validationIssues = useMemo(
    () => (parsed ? validatePayload(parsed) : [{ level: 'error', message: 'JSON is invalid.' }]),
    [parsed]
  );

  const publishChecks = useMemo(
    () => (parsed ? getPublishChecklist(parsed, validationIssues) : []),
    [parsed, validationIssues]
  );

  const publishPack = useMemo(
    () => buildPublishPack(parsed ?? {}),
    [parsed]
  );

  const errorCount = validationIssues.filter((item) => item.level === 'error').length;
  const warningCount = validationIssues.filter((item) => item.level === 'warning').length;
  const checklistDone = publishChecks.filter((item) => item.ok).length;
  const coverDate = String(parsed?.date ?? '').trim();
  const recommendedCoverPath = coverDate ? `/covers/${coverDate}-cover.jpg` : '/covers/YYYY-MM-DD-cover.jpg';

  const stories: Story[] =
    parsed?.news ?? Array.from({ length: 9 }, (_, idx) => createEmptyStory(idx + 1));

  function updatePayload(nextPayload: any) {
    const sanitized = sanitizePayload(nextPayload);
    setPayload(JSON.stringify(sanitized, null, 2));
  }

  function loadDate(date: string) {
    const nextPayload = getPayloadByDate(date);
    setSelectedDate(date);
    setStatus(`Loaded ${date}`);
    setPayload(JSON.stringify(nextPayload, null, 2));
    setCoverHintDismissed(false);
  }

  function patchStory(id: number, updater: (story: Story) => Story) {
    if (!parsed) return;
    const nextStories = (parsed.news ?? []).map((story: Story) =>
      story.id === id ? updater(story) : story
    );
    updatePayload({ ...parsed, news: nextStories });
  }

  function patchField(field: string, value: string) {
    if (!parsed) return;
    updatePayload({ ...parsed, [field]: value });
  }

  function applyRecommendedCoverPath() {
    if (!parsed) return;
    updatePayload({ ...parsed, coverImage: recommendedCoverPath });
    setStatus(`Cover path set to ${recommendedCoverPath}`);
  }

  function downloadJson(pretty = true) {
    if (!parsed) return;
    const cleanPayload = sanitizePayload(parsed);
    const text = JSON.stringify(cleanPayload, null, pretty ? 2 : 0);
    const safeDate = cleanPayload.date || selectedDate || 'draft';
    const blob = new Blob([text], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `news-${safeDate}.json`;
    link.click();
    URL.revokeObjectURL(url);
    setStatus(`Downloaded news-${safeDate}.json`);
  }

  async function copyJson() {
    try {
      await navigator.clipboard.writeText(payload);
      setStatus('JSON copied to clipboard');
    } catch {
      setStatus('Clipboard copy failed');
    }
  }

  async function copyPublishSteps() {
    const text = [
      `JSON file: ${publishPack.jsonFilename}`,
      `Repo JSON path: ${publishPack.jsonRepoPath}`,
      `Cover web path: ${publishPack.coverWebPath}`,
      `Cover public path: ${publishPack.coverPublicPath}`,
      '',
      ...publishPack.steps.map((step, index) => `${index + 1}. ${step}`),
    ].join('\n');

    try {
      await navigator.clipboard.writeText(text);
      setStatus('Publish pack copied to clipboard');
    } catch {
      setStatus('Publish pack copy failed');
    }
  }

  function normalizeJson() {
    if (!parsed) return;
    updatePayload(parsed);
    setStatus('JSON normalized and cleaned');
  }

  function startNewDraft() {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(draftDate)) {
      setStatus('Draft date must be in YYYY-MM-DD format');
      return;
    }
    const source = parsed ?? defaultPayload;
    const draft = makeDraftFromDate(draftDate, source);
    setSelectedDate(draftDate);
    setPayload(JSON.stringify(draft, null, 2));
    setStatus(`New draft created for ${draftDate}`);
    setCoverHintDismissed(false);
  }

  async function importJsonFile(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const text = await file.text();
      const imported = JSON.parse(text);
      updatePayload(imported);
      if (imported?.date) {
        setSelectedDate(String(imported.date));
      }
      setStatus(`Imported ${file.name}`);
      setCoverHintDismissed(false);
    } catch {
      setStatus('Import failed: file is not valid JSON');
    } finally {
      event.target.value = '';
    }
  }

  return (
    <main className="page-shell">
      <div className="container">
        <div className="topbar">
          <div className="brand">AndyAI News Admin Shell</div>
          <div className="subtle">v1.0 production polish</div>
        </div>

        <section className="admin-hero">
          <div>
            <span className="eyebrow">Admin-friendly editor</span>
            <h1>Stable MVP operator panel</h1>
            <p>
              Create or import a daily dataset, validate it, fix the cover path, review the publish pack,
              and use this panel as the stable day-to-day workflow for the first production MVP.
            </p>
          </div>

          <div className="admin-actions">
            <select
              className="admin-select"
              value={selectedDate}
              onChange={(e) => loadDate(e.target.value)}
            >
              {availableDates.map((date) => (
                <option value={date} key={date}>
                  {date}
                </option>
              ))}
            </select>

            <button className="story-cta secondary" onClick={() => fileInputRef.current?.click()}>
              Import JSON
            </button>
            <button className="story-cta secondary" onClick={() => setMode(mode === 'form' ? 'json' : 'form')}>
              Switch to {mode === 'form' ? 'JSON' : 'Form'}
            </button>
            <button className="story-cta secondary" onClick={normalizeJson}>Normalize JSON</button>
            <button className="story-cta secondary" onClick={copyJson}>Copy JSON</button>
            <button className="story-cta primary" onClick={() => downloadJson(true)}>Download JSON</button>

            <input
              ref={fileInputRef}
              type="file"
              accept="application/json,.json"
              className="hidden-file-input"
              onChange={importJsonFile}
            />
          </div>

          <div className="admin-draft-row">
            <label className="admin-field">
              <span>New draft date</span>
              <input
                placeholder="YYYY-MM-DD"
                value={draftDate}
                onChange={(e) => setDraftDate(e.target.value)}
              />
            </label>
            <button className="story-cta primary" onClick={startNewDraft}>
              Create new day draft
            </button>
          </div>

          <div className="admin-status-row">
            <div className="admin-badges">
              <span className={errorCount > 0 ? 'admin-badge error' : 'admin-badge ok'}>
                Errors: {errorCount}
              </span>
              <span className={warningCount > 0 ? 'admin-badge warn' : 'admin-badge ok'}>
                Warnings: {warningCount}
              </span>
              <span className={checklistDone === publishChecks.length ? 'admin-badge ok' : 'admin-badge warn'}>
                Checklist: {checklistDone}/{publishChecks.length}
              </span>
            </div>
            <div className="subtle">{status || 'Ready'}</div>
          </div>
        </section>

        <section className="admin-two-col">
          <section className="admin-panel">
            <div className="admin-panel-head">
              <h2>Cover image helper</h2>
              <button className="story-cta secondary small" onClick={applyRecommendedCoverPath}>
                Apply recommended path
              </button>
            </div>

            {!coverHintDismissed && (
              <div className="cover-helper-box">
                <div>
                  <strong>Recommended path:</strong> <code>{recommendedCoverPath}</code>
                </div>
                <div className="cover-helper-actions">
                  <button className="story-cta secondary small" onClick={applyRecommendedCoverPath}>
                    Use this path
                  </button>
                  <button className="story-cta secondary small" onClick={() => setCoverHintDismissed(true)}>
                    Hide
                  </button>
                </div>
              </div>
            )}

            <div className="cover-helper-grid">
              <div className="cover-helper-item">
                <span className="subtle">Current JSON value</span>
                <code>{String(parsed?.coverImage ?? 'Missing')}</code>
              </div>
              <div className="cover-helper-item">
                <span className="subtle">Expected file</span>
                <code>{recommendedCoverPath}</code>
              </div>
              <div className="cover-helper-item">
                <span className="subtle">Public folder target</span>
                <code>{`public${recommendedCoverPath}`}</code>
              </div>
              <div className="cover-helper-item">
                <span className="subtle">Reminder</span>
                <p>Export JSON, then place your generated cover image into the matching file path before publish.</p>
              </div>
            </div>
          </section>

          <section className="admin-panel">
            <h2>Publish checklist</h2>
            <div className="checklist-list">
              {publishChecks.map((item) => (
                <div key={item.label} className={item.ok ? 'checklist-item ok' : 'checklist-item pending'}>
                  <div className="checklist-top">
                    <strong>{item.ok ? '✓' : '•'} {item.label}</strong>
                  </div>
                  <div className="subtle">{item.detail}</div>
                </div>
              ))}
            </div>
          </section>
        </section>


        <section className="admin-panel production-lock-panel">
          <div className="admin-panel-head">
            <h2>Production lock</h2>
            <span className="production-lock-badge">MVP v1.0 stable</span>
          </div>
          <div className="production-lock-grid">
            <div className="publish-pack-item">
              <span className="subtle">Current mode</span>
              <strong>Daily content publishing</strong>
            </div>
            <div className="publish-pack-item">
              <span className="subtle">Recommended flow</span>
              <strong>Draft → Validate → Cover → Publish pack → Export</strong>
            </div>
            <div className="publish-pack-item">
              <span className="subtle">Admin routes</span>
              <strong>/admin for operations, / for review</strong>
            </div>
            <div className="publish-pack-item">
              <span className="subtle">Status</span>
              <strong>First stable production MVP</strong>
            </div>
          </div>
        </section>

        <section className="admin-panel">
          <div className="admin-panel-head">
            <h2>Local publish pack helper</h2>
            <button className="story-cta secondary small" onClick={copyPublishSteps}>
              Copy publish steps
            </button>
          </div>

          <div className="publish-pack-grid">
            <div className="publish-pack-item">
              <span className="subtle">JSON file to export</span>
              <code>{publishPack.jsonFilename}</code>
            </div>
            <div className="publish-pack-item">
              <span className="subtle">Repo JSON target</span>
              <code>{publishPack.jsonRepoPath}</code>
            </div>
            <div className="publish-pack-item">
              <span className="subtle">Cover image web path</span>
              <code>{publishPack.coverWebPath}</code>
            </div>
            <div className="publish-pack-item">
              <span className="subtle">Cover image local file path</span>
              <code>{publishPack.coverPublicPath}</code>
            </div>
          </div>

          <div className="publish-pack-note">
            <strong>Manifest note:</strong> {publishPack.manifestNote}
          </div>

          <ol className="publish-steps-list">
            {publishPack.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section className="admin-panel">
          <h2>Validation</h2>
          <div className="validation-list">
            {validationIssues.length === 0 && (
              <div className="validation-item ok">
                <strong>OK:</strong> No validation issues found.
              </div>
            )}
            {validationIssues.map((issue, index) => (
              <div
                key={`${issue.level}-${index}-${issue.message}`}
                className={issue.level === 'error' ? 'validation-item error' : 'validation-item warn'}
              >
                <strong>{issue.level === 'error' ? 'Error' : 'Warning'}:</strong> {issue.message}
              </div>
            ))}
          </div>
        </section>

        {!parsed && (
          <section className="admin-panel admin-error">
            JSON is invalid. Fix syntax in JSON mode to continue using the form editor.
          </section>
        )}

        {mode === 'form' && parsed && (
          <>
            <section className="admin-panel">
              <h2>Page settings</h2>
              <div className="admin-grid">
                <label className="admin-field">
                  <span>Date</span>
                  <input value={parsed.date ?? ''} onChange={(e) => patchField('date', e.target.value)} />
                </label>
                <label className="admin-field">
                  <span>Title</span>
                  <input value={parsed.title ?? ''} onChange={(e) => patchField('title', e.target.value)} />
                </label>
                <label className="admin-field admin-field-wide">
                  <span>Subtitle</span>
                  <input value={parsed.subtitle ?? ''} onChange={(e) => patchField('subtitle', e.target.value)} />
                </label>
                <label className="admin-field admin-field-wide">
                  <span>Cover image path</span>
                  <input value={parsed.coverImage ?? ''} onChange={(e) => patchField('coverImage', e.target.value)} />
                </label>
              </div>
            </section>

            <section className="admin-story-list">
              {stories.map((story) => (
                <article className="admin-story-card" key={story.id}>
                  <div className="admin-story-top">
                    <span className="story-dot-number">{story.id}</span>
                    <h3>Story {story.id}</h3>
                  </div>

                  <div className="admin-grid">
                    <label className="admin-field admin-field-wide">
                      <span>Title</span>
                      <input
                        value={story.title}
                        onChange={(e) => patchStory(story.id, (current) => ({ ...current, title: e.target.value }))}
                      />
                    </label>

                    <label className="admin-field admin-field-wide">
                      <span>Summary</span>
                      <textarea
                        rows={3}
                        value={story.summary}
                        onChange={(e) => patchStory(story.id, (current) => ({ ...current, summary: e.target.value }))}
                      />
                    </label>

                    <label className="admin-field">
                      <span>Impact</span>
                      <input
                        value={story.impact}
                        onChange={(e) => patchStory(story.id, (current) => ({ ...current, impact: e.target.value }))}
                      />
                    </label>

                    <label className="admin-field admin-field-wide">
                      <span>Why it matters</span>
                      <textarea
                        rows={3}
                        value={story.whyItMatters}
                        onChange={(e) => patchStory(story.id, (current) => ({ ...current, whyItMatters: e.target.value }))}
                      />
                    </label>

                    {story.content.map((paragraph, index) => (
                      <label className="admin-field admin-field-wide" key={`content-${story.id}-${index}`}>
                        <span>Paragraph {index + 1}</span>
                        <textarea
                          rows={4}
                          value={paragraph}
                          onChange={(e) =>
                            patchStory(story.id, (current) => {
                              const next = [...current.content];
                              next[index] = e.target.value;
                              return { ...current, content: next };
                            })
                          }
                        />
                      </label>
                    ))}

                    {story.keyPoints.map((point, index) => (
                      <label className="admin-field" key={`point-${story.id}-${index}`}>
                        <span>Key point {index + 1}</span>
                        <input
                          value={point}
                          onChange={(e) =>
                            patchStory(story.id, (current) => {
                              const next = [...current.keyPoints];
                              next[index] = e.target.value;
                              return { ...current, keyPoints: next };
                            })
                          }
                        />
                      </label>
                    ))}
                  </div>
                </article>
              ))}
            </section>
          </>
        )}

        {mode === 'json' && (
          <section className="admin-panel">
            <h2>Raw JSON</h2>
            <textarea
              className="admin-json"
              value={payload}
              onChange={(e) => setPayload(e.target.value)}
            />
          </section>
        )}
      </div>
    </main>
  );
}
