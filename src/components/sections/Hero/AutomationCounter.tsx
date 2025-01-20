import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Timer } from 'lucide-react';

export function AutomationCounter() {
  const [count, setCount] = useState(0);
  const targetCount = 3000;
  
  useEffect(() => {
    const duration = 8000; // 2 seconds
    const steps = 300;
    const increment = (targetCount - 1000) / steps;
    const stepDuration = duration / steps;
    
    let currentStep = 0;
    
    const interval = setInterval(() => {
      if (currentStep < steps) {
        setCount(prev => Math.min(prev + increment, targetCount));
        currentStep++;
      } else {
        clearInterval(interval);
      }
    }, stepDuration);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
      <Timer className="w-4 h-4 text-[#E91E63]" />
      <span className="text-sm font-medium text-white">
        {Math.round(count).toLocaleString()}+ Automation Hours Delivered
      </span>
    </div>
  );
}