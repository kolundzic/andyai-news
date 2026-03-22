type PageProps = {
  params: {
    locale: string;
    day: string;
  };
};

function localeLabel(locale: string): string {
  if (locale === "en") return "English";
  if (locale === "sr") return "Serbian";
  if (locale === "jp") return "Japanese";
  return locale.toUpperCase();
}

export default function ArchiveDayPage({ params }: PageProps) {
  const block = "rounded-[1.5rem] border border-white/10 bg-white/5 p-6";

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#050b14_0%,_#02050a_100%)] px-6 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <div className="inline-flex rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-200">
            Archive / {localeLabel(params.locale)} / {params.day}
          </div>
          <h1 className="mt-4 text-4xl font-semibold">Public archive day view</h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
            This first polish pass makes archive browsing cleaner, calmer, and more magazine-like while preserving the structured route model introduced earlier.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <section className={block}>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Archive summary</p>
            <h2 className="mt-3 text-2xl font-semibold">Day snapshot</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              The archive surface is now framed as a public reading and replay destination, with a cleaner hierarchy for daily summaries, locale context, and future audio replay entry points.
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-sm font-semibold">Edition memory</div>
                <div className="mt-2 text-sm leading-7 text-slate-300">Structured archive routes now sit inside a calmer public shell.</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="text-sm font-semibold">Audio replay slot</div>
                <div className="mt-2 text-sm leading-7 text-slate-300">Prepared for replay, transcript, and retention surfaces.</div>
              </div>
            </div>
          </section>

          <aside className={block}>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Routes</p>
            <div className="mt-4 space-y-3 text-sm text-slate-200">
              <a className="block rounded-2xl border border-white/10 bg-black/20 p-4 hover:bg-black/30" href={`/${params.locale}/edition/${params.day}`}>
                Public edition →
              </a>
              <a className="block rounded-2xl border border-white/10 bg-black/20 p-4 hover:bg-black/30" href="/admin/audio/archive">
                Audio archive admin →
              </a>
              <a className="block rounded-2xl border border-white/10 bg-black/20 p-4 hover:bg-black/30" href="/admin">
                Admin dashboard →
              </a>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
