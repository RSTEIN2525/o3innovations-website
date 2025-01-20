import React from 'react';
import { motion } from 'framer-motion';
import { StarburstBeam } from './StarburstBeam';


interface GlowEffectProps {
  isHovered: boolean;
}

export function GlowEffect({ isHovered }: GlowEffectProps) {
  return (
    <motion.div
      className="absolute inset-0 z-0"
      initial="initial"
      animate={isHovered ? "hover" : "initial"}
    >
      {/* Base Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#8E44AD] via-[#E91E63] to-[#3498DB] opacity-20 blur-3xl"
        variants={{
          initial: { scale: 1, opacity: 0.2 },
          hover: { scale: 1.35, opacity: 0.35 }
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}