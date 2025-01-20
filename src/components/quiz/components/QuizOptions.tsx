import React from 'react';
import { motion } from 'framer-motion';
import { useQuizStore } from '../../../stores/quizStore';

interface QuizOptionsProps {
  options: Array<{ value: string; label: string }>;
  field: string;
}

export function QuizOptions({ options, field }: QuizOptionsProps) {
  const formData = useQuizStore(state => state.formData);
  const setFormData = useQuizStore(state => state.setFormData);
  const selectedValue = formData[field as keyof typeof formData];

  return (
    <div className="grid grid-cols-2 gap-4">
      {options.map((option) => (
        <motion.button
          key={option.value}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setFormData({ [field]: option.value })}
          className={`p-4 rounded-xl border text-left transition-colors
            ${selectedValue === option.value
              ? 'bg-white/10 border-white/20 text-white'
              : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/[0.07]'
            }`}
        >
          {option.label}
        </motion.button>
      ))}
    </div>
  );
}