import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DynamicIsland } from './DynamicIsland';
import { Tag } from './Tag';
import type { Project } from './types';

export function VideoCard({ id, name, tags, logo, video, description, idealFor, link }: Project) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Detect device type
  const isMobile = window.innerWidth <= 768;
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const isTouchAndDesktop = isTouchDevice && !isMobile;

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Silently handle autoplay failure
      });
    }
  }, []);

  const handleInteraction = () => {
    if (isMobile || isTouchAndDesktop) {
      setIsHovered(!isHovered);
    }
  };

  return (
    <motion.div
      className="relative aspect-square rounded-3xl overflow-hidden bg-black/40 backdrop-blur-sm
        ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300"
      onHoverStart={() => !isMobile && !isTouchAndDesktop && setIsHovered(true)}
      onHoverEnd={() => !isMobile && !isTouchAndDesktop && setIsHovered(false)}
      onClick={handleInteraction}
      whileHover={!isMobile && !isTouchAndDesktop ? { scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
    >
      <video
        ref={videoRef}
        src={video}
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setIsVideoLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300
          ${isVideoLoaded ? 'opacity-80' : 'opacity-0'}`}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      <div className="relative z-10 h-full p-6 flex flex-col">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag 
              key={tag.id} 
              name={tag.name}
              className={`text-xs md:text-sm whitespace-nowrap`}
            />
          ))}
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="flex items-center gap-3">
            <div className="text-white">
              {logo}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">{name}</h3>
          </div>
        </div>

        {(isMobile || isTouchAndDesktop) && (
          <div className="text-center text-sm text-white/60 mt-4">
            Tap to {isHovered ? 'close' : 'learn more'}
          </div>
        )}
      </div>

      <AnimatePresence>
        {isHovered && (
          <DynamicIsland 
            tags={tags}
            name={name}
            description={description}
            idealFor={idealFor}
            link={link}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
