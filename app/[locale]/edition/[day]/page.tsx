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

        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Edition surface for {locale.toUpperCase()} on {day}
        </h1>

        <p className="mt-5 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
          A more consistent edition layout with clearer reading rhythm, stronger metadata treatment, and better bridges to archive, audio, and newsletter surfaces.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-lg font-semibold">Read</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Structured editorial reading flow for the selected locale and day.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-lg font-semibold">Audio</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Audio production and delivery now sit closer to the public reading surface.
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
              Delivery lane is now easier to discover from the main public edition flow.
            </p>
            <div className="mt-4">
              <Link
                href="/admin/newsletter/delivery"
                className="inline-flex rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
              >
                Open newsletter
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
          >
            Home
          </Link>
          <Link
            href={getLocaleArchiveHref(locale, day)}
            className="rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
          >
            Archive view
          </Link>
          <Link
            href={getLocaleEditionHref(locale, day)}
            className="rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
          >
            Refresh edition route
          </Link>
        </div>
      </section>
    </main>
  );
}
