import React from 'react';
import { motion } from 'framer-motion';

export function SectionHeader() {
  return (
    <div className="text-center mb-20">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r 
          from-[#E91E63] via-white to-[#3498DB] bg-clip-text text-transparent"
      >
        Instant Plug-and-Play Tools
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto"
      >
        Save time and outperform entire teams with 6 industry shaking AI solutions delivering hassle-free, around-the-clock results.
      </motion.p>
    </div>
  );
}