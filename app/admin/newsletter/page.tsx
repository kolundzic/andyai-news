import snapshot from "@/data/newsletter-binding/newsletter-snapshot.json";

export default function AdminNewsletterPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <div className="space-y-8">
        <div className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-400">
            AndyAI News
          </p>

          <h1 className="text-3xl font-semibold tracking-tight text-neutral-100">
            Admin Newsletter Binding
          </h1>

          <p className="max-w-3xl text-sm leading-7 text-neutral-300">
            Deterministic compose bridge for edition, day, and locale-aware newsletter
            payloads.
          </p>
        </div>

        <section className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
          <h2 className="text-lg font-semibold text-neutral-100">Current Snapshot</h2>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-4">
              <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
                Edition
              </p>
              <p className="mt-2 text-sm font-semibold text-white">
                {snapshot.editionId}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-4">
              <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
                Day
              </p>
              <p className="mt-2 text-sm font-semibold text-white">{snapshot.day}</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-4">
              <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
                Locale
              </p>
              <p className="mt-2 text-sm font-semibold text-white">
                {snapshot.locale}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-4">
              <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
                Status
              </p>
              <p className="mt-2">
                <span className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-xs font-medium uppercase tracking-[0.12em] text-emerald-300">
                  {snapshot.status}
                </span>
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-4">
              <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
                Items
              </p>
              <p className="mt-2 text-sm font-semibold text-white">
                {snapshot.itemCount}
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
          <h2 className="text-lg font-semibold text-neutral-100">Subject</h2>

          <p className="mt-4 rounded-2xl border border-white/10 bg-black/10 px-4 py-4 text-sm leading-7 text-neutral-200">
            {snapshot.subject}
          </p>
        </section>

        <section className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-lg font-semibold text-neutral-100">Bound Items</h2>
            <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
              ordered newsletter payload
            </p>
          </div>

          <ol className="mt-5 space-y-4">
            {snapshot.items.map((item, index) => (
              <li
                key={item.id}
                className="rounded-2xl border border-white/10 bg-black/10 px-5 py-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.16em] text-neutral-400">
                      Item {index + 1}
                    </p>

                    <h3 className="text-base font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-6 text-neutral-300">
                      {item.summary}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-neutral-200">
                    {item.category}
                  </span>
                  <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-neutral-400">
                    {item.slug}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
}
