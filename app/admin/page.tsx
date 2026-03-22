import Link from "next/link";
import { getAdminBridgeSnapshot } from "@/lib/admin-bridge/helpers";

function statusBadge(status: string) {
  if (status === "bridged") return "bg-green-100 text-green-800";
  if (status === "preview_only") return "bg-yellow-100 text-yellow-800";
  if (status === "planned") return "bg-slate-100 text-slate-700";
  return "bg-zinc-100 text-zinc-700";
}

export default function AdminBridgePage() {
  const snapshot = getAdminBridgeSnapshot();

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-8">
        <p className="text-sm font-medium text-zinc-500">AndyAI News</p>
        <h1 className="text-3xl font-semibold tracking-tight">Admin Integration Bridge</h1>
        <p className="mt-3 max-w-3xl text-sm text-zinc-600">
          Central admin landing page for gradual migration from the safe preview lane to the
          production lane.
        </p>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200 p-4">
          <p className="text-xs uppercase tracking-wide text-zinc-500">Version</p>
          <p className="mt-2 text-lg font-medium">{snapshot.version}</p>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-4">
          <p className="text-xs uppercase tracking-wide text-zinc-500">Production lane</p>
          <p className="mt-2 text-lg font-medium">{snapshot.productionBasePath}</p>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-4">
          <p className="text-xs uppercase tracking-wide text-zinc-500">Safe preview lane</p>
          <p className="mt-2 text-lg font-medium">{snapshot.safePreviewBasePath}</p>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-zinc-200">
        <table className="min-w-full divide-y divide-zinc-200 text-sm">
          <thead className="bg-zinc-50">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-zinc-600">Section</th>
              <th className="px-4 py-3 text-left font-medium text-zinc-600">Status</th>
              <th className="px-4 py-3 text-left font-medium text-zinc-600">Production</th>
              <th className="px-4 py-3 text-left font-medium text-zinc-600">Preview</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 bg-white">
            {snapshot.sections.map((section) => (
              <tr key={section.key}>
                <td className="px-4 py-4 align-top">
                  <div className="font-medium text-zinc-900">{section.label}</div>
                  <div className="mt-1 text-xs text-zinc-500">{section.description}</div>
                </td>
                <td className="px-4 py-4 align-top">
                  <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${statusBadge(section.status)}`}>
                    {section.status}
                  </span>
                </td>
                <td className="px-4 py-4 align-top text-zinc-700">
                  {section.productionPath ? (
                    <Link className="underline underline-offset-2" href={section.productionPath}>
                      {section.productionPath}
                    </Link>
                  ) : (
                    <span className="text-zinc-400">—</span>
                  )}
                </td>
                <td className="px-4 py-4 align-top text-zinc-700">
                  {section.previewPath ? (
                    <Link className="underline underline-offset-2" href={section.previewPath}>
                      {section.previewPath}
                    </Link>
                  ) : (
                    <span className="text-zinc-400">—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
