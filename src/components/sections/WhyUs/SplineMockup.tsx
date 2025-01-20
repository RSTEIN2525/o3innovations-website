import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export function SplineMockup() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Preload the video
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'video';
    link.href = '/mockupDesign.mp4'; // Ensure this path is correct
    document.head.appendChild(link);

    // Attempt to autoplay the video after preloading
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Silently handle autoplay failure
      });
    }

    // Clean up the link after use
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative 
        w-[90%] mx-auto aspect-[3/4] rounded-[2rem] overflow-hidden 
        sm:w-[140%] sm:-right-[-11%] sm:rounded-[3rem]"
    >
      <video
        ref={videoRef}
        src="/mockupDesign.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-[1.15] sm:scale-[.95]"
      />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/100 to-transparent" />
    </motion.div>
  );
}
