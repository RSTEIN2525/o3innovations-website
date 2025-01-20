import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Brain, PiggyBank } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Faster",
    description: "Answers in seconds, not hours"
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Smarter",
    description: "Natural, human-like conversations—no scripts"
  },
  {
    icon: <PiggyBank className="w-8 h-8" />,
    title: "Cheaper",
    description: "Replaces an entire team, saving thousands"
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
        The Smarter Solution: Expert Guide
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-lg text-white/60 text-center mb-12 max-w-2xl mx-auto"
      >
        For less than the cost of one team member, you get 24/7 AI support that feels human, 
        works instantly, and never takes a day off.
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