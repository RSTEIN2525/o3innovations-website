import React from 'react';
import { motion } from 'framer-motion';
import { Settings } from 'lucide-react';
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
        <Settings className="w-4 h-4 text-[#E91E63]" />
        <span className="text-sm font-medium bg-gradient-to-r from-[#8E44AD] via-[#E91E63] 
          to-[#3498DB] text-transparent bg-clip-text">
          AI Process Automation
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold text-white mb-6"
      >
        Automate Your Business 24/7
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-xl text-white/60 max-w-3xl mx-auto mb-12"
      >
        Transform your operations with custom AI automations that work around the clock. 
        From data processing to workflow optimization, eliminate manual tasks and scale 
        your business effortlessly.
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