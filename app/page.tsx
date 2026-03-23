import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14 sm:px-8">
      <div className="space-y-10">
        <section className="space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
            AndyAI News
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
            Daily AI news, editions, and public delivery flow.
          </h1>

          <p className="max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
            A clean public pilot for publishing AI-focused editions, browsing archive
            entries, and validating the content flow before wider expansion.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/archive"
              className="inline-flex items-center rounded-xl border border-neutral-900 bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
            >
              Open archive
            </Link>

            <Link
              href="/admin"
              className="inline-flex items-center rounded-xl border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-800 transition hover:bg-neutral-50"
            >
              Admin
            </Link>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-neutral-200 bg-white p-5">
            <h2 className="text-base font-semibold text-neutral-900">
              Public pilot
            </h2>
            <p className="mt-2 text-sm leading-6 text-neutral-600">
              The public-facing layer is stable, minimal, and ready for disciplined
              iteration.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-5">
            <h2 className="text-base font-semibold text-neutral-900">
              Archive flow
            </h2>
            <p className="mt-2 text-sm leading-6 text-neutral-600">
              Archive and edition routes are active and now sit behind a working
              soft-ready guardrail check.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-5">
            <h2 className="text-base font-semibold text-neutral-900">
              Next build path
            </h2>
            <p className="mt-2 text-sm leading-6 text-neutral-600">
              The next steps are small public polish, content flow tightening, and
              careful publishing workflow refinement.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
