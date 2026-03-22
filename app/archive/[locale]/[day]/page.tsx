import Link from "next/link";

export default async function ArchiveDayPage({
  params,
}: {
  params: Promise<{ locale: string; day: string }>;
}) {
  const { locale, day } = await params;

  return (
    <main className="min-h-screen bg-[#081b33] text-white">
      <section className="mx-auto max-w-5xl px-6 py-14">
        <div className="mb-6 flex flex-wrap gap-2">
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/70">
            Archive
          </span>
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/70">
            {locale}
          </span>
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/70">
            {day}
          </span>
        </div>

        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Archive view for {locale.toUpperCase()} on {day}
        </h1>

        <p className="mt-5 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          Cleaner archive layout with stronger reading hierarchy and direct bridges to edition, audio surface, and newsletter delivery.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-lg font-semibold">Archive Reading</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Browse stored editorial states with clearer metadata rhythm.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-lg font-semibold">Audio Archive</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Audio archive, retention, and replay are part of the platform and ready for stronger public presentation.
            </p>
            <div className="mt-4">
              <Link
                href="/admin/audio/archive"
                className="inline-flex rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
              >
                Open audio archive lane
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-lg font-semibold">Newsletter Path</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Archive and delivery paths are now visually closer, improving understanding of the whole newsroom flow.
            </p>
            <div className="mt-4">
              <Link
                href="/admin/newsletter/delivery"
                className="inline-flex rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
              >
                Open newsletter delivery
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">Archive Navigation</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={`/` }
              className="rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
            >
              Home
            </Link>
            <Link
              href={`/${locale}/edition/${day}`}
              className="rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
            >
              Open edition view
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
