import React from 'react';
import { Hero } from '../components/sections/Hero';
import { VideoGrid } from '../components/sections/VideoGrid';
import { FeaturedSolution } from '../components/sections/FeaturedSolution';
import { WhyUs } from '../components/sections/WhyUs';
import { CaseStudies } from '../components/sections/CaseStudies';
import { AppPreview } from '../components/sections/AppPreview';
import { Roadmap } from '../components/sections/Roadmap';
import { DecisionSection } from '../components/sections/DecisionSection';
import { FinalCTA } from '../components/sections/FinalCTA';
import { Footer } from '../components/layout/Footer';
import { QuizModal } from '../components/quiz/components/QuizModal';
import { CalendarModal } from '../components/calendar/CalendarModal';

export function HomePage() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Hero />
      <div id = "servicesBox">
         <VideoGrid />
      <FeaturedSolution />
      </div>
     
      <div id="why-us">
        <WhyUs />
      </div>
      <div id="case-studies">
        <CaseStudies />
      </div>
      <AppPreview />
      <div id="roadmap">
        <Roadmap />
      </div>
      <DecisionSection />
      <FinalCTA />
      <Footer />
      <QuizModal />
      <CalendarModal />
    </div>
  );
}