import React from 'react';
import { ProductHero } from './ProductHero';
import { ProblemStatement } from './ProblemStatement';
import { SolutionFeatures } from './SolutionFeatures';
import { BenefitsCarousel } from './BenefitsCarousel';
import { ProofPoints } from './ProofPoints';
import { CTASection } from './CTASection';

export function NeverHold() {
  return (
    <section className="min-h-screen bg-black py-24">
      <div className="container mx-auto px-4">
        <ProductHero />
        <ProblemStatement />
        <SolutionFeatures />
        <BenefitsCarousel />
        <ProofPoints />
        <CTASection />
      </div>
    </section>
  );
}