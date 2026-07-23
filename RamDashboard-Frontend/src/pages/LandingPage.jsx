import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import WorldFlightMap from '../components/WorldFlightMap';

export default function LandingPage() {
  return <div className="app-shell">
    <aside className="app-rail">
      <img className="ram-logo" src="/RAMlogo.png" alt="Royal Air Maroc" />
      <img className="rail-plane" src="/planenoBG.png" alt="Avion Royal Air Maroc" />
      <Sidebar />
    </aside>
    <main className="landing-main">
      <motion.div className="landing-copy" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .4, ease: 'easeOut' }}>
        <div className="eyebrow">Royal Air Maroc · BI Analytics</div><h1 className="landing-title">From Morocco<br />To the <em>World</em></h1>
        <p className="landing-description">Une vision claire de notre réseau et de ses performances, depuis Le Maroc vers le monde.</p>
        <Link className="dashboard-button" to="/dashboard">Accéder au dashboard <span aria-hidden="true">→</span></Link>
      </motion.div>
      <WorldFlightMap />
      <motion.svg className="landing-plane" viewBox="0 0 48 48" animate={{ x: ['0vw', '105vw'] }} transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}><path fill="currentColor" d="m6 25 15-4 13-13 3 2-9 13 13 5v3l-15-2-8 10-3-1 3-11-12-1z" /></motion.svg>
    </main>
  </div>;
}
