import React from 'react';
import { motion } from 'framer-motion';

export function GradientFrame() {
  return (
    <motion.div
      className="absolute inset-0 rounded-2xl z-0"
      animate={{
        opacity: [0.8, 1, 0.8],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8E44AD] via-[#E91E63] to-[#3498DB] opacity-75 blur-md" />
      <div className="absolute inset-[2px] rounded-xl bg-black" />
    </motion.div>
  );
}