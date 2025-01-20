import React, { useState, useRef } from 'react';
import { RoadmapStep } from './RoadmapStep';
import { Brain, Video, FileSpreadsheet, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Take the Quiz",
    subtitle: "Discover Your Perfect Solution",
    description: "We start by understanding your business needs and current challenges. In just a few quick questions, we'll identify the most impactful AI tools to skyrocket your growth.",
    tag: "Only Takes 2 Minutes",
  },
  {
    icon: <Video className="w-6 h-6" />,
    title: "Schedule a Demo",
    subtitle: "See It in Action",
    description: "Let's bring your solution to life. During this hands-on call, we'll demonstrate how our tools integrate seamlessly with your operations and solve your toughest pain points.",
    tag: "Completely Free",
  },
  {
    icon: <FileSpreadsheet className="w-6 h-6" />,
    title: "Prepare Your Overview",
    subtitle: "Collaborate for Maximum Impact",
    description: "To ensure we're perfectly aligned, we'll ask you to share a brief overview of your business, past scaling efforts, and the hurdles you've faced.",
    tag: "Simple 5-Min Form",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Join the O3 Innovations Team",
    subtitle: "Launch and Scale with Confidence",
    description: "After the demo, we'll finalize the partnership, and our team will dive in. From end-to-end development to ongoing support, we'll handle it all.",
    tag: "No Long-Term Contract",
  },
];

export function RoadmapSteps() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isMobile = window.innerWidth <= 768;

  // Handle swipe gestures
  const handleSwipe = (startX: number, endX: number) => {
    if (startX - endX > 50) {
      // Swipe left
      setCurrentIndex((prevIndex) => (prevIndex + 1) % steps.length);
    } else if (endX - startX > 50) {
      // Swipe right
      setCurrentIndex((prevIndex) => (prevIndex - 1 + steps.length) % steps.length);
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
    <div className="lg:w-2/3">
      {isMobile ? (
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
            {steps.map((step, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <RoadmapStep
                  {...step}
                  index={index + 1}
                />
              </div>
            ))}
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="grid gap-8">
          {steps.map((step, index) => (
            <RoadmapStep
              key={index}
              {...step}
              index={index + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}
