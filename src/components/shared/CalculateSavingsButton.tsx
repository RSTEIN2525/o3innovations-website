import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useQuizStore } from '../../stores/quizStore';

export function CalculateSavingsButton() {
  const openQuiz = useQuizStore(state => state.openQuiz);

  return (
    <motion.button
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      variants={{
        initial: { scale: 1 },
        hover: { scale: 1.05 },
        tap: { scale: 0.95 }
      }}
      onClick={openQuiz}
      className="group px-8 py-4 text-white font-medium text-lg
        flex items-center gap-2 transition-all duration-300"
    >
     Two-Minute Quiz
      <motion.div
        variants={{
          initial: { x: 0, opacity: 0.5 },
          hover: { x: 4, opacity: 1 }
        }}
        transition={{ duration: 0.2 }}
      >
        <ChevronRight className="w-5 h-5" />
      </motion.div>
    </motion.button>
  );
}