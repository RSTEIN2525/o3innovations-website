import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LeftContent } from './LeftContent';
import { FeaturedCard } from './FeaturedCard';
import { UnifiedButtonGroup } from '../../shared/UnifiedButtonGroup';


export function FeaturedSolution() {
  // Track the scroll position
  const { scrollY } = useScroll();

   // Check if the screen is mobile-sized
  const isMobile = window.innerWidth <= 768;

  let scale, opacity, y;

  // Map scroll range to transform values
  if(isMobile)
  {
       scale = useTransform(scrollY, [4400, 4700], [1, 1]);
     opacity = useTransform(scrollY, [4400, 4700], [1, 0]);
     y = useTransform(scrollY, [4400, 4700], [0, -200]);
  }else
  {
       scale = useTransform(scrollY, [2600, 3100], [1, 0]);
       opacity = useTransform(scrollY, [2600, 3100], [1, 0]);
       y = useTransform(scrollY, [0, 500], [0, -200]);
  }


 

  return (
    <motion.section
      style={{ scale, opacity, y, marginTop: '5rem' }}
      className="bg-black py-8"
    >
      <div className="container mx-auto px-4">
        <div
          className={`grid gap-8 ${
            isMobile ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-6'
          }`}
        >
          <div className={`${isMobile ? '' : 'lg:col-span-2'}`}>
            <LeftContent />
          </div>
          <div className={`${isMobile ? '' : 'lg:col-span-4'}`}>
            <FeaturedCard />
          </div>
        </div>

        {isMobile && 
        
         <div className = "mt-12 flex justify-center items-center" >
           <UnifiedButtonGroup />
         </div>
        
        
        }
      </div>
    </motion.section>
  );
}
