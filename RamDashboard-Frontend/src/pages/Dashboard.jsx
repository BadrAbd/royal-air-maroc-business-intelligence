import { useEffect, useState } from 'react';
import axiosClient from '../api/axiosClient';
import KpiCard from '../components/KpiCard';
import LineChartCard from '../components/LineChartCard';
import BarChartCard from '../components/BarChartCard';
import AgenceDetailModal from '../components/AgenceDetailModal';

const selectStyle = {
  fontSize: 11,
  padding: '4px 8px',
  borderRadius: 6,
  border: '1px solid #e0ddd8',
  background: '#fafaf8',
  color: '#3d3d3a',
  cursor: 'pointer',
};

export default function Dashboard() {
  const [totalPassagers, setTotalPassagers] = useState(null);
  const [evolutionPassagers, setEvolutionPassagers] = useState([]);
  const [evolutionReservations, setEvolutionReservations] = useState([]);
  const [top10Routes, setTop10Routes] = useState([]);
  const [passagersAgence, setPassagersAgence] = useState([]);

  // Filtres indépendants pour "Top 10 des routes"
  const [anneeRoutes, setAnneeRoutes] = useState('');
  const [moisRoutes, setMoisRoutes] = useState('');

  // Filtres indépendants pour "Passagers par agence"
  const [anneeAgences, setAnneeAgences] = useState('');
  const [moisAgences, setMoisAgences] = useState('');

  // Agence sélectionnée (clic sur une barre)
  const [selectedAgence, setSelectedAgence] = useState(null);

  // Données statiques -> chargées une seule fois au montage
  useEffect(() => {
    axiosClient.get('/kpis/total-passagers').then(res => setTotalPassagers(res.data.total_passagers));

    axiosClient.get('/vols/evolution-passagers').then(res => {
      const formatted = res.data.map(d => ({ ...d, label: `${d.mois}/${d.annee}` }));
      setEvolutionPassagers(formatted);
    });

    axiosClient.get('/vols/evolution-reservations').then(res => {
      const formatted = res.data.map(d => ({ ...d, label: `${d.mois}/${d.annee}` }));
      setEvolutionReservations(formatted);
    });
  }, []);

  // Top 10 routes -> dépend uniquement de ses propres filtres
  useEffect(() => {
    const params = {};
    if (anneeRoutes) params.annee = anneeRoutes;
    if (moisRoutes) params.mois = moisRoutes;

    axiosClient.get('/routes/top10', { params }).then(res => setTop10Routes(res.data));
  }, [anneeRoutes, moisRoutes]);

  // Passagers par agence -> dépend uniquement de ses propres filtres
  useEffect(() => {
    const params = {};
    if (anneeAgences) params.annee = anneeAgences;
    if (moisAgences) params.mois = moisAgences;

    axiosClient.get('/agences/passagers', { params }).then(res => setPassagersAgence(res.data));
  }, [anneeAgences, moisAgences]);

  return (
    <div style={{ background: '#fafaf8', minHeight: '100vh', padding: 28, fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: 22, marginBottom: 20, color: '#971d1d' }}>Royal Air Maroc — Tableau de bord BI</h1>

      <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
        <KpiCard
          label="Nombre total de passagers"
          value={totalPassagers !== null ? totalPassagers.toLocaleString('fr-FR') : '...'}
          sub="toutes années confondues"
        />
      </div>

      <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
        <LineChartCard
          title="Évolution mensuelle des passagers"
          data={evolutionPassagers}
          xKey="label"
          yKey="total_passagers"
          color="#1D7043"
        />
        <LineChartCard
          title="Évolution mensuelle des réservations"
          data={evolutionReservations}
          xKey="label"
          yKey="total_reservations"
          color="#BA2727"
        />
      </div>

      <div style={{ display: 'flex', gap: 16 }}>
        <BarChartCard
          title="Top 10 des routes"
          data={top10Routes}
          xKey="City_Pair"
          yKey="total_passagers"
          color="#BA2727"
          actions={
            <>
              <select style={selectStyle} value={anneeRoutes} onChange={e => setAnneeRoutes(e.target.value)}>
                <option value="">Toutes années</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </select>
              <select style={selectStyle} value={moisRoutes} onChange={e => setMoisRoutes(e.target.value)}>
                <option value="">Tous mois</option>
                {[...Array(12)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </>
          }
        />
        <BarChartCard
          title="Passagers par agence"
          data={passagersAgence}
          xKey="code_agence"
          yKey="total_passagers"
          color="#1D7043"
          onBarClick={(data) => setSelectedAgence(data)}
          actions={
            <>
              <select style={selectStyle} value={anneeAgences} onChange={e => setAnneeAgences(e.target.value)}>
                <option value="">Toutes années</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </select>
              <select style={selectStyle} value={moisAgences} onChange={e => setMoisAgences(e.target.value)}>
                <option value="">Tous mois</option>
                {[...Array(12)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </>
          }
        />
      </div>

      <AgenceDetailModal agence={selectedAgence} onClose={() => setSelectedAgence(null)} />
    </div>
  );
}