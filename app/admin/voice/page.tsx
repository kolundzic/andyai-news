import { getVoicePrepEntries, getVoicePrepOverview } from "@/lib/voice-prep/helpers";

export default function AdminVoicePage() {
  const overview = getVoicePrepOverview();
  const entries = getVoicePrepEntries();

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <div className="space-y-8">
        <div className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-400">
            AndyAI News
          </p>

          <h1 className="text-3xl font-semibold tracking-tight text-neutral-100">
            Admin Voice Prep
          </h1>

          <p className="max-w-3xl text-sm leading-7 text-neutral-300">
            Safe TTS / voice-over preparation lane for edition, day, and locale-aware
            planning.
          </p>
        </div>

        <section className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
          <h2 className="text-lg font-semibold text-neutral-100">Overview</h2>

          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-4">
              <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
                Supported locales
              </p>
              <p className="mt-2 text-base font-semibold text-white">
                {overview.locales.join(", ")}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-4">
              <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
                Default duration
              </p>
              <p className="mt-2 text-base font-semibold text-white">
                {overview.targetDurationSec}s
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-4">
              <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
                Total entries
              </p>
              <p className="mt-2 text-base font-semibold text-white">
                {overview.totalEntries}
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-lg font-semibold text-neutral-100">
              Planned voice entries
            </h2>
            <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
              locale-aware prep queue
            </p>
          </div>

          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-0 text-sm text-neutral-200">
              <thead>
                <tr className="text-left text-xs uppercase tracking-[0.16em] text-neutral-400">
                  <th className="border-b border-white/10 px-4 py-3 font-medium">Day</th>
                  <th className="border-b border-white/10 px-4 py-3 font-medium">Locale</th>
                  <th className="border-b border-white/10 px-4 py-3 font-medium">Title</th>
                  <th className="border-b border-white/10 px-4 py-3 font-medium">Voice</th>
                  <th className="border-b border-white/10 px-4 py-3 font-medium">Duration</th>
                  <th className="border-b border-white/10 px-4 py-3 font-medium">Status</th>
                </tr>
              </thead>

              <tbody>
                {entries.map((entry) => (
                  <tr key={entry.id} className="align-top">
                    <td className="border-b border-white/5 px-4 py-4 text-neutral-200">
                      {entry.editionDay}
                    </td>
                    <td className="border-b border-white/5 px-4 py-4">
                      <span className="inline-flex rounded-full border border-white/10 bg-black/10 px-2.5 py-1 text-xs font-medium uppercase tracking-[0.12em] text-white">
                        {entry.locale}
                      </span>
                    </td>
                    <td className="border-b border-white/5 px-4 py-4 font-medium text-white">
                      {entry.title}
                    </td>
                    <td className="border-b border-white/5 px-4 py-4 text-neutral-300">
                      {entry.preferredVoice}
                    </td>
                    <td className="border-b border-white/5 px-4 py-4 text-neutral-200">
                      {entry.targetDurationSec}s
                    </td>
                    <td className="border-b border-white/5 px-4 py-4">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium uppercase tracking-[0.12em] ${
                          entry.status === "ready"
                            ? "border border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                            : "border border-white/10 bg-black/10 text-neutral-300"
                        }`}
                      >
                        {entry.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
