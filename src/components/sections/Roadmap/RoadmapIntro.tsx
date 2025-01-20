import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import { DemoQuizButtonGroup } from '../../shared/DemoQuizButtonGroup';

export function RoadmapIntro() {
  return (
    <div className="lg:w-1/3 space-y-6 text-center lg:text-left mx-auto lg:mx-0"> {/* Center on mobile */}
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/5 
          border border-white/10 mx-auto lg:mx-0" // Center on mobile
      >
        <Rocket className="w-4 h-4 text-[#E91E63]" />
        <span className="text-sm font-medium bg-gradient-to-r from-[#8E44AD] via-[#E91E63] 
          to-[#3498DB] text-transparent bg-clip-text">
          Start Scaling While You Sleep
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold text-white mx-auto lg:mx-0" // Center on mobile
      >
        Your Path to Simpler Scaling
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-lg text-white/60 mx-auto lg:mx-0" // Center on mobile
      >
        At O3 Innovations, we've mastered the art of making growth simple. No wasted time, 
        no technical headaches—just around-the-clock results. Here's exactly how we'll get you there.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="pt-4 mx-auto lg:mx-0" // Center on mobile
      >
        <DemoQuizButtonGroup />
      </motion.div>
    </div>
  );
}
