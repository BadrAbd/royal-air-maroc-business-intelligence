import { motion } from 'framer-motion';
import { CartesianGrid, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import SectionBadge from './SectionBadge';

export default function LineChartCard({ title, data, xKey, yKey, color, badgeColor }) {
  return (
    <motion.div className="chart-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.36, ease: 'easeOut' }}>
      <SectionBadge text={title} color={badgeColor || color} />
      <ResponsiveContainer width="100%" height={185}>
        <LineChart data={data} margin={{ top: 16, right: 8, left: -18, bottom: 0 }}>
          <CartesianGrid vertical={false} stroke="#edf0ec" strokeDasharray="3 4" />
          <XAxis dataKey={xKey} tick={{ fontSize: 10, fill: '#89938b' }} tickLine={false} axisLine={false} />
          <YAxis tick={{ fontSize: 10, fill: '#89938b' }} tickLine={false} axisLine={false} />
          <Tooltip contentStyle={{ background: '#fff', border: '1px solid #e8ebe5', borderRadius: 10 }} wrapperClassName="chart-tooltip" />
          <Line type="monotone" dataKey={yKey} stroke={color} strokeWidth={2.7} dot={false} activeDot={{ r: 4, fill: color, strokeWidth: 3, stroke: '#fff' }} />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
