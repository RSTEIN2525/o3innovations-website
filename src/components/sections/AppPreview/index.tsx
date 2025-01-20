import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GradientFrame } from './GradientFrame';

export function AppPreview() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  let [startPoint, setStartPoint] = useState(0);
  let [endPoint, setEndPoint] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();

  // Check for mobile devices
  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Set isMobile based on screen width
    };
    updateIsMobile(); // Initial check
    window.addEventListener('resize', updateIsMobile); // Update on window resize

    return () => window.removeEventListener('resize', updateIsMobile); // Cleanup listener
  }, []);

  // Calculate start and end points for animation
  useEffect(() => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const topOfSection = window.scrollY + rect.top;
      setStartPoint(topOfSection + 50);
      setEndPoint(topOfSection + 600);
    }
  }, []);

  // Framer Motion transforms
if(isMobile)
{
  startPoint -= 200;
  endPoint -= 200;  
}else
{
  startPoint -= 200;
  endPoint -= 450;  
}

  const scale = useTransform(scrollY, [startPoint, endPoint], [1, 0.5]);
  const opacity = useTransform(scrollY, [startPoint, endPoint], [1, 0]);
  const y = useTransform(scrollY, [startPoint, endPoint], [0, -200]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ scale, opacity, y }}
      className="relative bg-black -mt-12 mb-48"
    >
      <div className="container mx-auto px-4">
        {/* Responsive aspect ratio */}
        <div
          className={`relative ${
            isMobile ? 'aspect-[9/16]' : 'aspect-[16/9]'
          } w-full`}
        >
          <GradientFrame />
          <iframe
            src="https://minordetails-1aff3.firebaseapp.com/"
            className={`absolute inset-[2px] ${
              isMobile
                ? 'w-[calc(100%-8px)] h-[calc(100%-8px)]'
                : 'w-[calc(100%-4px)] h-[calc(100%-4px)]'
            } rounded-xl z-10`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </motion.section>
  );
}
