import React from 'react';
import { motion } from 'framer-motion';
import { useCalendarStore } from '../../../stores/calendarStore';

interface ScheduleCallButtonProps {
  isCollapsed?: boolean;
}

const buttonVariants = {
  initial: { 
    scale: 1, 
    y: 0,
    transition: {
      duration: 0.08,
    },
  },
  hover: {
    scale: 0.66,
    y: 16,
    transition: {
      duration: 0.08,
      ease: 'easeIn',
    },
  },
  bounce: {
    scale: 1.2,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 15,
      mass: 0.8,
      duration: 0.08,
    },
  },
};

export function ScheduleCallButton({ isCollapsed }: ScheduleCallButtonProps) {
  const { openCalendar } = useCalendarStore();

  return (
    <motion.button
      onClick={openCalendar}
      initial="initial"
      whileHover={['hover', 'bounce']}
      variants={buttonVariants}
      className={`relative inline-block font-medium text-white transition-colors
        ${isCollapsed ? 'px-3 py-1.5 text-sm rounded-full' : 'px-4 py-2 text-sm'}`}
    >
      Schedule Call
    </motion.button>
  );
}