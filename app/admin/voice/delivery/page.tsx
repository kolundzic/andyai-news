export default function AdminVoiceDeliveryPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <div className="space-y-8">
        <div className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-400">
            AndyAI News
          </p>

          <h1 className="text-3xl font-semibold tracking-tight text-neutral-100">
            Voice Delivery Hooks
          </h1>

          <p className="max-w-3xl text-sm leading-7 text-neutral-300">
            Bridge layer from TTS preparation toward future audio generation, asset
            delivery, and distribution workflow wiring.
          </p>
        </div>

        <section className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
          <h2 className="text-lg font-semibold text-neutral-100">
            Current purpose
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-200">
            This page defines the stable handoff zone between planned voice entries and
            future delivery outputs such as generated files, metadata, and operational
            publish hooks.
          </p>
        </section>

        <section className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-black/10 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
              Input
            </p>
            <h3 className="mt-2 text-base font-semibold text-white">
              TTS prep output
            </h3>
            <p className="mt-2 text-sm leading-6 text-neutral-300">
              Prepared scripts, voice selections, and timing expectations feed this
              delivery bridge.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/10 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
              Output
            </p>
            <h3 className="mt-2 text-base font-semibold text-white">
              Audio-ready lane
            </h3>
            <p className="mt-2 text-sm leading-6 text-neutral-300">
              Generated assets, manifests, and downstream publishing hooks can be added
              here later without changing the route contract.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/10 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
              Safety
            </p>
            <h3 className="mt-2 text-base font-semibold text-white">
              Controlled expansion
            </h3>
            <p className="mt-2 text-sm leading-6 text-neutral-300">
              Audio workflow growth should remain small-step, observable, and compatible
              with the existing soft-ready guardrail discipline.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
