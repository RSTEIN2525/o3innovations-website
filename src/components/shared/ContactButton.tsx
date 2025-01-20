import React from 'react';
import { motion } from 'framer-motion';

export function ContactButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm
        border border-white/10 shadow-lg transition-colors duration-200
        hover:shadow-white/20 font-medium"
    >
      Contact Us
    </motion.button>
  );
}