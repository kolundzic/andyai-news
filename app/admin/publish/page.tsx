export default function AdminPublishPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <div className="space-y-8">
        <div className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-400">
            AndyAI News
          </p>

          <h1 className="text-3xl font-semibold tracking-tight text-neutral-100">
            Publish State &amp; Release Discipline
          </h1>

          <p className="max-w-3xl text-sm leading-7 text-neutral-300">
            Canonical admin surface for publish-state discipline, release visibility,
            and stable operational sequencing.
          </p>
        </div>

        <section className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
          <h2 className="text-lg font-semibold text-neutral-100">
            Current purpose
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-200">
            This page acts as the control surface for publish readiness. It is meant
            to stay simple, stable, and easy to extend as release-state checks and
            publishing workflow details grow over time.
          </p>
        </section>

        <section className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-black/10 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
              State
            </p>
            <h3 className="mt-2 text-base font-semibold text-white">
              Stable admin surface
            </h3>
            <p className="mt-2 text-sm leading-6 text-neutral-300">
              The route is active, readable, and ready for later publish-state data.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/10 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
              Discipline
            </p>
            <h3 className="mt-2 text-base font-semibold text-white">
              Small safe increments
            </h3>
            <p className="mt-2 text-sm leading-6 text-neutral-300">
              Publishing logic should grow through small guarded steps, not large
              experimental jumps.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/10 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
              Next layer
            </p>
            <h3 className="mt-2 text-base font-semibold text-white">
              Release-state visibility
            </h3>
            <p className="mt-2 text-sm leading-6 text-neutral-300">
              Future additions can include readiness flags, release notes, and
              publish checkpoints without changing the route shape.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
