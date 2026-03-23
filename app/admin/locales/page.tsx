import { buildLocaleStructureSnapshot } from "@/lib/locales/helpers";

export default function AdminLocalesPage() {
  const snapshot = buildLocaleStructureSnapshot();

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <div className="space-y-8">
        <div className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-400">
            AndyAI News
          </p>

          <h1 className="text-3xl font-semibold tracking-tight text-neutral-100">
            Admin Locales
          </h1>

          <p className="max-w-2xl text-sm leading-7 text-neutral-300">
            Multilingual structure bridge for AndyAI News.
          </p>
        </div>

        <section className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
          <h2 className="text-lg font-semibold text-neutral-100">
            Structure Snapshot
          </h2>

          <div className="mt-4 space-y-4 text-sm text-neutral-200">
            <p>
              Default locale:{" "}
              <strong className="text-white">{snapshot.defaultLocale}</strong>
            </p>

            <ul className="space-y-3">
              {snapshot.locales.map((locale) => (
                <li
                  key={locale.code}
                  className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3"
                >
                  <span className="font-semibold text-white">{locale.code}</span>{" "}
                  — {locale.label} / {locale.nativeLabel}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
          <h2 className="text-lg font-semibold text-neutral-100">Notes</h2>

          <ul className="mt-4 space-y-3 text-sm leading-6 text-neutral-200">
            {snapshot.notes.map((note) => (
              <li
                key={note}
                className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3"
              >
                {note}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
