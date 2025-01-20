import React from 'react';
import { WhyUsContent } from './WhyUsContent';
import { SplineMockup } from './SplineMockup';
import { ImpactBar } from './ImpactBar';

export function WhyUs() {
     const isMobile = window.innerWidth <= 768;

  return (
    <section id="why-us" className="relative min-h-screen bg-black pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <WhyUsContent />
          </div>
          { !isMobile &&  <SplineMockup />}
        </div>
      </div>
      {!isMobile && <ImpactBar /> }
    </section>
  );
}
