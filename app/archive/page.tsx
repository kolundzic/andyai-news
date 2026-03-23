import Link from "next/link";

export default function ArchiveIndexPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14 sm:px-8">
      <div className="space-y-8">
        <div className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500">
            AndyAI News
          </p>

          <h1 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
            Archive
          </h1>

          <p className="max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
            Browse published editions by locale and day. This archive is the public
            entry point for reviewing previous issues and navigating the edition flow.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 bg-white p-5">
            <h2 className="text-base font-semibold text-neutral-900">
              What this page is for
            </h2>
            <p className="mt-2 text-sm leading-6 text-neutral-600">
              Use the archive to move through published editions in a simple,
              predictable way.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-5">
            <h2 className="text-base font-semibold text-neutral-900">
              Current state
            </h2>
            <p className="mt-2 text-sm leading-6 text-neutral-600">
              The archive index is live and stable. Deeper archive browsing can be
              expanded later without changing the public route structure.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center rounded-xl border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-800 transition hover:bg-neutral-50"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
