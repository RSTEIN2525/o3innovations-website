import { Bot, Users, Share2, Workflow, Globe } from 'lucide-react';
import type { FormData, Savings } from '../types';

function calculateMonthlySavings(formData: FormData): number {
  let savings = 0;
  
  // Calculate based on monthly spend
  if (formData.monthlySpend === '1000-5000') savings += 2000;
  else if (formData.monthlySpend === '5000-10000') savings += 4000;
  else if (formData.monthlySpend === '10000+') savings += 8000;

  // Add savings from time efficiency
  const hourlyRate = 50; // Average hourly cost
  if (formData.weeklyHours === '5-10') savings += (7.5 * hourlyRate * 4); // Monthly
  else if (formData.weeklyHours === '10-20') savings += (15 * hourlyRate * 4);
  else if (formData.weeklyHours === '20+') savings += (25 * hourlyRate * 4);

  return savings;
}

function calculatePotentialRevenue(formData: FormData): number {
  let additionalCustomers = 0;
  let averageRevenue = 0;

  // Calculate additional customers
  if (formData.potentialCustomers === '11-50') additionalCustomers = 30;
  else if (formData.potentialCustomers === '51-100') additionalCustomers = 75;
  else if (formData.potentialCustomers === '100+') additionalCustomers = 150;

  // Calculate average revenue
  if (formData.customerRevenue === '100-500') averageRevenue = 300;
  else if (formData.customerRevenue === '500-1000') averageRevenue = 750;
  else if (formData.customerRevenue === '1000+') averageRevenue = 1500;

  return additionalCustomers * averageRevenue;
}

function getRecommendations(formData: FormData) {
  const recommendations = [];

  switch (formData.challenge) {
    case 'lead-generation':
      recommendations.push({
        title: 'AI Outreach Pro',
        description: 'Automated lead generation and follow-up system with 90% response rate',
        icon: Bot
      });
      break;
    case 'bounce-rate':
      recommendations.push({
        title: 'Customer Support Agent',
        description: '24/7 AI support reducing response time by 80% and improving retention',
        icon: Users
      });
      break;
    case 'social-media':
      recommendations.push({
        title: 'SocialSynth AI',
        description: 'Full-service AI social media management with viral content creation',
        icon: Share2
      });
      break;
    case 'admin-tasks':
      recommendations.push({
        title: 'WorkflowAI',
        description: 'Comprehensive automation reducing manual tasks by 75%',
        icon: Workflow
      });
      break;
    case 'tech-infrastructure':
      recommendations.push({
        title: 'TechForge AI',
        description: 'Custom AI development solutions for scalable infrastructure',
        icon: Globe
      });
      break;
  }

  return recommendations;
}

export function calculateSavings(formData: FormData): Savings {
  const monthlySavings = calculateMonthlySavings(formData);
  const potentialRevenue = calculatePotentialRevenue(formData);

  return {
    monthly: monthlySavings,
    annual: monthlySavings * 12,
    potentialRevenue,
    recommendations: getRecommendations(formData)
  };
}