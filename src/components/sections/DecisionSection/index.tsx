import React from 'react';
import { BackgroundVideo } from './BackgroundVideo';
import { DecisionCard } from './DecisionCard';

export function DecisionSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <BackgroundVideo />
      <DecisionCard />
    </section>
  );
}