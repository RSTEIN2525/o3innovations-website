import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface BenefitBoxProps {
  title: string;
  subtitle: string;
  description: string;
  delay?: number;
}

export function BenefitBox({ title, subtitle, description, delay = 0 }: BenefitBoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 
        transition-colors duration-300"
    >
      <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
      <div className="text-sm font-medium text-white/40 mb-3">{subtitle}</div>
      <p className="text-white/70">{description}</p>
    </motion.div>
  );
}

interface BenefitCarouselProps {
  benefits: BenefitBoxProps[];
}

export function BenefitCarousel({ benefits }: BenefitCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleSwipe = (startX: number, endX: number) => {
    if (startX - endX > 50) {
      // Swipe left
      setCurrentIndex((prevIndex) => (prevIndex + 1) % benefits.length);
    } else if (endX - startX > 50) {
      // Swipe right
      setCurrentIndex((prevIndex) => (prevIndex - 1 + benefits.length) % benefits.length);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    carouselRef.current!.dataset.touchStart = String(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const startX = parseFloat(carouselRef.current!.dataset.touchStart || "0");
    const endX = e.changedTouches[0].clientX;
    handleSwipe(startX, endX);
  };

  return (
    <div className="relative">
      <div
        className="relative overflow-hidden"
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {benefits.map((benefit, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <BenefitBox
                title={benefit.title}
                subtitle={benefit.subtitle}
                description={benefit.description}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {benefits.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
