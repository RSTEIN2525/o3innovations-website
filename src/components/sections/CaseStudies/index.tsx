import React from 'react';
import { CaseStudyGrid } from './CaseStudyGrid';
import { CaseStudyHeader } from './CaseStudyHeader';

export function CaseStudies() {
  return (
    <section id="case-studies" className="min-h-screen bg-black pt-32 pb-24">
      <div className="container mx-auto px-4">
        <CaseStudyHeader />
        <CaseStudyGrid />
      </div>
    </section>
  );
}