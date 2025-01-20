import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Clock, ArrowUpRight, PiggyBank, Signal } from 'lucide-react';
import { ImpactMetric } from './ImpactMetric';

const metrics = [
  {
    icon: <Rocket className="w-6 h-6 text-[#E91E63]" />,
    value: "$1M+/yr",
    label: "Help Clients Generate",
  },
  {
    icon: <Clock className="w-6 h-6 text-[#3498DB]" />,
    value: "3000+",
    label: "Human Hours Saved",
  },
  {
    icon: <Signal className="w-6 h-6 text-[#2ECC71]" />,
    value: "99.9%",
    label: "Uptime Guaranteed",
  },
  {
    icon: <PiggyBank className="w-6 h-6 text-[#F1C40F]" />,
    value: "45%",
    label: "Cost Reduction",
  },
  {
    icon: <ArrowUpRight className="w-6 h-6 text-[#9B59B6]" />,
    value: "89%",
    label: "Efficiency Increase",
  },
];

export function ImpactBar() {
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    // Duplicate metrics for seamless looping
    const loopedMetrics = [...metrics, ...metrics];

    return (
      <div   style={{ marginTop: '-4rem' }} className="relative w-full bg-gradient-to-t from-black via-black/90 to-black/40 backdrop-blur-sm pb-0 overflow-hidden">
        {/* Edge fade effect */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/90 to-transparent z-10 pointer-events-none" />

        {/* Carousel */}
        <motion.div
          className="flex gap-8"
          initial={{ x: 0 }}
          animate={{ x: `-${metrics.length * 20}rem` }} // Adjust based on content width
          transition={{
            repeat: Infinity,
            duration: 25, // Speed of animation
            ease: 'linear',
          }}
          style={{ width: `${loopedMetrics.length * 20}rem` }} // Ensures content width matches animation
        >
          {loopedMetrics.map((metric, index) => (
            <div key={index} className="flex-shrink-0 w-48 text-center">
              <ImpactMetric
                icon={metric.icon}
                value={metric.value}
                label={metric.label}
              />
            </div>
          ))}
        </motion.div>
      </div>
    );
  }

  // Desktop Grid Layout
  return (
    <div className="absolute bottom-24 left-0 right-0 z-20 bg-gradient-to-t from-black via-black/90 to-black/40 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {metrics.map((metric, index) => (
            <ImpactMetric
              key={index}
              icon={metric.icon}
              value={metric.value}
              label={metric.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
