import snapshot from "@/data/audio-approval/approval-snapshot.json";

export default function AdminAudioApprovalPage() {
  const rows = Array.isArray(snapshot.records) ? snapshot.records : [];

  return (
    <main style={{ padding: 24 }}>
      <h1>Audio Approval</h1>
      <p>Minimal approval and publish-governance preview for audio assets.</p>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 16 }}>
        <thead>
          <tr>
            <th align="left">Locale</th>
            <th align="left">Role</th>
            <th align="left">State</th>
            <th align="left">Asset</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row: any) => (
            <tr key={row.approval_id}>
              <td>{row.locale}</td>
              <td>{row.role}</td>
              <td>{row.approval_state}</td>
              <td>{row.asset_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
