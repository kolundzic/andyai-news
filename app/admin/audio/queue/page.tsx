import { getAudioQueueSnapshot } from "@/lib/audio-jobs/helpers";

export default function AdminAudioQueuePage() {
  const { jobs } = getAudioQueueSnapshot();

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 p-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="space-y-2">
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
            AndyAI News / Admin / Audio
          </p>
          <h1 className="text-3xl font-semibold">Audio Render Queue</h1>
          <p className="text-sm text-neutral-400 max-w-3xl">
            First execution lane for queued audio jobs. This is a safe internal queue view
            for job status, locale, source kind and retry state.
          </p>
        </header>

        <section className="rounded-2xl border border-neutral-800 bg-neutral-900/60 overflow-hidden">
          <div className="grid grid-cols-8 gap-3 border-b border-neutral-800 px-4 py-3 text-xs uppercase tracking-wide text-neutral-400">
            <div>Job</div>
            <div>Day</div>
            <div>Locale</div>
            <div>Source</div>
            <div>Status</div>
            <div>Provider</div>
            <div>Attempts</div>
            <div>Voice</div>
          </div>
          <div>
            {jobs.map((job) => (
              <div
                key={job.job_id}
                className="grid grid-cols-8 gap-3 px-4 py-4 border-b border-neutral-800/70 text-sm"
              >
                <div className="break-all">{job.job_id}</div>
                <div>{job.day}</div>
                <div>{job.locale}</div>
                <div>{job.source_kind}</div>
                <div>{job.status}</div>
                <div>{job.provider}</div>
                <div>
                  {job.attempt_count}/{job.max_attempts}
                </div>
                <div>{job.voice_profile}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
