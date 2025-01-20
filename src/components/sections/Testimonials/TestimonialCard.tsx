import React from 'react';
import { Star } from 'lucide-react';
import type { Testimonial } from './types';

export function TestimonialCard({ name, role, company, image, content }: Testimonial) {
  return (
    <div className="w-[400px] flex-shrink-0 rounded-2xl bg-white/5 p-6 
      border border-white/10 hover:bg-white/[0.07] transition-colors duration-300">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-medium text-white">{name}</h4>
          <p className="text-sm text-white/60">{role} at {company}</p>
        </div>
      </div>

      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className="w-4 h-4 fill-[#E91E63] text-[#E91E63]"
          />
        ))}
      </div>

      <p className="text-white/80 line-clamp-4">{content}</p>
    </div>
  );
}