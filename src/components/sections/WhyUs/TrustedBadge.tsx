import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export function TrustedBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full 
        bg-gradient-to-r from-[#E91E63]/5 via-[#3498DB]/5 to-transparent
        border border-white/10 backdrop-blur-sm group
        hover:from-[#E91E63]/10 hover:via-[#3498DB]/10 hover:to-transparent
        transition-all duration-300"
    >
      <Shield className="w-4 h-4 text-[#E91E63] transition-colors duration-300
        group-hover:text-[#E91E63]" />
      <span className="text-xs sm:text-sm bg-gradient-to-r from-[#E91E63] to-[#3498DB]
        bg-clip-text text-transparent font-medium">
        Trusted by 5+ High-Profile Clients
      </span>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r 
        from-[#E91E63]/20 via-[#3498DB]/20 to-transparent opacity-0 
        group-hover:opacity-10 blur-xl transition-opacity duration-300" />
    </motion.div>
  );
}