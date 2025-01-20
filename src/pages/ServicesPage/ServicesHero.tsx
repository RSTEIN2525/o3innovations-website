import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../../components/layout/Navbar';
import { UnifiedButtonGroup } from '../../components/shared/UnifiedButtonGroup';

export function ServicesHero() {
  return (
    <section className="relative min-h-[70vh] bg-black flex flex-col">
      <Navbar isHeroHovered={false} />
      
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            AI Solutions That Scale
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 mb-12"
          >
            Transform your business with enterprise-grade AI tools that deliver 
            measurable results and drive sustainable growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <UnifiedButtonGroup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}