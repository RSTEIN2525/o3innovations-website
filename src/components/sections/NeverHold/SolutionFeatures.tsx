import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Brain, Calendar } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Zero Wait Time",
    description: "Every call answered instantly"
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Human-Like Voice",
    description: "Natural conversations customers love"
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Smart Scheduling",
    description: "Automated booking and management"
  }
];

export function SolutionFeatures() {
  return (
    <div className="mb-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-white mb-4 text-center"
      >
        Meet NeverHold
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-lg text-white/60 text-center mb-12 max-w-2xl mx-auto"
      >
        Your AI receptionist that handles calls, books appointments, and manages inquiries 
        24/7—all with a natural, human touch that your customers will love.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center p-8 rounded-2xl bg-white/5 border border-white/10
              hover:bg-white/[0.07] transition-all duration-300"
          >
            <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-[#E91E63] 
              to-[#3498DB] text-white mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-white/60">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}