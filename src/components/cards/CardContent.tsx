import React from 'react';
import { motion } from 'framer-motion';

export function CardContent() {
  return (
    <div className="relative z-20 h-full flex flex-col items-center justify-center p-6">
      <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
        Streamline Your Business with AI
      </h2>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3 rounded-full bg-gradient-to-r from-[#E91E63] to-[#3498DB] text-white font-medium
          shadow-lg hover:shadow-[#E91E63]/20 transition-shadow duration-300"
      >
        Learn More
      </motion.button>
    </div>
  );
}