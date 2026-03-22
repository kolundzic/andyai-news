export default function HomePage() {
  const cards = [
    {
      title: "English Edition",
      description: "Clean public edition surface for the latest day.",
      href: "/en/edition/2026-03-22",
    },
    {
      title: "Serbian Edition",
      description: "Locale-aware route prepared for multilingual publishing.",
      href: "/sr/edition/2026-03-22",
    },
    {
      title: "Archive Surface",
      description: "Public archive route with better hierarchy and spacing.",
      href: "/archive/en/2026-03-22",
    },
  ];

  const box =
    "rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm";
  const button =
    "inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15";

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#14346b_0%,_#07101f_42%,_#02050a_100%)] px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
          Public UI Polish v0.1-a
        </div>

        <section className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur-md">
            <p className="mb-4 text-sm uppercase tracking-[0.24em] text-cyan-200">
              AndyAI News
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
              Modern multilingual AI news frontend, now with a cleaner public shell.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-200 md:text-lg">
              The publishing, archive, newsletter, and audio layers are now backed by a cleaner public presentation. This first polish pass strengthens layout rhythm, hierarchy, and route discoverability.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/en/edition/2026-03-22" className={button}>Open today&apos;s edition</a>
              <a href="/archive/en/2026-03-22" className={button}>Browse archive</a>
              <a href="/admin/audio/queue" className={button}>Audio lane</a>
            </div>
          </div>

          <div className={box}>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-300">
              Foundation
            </p>
            <div className="mt-5 space-y-4 text-sm leading-7 text-slate-200">
              <div>
                <div className="font-semibold text-white">Publishing</div>
                <div>Clearer public route hierarchy for editions and archive.</div>
              </div>
              <div>
                <div className="font-semibold text-white">Newsletter</div>
                <div>Stronger CTA space for future delivery and sign-up surfaces.</div>
              </div>
              <div>
                <div className="font-semibold text-white">Audio</div>
                <div>Visible home for the audio-capable newsroom OS path.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Public routes</p>
              <h2 className="mt-2 text-2xl font-semibold">Key surfaces</h2>
            </div>
            <a href="/admin" className={button}>Admin dashboard</a>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {cards.map((card) => (
              <a
                key={card.href}
                href={card.href}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                <div className="text-lg font-semibold">{card.title}</div>
                <div className="mt-3 text-sm leading-7 text-slate-300">{card.description}</div>
                <div className="mt-5 text-sm font-medium text-cyan-200">Open route →</div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
