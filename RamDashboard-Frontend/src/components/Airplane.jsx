// src/components/Airplane.jsx

export const Airplane = ({ width = 180, primaryColor = '#002B66', accentColor = '#C1272D', className = '' }) => {
  return (
    <svg
      width={width}
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Fuselage / Body */}
      <path
        d="M10 30C10 30 30 22 70 22C110 22 170 24 185 26C195 27 200 30 200 30C200 30 195 33 185 34C170 36 110 38 70 38C30 38 10 30 10 30Z"
        fill={primaryColor}
      />
      {/* Cockpit Window */}
      <path
        d="M175 27C178 27.5 183 29 183 30C183 31 178 32.5 175 33C170 33 168 27 175 27Z"
        fill="#A0C4FF"
      />
      {/* Main Wing */}
      <path
        d="M80 30L45 55H62L112 30H80Z"
        fill={primaryColor}
      />
      {/* Main Wing Accent/Shading */}
      <path
        d="M85 30L58 50H62L105 30H85Z"
        fill={accentColor}
      />
      {/* Tail Fin */}
      <path
        d="M25 30L10 8H28L45 30H25Z"
        fill={accentColor}
      />
      {/* Top Wing / Stabilizer */}
      <path
        d="M90 28L105 10H118L108 28H90Z"
        fill={primaryColor}
      />
    </svg>
  );
};
