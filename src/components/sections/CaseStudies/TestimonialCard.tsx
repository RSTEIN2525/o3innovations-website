import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tag } from '../../shared/Tag';
import { DynamicIsland } from '../VideoGrid/DynamicIsland';

export function TestimonialCard() {
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
      className="relative h-[550px] md:h-[800px] rounded-3xl overflow-hidden bg-black/40 backdrop-blur-sm 
        ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300"
      onHoverStart={() => !isMobile && !isTouchAndDesktop && setIsHovered(true)}
      onHoverEnd={() => !isMobile && !isTouchAndDesktop && setIsHovered(false)}
      onClick={handleInteraction}
      whileHover={!isMobile && !isTouchAndDesktop ? { scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setIsVideoLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300
          ${isVideoLoaded ? 'opacity-80' : 'opacity-0'}`}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full p-8 flex flex-col">
        <div className="flex flex-wrap gap-3">
          <Tag name="AI-Powered" />
          <Tag name="24/7 Support" />
          <Tag name="Scalable" />
        </div>

        <div className="flex-1 flex items-center justify-center">
          <img
            src="/minorDetailsWhite.png"
            alt="Minor Details Logo"
            className="w-48 h-auto object-contain"
          />
        </div>

        {(isMobile || isTouchAndDesktop) && (
          <div className="text-center text-sm text-white/60 mt-4">
            Tap to {isHovered ? 'close' : 'learn more'}
          </div>
        )}
      </div>

      {/* Dynamic Island */}
      <AnimatePresence>
        {isHovered && (
          <DynamicIsland
            tags={[
              { id: '1', name: 'AI-Powered' },
              { id: '2', name: '24/7 Support' },
              { id: '3', name: 'Scalable' },
            ]}
            name="Minor Details"
            description="A comprehensive AI solution that integrates across the entire organization, providing automated support, workflow management, and scalable infrastructure."
            idealFor={['Tech Companies', 'Startups', 'Digital Agencies']}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
