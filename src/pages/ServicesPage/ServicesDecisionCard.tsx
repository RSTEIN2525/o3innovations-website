import React from 'react';
import { motion } from 'framer-motion';
import { RocketIcon, Clock, Signal } from 'lucide-react';
import { ImpactMetric } from '../../components/sections/DecisionSection/ImpactMetric';
import { TripleButtonGroup } from '../../components/shared/TripleButtonGroup';

export function ServicesDecisionCard() {
  return (
    <motion.div 
      className="relative z-10 w-full max-w-3xl mx-4 p-12 bg-black rounded-3xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 
        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#E91E63] 
        via-white to-[#3498DB] bg-clip-text text-transparent mb-4 text-center"
      >
        Find Your Perfect Solution
      </h2>
      
      <p className="text-lg text-white/70 mb-8 text-center">
        Let us match you with the ideal AI solution for your business needs. Whether you're 
        looking to automate processes, enhance customer experience, or boost productivity.
      </p>

      <div className="flex justify-center mb-12">
        <TripleButtonGroup />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ImpactMetric
          icon={<RocketIcon className="w-6 h-6 text-[#E91E63]" />}
          value="$1M+"
          label="Client Revenue"
        />
        <ImpactMetric
          icon={<Clock className="w-6 h-6 text-[#3498DB]" />}
          value="3000+"
          label="Hours Saved"
        />
        <ImpactMetric
          icon={<Signal className="w-6 h-6 text-[#2ECC71]" />}
          value="99.9%"
          label="Uptime"
        />
      </div>
    </motion.div>
  );
}