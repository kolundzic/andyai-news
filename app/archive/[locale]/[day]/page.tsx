import Link from "next/link";
import {
  getLocaleArchiveHref,
  getLocaleEditionHref,
  getPublicUiPrimaryNav,
} from "@/lib/public-ui/helpers";

export default async function ArchiveDayPage({
  params,
}: {
  params: Promise<{ locale: string; day: string }>;
}) {
  const { locale, day } = await params;
  const nav = getPublicUiPrimaryNav();
  const localeLabel = `${locale.toUpperCase()} archive`;

  return (
    <main className="min-h-screen bg-[#081b33] text-white">
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
          <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-emerald-200">
            Public archive
          </span>
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/70">
            {localeLabel}
          </span>
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/70">
            {day}
          </span>
        </div>

        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Archive view for {locale.toUpperCase()} on {day}
        </h1>

        <p className="mt-5 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          The archive surface is now framed as a public reading destination with clearer day and locale context, stronger hierarchy, and cleaner continuation paths.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="mb-2 text-xs uppercase tracking-[0.18em] text-white/50">
              Browse
            </div>
            <h2 className="text-lg font-semibold">Stored daily states</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Review archived editorial states for a specific locale and day with a cleaner, more public-facing presentation.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="mb-2 text-xs uppercase tracking-[0.18em] text-white/50">
              Continue
            </div>
            <h2 className="text-lg font-semibold">Return to edition</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Move back into the matching edition route when you want a fresher public reading surface for the same locale and day.
            </p>
            <div className="mt-4">
              <Link
                href={getLocaleEditionHref(locale, day)}
                className="inline-flex rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
              >
                Open edition view
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="mb-2 text-xs uppercase tracking-[0.18em] text-white/50">
              Orientation
            </div>
            <h2 className="text-lg font-semibold">Locale-aware archive</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Readers arriving directly on archive routes now get clearer visual cues about where they are and what date they are viewing.
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
            href={getLocaleEditionHref(locale, day)}
            className="rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
          >
            Edition view
          </Link>
          <Link
            href={getLocaleArchiveHref(locale, day)}
            className="rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
          >
            Refresh archive
          </Link>
        </div>
      </section>
    </main>
  );
}
