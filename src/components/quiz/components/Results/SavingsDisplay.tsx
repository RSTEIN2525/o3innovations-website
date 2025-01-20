import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, PiggyBank, TrendingUp } from 'lucide-react';

interface SavingsDisplayProps {
  monthly: number;
  annual: number;
  potentialRevenue: number;
  weeklyHours: number;
}

function getWeeklyHoursSaved(weeklyHours: string): number {
  switch (weeklyHours) {
    case '5-10': return 7.5;
    case '10-20': return 15;
    case '20+': return 25;
    default: return 0;
  }
}

export function SavingsDisplay({ monthly, annual, potentialRevenue, weeklyHours }: SavingsDisplayProps) {
  const [isMobile, setIsMobile] = useState(false);
  const hoursSaved = weeklyHours;

  useEffect(() => {
    const updateDevice = () => setIsMobile(window.innerWidth <= 768);
    updateDevice();
    window.addEventListener('resize', updateDevice);
    return () => window.removeEventListener('resize', updateDevice);
  }, []);

  if (isMobile) {
    const metrics = [
      {
        icon: <Clock className="w-6 h-6 text-[#E91E63]" />,
        value: `${hoursSaved} hours`,
        label: "Weekly Time Saved",
      },
      {
        icon: <PiggyBank className="w-6 h-6 text-[#3498DB]" />,
        value: `$${annual.toLocaleString()}`,
        label: "Annual Savings",
      },
      {
        icon: <TrendingUp className="w-6 h-6 text-[#2ECC71]" />,
        value: `$${potentialRevenue.toLocaleString()}`,
        label: "Additional Revenue",
      },
    ];

    const loopedMetrics = [...metrics, ...metrics];

    return (
      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-4"
          initial={{ x: 0 }}
          animate={{ x: `-${metrics.length * 10}rem` }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {loopedMetrics.map((metric, index) => (
            <div key={index} className="flex-shrink-0 w-36 text-center">
              <div className="p-3 bg-white/5 rounded-xl mb-2">
                {metric.icon}
              </div>
              <div className="text-2xl font-bold text-white">{metric.value}</div>
              <div className="text-sm text-white/60">{metric.label}</div>
            </div>
          ))}
        </motion.div>
          <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-center text-white/60 pt-6 text-xs"
      >
        *Estimates based on industry averages and response
      </motion.div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-6 rounded-2xl bg-white/5 border border-white/10"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-[#E91E63]/10">
              <Clock className="w-6 h-6 text-[#E91E63]" />
            </div>
            <div className="text-sm text-white/60">Weekly Time Saved</div>
          </div>
          <div className="text-3xl font-bold text-white">
            {hoursSaved} hours
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 rounded-2xl bg-white/5 border border-white/10"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-[#3498DB]/10">
              <PiggyBank className="w-6 h-6 text-[#3498DB]" />
            </div>
            <div className="text-sm text-white/60">Annual Savings</div>
          </div>
          <div className="text-3xl font-bold text-white">
            ${annual.toLocaleString()}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-6 rounded-2xl bg-white/5 border border-white/10"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-[#2ECC71]/10">
              <TrendingUp className="w-6 h-6 text-[#2ECC71]" />
            </div>
            <div className="text-sm text-white/60">Additional Revenue</div>
          </div>
          <div className="text-3xl font-bold text-white">
            ${potentialRevenue.toLocaleString()}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-center text-white/60"
      >
        *Estimates based on industry averages and your responses
      </motion.div>
    </div>
  );
}
