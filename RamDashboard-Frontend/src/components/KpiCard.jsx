export default function KpiCard({ label, value, sub }) {
  return (
    <div style={{
      background: '#fff', borderRadius: 14, padding: '18px 20px',
      border: '1px solid #e8e6e2', minWidth: 260,
    }}>
      <p style={{ fontSize: 12, color: '#a41d29', margin: '0 0 6px' }}>{label}</p>
      <p style={{ fontSize: 28, fontWeight: 700, margin: 0 }}>{value}</p>
      {sub && <p style={{ fontSize: 11, color: '#a41d29', margin: '4px 0 0' }}>{sub}</p>}
    </div>
  );
}