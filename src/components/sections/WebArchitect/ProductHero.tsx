import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, DollarSign } from 'lucide-react';
import { DemoQuizButtonGroup } from '../../shared/DemoQuizButtonGroup';

export function ProductHero() {
  return (
    <div className="text-center mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 
          border border-white/10 mb-6"
      >
        <Globe2 className="w-4 h-4 text-[#E91E63]" />
        <span className="text-sm font-medium bg-gradient-to-r from-[#8E44AD] via-[#E91E63] 
          to-[#3498DB] text-transparent bg-clip-text">
          Fortune 500-Level Websites
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold text-white mb-6"
      >
        Get a Custom, Jaw-Dropping Website That Converts
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-xl text-white/60 max-w-3xl mx-auto mb-12"
      >
        Designed from scratch, built in hours, and ready to outperform the competition. 
        Get Fortune 500-level quality for less than 1% of traditional costs.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex justify-center"
      >
        <DemoQuizButtonGroup />
      </motion.div>
    </div>
  );
}