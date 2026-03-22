import Link from "next/link";
import { publicUiHomepageConfig } from "@/lib/public-ui/config";
import { getHomepageFeaturedCards } from "@/lib/public-ui/helpers";

export default function HomePage() {
  const cards = getHomepageFeaturedCards();

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-xs font-medium tracking-wide text-neutral-300">
            AI News • Multilingual • Audio-ready
          </div>
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            {publicUiHomepageConfig.heroTitle}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-300 md:text-lg">
            {publicUiHomepageConfig.heroSubtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/en/edition/2026-03-22" className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90">
              Open featured edition
            </Link>
            <Link href="/archive/en/2026-03-22" className="rounded-2xl border border-neutral-700 px-5 py-3 text-sm font-semibold text-neutral-100 transition hover:bg-neutral-900">
              Browse archive
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-8 md:grid-cols-3 md:px-8">
        {cards.map((card) => (
          <Link key={card.title} href={card.href} className="group rounded-3xl border border-neutral-800 bg-neutral-900/70 p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-neutral-700 hover:bg-neutral-900">
            <div className="mb-4 inline-flex rounded-full border border-neutral-700 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-neutral-300">
              {card.badge ?? "Featured"}
            </div>
            <h2 className="text-xl font-semibold tracking-tight">{card.title}</h2>
            <p className="mt-3 text-sm leading-6 text-neutral-300">{card.description}</p>
            <div className="mt-5 text-sm font-medium text-neutral-100">Open →</div>
          </Link>
        ))}
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-10 md:grid-cols-[1.3fr_0.7fr] md:px-8">
        <div className="rounded-3xl border border-neutral-800 bg-neutral-900/60 p-6 md:p-8">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
            {publicUiHomepageConfig.latestLabel}
          </div>
          <h3 className="text-2xl font-semibold tracking-tight">Cleaner homepage rhythm for featured issues and public discovery</h3>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-300 md:text-base">
            This pass improves hierarchy, card readability, CTA placement, and section pacing so the public surface finally starts to feel like a real AI news product rather than only an internal publishing skeleton.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-4">
              <div className="text-xs font-medium uppercase tracking-wide text-neutral-400">Latest edition</div>
              <div className="mt-2 text-lg font-semibold">March 22, 2026</div>
              <div className="mt-2 text-sm text-neutral-300">Locale-aware issue page prepared for EN / SR / JP expansion.</div>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-4">
              <div className="text-xs font-medium uppercase tracking-wide text-neutral-400">Public archive</div>
              <div className="mt-2 text-lg font-semibold">Daily browsing path</div>
              <div className="mt-2 text-sm text-neutral-300">Archive routes are now easier to surface visually and pair with future audio replay.</div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-900/60 p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">{publicUiHomepageConfig.newsletterLabel}</div>
            <h3 className="mt-3 text-xl font-semibold tracking-tight">Get the next AI edition by mail</h3>
            <p className="mt-3 text-sm leading-6 text-neutral-300">Newsletter delivery groundwork is already in place. This block gives the public homepage a clearer subscription anchor.</p>
            <div className="mt-5 rounded-2xl border border-neutral-700 bg-neutral-950/70 px-4 py-3 text-sm text-neutral-400">Newsletter CTA placeholder</div>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-neutral-900/60 p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">{publicUiHomepageConfig.audioLabel}</div>
            <h3 className="mt-3 text-xl font-semibold tracking-tight">Audio brief lane is ready for visible promotion</h3>
            <p className="mt-3 text-sm leading-6 text-neutral-300">The public UI can now reserve a stable card for listen-mode, even before the richer player polish pack lands.</p>
            <div className="mt-5 rounded-2xl border border-dashed border-neutral-700 px-4 py-4 text-sm text-neutral-400">Public audio teaser placeholder</div>
          </div>
        </div>
      </section>
    </main>
  );
}
