import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const results = {
  stats: [
    { label: "Development Time", value: "10hrs" },
    { label: "Cost Savings", value: "$50K+" },
    { label: "Conversion Rate", value: "+85%" }
  ],
  features: [
    "No Templates: Every design is unique and custom",
    "Zero Maintenance: We handle all updates and hosting",
    "Instant Launch: Go live in hours, not weeks"
  ]
};

export function ProofPoints() {
  return (
    <div className="mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-white mb-4">
          The Benefits Speak for Themselves
        </h2>
        <p className="text-white/60">
          Join hundreds of businesses saving time and money with Web Architect
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="grid grid-cols-3 gap-4">
          {results.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10 text-center"
            >
              <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-4">
          {results.features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 text-white/80"
            >
              <CheckCircle2 className="w-5 h-5 text-[#2ECC71] flex-shrink-0" />
              <span>{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}