// src/components/quiz/components/QuizModal.tsx

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useQuizStore } from '../../../stores/quizStore';
import { QuizContent } from './QuizContent';
import { Results } from './Results';
import { quizSteps } from '../data/quizSteps';

export function QuizModal() {
  const { isOpen, closeQuiz, currentStep } = useQuizStore();

  if (!isOpen) return null;

  const isFinished = currentStep >= quizSteps.length;

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
          className="relative w-full max-w-2xl bg-black/90 rounded-3xl p-8 border border-white/10"
        >
          <button
            onClick={closeQuiz}
            className="absolute top-4 right-4 p-2 text-white/60 hover:text-white
              rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {isFinished ? <Results /> : <QuizContent />}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
