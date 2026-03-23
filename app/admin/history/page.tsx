import { listHistoryDays, listHistoryEditions } from "@/lib/history/helpers";

export default function AdminHistoryPage() {
  const days = listHistoryDays();
  const editions = listHistoryEditions();

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <div className="space-y-8">
        <header className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-400">
            AndyAI News
          </p>

          <h1 className="text-3xl font-semibold tracking-tight text-neutral-100">
            Admin History
          </h1>

          <p className="max-w-3xl text-sm leading-7 text-neutral-300">
            Safe archive/history bridge for the newsroom spine. This page remains
            intentionally minimal and does not replace the preview/regression lane
            under <code className="rounded bg-black/20 px-1.5 py-0.5 text-neutral-200">/admin/v110a</code>.
          </p>
        </header>

        <section className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-lg font-semibold text-neutral-100">
              History day spine
            </h2>
            <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
              indexed day markers
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2.5">
            {days.map((day) => (
              <span
                key={day}
                className="inline-flex rounded-full border border-white/10 bg-black/10 px-3 py-1.5 text-sm font-medium text-neutral-200"
              >
                {day}
              </span>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-lg font-semibold text-neutral-100">
              Edition memory
            </h2>
            <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
              archived release ledger
            </p>
          </div>

          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-0 text-sm text-neutral-200">
              <thead>
                <tr className="text-left text-xs uppercase tracking-[0.16em] text-neutral-400">
                  <th className="border-b border-white/10 px-4 py-3 font-medium">Day</th>
                  <th className="border-b border-white/10 px-4 py-3 font-medium">Edition</th>
                  <th className="border-b border-white/10 px-4 py-3 font-medium">Locale</th>
                  <th className="border-b border-white/10 px-4 py-3 font-medium">Lifecycle</th>
                  <th className="border-b border-white/10 px-4 py-3 font-medium">Source</th>
                </tr>
              </thead>

              <tbody>
                {editions.map((edition) => (
                  <tr key={edition.edition_id} className="align-top">
                    <td className="border-b border-white/5 px-4 py-4 text-neutral-200">
                      {edition.day}
                    </td>
                    <td className="border-b border-white/5 px-4 py-4 font-medium text-white">
                      {edition.title}
                    </td>
                    <td className="border-b border-white/5 px-4 py-4">
                      <span className="inline-flex rounded-full border border-white/10 bg-black/10 px-2.5 py-1 text-xs font-medium uppercase tracking-[0.12em] text-white">
                        {edition.locale}
                      </span>
                    </td>
                    <td className="border-b border-white/5 px-4 py-4 text-neutral-300">
                      {edition.lifecycle}
                    </td>
                    <td className="border-b border-white/5 px-4 py-4 text-neutral-300">
                      {edition.source}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
