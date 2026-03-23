import { getAudioQueueSnapshot } from "@/lib/audio-jobs/helpers";

function statusTone(status: string) {
  switch (status.toLowerCase()) {
    case "completed":
    case "done":
      return "border-emerald-500/30 bg-emerald-500/10 text-emerald-300";
    case "processing":
    case "running":
      return "border-sky-500/30 bg-sky-500/10 text-sky-300";
    case "queued":
    case "pending":
      return "border-amber-500/30 bg-amber-500/10 text-amber-300";
    case "failed":
    case "error":
      return "border-red-500/30 bg-red-500/10 text-red-300";
    default:
      return "border-neutral-700 bg-neutral-800 text-neutral-300";
  }
}

export default function AdminAudioQueuePage() {
  const { jobs } = getAudioQueueSnapshot();

  return (
    <main className="min-h-screen bg-neutral-950 p-8 text-neutral-100">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="space-y-2">
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
            AndyAI News / Admin / Audio
          </p>
          <h1 className="text-3xl font-semibold">Audio Render Queue</h1>
          <p className="max-w-3xl text-sm text-neutral-400">
            Review queued audio jobs, provider routing, locale coverage, and retry state in one
            operational lane before archive handoff.
          </p>
        </header>

        <section className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                Queue snapshot
              </div>
              <div className="mt-1 text-lg font-semibold text-neutral-100">
                {jobs.length} job{jobs.length === 1 ? "" : "s"}
              </div>
            </div>
            <div className="text-sm text-neutral-400">
              Internal first-pass view for status, source kind, provider, and attempt health.
            </div>
          </div>
        </section>

        {jobs.length === 0 ? (
          <section className="rounded-2xl border border-dashed border-neutral-800 bg-neutral-900/40 p-8 text-center">
            <h2 className="text-lg font-semibold text-neutral-100">Queue is clear</h2>
            <p className="mt-2 text-sm text-neutral-400">
              There are no audio jobs waiting for processing right now.
            </p>
          </section>
        ) : (
          <section className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60">
            <div className="hidden grid-cols-8 gap-3 border-b border-neutral-800 px-4 py-3 text-xs uppercase tracking-wide text-neutral-400 md:grid">
              <div>Job</div>
              <div>Day</div>
              <div>Locale</div>
              <div>Source</div>
              <div>Status</div>
              <div>Provider</div>
              <div>Attempts</div>
              <div>Voice</div>
            </div>

            <div className="divide-y divide-neutral-800/70">
              {jobs.map((job) => (
                <article
                  key={job.job_id}
                  className="grid gap-4 px-4 py-4 md:grid-cols-8 md:items-center md:gap-3"
                >
                  <div>
                    <div className="text-xs uppercase tracking-wide text-neutral-500 md:hidden">
                      Job
                    </div>
                    <div className="break-all text-sm text-neutral-200">{job.job_id}</div>
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-wide text-neutral-500 md:hidden">
                      Day
                    </div>
                    <div className="text-sm text-neutral-300">{job.day}</div>
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-wide text-neutral-500 md:hidden">
                      Locale
                    </div>
                    <div className="text-sm text-neutral-300">{job.locale}</div>
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-wide text-neutral-500 md:hidden">
                      Source
                    </div>
                    <div className="text-sm text-neutral-300">{job.source_kind}</div>
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-wide text-neutral-500 md:hidden">
                      Status
                    </div>
                    <div
                      className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${statusTone(
                        job.status,
                      )}`}
                    >
                      {job.status}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-wide text-neutral-500 md:hidden">
                      Provider
                    </div>
                    <div className="text-sm text-neutral-300">{job.provider}</div>
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-wide text-neutral-500 md:hidden">
                      Attempts
                    </div>
                    <div className="text-sm text-neutral-300">
                      {job.attempt_count}/{job.max_attempts}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-wide text-neutral-500 md:hidden">
                      Voice
                    </div>
                    <div className="text-sm text-neutral-300">{job.voice_profile}</div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
