import React from 'react';
import { motion } from 'framer-motion';
import { BenefitBox } from './BenefitBox';
import { BenefitCarousel } from './BenefitBox';
import { TrustedBadge } from './TrustedBadge';
import { SplineMockup } from './SplineMockup'
import { ImpactBar } from './ImpactBar';

const benefits = [
  {
    title: "No Headaches Policy",
    subtitle: "Scaling Without the Stress",
    description: "We handle every detail—from creation to maintenance—so you never have to worry about tech headaches or wasted resources."
  },
  {
    title: "A Partner, Not a Vendor",
    subtitle: "Aligned with Your Success",
    description: "We don’t just build solutions; we align with your vision, ensuring every recommendation and feature drives maximum impact for your business."
  },
  {
    title: "Results That Speak",
    subtitle: "Outcomes You Can Measure",
    description: "Every solution we create is designed to deliver tangible, measurable results—whether it’s hours saved, costs reduced, or revenue generated."
  },
  {
    title: "Innovation Without Limits",
    subtitle: "We Love a Challenge",
    description: "We embrace the tough problems others avoid. From first-of-its-kind solutions to constants improvements, we’re always ready to innovate"
  }
];

export function WhyUsContent() {
   const isMobile = window.innerWidth <= 768;
  
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <TrustedBadge />
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-white"
        >
          Why Us
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-white/70 max-w-xl"
        >
          We scale your business with industry-shaking AI solutions—freeing up hours every day, slashing costs, and eliminating stress, so you can focus on what matters most.
        </motion.p>
      </div>

      {isMobile && <SplineMockup /> }
      {isMobile && <ImpactBar />}

       {/* Switch between grid and carousel based on screen size */}
      {isMobile ? (
        <BenefitCarousel benefits={benefits} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitBox 
              key={benefit.title}
              {...benefit}
              delay={index * 0.1}
            />
          ))}
        </div>
      )}
    </div>
  );
}