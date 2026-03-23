import Link from "next/link";

export default function ArchiveIndexPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          AndyAI News
        </p>

        <h1 className="text-3xl font-semibold tracking-tight">
          Archive
        </h1>

        <p className="max-w-2xl text-base text-neutral-600">
          Browse published editions by locale and day.
        </p>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center rounded-xl border px-4 py-2 text-sm font-medium hover:bg-neutral-50"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
