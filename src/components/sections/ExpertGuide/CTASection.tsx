import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { DemoQuizButtonGroup } from '../../shared/DemoQuizButtonGroup';

export function CTASection() {
  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 
          border border-white/10 mb-6"
      >
        <Clock className="w-4 h-4 text-[#E91E63]" />
        <span className="text-sm font-medium text-white">
          Limited Time Offer
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl font-bold text-white mb-4"
      >
        Book Your Demo Today
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-lg text-white/60 mb-8 max-w-2xl mx-auto"
      >
        Stop paying more for less. Start automating better support at a fraction of the cost.
        Spots are limited—schedule your demo and go live in just 24 hours!
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