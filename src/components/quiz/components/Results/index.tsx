import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useQuizStore } from '../../../../stores/quizStore';
import { ResultsHeader } from './ResultsHeader';
import { SavingsDisplay } from './SavingsDisplay';
import { Recommendations } from './Recommendations';
import {DynamicIslandButtonGroup} from '../../../shared/DynamicIslandButtonGroup'

export function Results() {
  const formData = useQuizStore((state) => state.formData);
  const [link, setLink] = useState('');

  // State variables
  const [monthly, setMonthly] = useState(0);
  const [annual, setAnnual] = useState(0);
  const [potentialRevenue, setPotentialRevenue] = useState(0);
  const [timeSaved, setTimeSaved] = useState(0);

  // These two strings will come from the webhook:
  const [recommendationsTitle, setRecommendationsTitle] = useState('');
  const [recommendationsDescription, setRecommendationsDescription] = useState('');

  useEffect(() => {
    const webhookUrl = 'https://hook.us2.make.com/amfv2usj3lzl77n5jzgwaye7wgk1gy9v';

    async function sendDataToWebhook() {
      const payload = {
        formData,
        savings: {
          monthly,
          annual,
          potentialRevenue,
        },
        // (Unused) recommendations: ...
      };

      try {
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        console.log('Data sent successfully to webhook:', payload);

        const responseData = await response.json();
        console.log('Webhook response received: ', responseData);

        if (Array.isArray(responseData) && responseData.length > 0) {
          const data = responseData[0];
          setMonthly(data.timeSaved);
          setAnnual(data.moneySaved);
          setPotentialRevenue(data.newRevenue);
          setTimeSaved(data.timeSaved);

          // Save the two strings:
          setRecommendationsTitle(data.reccomendation);
          setRecommendationsDescription(data.reccommendationDescription);
          
          switch(data.reccomendation)
          {
            case 'App Development':
              setLink('/enterprise-app');
            break;
              case 'Custom Automations':
              setLink('/custom-automations');
            break;
            case 'Expert Guide':
              setLink('/services');
            break;
            case 'Web Architect':
              setLink('/web-architect');
            break;
              case 'Social Synth':
              setLink('/social-synth');
            break;
              case 'Lead Magnet':
              setLink('/lead-magnet');
            break;
              case 'Never Hold':
              setLink('/never-hold');
            break;
              case 'Booking Brain':
               setLink('/booking-brain');
            break;
          }

            
        }
      } catch (error) {
        console.error('Error sending data to webhook:', error);
      }
    }

    sendDataToWebhook();
  }, [formData]);

  /**
   *  Convert our two strings (recommendationsTitle, recommendationsDescription)
   *  into an array that <Recommendations /> can .map() over.
   */
  const recommendationsArray = [
    {
      title: recommendationsTitle,
      description: recommendationsDescription,
    },
  ];

  return (
    <div className="space-y-8">
      <ResultsHeader />
      <SavingsDisplay
        monthly={monthly}
        annual={annual}
        potentialRevenue={potentialRevenue}
        weeklyHours={timeSaved}
      />
      {/* Pass the array to <Recommendations /> */}
      <Recommendations recommendations={recommendationsArray} />

      {/* <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full py-3 bg-white text-black rounded-full font-medium"
      >
        Schedule a Demo
      </motion.button> */}
  
      <DynamicIslandButtonGroup link = {link}/>
    </div>
  );
}
