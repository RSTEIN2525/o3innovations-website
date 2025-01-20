import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, Calendar, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useQuizStore } from '../../stores/quizStore';
import { useCalendarStore } from '../../stores/calendarStore';

export function TripleButtonGroup() {
  const [hoveredButton, setHoveredButton] = useState<'left' | 'middle' | 'right' | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const openQuiz = useQuizStore(state => state.openQuiz);
  const { openCalendar } = useCalendarStore();

  useEffect(() => {
    const updateDevice = () => setIsMobile(window.innerWidth <= 768);
    updateDevice(); // Initial check
    window.addEventListener('resize', updateDevice);
    return () => window.removeEventListener('resize', updateDevice);
  }, []);

  return (
    <div className="relative inline-flex rounded-full bg-white/10 p-0.5">
      <motion.div
        className="absolute inset-0.5 rounded-full bg-white"
        initial={false}
        animate={{
          x: hoveredButton === 'left' ? 0 : 
             hoveredButton === 'middle' ? '100%' : 
             hoveredButton === 'right' ? '200%' : '100%',
          opacity: hoveredButton ? 1 : 0,
          scale: hoveredButton ? 1 : 0.9,
        }}
        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        style={{ width: '32%' }}
      />

      <motion.button
        onHoverStart={() => setHoveredButton('left')}
        onHoverEnd={() => setHoveredButton(null)}
        onClick={openQuiz}
        className={`relative px-4 py-2 rounded-full font-medium text-sm text-white transition-colors 
          flex items-center gap-1.5 group hover:text-black ${isMobile ? 'text-xs justify-center' : ''}`} // Adjust font size and alignment on mobile
      >
        {!isMobile && <Brain className="w-4 h-4 transition-transform group-hover:scale-110" />} {/* Hide logo on mobile */}
        Take Quiz
      </motion.button>

      <div className="w-px bg-white/20 my-1.5" />

      <motion.button
        onHoverStart={() => setHoveredButton('middle')}
        onHoverEnd={() => setHoveredButton(null)}
        onClick={openCalendar}
        className={`relative px-4 py-2 rounded-full font-medium text-sm text-white transition-colors 
          flex items-center gap-1.5 group hover:text-black ${isMobile ? 'text-xs justify-center' : ''}`} // Adjust font size and alignment on mobile
      >
        {!isMobile && <Calendar className="w-4 h-4 transition-transform group-hover:scale-110" />} {/* Hide logo on mobile */}
        Schedule Demo
      </motion.button>

      <div className="w-px bg-white/20 my-1.5" />

      <motion.button
        onHoverStart={() => setHoveredButton('right')}
        onHoverEnd={() => setHoveredButton(null)}
        onClick={() => navigate('/services')}
        className={`relative px-4 py-2 rounded-full font-medium text-sm text-white transition-colors 
          flex items-center gap-1.5 group hover:text-black ${isMobile ? 'text-xs justify-center' : ''}`} // Adjust font size and alignment on mobile
      >
        {!isMobile && <ArrowRight className="w-4 h-4 transition-transform group-hover:scale-110" />} {/* Hide logo on mobile */}
        Learn More
      </motion.button>
    </div>
  );
}
