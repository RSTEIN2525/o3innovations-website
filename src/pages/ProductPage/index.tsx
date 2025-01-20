import React, { useEffect } from 'react';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { CalendarModal } from '../../components/calendar/CalendarModal';
import { QuizModal } from '../../components/quiz/components/QuizModal';

// 1) Import the quiz store
import { useQuizStore } from '../../components/quiz/../../stores/quizStore';

interface ProductPageProps {
  children: React.ReactNode;
}

export function ProductPage({ children }: ProductPageProps) {
  // 2) Grab the closeQuiz function from the store
  const closeQuiz = useQuizStore((state) => state.closeQuiz);

  // 3) Call closeQuiz() as soon as ProductPage mounts
  useEffect(() => {
    closeQuiz();
  }, [closeQuiz]);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      {children}
      <Footer />
      <CalendarModal />
      <QuizModal />
    </div>
  );
}
