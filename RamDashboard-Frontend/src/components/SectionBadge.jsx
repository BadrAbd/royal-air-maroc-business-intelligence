export default function SectionBadge({ text, color = '#1D9E75' }) {
  return (
    <div style={{
      display: 'inline-block', background: color, color: '#fff',
      fontSize: 11, fontWeight: 600, padding: '5px 14px', borderRadius: 100,
      marginBottom: 10, letterSpacing: 0.3,
    }}>
      {text.toUpperCase()}
    </div>
  );
}