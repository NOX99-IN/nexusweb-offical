import React from 'react';
import { motion } from 'motion/react';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  highlightWords?: string[];
  highlightClassName?: string;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className = '',
  delay = 0,
  highlightWords = [],
  highlightClassName = 'text-transparent bg-clip-text bg-gradient-to-r from-[#93c5fd] via-[#60a5fa] to-[#b4c5ff]',
}) => {
  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (customDelay: number = 0) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: customDelay,
      },
    }),
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 14,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      custom={delay}
      className={`inline-flex flex-wrap gap-x-2.5 gap-y-1 ${className}`}
    >
      {words.map((word, index) => {
        const cleanWord = word.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '');
        const isHighlighted = highlightWords.some(
          (hw) => hw.toLowerCase() === cleanWord.toLowerCase()
        );

        return (
          <motion.span
            key={index}
            variants={wordVariants}
            className={`inline-block ${isHighlighted ? highlightClassName : ''}`}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.span>
  );
};
