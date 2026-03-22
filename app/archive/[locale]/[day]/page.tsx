import Link from "next/link";
import {
  buildArchiveCards,
  buildArchiveMeta,
  getPublicUiFoundation,
  joinClasses,
} from "@/lib/public-ui/helpers";

type PageProps = {
  params: {
    locale: string;
    day: string;
  };
};

export default function ArchiveDayPage({ params }: PageProps) {
  const { locale, day } = params;
  const ui = getPublicUiFoundation();
  const meta = buildArchiveMeta(locale, day);
  const cards = buildArchiveCards(locale, day);

  return (
    <main className="min-h-screen bg-black text-white">
      <section className={joinClasses(ui.container, "py-10 sm:py-14")}>
        <div className={joinClasses(ui.surface, "p-6 sm:p-8")}>
          <div className="mb-6 flex flex-wrap items-center gap-3">
            {meta.map((item) => (
              <span key={item.label} className={ui.pill}>
                <strong className="mr-2 font-medium text-zinc-100">{item.label}:</strong>
                <span>{item.value}</span>
              </span>
            ))}
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.25fr_0.95fr]">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.24em] text-zinc-500">
                AndyAI News Archive
              </p>
              <h1 className={ui.title}>
                Archive View — {locale.toUpperCase()} / {day}
              </h1>
              <p className={joinClasses(ui.body, "mt-4 max-w-3xl")}>
                This archive surface now has a cleaner visual hierarchy and clearer separation between
                historical issue context, replay-oriented blocks, and return paths into the live edition flow.
              </p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <h2 className="text-lg font-semibold text-white">Archive summary</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-300">
                  The archive page is prepared to host stronger historical issue continuity, audio archive surfaces,
                  and cleaner locale/day scanning without collapsing into a raw technical screen.
                </p>
              </div>
            </div>

            <aside className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-emerald-200">Archive lane</p>
              <h2 className="mt-2 text-lg font-semibold text-white">Retention / Replay / Memory</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-200">
                This block gives the archive route a clearer narrative around continuity, replay readiness,
                and future audio archive growth.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="/admin/audio/archive" className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black">
                  Audio archive
                </Link>
                <Link href={`/${locale}/edition/${day}`} className="rounded-xl border border-white/15 px-4 py-2 text-sm text-white">
                  Back to edition
                </Link>
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
                <Link href={card.href} className="mt-5 inline-flex text-sm font-medium text-emerald-300 hover:text-emerald-200">
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
