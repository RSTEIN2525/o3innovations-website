import React from 'react';
import { motion } from 'framer-motion';
import { Share2 } from 'lucide-react';
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
        <Share2 className="w-4 h-4 text-[#E91E63]" />
        <span className="text-sm font-medium bg-gradient-to-r from-[#8E44AD] via-[#E91E63] 
          to-[#3498DB] text-transparent bg-clip-text">
          AI-Powered Social Media
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold text-white mb-6"
      >
        Your 24/7 Social Media Team
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-xl text-white/60 max-w-3xl mx-auto mb-12"
      >
        Stop spending hours on social media. Let AI create, schedule, and manage your entire 
        social presence—posting viral content even while you sleep.
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