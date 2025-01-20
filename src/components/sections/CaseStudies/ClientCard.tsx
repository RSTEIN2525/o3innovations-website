import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { CaseStudyButtonGroup } from './CaseStudyButtonGroup';

export function ClientCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
   <div className="h-[550px] md:h-[800px] p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col overflow-hidden">
      <div className="flex items-center gap-4 mb-8">
        <img
          src="https://images.squarespace-cdn.com/content/v1/6397513e9e662e4fcb334c99/993538a4-1464-40de-a536-9428a1a15e6c/IMG_2979.jpeg?format=2500w"
          alt="Minor Umanzor"
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h3 className="text-2xl font-semibold text-white">Minor Umanzor</h3>
          <p className="text-lg text-white/60">CEO, Minor Details</p>
        </div>
      </div>

      <div className="flex justify-center mb-8">
        <CaseStudyButtonGroup />
      </div>

      <div className={`relative flex-grow ${isExpanded ? 'overflow-y-auto' : 'overflow-hidden'}`}>
        <div className="space-y-6 text-lg text-white/80 leading-relaxed">

        <p>
         We Saved Minor Details 2,100 Weekly Commutes, Over 100 Admin Hours, and Increased Billable Ticket Rate to 100%
        </p>
          
          <p>
           Minor Details, Maryland's top auto detailing distributor, was thriving—processing 700+ cars a week across 50 dealerships. But behind the scenes, inefficiencies threatened to derail their growth.
          </p>

          <p>
           Their 300 employees were bogged down by outdated processes:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>2100 weekly commutes for signatures drained time, labor, and fuel.</li>
            <li>Lost and illegible invoices delayed payments and strained partnerships.</li>
            <li>40+ admin hours wasted weekly on paperwork instead of scaling the business.</li>
          </ul>

          <p className="font-semibold">A Game-Changing Transformation</p>
          <p>
           We partnered with Minor Details to eliminate the chaos and drive growth with tailored digital solutions:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Paperless Ticketing: Managers create, and employees complete service requests seamlessly.</li>
            <li>AI-Powered Invoicing: Eliminated manual errors, ensuring accuracy and saving time.</li>
            <li>Digital Signatures: Reduced 2,100 weekly commutes to zero, slashing costs and delays.</li>
          </ul>

          <p className="font-semibold">The Results Speak for Themselves</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>2,100 commutes eliminated weekly</li>
            <li>40 hours saved in admin work</li>
            <li>8% increase in billable tickets</li>
            <li>100% Paperless Company</li>
          </ul>

          <div className="pt-4">
            <p className="font-semibold">A Weight Lifted</p>
            <p className="italic">
             With a streamlined system in place, Minor Details is scaling faster and smarter than ever before.
            </p>
          </div>
        </div>

        {!isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0B0B] to-transparent" />
        )}
      </div>

      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 flex items-center gap-2 text-white/60 hover:text-white transition-colors mx-auto"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>{isExpanded ? 'Show Less' : 'Continue Reading'}</span>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>

      <div className="flex items-center justify-center pt-8 mt-8 border-t border-white/10">
        <img 
          src="/minorDetailsWhite.png" 
          alt="Minor Details Logo" 
          className="h-12 w-auto object-contain"
        />
      </div>
    </div>
  );
}