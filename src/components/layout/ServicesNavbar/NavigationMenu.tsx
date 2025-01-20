import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLinks } from './NavLinks';
import { ScheduleCallButton } from '../Navbar/ScheduleCallButton';
import { cn } from '../../../utils/cn';

interface NavigationMenuProps {
  isScrolled: boolean;
}

export function NavigationMenu({ isScrolled }: NavigationMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex items-center gap-4">
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
          isScrolled={isScrolled}
        />
      )}

      <AnimatePresence>
        {isOpen && isScrolled && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 w-48 py-2 bg-black/90 backdrop-blur-lg rounded-xl shadow-xl"
          >
            <NavLinks 
              className="flex flex-col" 
              isScrolled={isScrolled}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}