import React from 'react';
import { motion } from 'framer-motion';

export function GradientExplosion() {
  return (
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ 
        scale: [0.8, 1.2, 1],
        opacity: [0, 1, 0.6]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
      className="absolute inset-0"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] 
        from-[#E91E63] via-[#3498DB]/20 to-transparent opacity-20 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] 
        from-[#8E44AD] via-transparent to-transparent opacity-10 blur-2xl" />
    </motion.div>
  );
}