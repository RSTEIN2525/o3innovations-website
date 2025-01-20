import React from 'react';
import { TestimonialCard } from './TestimonialCard';
import type { Testimonial } from './types';

interface TestimonialRowProps {
  testimonials: Testimonial[];
  direction: 'left' | 'right';
}

export function TestimonialRow({ testimonials, direction }: TestimonialRowProps) {
  return (
    <div className="relative will-change-transform">
      <div className={`flex gap-8 ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}`}>
        {/* Original set */}
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
        {/* Duplicated set for seamless loop */}
        {testimonials.map((testimonial) => (
          <TestimonialCard 
            key={`${testimonial.id}-duplicate`} 
            {...testimonial} 
          />
        ))}
      </div>
    </div>
  );
}