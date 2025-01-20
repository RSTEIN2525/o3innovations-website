// src/components/quiz/hooks/useQuizNavigation.ts

import { useQuizStore } from '../../../stores/quizStore';
import { quizSteps } from '../data/quizSteps';

export function useQuizNavigation() {
  const { currentStep, nextStep, prevStep, formData } = useQuizStore();

  /**
   * 1. Create an array of "relevant" step indexes based on the user's chosen challenge.
   *    - If a step has `challengePath`, it must match `formData.challenge`.
   *    - If no `challengePath`, it applies to everyone.
   */
  const relevantIndexes = quizSteps
    .map((step, idx) => ({ step, idx }))
    .filter(({ step }) => {
      // If the step has NO challengePath, it's universal
      if (!step.challengePath) return true;
      // If it has a challengePath, it must match the user's chosen challenge
      return step.challengePath === formData.challenge;
    })
    .map(({ idx }) => idx);

  // The total number of steps the user actually has to go through
  const totalRelevantSteps = relevantIndexes.length;

  /**
   * 2. Find the user's "current index" within the relevant steps array,
   *    i.e., among the subset, which step are they on right now?
   */
  const currentRelevantIndex = relevantIndexes.indexOf(currentStep);

  // If we haven't found the currentStep in relevantIndexes yet, treat it as "finished"
  // or you can do something else if you prefer.
  const safeIndex = currentRelevantIndex >= 0 ? currentRelevantIndex : totalRelevantSteps - 1;

  // Are we on the first or last *relevant* step in the user’s path?
  const isFirstStep = safeIndex === 0;
  const isLastStep = safeIndex === totalRelevantSteps - 1;

  /**
   * 3. Compute progress. If safeIndex is 0-based, we use (safeIndex + 1).
   *    Example: If safeIndex=0 and total=5, progress= (1/5)*100 = 20%
   */
  const progress = ((safeIndex + 1) / totalRelevantSteps) * 100;

  return {
    currentStep,       // e.g. the "global" step index
    nextStep,          // store's nextStep function
    prevStep,          // store's prevStep function
    isFirstStep,
    isLastStep,
    progress,
    totalSteps: totalRelevantSteps, // total "relevant" steps
    // Optionally also expose `relevantIndexes` if you need them
    // relevantIndexes
  };
}
