import { useEffect, useState } from 'react';
import axiosClient from '../api/axiosClient';
import Sidebar from '../components/Sidebar';
import KpiCard from '../components/KpiCard';
import LineChartCard from '../components/LineChartCard';
import BarChartCard from '../components/BarChartCard';
import AgenceDetailModal from '../components/AgenceDetailModal';

const selectStyle = { fontSize: 11, padding: '6px 9px', borderRadius: 8, border: '1px solid #e2e5df', background: '#fbfcfa', color: '#555b56', cursor: 'pointer' };

export default function Dashboard() {
  const [totalPassagers, setTotalPassagers] = useState(null);
  const [evolutionPassagers, setEvolutionPassagers] = useState([]);
  const [evolutionReservations, setEvolutionReservations] = useState([]);
  const [top10Routes, setTop10Routes] = useState([]);
  const [passagersAgence, setPassagersAgence] = useState([]);
  const [anneeRoutes, setAnneeRoutes] = useState('');
  const [moisRoutes, setMoisRoutes] = useState('');
  const [anneeAgences, setAnneeAgences] = useState('');
  const [moisAgences, setMoisAgences] = useState('');
  const [selectedAgence, setSelectedAgence] = useState(null);
  

  useEffect(() => {
    axiosClient.get('/kpis/total-passagers').then(res => setTotalPassagers(res.data.total_passagers));
    axiosClient.get('/vols/evolution-passagers').then(res => {
      setEvolutionPassagers(res.data.map(d => ({ ...d, label: `${d.mois}/${d.annee}` })));
    });
    axiosClient.get('/vols/evolution-reservations').then(res => {
      setEvolutionReservations(res.data.map(d => ({ ...d, label: `${d.mois}/${d.annee}` })));
    });
  }, []);

  useEffect(() => {
    const params = {};
    if (anneeRoutes) params.annee = anneeRoutes;
    if (moisRoutes) params.mois = moisRoutes;
    axiosClient.get('/routes/top10', { params }).then(res => setTop10Routes(res.data));
  }, [anneeRoutes, moisRoutes]);

  useEffect(() => {
    const params = {};
    if (anneeAgences) params.annee = anneeAgences;
    if (moisAgences) params.mois = moisAgences;
    axiosClient.get('/agences/passagers', { params }).then(res => setPassagersAgence(res.data));
  }, [anneeAgences, moisAgences]);

  const yearMonthFilter = (annee, setAnnee, mois, setMois) => <>
    <select className="filter-select" style={selectStyle} value={annee} onChange={e => setAnnee(e.target.value)}><option value="">Toutes années</option><option value="2024">2024</option><option value="2025">2025</option></select>
    <select className="filter-select" style={selectStyle} value={mois} onChange={e => setMois(e.target.value)}><option value="">Tous mois</option>{[...Array(12)].map((_, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}</select>
  </>;

  return <div className="app-shell">
    <aside className="app-rail">
      <img className="ram-logo" src="/RAMlogo.png" alt="Royal Air Maroc" />
      <img className="rail-plane" src="/planenoBG.png" alt="Avion Royal Air Maroc" />
      <Sidebar />
    </aside>
    <main className="main-content">
      <h1 className="dashboard-heading"><span>royal air maroc</span> — Tableau de bord BI</h1>
      <div className="dashboard-row"><KpiCard label="Nombre total de passagers" value={totalPassagers !== null ? totalPassagers.toLocaleString('fr-FR') : '...'} sub="toutes années confondues" badgeColor="#AD321E" /></div>
      <div className="dashboard-row"><LineChartCard title="Évolution mensuelle des passagers" data={evolutionPassagers} xKey="label" yKey="total_passagers" color="#1D9E75" /><LineChartCard title="Évolution mensuelle des réservations" data={evolutionReservations} xKey="label" yKey="total_reservations" color="#1D9E75" /></div>
      <div className="dashboard-row">
        <BarChartCard title="Top 10 des routes" data={top10Routes} xKey="City_Pair" yKey="total_passagers" color="#AD321E" actions={yearMonthFilter(anneeRoutes, setAnneeRoutes, moisRoutes, setMoisRoutes)} />
        <BarChartCard title="Nombre d'effectif de passagers par agence" data={passagersAgence} xKey="code_agence" yKey="total_passagers" color="#AD321E" onBarClick={(data) => setSelectedAgence(data)} actions={yearMonthFilter(anneeAgences, setAnneeAgences, moisAgences, setMoisAgences)} />
      </div>
    </main>
    <AgenceDetailModal agence={selectedAgence} onClose={() => setSelectedAgence(null)} />
  </div>;
}
