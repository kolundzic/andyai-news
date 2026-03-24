import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14 sm:px-8">
      <div className="space-y-10">
        <section className="space-y-5">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
            AndyAI News
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
            Daily AI news, organized into clear public editions.
          </h1>

          <p className="max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
            Browse the archive, move into a specific daily edition, and follow a simple public
            reading flow designed for stable publishing and disciplined iteration.
          </p>

          <div className="rounded-2xl border border-neutral-200 bg-white p-5">
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              Best next step
            </div>
            <p className="mt-2 text-sm leading-6 text-neutral-600">
              Start from the archive if you want the clearest public entry into published issues,
              locale filtering, and day-based reading flow.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/archive"
                className="inline-flex items-center rounded-xl border border-neutral-900 bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
              >
                Browse archive
              </Link>

              <Link
                href="/admin"
                className="inline-flex items-center rounded-xl border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-800 transition hover:bg-neutral-50"
              >
                Admin
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-5">
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              Public flow
            </div>
            <p className="mt-2 text-sm leading-6 text-neutral-600">
              Home introduces the system, archive narrows the path, and edition pages become the
              final public reading surface.
            </p>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-neutral-200 bg-white p-5">
            <h2 className="text-base font-semibold text-neutral-900">Public pilot</h2>
            <p className="mt-2 text-sm leading-6 text-neutral-600">
              The public-facing layer is stable, minimal, and ready for careful improvement.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-5">
            <h2 className="text-base font-semibold text-neutral-900">Archive flow</h2>
            <p className="mt-2 text-sm leading-6 text-neutral-600">
              Archive and edition routes now form a cleaner reading path from browsing to opening a
              daily issue.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-5">
            <h2 className="text-base font-semibold text-neutral-900">Next build path</h2>
            <p className="mt-2 text-sm leading-6 text-neutral-600">
              The next steps stay small: clearer continuity, stronger CTA rhythm, and disciplined
              publishing refinement.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
