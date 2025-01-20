import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useCalendarStore } from '../../stores/calendarStore';

export function CalendarModal() {
  const { isOpen, closeCalendar } = useCalendarStore();

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  // Re-initialize Calendly when modal opens
  useEffect(() => {
    if (isOpen && window.Calendly) {
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/ryanstein-o3innovations?background_color=000000&text_color=ffffff&primary_color=ffffff',
        parentElement: document.querySelector('.calendly-inline-widget'),
        prefill: {},
        utm: {}
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-4xl bg-black/90 rounded-3xl p-8 border border-white/10"
        >
          <button
            onClick={closeCalendar}
            className="absolute top-4 right-4 p-2 text-white/60 hover:text-white
              rounded-full hover:bg-white/10 transition-colors z-50"
          >
            <X className="w-5 h-5" />
          </button>

          <div 
            className="calendly-inline-widget" 
            style={{ minWidth: '320px', height: '700px' }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}