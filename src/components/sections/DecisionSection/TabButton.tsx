import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../utils/cn';

interface TabButtonProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export function TabButton({ icon, label, isActive, onClick }: TabButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={cn(
        "px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-colors",
        isActive 
          ? "bg-white text-black" 
          : "bg-white/10 text-white hover:bg-white/20"
      )}
    >
      {icon}
      {label}
    </motion.button>
  );
}