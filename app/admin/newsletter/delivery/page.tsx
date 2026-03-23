export default function AdminNewsletterDeliveryPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <div className="space-y-8">
        <div className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-400">
            AndyAI News
          </p>

          <h1 className="text-3xl font-semibold tracking-tight text-neutral-100">
            Newsletter Delivery Integration
          </h1>

          <p className="max-w-3xl text-sm leading-7 text-neutral-300">
            Delivery-grade admin surface for newsletter handoff, transport readiness,
            and future outbound workflow expansion.
          </p>
        </div>

        <section className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
          <h2 className="text-lg font-semibold text-neutral-100">
            Current purpose
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-200">
            This page is the bridge between composed newsletter payloads and the future
            delivery layer. It should remain stable, readable, and easy to extend with
            transport details, provider state, and delivery checkpoints.
          </p>
        </section>

        <section className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-black/10 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
              Payload
            </p>
            <h3 className="mt-2 text-base font-semibold text-white">
              Newsletter handoff
            </h3>
            <p className="mt-2 text-sm leading-6 text-neutral-300">
              Prepared newsletter data can be routed into a delivery-grade lane without
              changing the admin route shape.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/10 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
              Delivery
            </p>
            <h3 className="mt-2 text-base font-semibold text-white">
              Provider-ready shell
            </h3>
            <p className="mt-2 text-sm leading-6 text-neutral-300">
              Future provider adapters, send state, and retries can be layered here in
              small controlled increments.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/10 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
              Discipline
            </p>
            <h3 className="mt-2 text-base font-semibold text-white">
              Stable release path
            </h3>
            <p className="mt-2 text-sm leading-6 text-neutral-300">
              Delivery behavior should stay observable and operationally predictable as
              the system grows.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
