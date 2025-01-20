import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { VideoCard } from './VideoCard';
import { SectionHeader } from './SectionHeader';
import { projects } from './data';

export function VideoGrid() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [300, 500], [0, 1]);
  const scale = useTransform(scrollY, [300, 500], [0.8, 1]);

  return (
    <motion.section 
      style={{ opacity, scale }}
      className="relative bg-black"
    > 
      <div className="relative pt-40 pb-32">
        <div className="container mx-auto px-4">
          <SectionHeader />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1
                }}
              >
                <VideoCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}