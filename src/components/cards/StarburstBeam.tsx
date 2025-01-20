import React from 'react';
import { motion } from 'framer-motion';

interface StarburstBeamProps {
  rotation: number;
  gradient: string;
  isHovered: boolean;
}

export function StarburstBeam({ rotation, gradient, isHovered }: StarburstBeamProps) {
  return (
    <motion.div
      className="absolute h-4 overflow-visible"
      style={{
        width: '200%',
        left: '50%',
        top: '50%',
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
        transformOrigin: 'center',
      }}
      variants={{
        initial: {
          opacity: 0.3,
          scale: 0.8,
        },
        hover: {
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.5, 1],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        },
      }}
    >
      <div
        className="w-full h-full blur-xl"
        style={{
          background: gradient,
          opacity: isHovered ? 0.8 : 0.4,
        }}
      />
    </motion.div>
  );
}