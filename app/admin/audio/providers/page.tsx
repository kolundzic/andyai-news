import snapshot from "@/data/tts-provider/provider-snapshot.json";

export default function AudioProvidersPage() {
  return (
    <main className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Audio Providers</h1>
        <p className="text-sm opacity-80">
          TTS provider adapter registry, capabilities, and current default provider.
        </p>
      </div>

      <div className="rounded-xl border p-4">
        <div className="text-sm font-semibold">Default Provider</div>
        <div className="mt-2 text-lg">{snapshot.default_provider}</div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {snapshot.providers.map((provider) => (
          <section key={provider.provider} className="rounded-xl border p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">{provider.provider}</h2>
              <span className="text-xs rounded-full border px-2 py-1">{provider.latency_class}</span>
            </div>
            <div className="text-sm">Locales: {provider.locales.join(", ")}</div>
            <div className="text-sm">Formats: {provider.formats.join(", ")}</div>
            <div className="text-sm">Voices: {provider.voice_profiles.join(", ")}</div>
            <div className="text-xs opacity-75">Max chars: {provider.max_chars_per_request}</div>
          </section>
        ))}
      </div>
    </main>
  );
}
