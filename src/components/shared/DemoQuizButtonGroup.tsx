import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Brain } from 'lucide-react';
import { useQuizStore } from '../../stores/quizStore';

export function DemoQuizButtonGroup() {
  const [hoveredButton, setHoveredButton] = useState<'left' | 'right' | null>(null);
  const openQuiz = useQuizStore(state => state.openQuiz);

  return (
    <div className="relative inline-flex rounded-full bg-white/10 p-0.5">
      {/* Background highlight */}
      <motion.div
        className="absolute inset-0.5 rounded-full bg-white"
        initial={false}
        animate={{
          x: hoveredButton === 'left' ? 0 : hoveredButton === 'right' ? '100%' : '50%',
          opacity: hoveredButton ? 1 : 0,
          scale: hoveredButton ? 1 : 0.9,
        }}
        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        style={{ width: '48%' }}
      />

      {/* Buttons */}
      <motion.button
        onHoverStart={() => setHoveredButton('left')}
        onHoverEnd={() => setHoveredButton(null)}
        className="relative px-4 py-2 rounded-full font-medium text-sm text-white transition-colors 
          flex items-center gap-1.5 group hover:text-black"
      >
        <Calendar className="w-4 h-4 transition-transform group-hover:scale-110" />
        Schedule Demo
      </motion.button>

      <div className="w-px bg-white/20 my-1.5" />

      <motion.button
        onHoverStart={() => setHoveredButton('right')}
        onHoverEnd={() => setHoveredButton(null)}
        onClick={openQuiz}
        className="relative px-4 py-2 rounded-full font-medium text-sm text-white transition-colors 
          flex items-center gap-1.5 group hover:text-black"
      >
        <Brain className="w-4 h-4 transition-transform group-hover:scale-110" />
        Take The Quiz
      </motion.button>
    </div>
  );
}