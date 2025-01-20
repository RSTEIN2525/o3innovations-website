import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const benefits = [
  {
    title: "Process Automation",
    description: "Eliminate manual tasks completely",
    details: "From data entry to complex workflows"
  },
  {
    title: "Smart Optimization",
    description: "AI learns and improves processes",
    details: "Continuous improvement without effort"
  },
  {
    title: "Custom Integration",
    description: "Works with your existing tools",
    details: "Seamless connection to your stack"
  },
  {
    title: "Scalable Operations",
    description: "Grow without adding overhead",
    details: "Handle 10x volume automatically"
  }
];

export function BenefitsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((current) => (current + 1) % benefits.length);
  };

  const prev = () => {
    setCurrentIndex((current) => (current - 1 + benefits.length) % benefits.length);
  };

  return (
    <div className="mb-24">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">
        How It Works
      </h2>

      <div className="relative">
        <div className="overflow-hidden rounded-2xl bg-white/5 border border-white/10">
          <div className="relative h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 p-8 flex flex-col justify-center"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {benefits[currentIndex].title}
                </h3>
                <p className="text-xl text-white/60 mb-4">
                  {benefits[currentIndex].description}
                </p>
                <p className="text-white/40">
                  {benefits[currentIndex].details}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full
            bg-white/10 hover:bg-white/20 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full
            bg-white/10 hover:bg-white/20 transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        <div className="flex justify-center gap-2 mt-6">
          {benefits.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}