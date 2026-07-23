export default function Header() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24, marginLeft: -40 }}>
      <img src="RAMlogo.png" alt="Royal Air Maroc" style={{ height: 64, width: 76, objectFit: 'contain' }} />
      <div>
        <p style={{ margin: 0, fontSize: 11, fontWeight: 600, color: '#AD321E', letterSpacing: 1 }}>
          ROYAL AIR MAROC
        </p>
        <h1 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: '#2b2a28' }}>
          Tableau de bord BI
        </h1>
      </div>
    </div>
  );
}
