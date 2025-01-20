import React from 'react';
import { motion } from 'framer-motion';
import type { RoadmapItem } from './types';

interface RoadmapCardProps extends RoadmapItem {
  index: number;
  total: number;
}

export function RoadmapCard({ title, date, description, status, index }: RoadmapCardProps) {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 
        hover:bg-white/[0.07] transition-all duration-300
        hover:border-[#E91E63]/20">
        <div className="flex items-center gap-4 mb-4">
          <div className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm">
            {status}
          </div>
          <div className="text-sm text-[#E91E63] font-medium">{date}</div>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#E91E63] transition-colors">
          {title}
        </h3>
        
        <p className="text-white/60">{description}</p>
      </div>
    </motion.div>
  );
}