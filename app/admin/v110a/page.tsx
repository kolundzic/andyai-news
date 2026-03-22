import AdminV110AShell from "@/components/admin-v110a-shell";
import { getV110ManifestSummary } from "@/lib/v110a-manifest";
import {
  buildNewsletterExport,
  buildNewsletterFilename,
  getIssueDataForNewsletter
} from "@/lib/v110a-newsletter";

export default async function AdminV110APage() {
  const manifestSummary = getV110ManifestSummary();
  const fallbackDate =
    manifestSummary.liveDate ??
    manifestSummary.issues[0]?.date ??
    "2026-03-22";

  const issue = await getIssueDataForNewsletter(fallbackDate);

  const initialNewsletterPreview = issue
    ? buildNewsletterExport({
        issue,
        format: "markdown",
        includeCover: true,
        includeSummariesOnly: false
      })
    : "# AndyAI News Bulletin\n\nNo issue data available.";

  const initialNewsletterFilename = buildNewsletterFilename({
    date: fallbackDate,
    format: "markdown"
  });

  return (
    <AdminV110AShell
      manifestSummary={manifestSummary}
      initialNewsletterPreview={initialNewsletterPreview}
      initialNewsletterFilename={initialNewsletterFilename}
    />
  );
}
