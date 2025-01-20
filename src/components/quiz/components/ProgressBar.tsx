import React from 'react';
import { motion } from 'framer-motion';
import { useQuizNavigation } from '../hooks/useQuizNavigation';

export function ProgressBar() {
  const { progress } = useQuizNavigation();

  return (
    <div className="relative h-1 bg-white/10 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3 }}
        className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#E91E63] to-[#3498DB]"
      />
    </div>
  );
}