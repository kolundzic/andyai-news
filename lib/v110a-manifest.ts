import manifest from "@/data/manifest.json";

export type ManifestIssueLike = {
  date?: string;
  file?: string;
  cover?: string;
  title?: string;
};

export type V110ManifestSummary = {
  liveDate: string | null;
  issues: {
    date: string;
    file: string;
    cover: string;
    title: string;
  }[];
};

function inferLiveDate(raw: unknown): string | null {
  if (!raw || typeof raw !== "object") return null;

  const obj = raw as Record<string, unknown>;

  const direct =
    obj.currentDate ??
    obj.liveDate ??
    obj.activeDate ??
    obj.current ??
    obj.live;

  return typeof direct === "string" ? direct : null;
}

function inferIssues(raw: unknown): ManifestIssueLike[] {
  if (!raw || typeof raw !== "object") return [];

  const obj = raw as Record<string, unknown>;

  const directCandidates = [
    obj.issues,
    obj.days,
    obj.entries,
    obj.items,
    obj.news
  ];

  for (const candidate of directCandidates) {
    if (Array.isArray(candidate)) {
      return candidate as ManifestIssueLike[];
    }
  }

  return [];
}

export function getV110ManifestSummary(): V110ManifestSummary {
  const liveDate = inferLiveDate(manifest);
  const rawIssues = inferIssues(manifest);

  const issues = rawIssues
    .map((issue, index) => {
      const date =
        typeof issue.date === "string" && issue.date.trim()
          ? issue.date
          : liveDate ?? `issue-${index + 1}`;

      const file =
        typeof issue.file === "string" && issue.file.trim()
          ? issue.file
          : `news-${date}.json`;

      const cover =
        typeof issue.cover === "string" && issue.cover.trim()
          ? issue.cover
          : `/covers/${date}-cover.jpg`;

      const title =
        typeof issue.title === "string" && issue.title.trim()
          ? issue.title
          : `Issue ${date}`;

      return { date, file, cover, title };
    })
    .sort((a, b) => b.date.localeCompare(a.date));

  return {
    liveDate,
    issues
  };
}
