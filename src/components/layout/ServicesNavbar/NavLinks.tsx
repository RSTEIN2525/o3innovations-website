import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useCalendarStore } from '../../../stores/calendarStore';
import { cn } from '../../../utils/cn';

interface NavLinksProps {
  className?: string;
  isScrolled?: boolean;
}

const links = [
  { href: '/', label: 'Home' },
  { href: '#plug-and-play', label: 'Plug-And-Play' },
  { href: '#custom-automations', label: 'Custom Automations' },
  { href: '#app-dev', label: 'App Dev' },
  { href: '#case-studies', label: 'Case Studies' },
];

const buttonVariants = {
  initial: { 
    scale: 1, 
    y: 0,
    transition: { duration: 0.08 }
  },
  hover: {
    scale: 0.66,
    y: 16,
    transition: { duration: 0.08, ease: 'easeIn' }
  },
  bounce: {
    scale: 1.2,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 15,
      mass: 0.8,
      duration: 0.08
    }
  }
};

export function NavLinks({ className, isScrolled }: NavLinksProps) {
  const navigate = useNavigate();
  const { openCalendar } = useCalendarStore();

  const handleClick = (href: string) => {
    if (href === '/') {
      navigate('/');
    } else if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div className={cn(className, "items-center")}>
      {links.map((link) => (
        <motion.button
          key={link.href}
          onClick={() => handleClick(link.href)}
          initial="initial"
          whileHover={['hover', 'bounce']}
          variants={buttonVariants}
          className={cn(
            'relative inline-block px-3 py-2 text-sm font-medium',
            'text-white hover:text-white/90'
          )}
        >
          {link.label}
        </motion.button>
      ))}
      <motion.button
        initial="initial"
        whileHover={['hover', 'bounce']}
        variants={buttonVariants}
        onClick={openCalendar}
        className={cn(
          'relative inline-block px-3 py-2 text-sm font-medium',
          'text-white hover:text-white/90'
        )}
      >
        Schedule Call
      </motion.button>
    </div>
  );
}