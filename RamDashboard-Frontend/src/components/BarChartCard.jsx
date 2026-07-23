import { motion } from 'framer-motion';
import { CartesianGrid, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import SectionBadge from './SectionBadge';

export default function BarChartCard({ title, data, xKey, yKey, color, badgeColor, actions, onBarClick }) {
  return (
    <motion.div className="chart-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.36, ease: 'easeOut' }}>
      <div className="chart-card__top"><SectionBadge text={title} color={badgeColor || color} />{actions && <div className="chart-actions">{actions}</div>}</div>
      <ResponsiveContainer width="100%" height={185}>
        <BarChart data={data} margin={{ top: 10, right: 8, left: -18, bottom: 0 }}>
          <CartesianGrid vertical={false} stroke="#edf0ec" strokeDasharray="3 4" />
          <XAxis dataKey={xKey} tick={{ fontSize: 10, fill: '#89938b' }} tickLine={false} axisLine={false} interval={0} angle={-28} textAnchor="end" height={54} />
          <YAxis tick={{ fontSize: 10, fill: '#89938b' }} tickLine={false} axisLine={false} />
          <Tooltip contentStyle={{ background: '#fff', border: '1px solid #e8ebe5', borderRadius: 10 }} wrapperClassName="chart-tooltip" />
          <Bar dataKey={yKey} fill={color} radius={[6, 6, 2, 2]} cursor={onBarClick ? 'pointer' : 'default'} onClick={onBarClick ? (data) => onBarClick(data) : undefined} />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
