import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HeroCard } from '../cards/HeroCard';
import { PartnerLogos } from '../layout/PartnerLogos';
import { Navbar } from '../layout/Navbar';

export function Hero() {
  const [isHeroHovered, setIsHeroHovered] = useState(false);
  const isMobile = window.innerWidth <= 768;
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [startPoint, setStartPoint] = useState(0);
  const [endPoint, setEndPoint] = useState(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const topOfSection = window.scrollY + rect.top;
      setStartPoint(topOfSection + (isMobile ? 25 : 50));
      setEndPoint(topOfSection + (isMobile ? 300 : 600));
    }
  }, [isMobile]);

  const scale = useTransform(scrollY, [startPoint, endPoint], [1, 0.5]);
  const opacity = useTransform(scrollY, [startPoint, endPoint], [1, 0]);
  const y = useTransform(scrollY, [startPoint, endPoint], [0, -50]);
  const logosOpacity = useTransform(scrollY, [startPoint, startPoint + 200], [1, 0]);

  return (
    <section 
      ref={sectionRef} 
      className={`relative bg-black flex flex-col ${
        isMobile ? 'min-h-[85vh]' : 'min-h-screen'
      }`}
    >
      <Navbar isHeroHovered={isHeroHovered} />
      
      <motion.div
        style={{ scale, opacity, y }}
        className={`flex-1 flex items-center justify-center ${
          isMobile ? 'px-3 py-6' : 'px-4 py-16'
        }`}
      >
        <div className={`w-full ${isMobile ? 'max-w-lg' : 'max-w-5xl'}`}>
          <HeroCard 
            isHovered={isHeroHovered}
            onHoverChange={setIsHeroHovered}
          />
        </div>
      </motion.div>

      <motion.div style={{ opacity: logosOpacity }}>
        <PartnerLogos isHeroHovered={isHeroHovered} />
      </motion.div>
    </section>
  );
}