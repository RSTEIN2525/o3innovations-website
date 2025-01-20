import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { RocketIcon, Clock, Signal } from 'lucide-react';
import { ImpactMetric } from './ImpactMetric';
import { DemoQuizButtonGroup } from '../../shared/DemoQuizButtonGroup';

export function DecisionCard() {
  const metrics = [
    {
      icon: <RocketIcon className="w-6 h-6 text-[#E91E63]" />,
      value: "$1M+",
      label: "Annual Client Revenue",
    },
    {
      icon: <Clock className="w-6 h-6 text-[#3498DB]" />,
      value: "3000+",
      label: "Human Hours Saved",
    },
    {
      icon: <Signal className="w-6 h-6 text-[#2ECC71]" />,
      value: "99.9%",
      label: "Uptime Guaranteed",
    },
  ];

  const loopedMetrics = [...metrics, ...metrics]; // Duplicate metrics for infinite scrolling

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateDevice = () => setIsMobile(window.innerWidth <= 768);
    updateDevice(); // Initial check
    window.addEventListener('resize', updateDevice);
    return () => window.removeEventListener('resize', updateDevice);
  }, []);

  return (
    <motion.div 
      className="relative z-10 w-full max-w-3xl mx-4 p-12 bg-black rounded-3xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 
        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#E91E63] 
        via-white to-[#3498DB] bg-clip-text text-transparent mb-4 text-center"
      >
        Can't Decide on a Solution?
      </h2>
      
      <p className="text-lg text-white/70 mb-8 text-center">
        Let us help you find the perfect AI solution for your business. Whether you're 
        looking to automate processes, enhance customer experience, or boost productivity, 
        we've got you covered.
      </p>

      <div className="flex justify-center mb-12">
        <DemoQuizButtonGroup />
      </div>

      {/* Conditional Rendering for Mobile and Desktop */}
      <div className="relative w-full">
        {isMobile ? (
          // Mobile Carousel
          <div className="relative w-full overflow-hidden">
            {/* Edge Fade Effects */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

            <motion.div
              className="flex gap-8"
              initial={{ x: 0 }}
              animate={{ x: `-${metrics.length * 20}rem` }} // Adjust based on content width
              transition={{
                repeat: Infinity,
                duration: 20, // Duration of the full loop
                ease: "linear",
              }}
              style={{ width: `${loopedMetrics.length * 20}rem` }} // Ensures content width matches animation
            >
              {loopedMetrics.map((metric, index) => (
                <div key={index} className="flex-shrink-0 w-48 text-center">
                  <ImpactMetric
                    icon={metric.icon}
                    value={metric.value}
                    label={metric.label}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        ) : (
          // Desktop Static Layout
          <div className="flex justify-evenly gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="w-48 text-center">
                <ImpactMetric
                  icon={metric.icon}
                  value={metric.value}
                  label={metric.label}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
