export default function AudioArchiveAdminPage() {
  const archivePreview = [
    {
      label: "Archive endpoint",
      value: "/api/audio/archive",
    },
    {
      label: "Status tracking",
      value: "Archive state visibility",
    },
    {
      label: "Retention class",
      value: "Preview lane",
    },
    {
      label: "Replay readiness",
      value: "Operational preview",
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-950 p-8 text-neutral-100">
      <div className="mx-auto max-w-5xl space-y-8">
        <header className="space-y-2">
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
            AndyAI News / Admin / Audio
          </p>
          <h1 className="text-3xl font-semibold">Audio Archive</h1>
          <p className="max-w-3xl text-sm text-neutral-400">
            Review archive records, retention classes, and replay readiness before deeper asset and
            delivery workflows are expanded.
          </p>
        </header>

        <section className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                Archive lane
              </div>
              <div className="mt-1 text-lg font-semibold text-neutral-100">
                Retention and replay overview
              </div>
            </div>
            <div className="rounded-full border border-neutral-700 bg-neutral-800 px-3 py-1 text-xs text-neutral-300">
              Preview only
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          {archivePreview.map((item) => (
            <article
              key={item.label}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5"
            >
              <div className="text-xs uppercase tracking-wide text-neutral-500">{item.label}</div>
              <div className="mt-2 text-base font-medium text-neutral-200">{item.value}</div>
            </article>
          ))}
        </section>

        <section className="rounded-2xl border border-dashed border-neutral-800 bg-neutral-900/40 p-6">
          <h2 className="text-lg font-semibold text-neutral-100">Next archive expansion</h2>
          <p className="mt-2 text-sm text-neutral-400">
            This admin page is now visually aligned with the rest of the audio section and ready for
            future table, filter, and replay action upgrades without changing route behavior today.
          </p>
        </section>
      </div>
    </main>
  );
}
