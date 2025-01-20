import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCalendarStore } from '../../stores/calendarStore';

/**
 * If you're using the quiz store in this file, you can optionally import it:
 * import { useQuizStore } from '../../stores/quizStore';
 */

interface DynamicIslandButtonGroupProps {
  link: string;
}

export function DynamicIslandButtonGroup({ link }: DynamicIslandButtonGroupProps) {
  const [hoveredButton, setHoveredButton] = useState<'left' | 'right' | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { openCalendar } = useCalendarStore();

  // OPTIONAL: Attempt to retrieve `closeQuiz` if it exists
  // (If your store or function doesn't exist, remove or wrap in try-catch.)
  let closeQuiz: (() => void) | undefined;
  let isOpen: boolean | undefined;

  try {
    const quizStore = require('../../stores/quizStore');
    const { useQuizStore } = quizStore;
    const quizState = useQuizStore.getState();
    closeQuiz = quizState.closeQuiz;
    isOpen = quizState.isOpen;
  } catch (error) {
    // If quizStore or closeQuiz doesn't exist, do nothing
    console.warn('Quiz store not found or closeQuiz not available:', error);
  }

  const [scrollTarget, setScrollTarget] = useState<string | null>(null);
  const isMobile = window.innerWidth <= 768;
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const isTouchAndNotMobile = !isMobile && isTouchDevice;

  useEffect(() => {
    if (scrollTarget) {
      console.log(`Attempting to scroll to: ${scrollTarget}`);
      
      const interval = setInterval(() => {
        const element = document.querySelector(scrollTarget);
        if (element) {
          console.log(`Element found for selector: ${scrollTarget}`);
          
          const headerOffset = 80; // Adjust for fixed headers
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          console.log(`Scrolling to offset position: ${offsetPosition}`);
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });

          clearInterval(interval); // Stop checking once scrolled
        } else {
          console.log(`Element not yet found for selector: ${scrollTarget}`);
        }
      }, 50); // Check every 50ms

      return () => clearInterval(interval);
    }
  }, [scrollTarget]);

  const handleLearnMore = () => {
    console.log(`Handling 'Learn More' button click with link: ${link}`);

    // 1) If the quiz modal is open and closeQuiz is available, close it
    if (isOpen && typeof closeQuiz === 'function') {
      console.log('Closing quiz modal before navigating.');
      closeQuiz();
    }

    // 2) Navigate or scroll to top as before
    if (location.pathname !== link) {
      // Cross-page navigation
      console.log(`Navigating to external page: ${link} and scrolling to top.`);
      navigate(link);

      // Scroll to top after navigation
      setTimeout(() => {
        console.log('Scrolling to the very top of the new page.');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100); // Delay ensures the page has loaded before scrolling
    } else {
      // Same-page navigation
      console.log('Already on the page. Scrolling to the very top.');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative inline-flex rounded-full bg-white/10 p-0.5">
      <motion.div
        className="absolute inset-0.5 rounded-full bg-white"
        initial={false}
        animate={{
          x: hoveredButton === 'left' ? 0 : hoveredButton === 'right' ? '100%' : '50%',
          opacity: hoveredButton ? 1 : 0,
          scale: hoveredButton ? 1 : 0.9,
        }}
        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
        style={{ width: '48%' }}
      />

      {/* Learn More Button */}
      <motion.button
        onHoverStart={() => setHoveredButton('left')}
        onHoverEnd={() => setHoveredButton(null)}
        onClick={handleLearnMore}
        className={`relative px-${isTouchAndNotMobile ? 3 : 4} py-2 rounded-full font-medium ${
          isTouchAndNotMobile ? 'text-xs' : 'text-sm'
        } text-white transition-colors flex items-center gap-1.5 group hover:text-black`}
      >
        <span
          className={`truncate ${
            isTouchAndNotMobile ? 'max-w-[80px]' : 'max-w-[100px]'
          }`}
        >
          Learn More
        </span>
        <ArrowRight
          className={`transition-transform group-hover:translate-x-1 ${
            isTouchAndNotMobile ? 'w-3 h-3' : 'w-4 h-4'
          }`}
        />
      </motion.button>

      <div className="w-px bg-white/20 my-1.5" />

      {/* Request Demo Button */}
      <motion.button
        onHoverStart={() => setHoveredButton('right')}
        onHoverEnd={() => setHoveredButton(null)}
        onClick={openCalendar}
        className={`relative px-${isTouchAndNotMobile ? 3 : 4} py-2 rounded-full font-medium ${
          isTouchAndNotMobile ? 'text-xs' : 'text-sm'
        } text-white transition-colors flex items-center gap-1.5 group hover:text-black`}
      >
        <span
          className={`truncate ${
            isTouchAndNotMobile ? 'max-w-[80px]' : 'max-w-[100px]'
          }`}
        >
          Book Demo
        </span>
        <Sparkles
          className={`transition-transform group-hover:translate-x-1 ${
            isTouchAndNotMobile ? 'w-3 h-3' : 'w-4 h-4'
          }`}
        />
      </motion.button>
    </div>
  );
}
