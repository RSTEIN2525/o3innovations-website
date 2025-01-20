import React from 'react';
import { motion } from 'framer-motion';
import { UnifiedButtonGroup } from '../../shared/UnifiedButtonGroup';

export function LeftContent() {
  // Check if the screen is mobile-sized
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    // Mobile Design
    return (
      <div className="h-full flex flex-col justify-between py-8 px-4 text-center">
        <div className="space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold bg-gradient-to-r 
              from-[#E91E63] via-white to-[#3498DB] bg-clip-text text-transparent"
          >
           All Assets, Zero Liabilties
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base leading-relaxed text-white/70 max-w-full mx-auto"
          >
           Let’s face it, most “Enterprise Solutions” aren’t solutions at all. They leave you with more headaches, higher costs, and worse problems than the original. We combine Fortune 500-level software with AI-powered maintenance, so everything runs flawlessly—without you lifting a finger or spending a dime.
          </motion.p>
        </div>
      </div>
    );
  }

  // Desktop Design
  return (
    <div className="h-full flex flex-col justify-between py-8">
      <div className="space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r 
            from-[#E91E63] via-white to-[#3498DB] bg-clip-text text-transparent"
        >
         All Assets, Zero Liabilties
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl leading-relaxed text-white/70 max-w-2xl"
        >
         Let’s face it, most “Enterprise Solutions” aren’t solutions at all. They leave you with more headaches, higher costs, and worse problems than the original. We combine Fortune 500-level software with AI-powered maintenance, so everything runs flawlessly—without you lifting a finger or spending a dime.
        </motion.p>
      </div>

      <div className="mt-12">
        <UnifiedButtonGroup />
      </div>
    </div>
  );
}
