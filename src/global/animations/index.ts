import { Variants } from 'framer-motion';

export type Animation = {
  [key: string]: Variants;
};

export const modal: Animation = {
  content: {
    initial: { scale: 0.9, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { type: 'spring', duration: 0.3 },
    },
    exit: {
      scale: 0.7,
      opacity: 0,
      transition: { type: 'spring', duration: 0.15 },
    },
  },
  overlay: {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.15 } },
  },
};

export const button: Animation = {
  click: {
    initial: {
      scale: 1,
    },
    click: {
      scale: [1, 1.05, 0.8, 1.09, 0.9, 1],
    },
  },
};

export const input: Animation = {
  message: {
    initial: {
      opacity: 0,
      translateY: 40,
    },
    animate: {
      opacity: 1,
      translateY: 0,
    },
    exit: {
      opacity: 0,
      translateY: 40,
    },
  },
};

export const animations = {
  modal,
  input,
  button,
};
