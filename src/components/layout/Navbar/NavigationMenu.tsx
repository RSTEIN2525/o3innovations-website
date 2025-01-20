import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLinks } from './NavLinks';
import { ScheduleCallButton } from './ScheduleCallButton';
import { cn } from '../../../utils/cn';

interface NavigationMenuProps {
  isScrolled: boolean;
  isHeroHovered: boolean;
}

export function NavigationMenu({ isScrolled, isHeroHovered }: NavigationMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  // Detect if the device is mobile and override isScrolled
  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    isScrolled = true;
  }

  return (
    <div className="relative flex items-center gap-0 sm:gap-4">
      {isScrolled ? (
        <>
          <ScheduleCallButton isCollapsed={true} />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            aria-label="Toggle navigation menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </>
      ) : (
        <NavLinks
          className="hidden md:flex md:items-center md:gap-8"
          isHeroHovered={isHeroHovered}
          isScrolled={isScrolled}
        />
      )}

      <AnimatePresence>
        {isOpen && isScrolled && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 200 }} // Increase height when menu is open
            exit={{ opacity: 0, y: -10, height: 0 }} // Collapse height when menu closes
            transition={{ duration: 0.3 }} // Smooth transition
            className="absolute -right-1 top-full mt-2 w-44 py-2 bg-black/75 backdrop-blur-lg rounded-xl shadow-xl overflow-hidden"
          >
            <NavLinks
              className="flex flex-col"
              isHeroHovered={isHeroHovered}
              isScrolled={isScrolled}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
