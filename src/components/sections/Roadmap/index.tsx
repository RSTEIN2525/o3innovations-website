import React from 'react';
import { RoadmapIntro } from './RoadmapIntro';
import { RoadmapSteps } from './RoadmapSteps';

export function Roadmap() {
  return (
    <section id="roadmap" className="relative bg-black pt-32 pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <RoadmapIntro />
          <RoadmapSteps />
        </div>
      </div>
    </section>
  );
}