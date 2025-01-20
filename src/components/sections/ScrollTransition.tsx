import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function ScrollTransition() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [0, 1]);
  const scale = useTransform(scrollY, [0, 300], [0.8, 1]);

  return (
    <motion.div 
      style={{ opacity, scale }}
      className="absolute inset-x-0 -top-32 h-64 pointer-events-none"
    >
      <div className="h-full bg-gradient-to-b from-transparent via-white/5 to-white/10" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </motion.div>
  );
}