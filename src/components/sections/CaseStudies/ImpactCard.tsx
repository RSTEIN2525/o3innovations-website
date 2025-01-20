import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Clock, Users, Server, Gauge, Database, Bot } from 'lucide-react';
import { ImpactMetric } from './ImpactMetric';

const impacts = [
  { icon: <Leaf className="w-6 h-6 text-[#2ECC71]" />, value: "100%", label: "Paperless Company" },
  { icon: <Gauge className="w-6 h-6 text-[#1ABC9C]" />, value: "300%", label: "Operations Efficiency" },
  { icon: <Clock className="w-6 h-6 text-[#3498DB]" />, value: "2100+", label: "Commutes Reduced" },
  { icon: <Clock className="w-6 h-6 text-[#9B59B6]" />, value: "120hrs", label: "Weekly Time Saved" },
  { icon: <Server className="w-6 h-6 text-[#F1C40F]" />, value: "99.9%", label: "Uptime" },
  { icon: <Bot className="w-6 h-6 text-[#E67E22]" />, value: "100%", label: "Admin Automated" },
  { icon: <Users className="w-6 h-6 text-[#E91E63]" />, value: "100%", label: "Support Automated" },
  { icon: <Database className="w-6 h-6 text-[#8E44AD]" />, value: "100%", label: "Database Automated" },
];

export function ImpactCard() {
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    // Mobile: Animated Carousel
    const loopedImpacts = [...impacts, ...impacts]; // Duplicate for smooth looping

    return (
      <div className="relative w-full overflow-hidden bg-gradient-to-t from-black via-black/90 to-black/40 backdrop-blur-sm py-6">
        {/* Fade Effects */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/90 to-transparent z-10 pointer-events-none" />

        {/* Carousel */}
        <motion.div
          className="flex gap-6"
          initial={{ x: 0 }}
          animate={{ x: `-${impacts.length * 18}rem` }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: 'linear',
          }}
          style={{ width: `${loopedImpacts.length * 18}rem` }}
        >
          {loopedImpacts.map((impact, index) => (
            <div key={index} className="flex-shrink-0 w-40 text-center">
              <ImpactMetric
                icon={impact.icon}
                value={impact.value}
                label={impact.label}
              />
            </div>
          ))}
        </motion.div>
      </div>
    );
  }

  // Desktop Layout
  return (
    <div className="h-[800px] p-6 rounded-3xl bg-white/5 border border-white/10">
      <h3 className="text-xl font-semibold text-white mb-6">Impact Metrics</h3>
      <div className="space-y-4 md:space-y-6 lg:space-y-11">
        {impacts.map((impact, index) => (
          <ImpactMetric
            key={index}
            icon={impact.icon}
            value={impact.value}
            label={impact.label}
          />
        ))}
      </div>
    </div>
  );
}
