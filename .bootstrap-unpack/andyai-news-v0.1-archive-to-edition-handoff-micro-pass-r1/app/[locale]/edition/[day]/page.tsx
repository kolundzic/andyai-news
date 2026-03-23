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

        <div className="space-y-5">
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
            {locale.toUpperCase()} edition for {day}
          </h1>

          <p className="max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
            This is the main reading surface for the selected locale and day. From here, readers can
            stay focused on the current issue or move back to the archive without losing context.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="text-xs uppercase tracking-[0.2em] text-white/50">Arrival point</div>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-white/70">
            This page is the clear destination after archive selection. Archive narrows the issue,
            and edition becomes the final reading surface for that exact locale and day.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href={getLocaleArchiveHref(locale, day)}
              className="inline-flex rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
            >
              Back to matching archive
            </Link>
            <Link
              href="/archive"
              className="inline-flex rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
            >
              Browse archive index
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-lg font-semibold">Read this issue</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Use this route as the clearest public reading entry for the selected locale and day.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-lg font-semibold">Return to archive</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Step back into the matching archive view while keeping the same locale and date in
              focus.
            </p>
            <div className="mt-4">
              <Link
                href={getLocaleArchiveHref(locale, day)}
                className="inline-flex rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
              >
                Browse archive
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-lg font-semibold">Stay oriented</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Locale and date remain visible so the edition always feels anchored, readable, and
              easy to follow.
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
            Back to matching archive
          </Link>
          <Link
            href={getLocaleEditionHref(locale, day)}
            className="rounded-lg border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/15"
          >
            Stay on edition
          </Link>
        </div>
      </section>
    </main>
  );
}
