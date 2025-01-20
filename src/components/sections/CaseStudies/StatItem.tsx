import React from 'react';
import { motion } from 'framer-motion';

interface StatItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

export function StatItem({ icon, label, value }: StatItemProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-3"
    >
      <div className="p-2 rounded-lg bg-white/5">
        {icon}
      </div>
      <div>
        <div className="text-sm text-white/60">{label}</div>
        <div className="text-lg font-semibold text-white">{value}</div>
      </div>
    </motion.div>
  );
}