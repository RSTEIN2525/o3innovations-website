import React from 'react';
import { TestimonialHeader } from './TestimonialHeader';
import { ScrollingTestimonials } from './ScrollingTestimonials';

export function Testimonials() {
  return (
    <section className="relative bg-black py-24 overflow-hidden">
      <TestimonialHeader />
      <ScrollingTestimonials />
    </section>
  );
}