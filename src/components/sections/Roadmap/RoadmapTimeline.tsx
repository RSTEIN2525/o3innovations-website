import React from 'react';
import { RoadmapCard } from './RoadmapCard';
import { roadmapData } from './data';

export function RoadmapTimeline() {
  return (
    <div className="lg:w-2/3">
      <div className="grid gap-8">
        {roadmapData.map((item, index) => (
          <RoadmapCard
            key={item.id}
            {...item}
            index={index}
            total={roadmapData.length}
          />
        ))}
      </div>
    </div>
  );
}