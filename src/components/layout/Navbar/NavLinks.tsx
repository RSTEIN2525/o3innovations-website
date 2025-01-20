import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCalendarStore } from '../../../stores/calendarStore';
import { cn } from '../../../utils/cn';

interface NavLinksProps {
  className?: string;
  isHeroHovered?: boolean;
  isScrolled?: boolean;
}

const links = [
  { href: '/', label: 'Home' },
  { href: '#servicesBox', label: 'Services' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#case-studies', label: 'Case Studies' },
  { href: '#roadmap', label: 'Roadmap' },
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

export function NavLinks({ className, isHeroHovered, isScrolled }: NavLinksProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { openCalendar } = useCalendarStore();

  const handleClick = (href: string) => {
    if (href === '/') {
      // Home button - scroll to top of homepage
      if (location.pathname !== '/') {
        navigate('/');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (href.startsWith('#')) {
      // Section links
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation to complete before scrolling
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            const headerOffset = 80; // Account for fixed header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      } else {
        // If we're already on homepage, just scroll
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
    } else {
      // Regular page navigation
      navigate(href);
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