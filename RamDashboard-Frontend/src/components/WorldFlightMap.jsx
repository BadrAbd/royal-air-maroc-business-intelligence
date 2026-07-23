import { motion } from 'framer-motion';

const routes = [
  { to: [237, 207], curve: [352, 303] },
  { to: [355, 414], curve: [375, 309] },
  { to: [510, 159], curve: [487, 191] },
  { to: [654, 145], curve: [589, 244] },
  { to: [574, 307], curve: [543, 298] },
  { to: [876, 414], curve: [649, 498] },
];

const continents = [
  'M18 116 52 91l51-8 25-21 63-5 45 13 21 23-8 21-29 3-18 14-35-5-20 20-35-4-26 15-49-3-20-18-27-3-20-17zM253 106l22-7 20 8-3 18-21 7-18-11zM79 174l30 15 25 28 18 57-4 48 23 37-16 57-28 42-18-45 6-41-26-32-17-57-17-39 14-42z',
  'M405 89 431 73l28 7 11 22-13 18-27-3-22 17-20-11 3-22z',
  'M427 141 475 135 508 153 525 184 512 218 526 254 508 297 495 352 470 391 446 379 429 337 411 307 420 268 405 232 413 192z',
  'M478 113 512 96 542 104 561 95 588 111 608 104 629 122 659 116 680 132 708 127 738 145 779 140 816 158 854 154 882 175 870 196 838 201 820 222 789 220 760 241 726 232 697 242 666 227 641 236 612 223 590 232 565 211 542 215 526 194 500 185zM641 255l31 7 15 22-13 19-30-7-13-21zM786 279l30 3 16 25-13 25-32-10-11-24z',
  'M801 366 836 346 875 354 906 383 895 413 865 427 824 413 796 392zM925 424l10-3 7 9-10 8z',
  'M353 142l10 3 2 24-10 19-8-21zM394 69l9 4-4 14-9-5zM908 238l13-7 7 16-15 9zM940 268l12-4 8 12-13 7zM971 303l8-3 5 10-9 5z',
];

export default function WorldFlightMap() {
  return (
    <svg className="world-map" viewBox="0 0 1000 460" role="img" aria-label="Réseau de destinations Royal Air Maroc depuis Casablanca">
      <g className="world-map__land">
        {continents.map((path, index) => <path key={index} d={path} />)}
      </g>
      <g className="world-map__routes">
        {routes.map(({ to, curve }, index) => (
          <motion.path
            key={`${to[0]}-${to[1]}`}
            d={`M468 205 Q ${curve[0]} ${curve[1]} ${to[0]} ${to[1]}`}
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.12 + index * 0.1, ease: 'easeOut' }}
          />
        ))}
      </g>
      <circle className="casablanca-dot" cx="468" cy="205" r="5" />
      {routes.map(({ to }) => <circle key={`${to[0]}-${to[1]}`} className="city-dot" cx={to[0]} cy={to[1]} r="4" />)}
    </svg>
  );
}
