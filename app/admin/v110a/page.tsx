import AdminV110AShell from "@/components/admin-v110a-shell";
import { getV110ManifestSummary } from "@/lib/v110a-manifest";

export default function AdminV110APage() {
  const manifestSummary = getV110ManifestSummary();

  return <AdminV110AShell manifestSummary={manifestSummary} />;
}
