import React from 'react';
import { TestimonialRow } from './TestimonialRow';
import { testimonials } from './data';

export function ScrollingTestimonials() {
  // Split testimonials into two rows
  const firstRow = testimonials.slice(0, 4);
  const secondRow = testimonials.slice(4, 8);

  return (
    <div className="relative will-change-transform">
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />

      <div className="space-y-12">
        <div className="overflow-hidden">
          <TestimonialRow testimonials={firstRow} direction="left" />
        </div>
        <div className="overflow-hidden">
          <TestimonialRow testimonials={secondRow} direction="right" />
        </div>
      </div>
    </div>
  );
}