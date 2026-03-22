import { listHistoryDays, listHistoryEditions } from "@/lib/history/helpers";

export default function AdminHistoryPage() {
  const days = listHistoryDays();
  const editions = listHistoryEditions();

  return (
    <main className="min-h-screen p-8">
      <div className="mx-auto max-w-5xl space-y-8">
        <header className="space-y-2">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
            AndyAI News
          </p>
          <h1 className="text-3xl font-semibold">Admin History</h1>
          <p className="max-w-3xl text-sm text-neutral-600">
            Safe archive/history bridge for the newsroom spine. This page is intentionally
            minimal and does not replace the preview/regression lane under <code>/admin/v110a</code>.
          </p>
        </header>

        <section className="rounded-2xl border p-5">
          <h2 className="text-lg font-medium">History day spine</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {days.map((day) => (
              <span key={day} className="rounded-full border px-3 py-1 text-sm">
                {day}
              </span>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border p-5">
          <h2 className="text-lg font-medium">Edition memory</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="py-2 pr-4">Day</th>
                  <th className="py-2 pr-4">Edition</th>
                  <th className="py-2 pr-4">Locale</th>
                  <th className="py-2 pr-4">Lifecycle</th>
                  <th className="py-2 pr-4">Source</th>
                </tr>
              </thead>
              <tbody>
                {editions.map((edition) => (
                  <tr key={edition.edition_id} className="border-b last:border-b-0">
                    <td className="py-2 pr-4">{edition.day}</td>
                    <td className="py-2 pr-4">{edition.title}</td>
                    <td className="py-2 pr-4">{edition.locale}</td>
                    <td className="py-2 pr-4">{edition.lifecycle}</td>
                    <td className="py-2 pr-4">{edition.source}</td>
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
