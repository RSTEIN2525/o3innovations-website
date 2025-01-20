import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function ServicesBackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll();
  
  // Reversed animation: video appears as you scroll down
  const scale = useTransform(scrollYProgress, [0.2, 1], [1, 0.2]);
  const opacity = useTransform(scrollYProgress, [0.2, 1], [0.6, 0]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Silently handle autoplay failure
      });
    }
  }, []);

  return (
    <motion.div 
      style={{ scale, opacity }}
      className="absolute inset-0 w-full h-full rounded-[3rem] overflow-hidden"
    >
      <video
        ref={videoRef}
        src="/0101.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
    </motion.div>
  );
}