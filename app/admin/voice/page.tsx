import { getVoicePrepEntries, getVoicePrepOverview } from "@/lib/voice-prep/helpers";

export default function AdminVoicePage() {
  const overview = getVoicePrepOverview();
  const entries = getVoicePrepEntries();

  return (
    <main style={{ padding: 24, fontFamily: "Arial, sans-serif" }}>
      <h1>Admin / Voice Prep</h1>
      <p>Safe TTS / voice-over preparation lane for edition/day/locale planning.</p>

      <section style={{ marginTop: 24 }}>
        <h2>Overview</h2>
        <ul>
          <li>Supported locales: {overview.locales.join(", ")}</li>
          <li>Default target duration: {overview.targetDurationSec}s</li>
          <li>Total entries: {overview.totalEntries}</li>
        </ul>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Planned voice entries</h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th align="left">Day</th>
              <th align="left">Locale</th>
              <th align="left">Title</th>
              <th align="left">Voice</th>
              <th align="left">Duration</th>
              <th align="left">Status</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry) => (
              <tr key={entry.id}>
                <td>{entry.editionDay}</td>
                <td>{entry.locale}</td>
                <td>{entry.title}</td>
                <td>{entry.preferredVoice}</td>
                <td>{entry.targetDurationSec}s</td>
                <td>{entry.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
