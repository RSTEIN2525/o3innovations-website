import React from 'react';
import { motion } from 'framer-motion';

interface ImpactMetricProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

export function ImpactMetric({ icon, value, label }: ImpactMetricProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-4"
    >
      <div className="p-3 bg-white/5 rounded-xl">
        {icon}
      </div>
      <div>
        <div className="text-2xl font-bold text-white">{value}</div>
        <div className="text-sm text-white/60">{label}</div>
      </div>
    </motion.div>
  );
}