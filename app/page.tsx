import Link from "next/link";
import {
  getPublicUiHero,
  getPublicUiHomeCards,
  getPublicUiPrimaryNav,
} from "@/lib/public-ui/helpers";

export default function HomePage() {
  const hero = getPublicUiHero();
  const nav = getPublicUiPrimaryNav();
  const cards = getPublicUiHomeCards();

  return (
    <main className="min-h-screen bg-[#061326] text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-6 py-4">
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

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 max-w-4xl">
          <div className="mb-3 inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80">
            {hero.badge}
          </div>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {hero.title}
          </h1>
          <p className="mt-5 text-base leading-7 text-white/70 sm:text-lg">
            {hero.description}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
            >
              <h2 className="text-xl font-semibold">{card.title}</h2>
              <p className="mt-3 text-sm leading-6 text-white/70">{card.description}</p>
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
      </section>
    </main>
  );
}
