import snapshot from "@/data/tts-provider/provider-snapshot.json";

export default function AudioProvidersPage() {
  return (
    <main className="min-h-screen bg-neutral-950 p-8 text-neutral-100">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="space-y-2">
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
            AndyAI News / Admin / Audio
          </p>
          <h1 className="text-3xl font-semibold">Audio Providers</h1>
          <p className="max-w-3xl text-sm text-neutral-400">
            Manage provider availability, default routing, and output support for generated audio.
            Keep this view operationally clear and easy to review before changing execution paths.
          </p>
        </header>

        <section className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                Default provider
              </div>
              <div className="text-2xl font-semibold text-neutral-100">
                {snapshot.default_provider}
              </div>
            </div>
            <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
              Active route
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          {snapshot.providers.map((provider) => {
            const isDefault = provider.provider === snapshot.default_provider;

            return (
              <article
                key={provider.provider}
                className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <h2 className="text-lg font-semibold text-neutral-100">{provider.provider}</h2>
                    <p className="text-sm text-neutral-400">
                      Provider capability snapshot for locale coverage, output formats, and voice
                      profile support.
                    </p>
                  </div>

                  <div
                    className={`rounded-full border px-3 py-1 text-xs font-medium ${
                      isDefault
                        ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                        : "border-neutral-700 bg-neutral-800 text-neutral-300"
                    }`}
                  >
                    {isDefault ? "Default" : provider.latency_class}
                  </div>
                </div>

                <div className="mt-4 grid gap-3 text-sm text-neutral-200">
                  <div>
                    <div className="text-xs uppercase tracking-wide text-neutral-500">Locales</div>
                    <div className="mt-1 text-neutral-300">{provider.locales.join(", ")}</div>
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-wide text-neutral-500">Formats</div>
                    <div className="mt-1 text-neutral-300">{provider.formats.join(", ")}</div>
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-wide text-neutral-500">
                      Voice profiles
                    </div>
                    <div className="mt-1 text-neutral-300">
                      {provider.voice_profiles.join(", ")}
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between gap-3 border-t border-neutral-800 pt-4">
                  <div className="text-xs text-neutral-500">
                    Max chars per request:{" "}
                    <span className="font-medium text-neutral-300">
                      {provider.max_chars_per_request}
                    </span>
                  </div>

                  <div className="rounded-full border border-neutral-700 bg-neutral-800 px-3 py-1 text-xs text-neutral-300">
                    Registry snapshot
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
}
