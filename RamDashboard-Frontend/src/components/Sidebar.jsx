import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <nav className="sidebar" aria-label="Navigation principale">
      <NavIcon to="/" label="Accueil" end>
        <path d="M4 11.5 12 4.5l8 7M6.5 10v9.5h11V10" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </NavIcon>
      <NavIcon to="/dashboard" label="Tableau de bord">
        <rect x="4" y="12" width="4" height="8" rx="1" fill="currentColor" /><rect x="10" y="7" width="4" height="13" rx="1" fill="currentColor" /><rect x="16" y="3" width="4" height="17" rx="1" fill="currentColor" />
      </NavIcon>
    </nav>
  );
}

function NavIcon({ to, label, end, children }) {
  return (
    <NavLink to={to} end={end} className={({ isActive }) => `nav-icon${isActive ? ' active' : ''}`} aria-label={label} title={label}>
      <svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true">{children}</svg>
    </NavLink>
  );
}
