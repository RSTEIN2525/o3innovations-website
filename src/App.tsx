import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { SocialSynthPage } from './pages/SocialSynth';
import { BookingBrainPage } from './pages/BookingBrain';
import { NeverHoldPage } from './pages/NeverHold';
import { LeadMagnetPage } from './pages/LeadMagnet';
import { EnterpriseAppPage } from './pages/EnterpriseApp';
import { WebArchitectPage } from './pages/WebArchitect';
import { CustomAutomationsPage } from './pages/CustomAutomations';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/social-synth" element={<SocialSynthPage />} />
        <Route path="/booking-brain" element={<BookingBrainPage />} />
        <Route path="/never-hold" element={<NeverHoldPage />} />
        <Route path="/lead-magnet" element={<LeadMagnetPage />} />
        <Route path="/enterprise-app" element={<EnterpriseAppPage />} />
        <Route path="/web-architect" element={<WebArchitectPage />} />
        <Route path="/custom-automations" element={<CustomAutomationsPage />} />
      </Routes>
    </BrowserRouter>
  );
}