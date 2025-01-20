// src/components/quiz/data/quizSteps.ts

import { QuizStep } from '../types';

/**
 * Master array of steps:
 * - The first 3 steps are universal (name, email, challenge).
 * - Then sub-steps for each challenge (lead-generation, bounce-rate, social-media, admin-tasks, tech-infrastructure).
 * - Finally, the last steps apply to everyone again.
 *
 * 'challengePath' indicates a step applies only if formData.challenge === 'X'.
 * If 'challengePath' is undefined, it's a universal question for all.
 *
 * type: 'options' => single-choice radio-style answers.
 * type: 'input'   => free-form text box for open-ended questions.
 */
export const quizSteps: QuizStep[] = [
  // 1) Universal Step
  {
    question: "What's your business name?",
    type: 'input',
    inputType: 'text',
    field: 'businessName',
    description: 'Help us personalize your experience',
  },
  // 2) Universal Step
  {
    question: "What's your email address?",
    type: 'input',
    inputType: 'email',
    field: 'email',
    description: "We'll send your detailed report here",
  },
  {
    question: "Are you a B2B or B2C business?",
    type: 'options',
    field: 'businessModel',
    options: [
      { value: 'B2B', label: 'I sell services/products to businesses' },
      { value: 'B2C', label: 'I sell services/products to consumers' },
     
    ],
  },

  
  // 3) Universal Step: picks the challenge
  {
    question: "Which challenge best describes your current situation?",
    type: 'options',
    field: 'challenge',
    options: [
      { value: 'lead-generation', label: 'Lead generation isn’t consistent or scalable' },
      { value: 'bounce-rate', label: 'High customer bounce rate or drop-off' },
      { value: 'social-media', label: 'Social media is ineffective or too time-consuming' },
      { value: 'admin-tasks', label: 'Too many repetitive tasks slowing us down' },
      { value: 'tech-infrastructure', label: 'Technical infrastructure is outdated or inefficient' },
    ],
  },

  // ─────────────────────────────────────────────────
  // LEAD GENERATION (challengePath: 'lead-generation')
  // ─────────────────────────────────────────────────
  {
    challengePath: 'lead-generation',
    question: 'How are you currently performing Lead Generation?',
    type: 'options',
    field: 'leadGenHow',
    options: [
      { value: 'cold-calling', label: 'Cold Calling' },
      { value: 'inbound-marketing', label: 'Inbound Marketing / Content' },
      { value: 'paid-ads', label: 'Paid Ads (Facebook, Google, etc.)' },
      { value: 'word-of-mouth', label: 'Word of Mouth / Referrals' },
      { value: 'other', label: 'Other' },
    ],
  },
  {
    challengePath: 'lead-generation',
    question: 'How Much are you Spending on Lead Generation?',
    type: 'options',
    field: 'leadGenSpend',
    options: [
      { value: '500', label: '$0 - $1,000' },
      { value: '3500', label: '$1,000 - $5,000' },
      { value: '7500', label: '$5,000 - $10,000' },
      { value: '25000', label: '$10,000+' },
    ],
  },
  {
    challengePath: 'lead-generation',
    question: 'How Many New Customers / Clients is it Bringing In (Monthly)?',
    type: 'options',
    field: 'leadGenCustomers',
    options: [
      { value: '3', label: '0-5' },
      { value: '8', label: '6-10' },
      { value: '15', label: '10-20' },
      { value: '75', label: '50-100' },
      { value: '300', label: '100+' },
    ],
  },
  {
    challengePath: 'lead-generation',
    question: 'How Much Revenue Does Each Customer / Client Generate (Approx)?',
    type: 'input',
    inputType: 'number',
    field: 'dollarAmount',
    description: "This is essential for estimating additional revenue we can earn you.",
  },
  {
    challengePath: 'lead-generation',
    question: 'How many more customers could you support if your outreach allowed it?',
    type: 'options',
    field: 'leadGenPotentialCustomers',
    options: [
      { value: '3', label: '0-5' },
      { value: '7', label: '5-10' },
      { value: '15', label: '10-20' },
      { value: '75', label: '50-100' },
      { value: '200', label: '100+' },
    ],
  },
  {
    challengePath: 'lead-generation',
    question: 'How much time are you spending on lead generation each week?',
    type: 'options',
    field: 'leadGenTime',
    options: [
      { value: '4', label: 'Under 5 hours' },
      { value: '8h', label: '5-10 hours' },
      { value: '16h', label: '10-20 hours' },
      { value: '30', label: '20+ hours' },
    ],
  },

  // ──────────────────────────────────────────────────────────────
  // CUSTOMER SUPPORT / BOUNCE RATE (challengePath: 'bounce-rate')
  // ──────────────────────────────────────────────────────────────
  {
    challengePath: 'bounce-rate',
    question: 'What best describes how customers/clients interact with your business?',
    type: 'options',
    field: 'supportMethod',
    options: [
    { value: 'assistant', label: 'Buy Goods on Website' },
    { value: 'booking', label: 'Schedule Appointment on Website' },
    { value: 'phone', label: 'Book Reservation on Phone' },
    { value: 'email', label: 'Contact via Email for Quotes or Assistance' },
    { value: 'social', label: 'Reach Out via Social Media' },
    ],
  },
  {
    challengePath: 'bounce-rate',
    question: 'How much time are you spending trying to fix it per week?',
    type: 'options',
    field: 'supportTime',
    options: [
      { value: '2', label: 'Under 2 hours' },
      { value: '4', label: '2-5 hours' },
      { value: '8', label: '5-10 hours' },
      { value: '30', label: '10+ hours' },
    ],
  },
  {
    challengePath: 'bounce-rate',
    question: 'What is your bounce rate (approx)?',
    type: 'options',
    field: 'bounceRate',
    options: [
      { value: '.16', label: 'Under 20%' },
      { value: '.33', label: '20% - 40%' },
      { value: '.50', label: '40% - 60%' },
      { value: '.90', label: '60%+' },
    ],
  },
  {
    challengePath: 'bounce-rate',
    question: 'How much on average is a customer spending with you?',
    type: 'options',
    field: 'customerValue',
    options: [
      { value: '30', label: 'Under $100' },
      { value: '300', label: '$100 - $500' },
      { value: '800', label: '$500 - $1,000' },
      { value: '3000', label: '$1,000+' },
    ],
  },
  {
    challengePath: 'bounce-rate',
    question: 'How many customers do you have per month?',
    type: 'options',
    field: 'customerCount',
    options: [
      { value: '3', label: '0-5' },
      { value: '7', label: '5-10' },
      { value: '30', label: '10-50' },
      { value: '80', label: '50-100' },
      { value: '250', label: '100+' },
    ],
  },

  // ────────────────────────────────────────────────
  // SOCIAL MEDIA (challengePath: 'social-media')
  // ────────────────────────────────────────────────
  {
    challengePath: 'social-media',
    question: 'How long are you spending on social media each week?',
    type: 'options',
    field: 'socialTime',
    options: [
      { value: '3', label: 'Under 3 hours' },
      { value: '5', label: '3-5 hours' },
      { value: '7', label: '5-10 hours' },
      { value: '20', label: '10+ hours' },
    ],
  },
  {
    challengePath: 'social-media',
    question: 'What is your biggest issue?',
    type: 'options',
    field: 'socialIssue',
    options: [
      { value: 'consistency', label: 'Consistency of posting' },
      { value: 'engagement', label: 'Engagement is too low' },
      { value: 'management', label: 'Hard to manage multiple channels' },
      { value: 'content-planning', label: 'Content planning is difficult' },
    ],
  },
  {
    challengePath: 'social-media',
    question: 'How much do you spendly monthly on social media',
    type: 'options',
    field: 'socialMoney',
    options: [
      { value: '60', label: 'Under $100' },
      { value: '300', label: '$100-$500' },
      { value: '650', label: '$500-$1000' },
      { value: '2100', label: '$1000+' },
    ],
  },
  {
    challengePath: 'social-media',
    question: 'How many customers come from social media monthly?',
    type: 'options',
    field: 'customerCount',
    options: [
      { value: '3', label: 'under 5' },
      { value: '8', label: '5-10' },
      { value: '25', label: '10-30' },
      { value: '100', label: '30+' },
    ],
  }, {
    challengePath: 'social-media',
    question: 'What is your average revenue per customer?',
    type: 'options',
    field: 'customerRevenue',
    options: [
      { value: '25', label: 'under $30' },
      { value: '40', label: '$30-$50' },
      { value: '75', label: '$50-$100' },
      { value: '220', label: '$100+' },
    ],
  },

  // ─────────────────────────────────────────────
  // REPETITIVE TASKS (challengePath: 'admin-tasks')
  // ─────────────────────────────────────────────
  {
    challengePath: 'admin-tasks',
    question: 'What kind of tasks are slowing you down?',
    type: 'input',
    field: 'taskTypes',
  },
  {
    challengePath: 'admin-tasks',
    question: 'How much time per week do these tasks take?',
    type: 'options',
    field: 'tasksTime',
    options: [
      { value: '5', label: '2-5 hours' },
      { value: '10', label: '10-15 hours' },
      { value: '25', label: '15-25 hours' },
      { value: '40', label: '25+ hours' },
    ],
  },
  {
    challengePath: 'admin-tasks',
    question: 'How many employees are involved?',
    type: 'options',
    field: 'tasksEmployees',
    options: [
      { value: '1', label: '1 employee' },
      { value: '4', label: '2-5 employees' },
      { value: '8', label: '6-10 employees' },
      { value: '15', label: '10+ employees' },
    ],
  },
  {
    challengePath: 'admin-tasks',
    question: 'How much are we paying per week for this task?',
    type: 'options',
    field: 'tasksCost',
    options: [
      { value: '300', label: '$0 - $500' },
      { value: '700', label: '$500 - $1,000' },
      { value: '3300', label: '$1,000 - $5,000' },
      { value: '7700', label: '$5,000+' },
    ],
  },

  // ───────────────────────────────────────────────────────
  // OPERATIONAL SOFTWARE STACK (challengePath: 'tech-infrastructure')
  // ───────────────────────────────────────────────────────
  {
    challengePath: 'tech-infrastructure',
    question: 'What are your software needs?',
    type: 'input',
    field: 'softwareNeeds',
  },
  {
    challengePath: 'tech-infrastructure',
    question: 'Where are current solutions falling short?',
    type: 'input',
    field: 'softwareShortcomings',
  },
  {
    challengePath: 'tech-infrastructure',
    question: 'How much time is managing/fixing issues taking?',
    type: 'options',
    field: 'softwareTimeLoss',
    options: [
      { value: '2', label: 'Under 2 hours /week' },
      { value: '5', label: '2-5 hours /week' },
      { value: '10', label: '5-10 hours /week' },
      { value: '20', label: '10+ hours /week' },
    ],
  },
  {
    challengePath: 'tech-infrastructure',
    question: 'How much money through mainteanance costs and users bouncing is the software costing you?',
    type: 'options',
    field: 'softwareCost',
    options: [
      { value: '300', label: 'Under $500/month' },
      { value: '1000', label: '$500 - $2,000/month' },
      { value: '3500', label: '$2,000 - $5,000/month' },
      { value: '10000', label: '$5,000+/month' },
    ],
  },
  {
    challengePath: 'tech-infrastructure',
    question: 'With better infrastructure, how many more clients could you take on?',
    type: 'options',
    field: 'softwarePotentialClients',
    options: [
      { value: '5', label: '0-10' },
      { value: '25', label: '10-50' },
      { value: '75', label: '50-100' },
      { value: '200', label: '100+' },
    ],
  },
  {
    challengePath: 'tech-infrastructure',
    question: 'On average, how much is each client netting you?',
    type: 'options',
    field: 'softwareClientValue',
    options: [
      { value: '50', label: 'Under $100' },
      { value: '350', label: '$100 - $500' },
      { value: '750', label: '$500 - $1,000' },
      { value: '2000', label: '$1,000+' },
    ],
  },

  // ──────────────────────────────────────────
  // FINAL UNIVERSAL QUESTIONS (for everyone)
  // ──────────────────────────────────────────
  {
    question: "What would solving this issue do for your business?",
    type: 'input',
    inputType: 'text',
    field: 'It would allow us to...',
    description: 'Your goals drive personalized recommendations.',
  },
];
