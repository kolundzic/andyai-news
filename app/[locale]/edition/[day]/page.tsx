import Link from "next/link";

export default async function EditionPage({
  params,
}: {
  params: Promise<{ locale: string; day: string }>;
}) {
  const { locale, day } = await params;

  return (
    <main className="min-h-screen bg-[#07172d] text-white">
      <section className="mx-auto max-w-5xl px-6 py-14">
        <div className="mb-6 flex flex-wrap gap-2">
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/70">
            Edition
          </span>
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/70">
            {locale}
          </span>
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/70">
            {day}
          </span>
        </div>

        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Public edition surface for {locale.toUpperCase()} on {day}
        </h1>

        <p className="mt-5 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          This page now carries a cleaner visual rhythm for edition reading, archive access, audio lane entry, and newsletter-related actions.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-lg font-semibold">Read</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Structured editorial reading surface for the current locale and day.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-lg font-semibold">Listen</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Audio delivery surfaces are now part of the system and ready for stronger public connection.
            </p>
            <div className="mt-4">
              <Link
                href="/admin/audio/player"
                className="inline-flex rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
              >
                Open audio surface
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-lg font-semibold">Newsletter</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Delivery lane is wired and can now be presented as part of the overall edition flow.
            </p>
            <div className="mt-4">
              <Link
                href="/admin/newsletter/delivery"
                className="inline-flex rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
              >
                Open delivery lane
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">Edition Navigation</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/"
              className="rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
            >
              Home
            </Link>
            <Link
              href={`/archive/${locale}/${day}`}
              className="rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
            >
              Open archive view
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
