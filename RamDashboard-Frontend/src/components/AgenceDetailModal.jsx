export default function AgenceDetailModal({ agence, onClose }) {
  if (!agence) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.35)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ background: '#fff', borderRadius: 14, padding: 24, width: 300, boxShadow: '0 10px 40px rgba(0,0,0,0.15)' }}
      >
        <h3 style={{ margin: '0 0 16px', fontSize: 16 }}>Détails de l'agence</h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 13 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: '#736f68' }}>Code agence</span>
            <strong>{agence.code_agence}</strong>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: '#736f68' }}>Pays</span>
            <strong>{agence.Country_Code}</strong>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: '#736f68' }}>Total passagers</span>
            <strong>{agence.total_passagers?.toLocaleString('fr-FR')}</strong>
          </div>
        </div>

        <button
          onClick={onClose}
          style={{
            marginTop: 20, width: '100%', padding: '8px 0', borderRadius: 8,
            border: 'none', background: '#AD321E', color: '#fff', cursor: 'pointer', fontSize: 13,
          }}
        >
          Fermer
        </button>
      </div>
    </div>
  );
}
