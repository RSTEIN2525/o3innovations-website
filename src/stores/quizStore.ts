// src/stores/quizStore.ts

import { create } from 'zustand';
import { FormData } from '../components/quiz/types';
import { quizSteps } from '../components/quiz/data/quizSteps';

interface QuizState {
  isOpen: boolean;
  currentStep: number;
  formData: FormData;
  openQuiz: () => void;
  closeQuiz: () => void;
  nextStep: () => void;
  prevStep: () => void;
  setFormData: (data: Partial<FormData>) => void;
  resetQuiz: () => void;
}

const initialFormData: FormData = {
  businessName: '',
  email: '',
  challenge: '',
  monthlySpend: '',
  weeklyHours: '',
  currentCustomers: '',
  potentialCustomers: '',
  customerRevenue: '',
  scalingBottleneck: '',
  reinvestmentArea: ''
};

export const useQuizStore = create<QuizState>((set, get) => ({
  isOpen: false,
  currentStep: 0,
  formData: initialFormData,

  openQuiz: () => set({ isOpen: true }),

  closeQuiz: () =>
    set({
      isOpen: false,
      currentStep: 0,
      formData: initialFormData,
    }),

  // -- Custom SKIP logic for nextStep --
  nextStep: () => {
    const state = get();
    const { currentStep, formData } = state;
    let nextIndex = currentStep + 1;

    // Skip questions that don't match the chosen challenge
    while (
      nextIndex < quizSteps.length &&
      quizSteps[nextIndex].challengePath &&
      quizSteps[nextIndex].challengePath !== formData.challenge
    ) {
      nextIndex++;
    }

    // If we've gone past the final question, set currentStep to quizSteps.length
    // so that QuizModal sees "isFinished" == true and displays <Results />
    if (nextIndex >= quizSteps.length) {
      set({ currentStep: quizSteps.length });
    } else {
      set({ currentStep: nextIndex });
    }
  },

  // -- Custom SKIP logic for prevStep --
  prevStep: () => {
    const state = get();
    const { currentStep, formData } = state;
    let prevIndex = currentStep - 1;

    if (prevIndex < 0) return;

    // Skip questions that don't match challengePath
    while (
      prevIndex >= 0 &&
      quizSteps[prevIndex].challengePath &&
      quizSteps[prevIndex].challengePath !== formData.challenge
    ) {
      prevIndex--;
    }

    if (prevIndex < 0) {
      prevIndex = 0;
    }

    set({ currentStep: prevIndex });
  },

  setFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),

  resetQuiz: () =>
    set({
      currentStep: 0,
      formData: initialFormData,
    }),
}));
