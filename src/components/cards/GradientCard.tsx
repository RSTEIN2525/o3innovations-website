import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlowEffect } from './GlowEffect';
import { GradientFrame } from './GradientFrame';
import { CardContent } from './CardContent';

export function GradientCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-[calc(100%-280px)] mt-8">
      <motion.div
        className="relative aspect-[4/2] cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence>
          {isHovered && <GlowEffect />}
        </AnimatePresence>
        <GradientFrame isHovered={isHovered} />
        <CardContent />
      </motion.div>
    </div>
  );
}
