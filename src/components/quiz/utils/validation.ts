import { FormData } from '../types';
import { quizSteps } from '../data/quizSteps';

export function isStepValid(step: number, formData: FormData): boolean {
  const currentStep = quizSteps[step];
  if (!currentStep) return false;

  const value = formData[currentStep.field as keyof FormData];
  
  if (currentStep.type === 'input') {
    if (currentStep.inputType === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return Boolean(value && emailRegex.test(value));
    }
    return Boolean(value && value.trim().length > 0);
  }
  
  return Boolean(value);
}

export function getStepError(step: number, formData: FormData): string {
  const currentStep = quizSteps[step];
  if (!currentStep) return '';

  const value = formData[currentStep.field as keyof FormData];

  if (!value || (typeof value === 'string' && !value.trim())) {
    return 'This field is required';
  }

  if (currentStep.inputType === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return 'Please enter a valid email address';
  }

  return '';
}