import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export default function BarChartCard({ title, data, xKey, yKey, color, actions, onBarClick }) {
  return (
    <div style={{ background: '#fff', borderRadius: 14, padding: '16px 20px', border: '1px solid #e8e6e2', flex: 1 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
        <p style={{ fontSize: 13, fontWeight: 500, margin: 0 }}>{title}</p>
        {actions && <div style={{ display: 'flex', gap: 6 }}>{actions}</div>}
      </div>
      <ResponsiveContainer width="100%" height={180}>
        <BarChart data={data}>
          <XAxis dataKey={xKey} tick={{ fontSize: 10 }} interval={0} angle={-30} textAnchor="end" height={50} />
          <YAxis tick={{ fontSize: 11 }} />
          <Tooltip />
          <Bar
            dataKey={yKey}
            fill={color}
            radius={[4, 4, 0, 0]}
            cursor={onBarClick ? 'pointer' : 'default'}
            onClick={onBarClick ? (data) => onBarClick(data) : undefined}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}