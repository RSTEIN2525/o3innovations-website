import React from 'react';
import { GlowEffect } from './GlowEffect';
import { GradientFrame } from './GradientFrame';
import { CalculateSavingsButton } from '../shared/CalculateSavingsButton';
import { AutomationCounter } from '../sections/Hero/AutomationCounter';
import { SplineMockup } from '../sections/WhyUs/SplineMockup';

interface HeroCardProps {
  isHovered: boolean;
  onHoverChange: (isHovered: boolean) => void;
}

export function HeroCard({ isHovered, onHoverChange }: HeroCardProps) {
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
   return (
  <div
    style={{ marginTop: '0rem' }}
    className="relative w-full max-w-[99%] mx-auto px2 py-8 text-center"
    onMouseEnter={() => onHoverChange(true)}
  >
    {/* GlowEffect and GradientFrame removed for mobile simplicity */}

    {/* <div className="mb-2 -mt-8">
      <AutomationCounter />
    </div> */}

    <div className="space-y-6 relative">
      {/* Gradient Title */}
      <h1
        style={{ marginTop: '1rem' }}
        className="text-4xl font-bold bg-gradient-to-r 
        from-[#E91E63] via-white to-[#3498DB] bg-clip-text text-transparent relative z-10 -mb-10"
      >
        8 AI Automations That Simplify Scaling
      </h1>

      
      {/* <div className="relative z-0 -mt-10 -mb-10">
        <SplineMockup />
      </div> */}



{/* Image Mockup */}
<div 
  style={{ marginTop: '3.5rem', marginBottom: '4.5rem' }}
  className="relative z-0 ">
  <img 
    src="/landingPage.png" 
    alt="Mockup" 
    className="w-full h-auto" 
  />
</div>
      

      {/* Description */}
     <p
  className="text-base leading-relaxed text-white/80 relative z-10 -mb-10"
  style={{ marginTop: '-4rem' }}
>
  Get a sneak peek into how your business can reclaim thousands of hours and outcompete full teams with a personalized AI action plan tailored entirely for maximum impact.
</p>

      {/* Button */}
<div  style={{ marginTop: '-.66rem' }} className="flex justify-center transform scale-95 relative z-10">
  <CalculateSavingsButton />
</div>

    </div>
  </div>
);

  }

  // Desktop Layout
  return (
    <div
      className="relative aspect-[16/9]"
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
    >
      <GlowEffect isHovered={isHovered} />
      <GradientFrame isHovered={isHovered} />

      <div className="relative z-20 h-full flex flex-col items-center justify-center p-2 text-center">
        <AutomationCounter />

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 mt-6">
          Automations That Simplify Scaling
        </h1>

        <p className="text-lg md:text-xl text-white/80 max-w-3xl mb-12">
          Get a sneak peek into how your business can reclaim thousands of hours and outcompete full teams with a personalized AI action plan tailored for maximum impact.
        </p>

        <CalculateSavingsButton />
      </div>
    </div>
  );
}
