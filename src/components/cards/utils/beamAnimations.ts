import { Variants } from 'framer-motion';

export const beamVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: [0.3, 0.7, 0.3],
    scale: [0.8, 1.1, 0.8],
  },
};

export const beamTransition = {
  duration: 3,
  repeat: Infinity,
  ease: "easeInOut",
};