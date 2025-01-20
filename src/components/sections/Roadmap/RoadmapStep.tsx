import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface RoadmapStepProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  index: number;
}

export function RoadmapStep({ icon, title, subtitle, description, tag, index }: RoadmapStepProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateDevice = () => setIsMobile(window.innerWidth <= 768);
    updateDevice(); // Initial check
    window.addEventListener('resize', updateDevice);
    return () => window.removeEventListener('resize', updateDevice);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group p-4 rounded-2xl bg-white/5 border border-white/10 
        hover:bg-white/[0.07] transition-all duration-300
        hover:border-[#E91E63]/20"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl 
          bg-gradient-to-br from-[#E91E63] to-[#3498DB] text-white">
          {icon}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-base font-bold text-white group-hover:text-[#E91E63] 
                transition-colors">
                {title}
              </h3>
              {!isMobile && (
                <h4 className="text-sm font-medium text-white/80">{subtitle}</h4>
              )}
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              {!isMobile && (
                <span className="px-2 py-0.5 text-xs font-medium rounded-full
                  bg-white/5 text-white/60 border border-white/10">
                  Step {index}
                </span>
              )}
              <span className="px-2 py-0.5 text-xs font-medium rounded-full
                bg-[#3498DB]/10 text-[#3498DB] border border-[#3498DB]/20">
                {tag}
              </span>
            </div>
          </div>
          
          <p className="text-sm text-white/60 line-clamp-2">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
