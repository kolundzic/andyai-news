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

export default function EditionPage({ params }: PageProps) {
  const pill =
    "inline-flex rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-200";

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#071321_0%,_#050913_100%)] px-6 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur-md">
          <div className="flex flex-wrap gap-3">
            <span className={pill}>{localeLabel(params.locale)}</span>
            <span className={pill}>{params.day}</span>
            <span className={pill}>Edition</span>
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-tight">
            AndyAI News — {localeLabel(params.locale)} edition
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
            This polished public edition surface is prepared for locale-specific publishing, newsletter binding, archive compatibility, and the audio-ready newsroom flow.
          </p>

          <div className="mt-8 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
            <section className="rounded-[1.5rem] border border-white/10 bg-white/6 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Featured brief</p>
              <h2 className="mt-3 text-2xl font-semibold">Daily AI signal digest</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Public edition cards now sit inside a cleaner visual frame with stronger spacing, clearer typography, and room for future article summaries, issue sections, and direct listen actions.
              </p>
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-sm font-semibold text-white">Newsletter-ready</div>
                  <div className="mt-2 text-sm leading-7 text-slate-300">Prepared for delivery-grade payloads and public CTA blocks.</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-sm font-semibold text-white">Audio-ready</div>
                  <div className="mt-2 text-sm leading-7 text-slate-300">Player card slot reserved for queue, transcript, approval, and archive lanes.</div>
                </div>
              </div>
            </section>

            <aside className="rounded-[1.5rem] border border-cyan-400/20 bg-cyan-400/8 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">Listen</p>
              <h3 className="mt-3 text-xl font-semibold">Audio edition slot</h3>
              <p className="mt-3 text-sm leading-7 text-slate-200">
                Public audio player styling comes next, but this surface now has a clear visual home for audio, transcript, and archive replay entry points.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="/admin/audio/player" className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/15">Audio contract</a>
                <a href={`/archive/${params.locale}/${params.day}`} className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/15">Open archive</a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
