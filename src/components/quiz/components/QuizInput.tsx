import React from 'react';
import { useQuizStore } from '../../../stores/quizStore';

interface QuizInputProps {
  field: string;
  type: string;
}

export function QuizInput({ field, type }: QuizInputProps) {
  const formData = useQuizStore(state => state.formData);
  const setFormData = useQuizStore(state => state.setFormData);

  return (
    <input
      type={type}
      value={formData[field as keyof typeof formData] || ''}
      onChange={(e) => setFormData({ [field]: e.target.value })}
      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl
        text-white placeholder-white/40 focus:outline-none focus:border-white/20"
      placeholder={`Enter your ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
    />
  );
}