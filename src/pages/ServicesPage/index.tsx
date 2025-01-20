import React from 'react';
import { Navbar } from '../../components/layout/Navbar';
import { ServicesHero } from './ServicesHero';
import { ServicesDecision } from './ServicesDecision';
import { Footer } from '../../components/layout/Footer';
import { QuizModal } from '../../components/quiz/components/QuizModal';
import { CalendarModal } from '../../components/calendar/CalendarModal';
import { ExpertGuide } from '../../components/sections/ExpertGuide/index.tsx';
export function ServicesPage() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <ExpertGuide />
       <Footer />
      <CalendarModal />
    </div>
  );
}