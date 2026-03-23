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

        <div className="space-y-5">
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
            {locale.toUpperCase()} archive for {day}
          </h1>

          <p className="max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
            This archive page keeps the selected locale and date in focus, giving readers a calmer
            step between archive browsing and the full edition reading view.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="text-xs uppercase tracking-[0.2em] text-white/50">Flow continuity</div>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-white/70">
            The archive narrows the path to one locale and one day, then hands the reader forward
            into the matching edition page when they are ready to read the full issue.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-lg font-semibold">Review the archive</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Use this route to revisit archived coverage for a specific locale and date before
              opening the edition itself.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-lg font-semibold">Continue to edition</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Jump directly to the matching edition page without losing the current date and locale
              context.
            </p>
            <div className="mt-4">
              <Link
                href={getLocaleEditionHref(locale, day)}
                className="inline-flex rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
              >
                View edition
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-lg font-semibold">Keep context visible</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Locale and date stay visible so archive reading remains anchored and easy to follow.
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
            className="rounded-lg border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/15"
          >
            View edition
          </Link>
          <Link
            href={getLocaleArchiveHref(locale, day)}
            className="rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
          >
            View archive
          </Link>
        </div>
      </section>
    </main>
  );
}
