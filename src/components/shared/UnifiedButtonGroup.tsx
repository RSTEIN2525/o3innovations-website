import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCalendarStore } from '../../stores/calendarStore';
import{ useQuizStore } from '../../stores/quizStore';

export function UnifiedButtonGroup() {
  const [hoveredButton, setHoveredButton] = useState<'left' | 'right' | null>(null);
  const navigate = useNavigate();
  const { openCalendar } = useCalendarStore();
  const openQuiz = useQuizStore(state => state.openQuiz);

  return (
    <div className="relative inline-flex rounded-full bg-white/10 p-1 whitespace-nowrap">
      <motion.div
        className="absolute inset-1 rounded-full bg-white"
        initial={false}
        animate={{
          x: hoveredButton === 'left' ? 0 : hoveredButton === 'right' ? '100%' : '50%',
          opacity: hoveredButton ? 1 : 0,
          scale: hoveredButton ? 1 : 0.9,
        }}
        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        style={{ width: '48%' }}
      />

      <motion.button
        onHoverStart={() => setHoveredButton('left')}
        onHoverEnd={() => setHoveredButton(null)}
        onClick={openQuiz}
        className="relative px-6 py-3 rounded-full font-medium text-white transition-colors 
          flex items-center gap-2 group hover:text-black min-w-[140px] justify-center"
      >
        <span>Best Fit Quiz</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 flex-shrink-0" />
      </motion.button>

      <div className="w-px bg-white/20 my-2" />

      <motion.button
        onHoverStart={() => setHoveredButton('right')}
        onHoverEnd={() => setHoveredButton(null)}
        onClick={openCalendar}
        className="relative px-6 py-3 rounded-full font-medium text-white transition-colors 
          flex items-center gap-2 group hover:text-black min-w-[140px] justify-center"
      >
        <span>Book Demo</span>
        <Sparkles className="w-4 h-4 transition-transform group-hover:translate-x-1 flex-shrink-0" />
      </motion.button>
    </div>
  );
}