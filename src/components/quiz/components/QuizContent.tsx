// src/components/quiz/components/QuizContent.tsx

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuizNavigation } from '../hooks/useQuizNavigation';
import { QuizInput } from './QuizInput';
import { QuizOptions } from './QuizOptions';
import { ProgressBar } from './ProgressBar';
import { quizSteps } from '../data/quizSteps';
import { isStepValid, getStepError } from '../utils/validation';
import { useQuizStore } from '../../../stores/quizStore';

export function QuizContent() {
  const { currentStep, nextStep, prevStep, isFirstStep } = useQuizNavigation();
  const [showError, setShowError] = useState(false);
  const formData = useQuizStore((state) => state.formData);

  const step = quizSteps[currentStep];
  if (!step) {
    // If we ever go out of range, just return null or a fallback
    return null;
  }

  const handleNext = () => {
    if (isStepValid(currentStep, formData)) {
      setShowError(false);
      nextStep();
    } else {
      setShowError(true);
    }
  };

  const error = showError ? getStepError(currentStep, formData) : '';

  return (
    <div className="space-y-6">
      <ProgressBar />

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">
          {step.question}
        </h2>
        {step.description && (
          <p className="text-white/60">{step.description}</p>
        )}
      </div>

      <div className="space-y-2">
        {step.type === 'input' ? (
          <QuizInput field={step.field} type={step.inputType || 'text'} />
        ) : (
          <QuizOptions options={step.options || []} field={step.field} />
        )}

        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-[#E91E63] text-sm mt-2"
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex justify-between pt-4">
        {!isFirstStep && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevStep}
            className="px-6 py-2 text-white/60 hover:text-white transition-colors"
          >
            Back
          </motion.button>
        )}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNext}
          className="ml-auto px-6 py-2 bg-white text-black rounded-full font-medium"
        >
          Continue
        </motion.button>
      </div>
    </div>
  );
}
