import { readFile } from "node:fs/promises";
import path from "node:path";
import manifest from "@/data/manifest.json";

type UnknownRecord = Record<string, unknown>;

type StoryLike = {
  id?: string | number;
  title?: string;
  summary?: string;
  excerpt?: string;
  description?: string;
};

type IssueData = {
  date: string;
  title: string;
  cover: string;
  stories: StoryLike[];
};

function asRecord(value: unknown): UnknownRecord | null {
  return value && typeof value === "object" ? (value as UnknownRecord) : null;
}

function asString(value: unknown, fallback = ""): string {
  return typeof value === "string" ? value : fallback;
}

function inferManifestIssues(raw: unknown): UnknownRecord[] {
  const obj = asRecord(raw);
  if (!obj) return [];

  const candidates = [obj.issues, obj.days, obj.entries, obj.items, obj.news];
  for (const candidate of candidates) {
    if (Array.isArray(candidate)) return candidate as UnknownRecord[];
  }
  return [];
}

function inferManifestIssueByDate(date: string): UnknownRecord | null {
  const issues = inferManifestIssues(manifest);
  return issues.find((item) => asString(asRecord(item)?.date) === date) ?? null;
}

function inferStories(raw: unknown): StoryLike[] {
  const obj = asRecord(raw);
  if (!obj) return [];

  const candidates = [obj.stories, obj.items, obj.news, obj.entries];
  for (const candidate of candidates) {
    if (Array.isArray(candidate)) return candidate as StoryLike[];
  }
  return [];
}

function inferIssueTitle(date: string, manifestIssue: UnknownRecord | null, dataObj: UnknownRecord | null): string {
  return (
    asString(dataObj?.title) ||
    asString(manifestIssue?.title) ||
    `AndyAI News — ${date}`
  );
}

function inferIssueCover(date: string, manifestIssue: UnknownRecord | null, dataObj: UnknownRecord | null): string {
  return (
    asString(dataObj?.cover) ||
    asString(manifestIssue?.cover) ||
    `/covers/${date}-cover.jpg`
  );
}

function inferIssueFile(date: string, manifestIssue: UnknownRecord | null): string {
  const raw = asString(manifestIssue?.file, `news-${date}.json`);
  return raw.replace(/^data\//, "");
}

async function loadIssueJson(file: string): Promise<unknown> {
  const absPath = path.join(process.cwd(), "data", file);
  const raw = await readFile(absPath, "utf8");
  return JSON.parse(raw);
}

export async function getIssueDataForNewsletter(date: string): Promise<IssueData | null> {
  const manifestIssue = inferManifestIssueByDate(date);
  const file = inferIssueFile(date, manifestIssue);

  try {
    const raw = await loadIssueJson(file);
    const dataObj = asRecord(raw);

    return {
      date,
      title: inferIssueTitle(date, manifestIssue, dataObj),
      cover: inferIssueCover(date, manifestIssue, dataObj),
      stories: inferStories(raw)
    };
  } catch {
    return {
      date,
      title: inferIssueTitle(date, manifestIssue, null),
      cover: inferIssueCover(date, manifestIssue, null),
      stories: []
    };
  }
}

function summarizeStory(story: StoryLike, index: number): { title: string; body: string } {
  const title =
    asString(story.title) ||
    `Story ${typeof story.id === "number" || typeof story.id === "string" ? story.id : index + 1}`;

  const body =
    asString(story.summary) ||
    asString(story.excerpt) ||
    asString(story.description) ||
    "No summary available.";

  return { title, body };
}

export function buildNewsletterExport(params: {
  issue: IssueData;
  format: "markdown" | "html" | "text";
  includeCover: boolean;
  includeSummariesOnly: boolean;
}): string {
  const { issue, format, includeCover, includeSummariesOnly } = params;

  const stories = issue.stories.map((story, index) => summarizeStory(story, index));

  if (format === "markdown") {
    const lines: string[] = [
      `# ${issue.title}`,
      "",
      `Date: ${issue.date}`
    ];

    if (includeCover) {
      lines.push("", `Cover: ${issue.cover}`);
    }

    lines.push("", "## Stories", "");

    stories.forEach((story, index) => {
      lines.push(`### ${index + 1}. ${story.title}`, "", story.body, "");
    });

    if (!includeSummariesOnly) {
      lines.push("End of bulletin.");
    }

    return lines.join("\n");
  }

  if (format === "html") {
    const storyHtml = stories
      .map(
        (story, index) => `
<section>
  <h3>${index + 1}. ${escapeHtml(story.title)}</h3>
  <p>${escapeHtml(story.body)}</p>
</section>`
      )
      .join("\n");

    return `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title>${escapeHtml(issue.title)}</title>
</head>
<body>
  <article>
    <h1>${escapeHtml(issue.title)}</h1>
    <p><strong>Date:</strong> ${escapeHtml(issue.date)}</p>
    ${
      includeCover
        ? `<p><strong>Cover:</strong> ${escapeHtml(issue.cover)}</p>`
        : ""
    }
    <h2>Stories</h2>
    ${storyHtml}
    ${includeSummariesOnly ? "" : "<p>End of bulletin.</p>"}
  </article>
</body>
</html>`;
  }

  const lines: string[] = [issue.title, `Date: ${issue.date}`];

  if (includeCover) {
    lines.push(`Cover: ${issue.cover}`);
  }

  lines.push("", "Stories", "");

  stories.forEach((story, index) => {
    lines.push(`${index + 1}. ${story.title}`, story.body, "");
  });

  if (!includeSummariesOnly) {
    lines.push("End of bulletin.");
  }

  return lines.join("\n");
}

export function buildNewsletterFilename(params: {
  date: string;
  format: "markdown" | "html" | "text";
}): string {
  const ext = params.format === "markdown" ? "md" : params.format === "html" ? "html" : "txt";
  return `andyai-news-bulletin-${params.date}.${ext}`;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
