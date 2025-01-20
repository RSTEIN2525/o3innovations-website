import React from 'react';
import { Savings } from '../../types';

interface RecommendationsProps {
  recommendations: Savings['recommendations'];
}

export function Recommendations({ recommendations }: RecommendationsProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-white">
        Recommended Solutions
      </h3>
      {recommendations.map((rec, index) => (
        <div
          key={index}
          className="p-4 rounded-xl bg-white/5 border border-white/10"
        >
          <div className="font-medium text-white mb-1">{rec.title}</div>
          <div className="text-xs md:text-sm text-white/60">{rec.description}</div>
        </div>
      ))}
    </div>
  );
}