import Link from "next/link";

type Card = {
  title: string;
  description: string;
  href: string;
  status: "active" | "ready" | "preview" | "planned";
  note: string;
};

const cards: Card[] = [
  {
    title: "History",
    description: "Archive and history memory for editions and admin snapshots.",
    href: "/admin/history",
    status: "ready",
    note: "v1.2.0-b",
  },
  {
    title: "Locales",
    description: "Locale-aware editorial structure and multilingual registry.",
    href: "/admin/locales",
    status: "ready",
    note: "v1.2.0-c",
  },
  {
    title: "Newsletter",
    description: "Deterministic edition/day/locale-aware newsletter binding.",
    href: "/admin/newsletter",
    status: "ready",
    note: "v1.2.0-d",
  },
  {
    title: "Voice Prep",
    description: "TTS and voice-over preparation layer for later audio packs.",
    href: "/admin/voice",
    status: "ready",
    note: "v1.2.0-e",
  },
  {
    title: "Safe Preview Lane",
    description: "Regression and upgrade-safe preview lane kept isolated from production.",
    href: "/admin/v110a",
    status: "preview",
    note: "stable",
  },
];

const statusClasses: Record<Card["status"], string> = {
  active: "bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/30",
  ready: "bg-sky-500/15 text-sky-300 ring-1 ring-sky-400/30",
  preview: "bg-amber-500/15 text-amber-300 ring-1 ring-amber-400/30",
  planned: "bg-zinc-500/15 text-zinc-300 ring-1 ring-zinc-400/30",
};

function StatusPill({ status }: { status: Card["status"] }) {
  return (
    <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium uppercase tracking-wide ${statusClasses[status]}`}>
      {status}
    </span>
  );
}

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#0b2a56_0%,_#06142a_38%,_#030712_78%)] px-6 py-8 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm text-slate-300">AndyAI News</p>
        <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Admin Dashboard</h1>
            <p className="mt-3 max-w-3xl text-base text-slate-200 md:text-lg">
              Consolidated production admin for the v1.2.0 integration and expansion layer:
              shared edition/day spine, archive memory, multilingual structure, newsletter
              binding, and voice prep.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
            <div className="text-xs uppercase tracking-[0.18em] text-slate-300">Release</div>
            <div className="mt-1 text-2xl font-semibold">v1.2.0</div>
            <div className="mt-1 text-sm text-slate-300">Consolidated admin dashboard patch</div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <div className="text-sm text-slate-300">Production lane</div>
            <div className="mt-2 text-2xl font-semibold">/admin</div>
            <p className="mt-2 text-sm text-slate-300">
              Central operator dashboard for the integrated newsroom operating system.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <div className="text-sm text-slate-300">Safe preview lane</div>
            <div className="mt-2 text-2xl font-semibold">/admin/v110a</div>
            <p className="mt-2 text-sm text-slate-300">
              Kept isolated for preview, regression checks, and controlled upgrades.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <div className="text-sm text-slate-300">Current focus</div>
            <div className="mt-2 text-2xl font-semibold">Integration / Expansion</div>
            <p className="mt-2 text-sm text-slate-300">
              v1.2.0 is the current consolidated foundation before the publish/delivery packs.
            </p>
          </div>
        </div>

        <section className="mt-10">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Operational sections</h2>
            <span className="text-sm text-slate-300">5 cards</span>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {cards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:border-sky-400/40 hover:bg-white/10"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{card.title}</h3>
                    <p className="mt-2 text-sm text-slate-300">{card.description}</p>
                  </div>
                  <StatusPill status={card.status} />
                </div>
                <div className="mt-5 flex items-center justify-between text-sm">
                  <span className="text-slate-400">{card.note}</span>
                  <span className="font-medium text-sky-300 group-hover:text-sky-200">{card.href}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
          <h2 className="text-2xl font-semibold">v1.2.0 consolidated scope</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="text-slate-300">
                <tr className="border-b border-white/10">
                  <th className="px-3 py-3 font-medium">Pack</th>
                  <th className="px-3 py-3 font-medium">Area</th>
                  <th className="px-3 py-3 font-medium">Route</th>
                  <th className="px-3 py-3 font-medium">State</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["v1.2.0-a", "Admin integration bridge", "/admin", "active"],
                  ["v1.2.0-b", "Archive / history mode", "/admin/history", "ready"],
                  ["v1.2.0-c", "Multilingual structure", "/admin/locales", "ready"],
                  ["v1.2.0-d", "Newsletter data binding", "/admin/newsletter", "ready"],
                  ["v1.2.0-e", "TTS / voice-over prep", "/admin/voice", "ready"],
                ].map((row) => (
                  <tr key={row[0]} className="border-b border-white/5">
                    <td className="px-3 py-3 font-medium text-slate-100">{row[0]}</td>
                    <td className="px-3 py-3 text-slate-300">{row[1]}</td>
                    <td className="px-3 py-3 text-sky-300">{row[2]}</td>
                    <td className="px-3 py-3 text-slate-200">{row[3]}</td>
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
