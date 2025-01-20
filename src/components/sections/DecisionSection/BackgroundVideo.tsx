import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll();
  const isMobile = window.innerWidth <= 768;
  let scale,opacity;

  if(isMobile)
  {
      scale = useTransform(scrollYProgress, [0.5, 0.85], [0, 1]);
      opacity = useTransform(scrollYProgress, [0.5, 0.85], [0, 0.6]);
  }else
  {
    //isDesktop
      scale = useTransform(scrollYProgress, [0.75, 0.85], [0, 1]);
      opacity = useTransform(scrollYProgress, [0.6, 1], [0, 0.6]);
  }
 

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