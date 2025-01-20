import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Settings } from 'lucide-react';
import { DynamicIsland } from '../VideoGrid/DynamicIsland';
import { Tag } from '../VideoGrid/Tag';

const featuredProjects = [
  {
    id: "featured-1",
    name: "App Development",
    tags: [
      { id: "1", name: "Enterprise-Ready" },
      { id: "2", name: "Fully Custom" },
      { id: "3", name: "Scalable" }
    ],
    idealFor: ["Fortune 500", "Tech Startups", "Digital Enterprises"],
    description: "Traditional app development is broken—58% fail, 68% overrun budgets, and CEOs are left drowning in technical headaches. That's why we built AI-driven backends to handle support, databases, and everything else—24/7. Get enterprise-level design and features without extra costs, stress, or teams, and know it just works.",
    video: "/customAppDev.mp4",
    icon: <Code2 className="w-12 h-12" />,
    link: "/enterprise-app"
  },
  {
    id: "featured-2",
    name: "Custom Automations",
    tags: [
      { id: "1", name: "AI-Powered" },
      { id: "2", name: "Process Optimization" },
      { id: "3", name: "24/7 Operation" }
    ],
    idealFor: ["Enterprise", "Mid-Market", "Growing Businesses"],
    description: "Transform your operations with custom AI automations that work around the clock. From data processing to workflow optimization, our solutions eliminate manual tasks and streamline your business processes for maximum efficiency.",
    video: "/customAIAutomationPromotion.mp4",
    icon: <Settings className="w-12 h-12" />,
    link: "/custom-automations"
  }
];

export function FeaturedCard() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const isMobile = window.innerWidth <= 768;
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Silently handle autoplay failure
      });
    }
  }, []);

  const handleInteraction = (projectId: string) => {
    if (isMobile || isTouchDevice) {
      setHoveredCard(hoveredCard === projectId ? null : projectId);
    }
  };

  return (
    <div className="space-y-6">
      {featuredProjects.map((project) => {
        const isHovered = hoveredCard === project.id;

        return (
          <motion.div
            key={project.id}
            className={`relative ${
              isMobile ? 'h-[500px]' : 'aspect-[16/8]'
            } rounded-3xl overflow-hidden bg-black/40 backdrop-blur-sm
              ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300`}
            onHoverStart={() =>
              !isMobile && !isTouchDevice && setHoveredCard(project.id)
            }
            onHoverEnd={() =>
              !isMobile && !isTouchDevice && setHoveredCard(null)
            }
            onClick={() => handleInteraction(project.id)}
            whileHover={!isMobile && !isTouchDevice ? { scale: 1.02 } : {}}
            transition={{ duration: 0.3 }}
          >
            <video
              ref={videoRef}
              src={project.video}
              autoPlay
              muted
              loop
              playsInline
              onLoadedData={() => setIsVideoLoaded(true)}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                isVideoLoaded ? 'opacity-80' : 'opacity-0'
              }`}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            <div className="relative z-10 h-full p-8 flex flex-col">
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <Tag key={tag.id} name={tag.name} />
                ))}
              </div>

              <div className="flex-1 flex items-center justify-center text-white">
                <div className="flex items-center gap-6">
                  {project.icon}
                  <h3 className="text-5xl font-bold">{project.name}</h3>
                </div>
              </div>

              {(isMobile || isTouchDevice) && (
                <div className="text-center text-sm text-white/60 mt-4">
                  Tap to {isHovered ? 'close' : 'learn more'}
                </div>
              )}
            </div>

            <AnimatePresence>
              {isHovered && (
                <DynamicIsland
                  tags={project.tags}
                  name={project.name}
                  description={project.description}
                  idealFor={project.idealFor}
                  link={project.link}
                />
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
