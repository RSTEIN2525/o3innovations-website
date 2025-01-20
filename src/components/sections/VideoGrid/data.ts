import React from 'react';
import { Logos } from './logos';
import type { Project } from './types';

export const projects: Project[] = [
  {
    id: 1,
    name: "ExpertGuide",
    tags: [
      { id: "1", name: "24/7 Customer Support" },
      { id: "2", name: "CRM Integration" }
    ],
    idealFor: ["E-commerce", "SaaS", "Enterprise"],
    logo: React.createElement(Logos.SupportBot),
    video: "/AICustomerSupport.mp4",
    description: "AI-powered chatbot providing 24/7 customer support with seamless business system integration.",
    link: "/services"
  },
  {
    id: 2,
    name: "WebArchitect",
    tags: [
      { id: "1", name: "5-Figure Quality" },
      { id: "2", name: "10hr Delivery" }
    ],
    idealFor: ["Agencies", "Startups", "Personal Brands"],
    logo: React.createElement(Logos.WebBuilder),
    video: "/AIWebsite.mp4",
    description: "Revolutionary tool crafting premium websites with stunning visuals and converting copy in hours.",
    link: "/web-architect"
  },
  {
    id: 3,
    name: "SocialSynth",
    tags: [
      { id: "1", name: "4 Posts/Hour" },
      { id: "2", name: "4K Videos" }
    ],
    idealFor: ["Influencers", "Brands", "Creators"],
    logo: React.createElement(Logos.SocialManager),
    video: "/AISocialMedia.mp4",
    description: "Comprehensive AI tool managing your entire social media presence with trending content creation.",
    link: "/social-synth"
  },
  {
    id: 4,
    name: "LeadMagnet",
    tags: [
      { id: "1", name: "2000+ Emails Daily" },
      { id: "2", name: "Smart Follow-ups" }
    ],
    idealFor: ["Sales Teams", "Recruiters", "B2B"],
    logo: React.createElement(Logos.OutreachBot),
    video: "/AIOutreach.mp4",
    description: "Automated lead generation and follow-ups with precision-targeted emails and social media outreach.",
    link: "/lead-magnet"
  },
  {
    id: 5,
    name: "NeverHold",
    tags: [
      { id: "1", name: "Human-like Voice" },
      { id: "2", name: "Zero Wait Time" }
    ],
    idealFor: ["Medical", "Hospitality", "Services"],
    logo: React.createElement(Logos.VoiceAssistant),
    video: "/AIReceptionist.mp4",
    description: "AI-powered voice assistant handling calls, bookings, and managing reservations seamlessly.",
    link: "/never-hold"
  },
  {
    id: 6,
    name: "BookingBrain",
    tags: [
      { id: "1", name: "Smart Scheduling" },
      { id: "2", name: "24/7 Booking" }
    ],
    idealFor: ["Fitness", "Beauty", "Consulting"],
    logo: React.createElement(Logos.BookingAssistant),
    video: "/AIAppointmentBooking.mp4",
    description: "Streamlined solution for capturing and booking leads, simplifying your workflow efficiently.",
    link: "/booking-brain"
  }
];