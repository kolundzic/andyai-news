export default function AdminAudioEditionsPage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Audio Editions</h1>
      <p>Locale-aware audio edition matrix and readiness preview.</p>
      <ul>
        <li>EN / daily_brief / published</li>
        <li>SR / daily_brief / review</li>
        <li>JP / daily_brief / queued</li>
      </ul>
    </main>
  );
}
