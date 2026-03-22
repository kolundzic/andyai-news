import Link from "next/link";
import {
  buildEditionCards,
  buildEditionMeta,
  getPublicUiFoundation,
  joinClasses,
} from "@/lib/public-ui/helpers";

type PageProps = {
  params: {
    locale: string;
    day: string;
  };
};

export default function LocaleEditionPage({ params }: PageProps) {
  const { locale, day } = params;
  const ui = getPublicUiFoundation();
  const meta = buildEditionMeta(locale, day);
  const cards = buildEditionCards(locale, day);

  return (
    <main className="min-h-screen bg-black text-white">
      <section className={joinClasses(ui.container, "py-10 sm:py-14")}>
        <div className={joinClasses(ui.surface, "overflow-hidden p-6 sm:p-8")}>
          <div className="mb-6 flex flex-wrap items-center gap-3">
            {meta.map((item) => (
              <span key={item.label} className={ui.pill}>
                <strong className="mr-2 font-medium text-zinc-100">{item.label}:</strong>
                <span>{item.value}</span>
              </span>
            ))}
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.24em] text-zinc-500">
                AndyAI News Public Edition
              </p>
              <h1 className={ui.title}>
                {locale.toUpperCase()} Edition — {day}
              </h1>
              <p className={joinClasses(ui.body, "mt-4 max-w-3xl")}>
                This polished public edition surface gives the locale/day route a cleaner editorial rhythm,
                stronger metadata presentation, and clearer spaces for audio, newsletter, and archive-aware blocks.
              </p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <h2 className="text-lg font-semibold text-white">Edition briefing</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-300">
                  Today&apos;s edition page is now visually structured as a real public reading surface:
                  cleaner headline hierarchy, clearer route context, and better separation between editorial content,
                  delivery hooks, and future audio components.
                </p>
              </div>
            </div>

            <aside className="space-y-4">
              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-200">Featured lane</p>
                <h2 className="mt-2 text-lg font-semibold text-white">Listen / Deliver / Archive</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-200">
                  This block is intentionally prepared for audio and newsletter calls-to-action without
                  breaking the current public edition route.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link href="/admin/audio/player" className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black">
                    Audio preview
                  </Link>
                  <Link href={`/archive/${locale}/${day}`} className="rounded-xl border border-white/15 px-4 py-2 text-sm text-white">
                    Open archive
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {cards.map((card) => (
            <div key={card.title} className={ui.card}>
              <h3 className="text-base font-semibold text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-300">{card.body}</p>
              {card.href ? (
                <Link href={card.href} className="mt-5 inline-flex text-sm font-medium text-cyan-300 hover:text-cyan-200">
                  {card.cta ?? "Open"}
                </Link>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
