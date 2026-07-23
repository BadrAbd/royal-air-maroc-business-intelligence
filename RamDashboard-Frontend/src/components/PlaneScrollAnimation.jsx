// src/components/PlaneScrollAnimation.jsx
/*import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Airplane } from './Airplane';

export const PlaneScrollAnimation = () => {
  const { scrollYProgress } = useScroll();

  // Horizontal motion: moves from left (-15vw) to right (105vw) across scroll
  const x = useTransform(scrollYProgress, [0, 1], ['-15vw', '105vw']);
  
  // Altitude wave: slight up/down dip for a realistic flight feel
  const y = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], ['0px', '-35px', '25px', '-10px']);
  
  // Pitch angle: subtle bank/tilt as it travels
  const rotate = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [1, -3, 2, -2, 0]);

  return (
    <div
      style={{
        position: 'fixed',
        top: '35%',
        left: 0,
        width: '100%',
        pointerEvents: 'none',
        zIndex: 50,
      }}
    >
      <motion.div style={{ x, y, rotate }}>
        <Airplane width={180} primaryColor="#002B66" accentColor="#C1272D" />
      </motion.div>
    </div>
  );
};*/