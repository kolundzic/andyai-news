import Link from "next/link";

export default function HomePage() {
  const featuredCards = [
    {
      title: "Latest English Edition",
      description: "Open the latest English edition with the new public layout.",
      href: "/en/edition/2026-03-22",
      cta: "Open edition",
    },
    {
      title: "Archive",
      description: "Browse the public archive by locale and day.",
      href: "/archive/en/2026-03-22",
      cta: "Open archive",
    },
    {
      title: "Audio Lane",
      description: "Audio production, delivery, transcript, approval, and archive are now wired into the system.",
      href: "/admin/audio/queue",
      cta: "View audio lane",
    },
  ];

  return (
    <main className="min-h-screen bg-[#061326] text-white">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10">
          <div className="mb-3 inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80">
            AndyAI News
          </div>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
            AI news operating system with public editions, archive routes, newsletter delivery, and audio production lanes.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
            This public foundation now connects multilingual editions, structured archive views, publishing discipline, and the new audio pipeline into one production-ready surface.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/en/edition/2026-03-22"
              className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              Open latest edition
            </Link>
            <Link
              href="/archive/en/2026-03-22"
              className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Browse archive
            </Link>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {featuredCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
            >
              <h2 className="text-xl font-semibold">{card.title}</h2>
              <p className="mt-3 text-sm leading-6 text-white/70">
                {card.description}
              </p>
              <div className="mt-5">
                <Link
                  href={card.href}
                  className="inline-flex rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
                >
                  {card.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 p-6">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Delivery-grade newsletter payloads are now integrated into the publishing stack.
            </p>
            <div className="mt-5">
              <Link
                href="/admin/newsletter/delivery"
                className="inline-flex rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
              >
                Open newsletter delivery
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 p-6">
            <h3 className="text-lg font-semibold">Audio</h3>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Queue, provider abstraction, asset metadata, transcript, approval, locale editions, and archive/replay are now connected.
            </p>
            <div className="mt-5">
              <Link
                href="/admin/audio/player"
                className="inline-flex rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
              >
                Open audio surface
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
