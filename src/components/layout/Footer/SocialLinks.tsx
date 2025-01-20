import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github, Youtube } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <motion.a
          key={label}
          href={href}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-8 h-8 flex items-center justify-center rounded-full 
            bg-white/5 hover:bg-white/10 transition-colors"
          aria-label={label}
        >
          <Icon className="w-4 h-4 text-white/60" />
        </motion.a>
      ))}
    </div>
  );
}