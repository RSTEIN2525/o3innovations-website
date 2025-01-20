import React from 'react';
import { ClientCard } from './ClientCard';
import { TestimonialCard } from './TestimonialCard';
import { ImpactCard } from './ImpactCard';

// Helper function to check if the screen is mobile
function isMobile() {
  return window.innerWidth <= 768;
}

export function CaseStudyGrid() {
  if (isMobile()) {
    // Mobile Layout: Stack items vertically with reduced height
    return (
      <div className="flex flex-col gap-4">
        <div className="h-90">
          <ClientCard />
        </div>
        <div className="h-90">
          <TestimonialCard />
        </div>
        <div className="h-40">
          <ImpactCard />
        </div>
      </div>
    );
  }

  // Desktop Layout: Original grid layout
  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-4">
        <ClientCard />
      </div>
      <div className="col-span-5">
        <TestimonialCard />
      </div>
      <div className="col-span-3">
        <ImpactCard />
      </div>
    </div>
  );
}
