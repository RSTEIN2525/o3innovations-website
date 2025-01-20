import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { GradientExplosion } from './GradientExplosion';
import { UnifiedButtonGroup } from '../../shared/UnifiedButtonGroup';

export function FinalCTA() {
  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      <GradientExplosion />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            Just 5 Minutes
          </h2>
          
          <p className="text-xl text-white/60">
            In less time than it takes to order coffee, unlock hassle-free, seven-figure scaling
          </p>

          <div className="pt-8 flex justify-center">
            <UnifiedButtonGroup />
          </div>
        </motion.div>
      </div>
    </section>
  );
}