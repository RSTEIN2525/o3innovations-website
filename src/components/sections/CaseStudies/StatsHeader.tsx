import React from 'react';
import { motion } from 'framer-motion';
import { Logo } from '../../shared/Logo';
import { StatItem } from './StatItem';
import { Rocket, Clock, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: <Clock className="w-5 h-5 text-[#E91E63]" />,
    label: "Timeline Beat",
    value: "2 Weeks"
  },
  {
    icon: <Rocket className="w-5 h-5 text-[#3498DB]" />,
    label: "Launch Success",
    value: "100%"
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-[#2ECC71]" />,
    label: "Revenue Growth",
    value: "300%"
  }
];

export function StatsHeader() {
  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-8">
        <Logo />
        <div className="flex gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />
    </div>
  );
}