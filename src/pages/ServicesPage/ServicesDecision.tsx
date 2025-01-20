import React from 'react';
import { motion } from 'framer-motion';
import { ServicesDecisionCard } from './ServicesDecisionCard';
import { ServicesBackgroundVideo } from './ServicesBackgroundVideo';

export function ServicesDecision() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ServicesBackgroundVideo />
      <ServicesDecisionCard />
    </section>
  );
}