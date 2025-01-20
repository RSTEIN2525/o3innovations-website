import React from 'react';
import { motion } from 'framer-motion';
import { Clock, XCircle, DollarSign, AlertTriangle } from 'lucide-react';

const problems = [
  {
    icon: <Clock className="w-6 h-6 text-[#E91E63]" />,
    title: "Time Wasted",
    description: "Hours lost on scheduling back-and-forth"
  },
  {
    icon: <XCircle className="w-6 h-6 text-[#3498DB]" />,
    title: "No-Shows",
    description: "Lost revenue from missed appointments"
  },
  {
    icon: <DollarSign className="w-6 h-6 text-[#2ECC71]" />,
    title: "High Costs",
    description: "$2,500+ monthly for basic scheduling"
  },
  {
    icon: <AlertTriangle className="w-6 h-6 text-[#F1C40F]" />,
    title: "Double Bookings",
    description: "Calendar conflicts causing chaos"
  }
];

export function ProblemStatement() {
  return (
    <div className="mb-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-white mb-12 text-center"
      >
        Scheduling Shouldn't Be This Hard
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {problems.map((problem, index) => (
          <motion.div
            key={problem.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 
              hover:bg-white/[0.07] transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-white/5">
                {problem.icon}
              </div>
              <h3 className="font-semibold text-white">{problem.title}</h3>
            </div>
            <p className="text-white/60">{problem.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}