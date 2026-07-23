import { motion } from 'framer-motion';
import SectionBadge from './SectionBadge';

export default function KpiCard({ label, value, sub, badgeColor = '#3d3d3a' }) {
  return (
    <motion.div className="kpi-card" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.32, ease: 'easeOut' }}>
      <SectionBadge text={label} color={badgeColor} />
      <p style={{ fontSize: 34, fontWeight: 750, letterSpacing: '-.045em', margin: '7px 0 0', color: '#242624' }}>{value}</p>
      {sub && <p style={{ fontSize: 12, color: '#748078', margin: '5px 0 0' }}>{sub}</p>}
    </motion.div>
  );
}
