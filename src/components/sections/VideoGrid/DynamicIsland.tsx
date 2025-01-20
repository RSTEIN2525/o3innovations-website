import React from 'react';
import { motion } from 'framer-motion';
import { Tag } from './Tag';
import { DynamicIslandButtonGroup } from '../../shared/DynamicIslandButtonGroup';
import type { Tag as TagType } from './types';

interface DynamicIslandProps {
  tags: TagType[];
  name: string;
  description: string;
  idealFor: string[];
  link: string;
}

export function DynamicIsland({ tags, name, description, idealFor, link }: DynamicIslandProps) {
  const isMobile = window.innerWidth <= 768;
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const applyMobileStyles = isMobile || isTouchDevice;

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30
      }}
      className="absolute top-0 left-0 right-0 z-20 mx-4 mt-4 rounded-2xl bg-black/95 backdrop-blur-sm"
    >
      <div className="p-4 md:p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Tag 
              key={tag.id} 
              name={tag.name} 
              className={`whitespace-nowrap ${applyMobileStyles ? 'text-xs' : 'text-sm'}`}
            />
          ))}
        </div>

        <div className="space-y-3">
          {/* Description */}
          <p className={`text-white/90 ${applyMobileStyles ? 'text-sm' : 'text-base'} leading-relaxed`}>
            {description}
          </p>
          
          {/* Perfect For */}
          <div className="border-t border-white/10 pt-3">
            <p className="text-white/60 text-xs mb-2">Perfect for:</p>
            <div className="flex flex-wrap gap-1.5">
              {idealFor.map((niche, index) => (
                <span 
                  key={index}
                  className={`px-2 py-0.5 rounded-full bg-white/10 text-white/90 
                    ${applyMobileStyles ? 'text-xs' : 'text-sm'} whitespace-nowrap`}
                >
                  {niche}
                </span>
              ))}
            </div>
          </div>

          {/* Button Group */}
          <div className="flex justify-center pt-2">
            <DynamicIslandButtonGroup link={link} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
