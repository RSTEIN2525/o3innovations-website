import { ReactNode } from 'react';

export interface QuizStep {
  question: string;
  type: 'input' | 'options';
  inputType?: string;
  field: string;
  description?: string;
  options?: Array<{
    value: string;
    label: string;
  }>;
}

export interface FormData {
  businessName: string;
  email: string;
  challenge: string;
  monthlySpend: string;
  weeklyHours: string;
  currentCustomers: string;
  potentialCustomers: string;
  customerRevenue: string;
  scalingBottleneck: string;
  reinvestmentArea: string;
}

export interface Savings {
  monthly: number;
  annual: number;
  potentialRevenue: number;
  recommendations: Array<{
    title: string;
    description: string;
    icon: ReactNode;
  }>;
}