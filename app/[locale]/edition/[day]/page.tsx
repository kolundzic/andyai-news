import Link from "next/link";
import {
  getLocaleArchiveHref,
  getLocaleEditionHref,
  getPublicUiPrimaryNav,
} from "@/lib/public-ui/helpers";

export default async function EditionPage({
  params,
}: {
  params: Promise<{ locale: string; day: string }>;
}) {
  const { locale, day } = await params;
  const nav = getPublicUiPrimaryNav();
  const localeLabel = `${locale.toUpperCase()} edition`;

  return (
    <main className="min-h-screen bg-[#07172d] text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-3 px-6 py-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-14">
        <div className="mb-6 flex flex-wrap gap-2">
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-cyan-200">
            Public edition
          </span>
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/70">
            {localeLabel}
          </span>
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/70">
            {day}
          </span>
        </div>

        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Daily edition for {locale.toUpperCase()} on {day}
        </h1>

        <p className="mt-5 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          This public edition view is the entry point for story reading, archive continuity, and day-specific browsing across the selected locale.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="mb-2 text-xs uppercase tracking-[0.18em] text-white/50">
              Read now
            </div>
            <h2 className="text-lg font-semibold">Edition reading flow</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Use this surface as the public starting point for the selected day and locale.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="mb-2 text-xs uppercase tracking-[0.18em] text-white/50">
              Browse
            </div>
            <h2 className="text-lg font-semibold">Archive continuity</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Move from the current edition into the archive view without losing locale and day context.
            </p>
            <div className="mt-4">
              <Link
                href={getLocaleArchiveHref(locale, day)}
                className="inline-flex rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
              >
                Open archive view
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="mb-2 text-xs uppercase tracking-[0.18em] text-white/50">
              Orientation
            </div>
            <h2 className="text-lg font-semibold">Locale-aware reading</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              The edition surface now makes locale and day context more visible for readers arriving directly on this route.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
          >
            Back home
          </Link>
          <Link
            href={getLocaleArchiveHref(locale, day)}
            className="rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
          >
            Browse archive
          </Link>
          <Link
            href={getLocaleEditionHref(locale, day)}
            className="rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
          >
            Refresh edition
          </Link>
        </div>
      </section>
    </main>
  );
}
