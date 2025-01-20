import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const partners = [
  { name: 'May Web', logo: 'https://firebasestorage.googleapis.com/v0/b/minordetails-1aff3.appspot.com/o/AIBot%2Fo3innovations%2FmayWebWhite.png?alt=media&token=39247303-efea-4f47-bdda-c6339e7723c7' },
  { name: 'Minor Details', logo: 'https://firebasestorage.googleapis.com/v0/b/minordetails-1aff3.appspot.com/o/AIBot%2Fo3innovations%2FminorDetailsWhite.png?alt=media&token=6453700c-f7b8-45f2-8b46-ddfc10bd85db' },
  { name: 'Minor Intelligence', logo: 'https://firebasestorage.googleapis.com/v0/b/minordetails-1aff3.appspot.com/o/AIBot%2Fo3innovations%2FmonicaSteinCoachingWhite.png?alt=media&token=7c6d3561-a6db-4feb-b069-d770d6d0cd45' },
  { name: 'Monica Stein Coaching', logo: 'https://firebasestorage.googleapis.com/v0/b/minordetails-1aff3.appspot.com/o/AIBot%2Fo3innovations%2FstartupShellWhite.png?alt=media&token=02479776-60b1-4059-811c-a0f0a8eef6b6' },
  { name: 'Startup Shell', logo: 'https://firebasestorage.googleapis.com/v0/b/minordetails-1aff3.appspot.com/o/AIBot%2Fo3innovations%2FminorIntelligenceWhite.png?alt=media&token=6366a26e-8227-4eee-a050-69370455ab23' },
];

const bounceVariants = {
  initial: { scale: 1, y: 0 },
  hover: {
    scale: 1.2,
    y: -5,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 15,
    },
  },
};

export function PartnerLogos({ isHeroHovered }: { isHeroHovered: boolean }) {
  const isMobile = window.innerWidth <= 768;

if (isMobile) {
  // Duplicate partners to enable seamless wrapping
  const loopedPartners = [...partners, ...partners, ...partners]; // Extend array for smooth wrapping

  return (
    <div className="relative w-full py-4 bg-black/10 backdrop-blur-sm overflow-hidden">
      {/* Edge fade effect */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/90 to-transparent z-10 pointer-events-none" />

      {/* Carousel Animation */}
      <motion.div
        className="flex gap-16"
        initial={{ x: 0 }}
        animate={{ x: `-${partners.length * 20}rem` }} // Loop smoothly based on content width
        transition={{
          repeat: Infinity,
          duration: 30, // Adjust speed here (faster/slower animation)
          ease: 'linear',
        }}
        style={{ width: `${loopedPartners.length * 20}rem` }} // Ensures content width matches animation
      >
        {loopedPartners.map((partner, index) => (
          <motion.div
            key={`${partner.name}-${index}`}
            className="relative flex-shrink-0"
            variants={bounceVariants}
            initial="initial"
            whileHover="hover"
            transition={{ duration: 0.4 }}
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className={cn(
                "h-16 w-auto object-contain transition-all duration-300",
                "filter brightness-150"
              )}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}


  // Desktop version (unchanged)
  return (
    <div className="w-full py-4 pb-16 bg-black/10 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center gap-2">
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              className="relative"
              variants={bounceVariants}
              initial="initial"
              whileHover="hover"
              transition={{ duration: 0.4 }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className={cn(
                  "h-16 md:h-20 w-auto object-contain transition-all duration-300",
                  "filter brightness-150"
                )}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
