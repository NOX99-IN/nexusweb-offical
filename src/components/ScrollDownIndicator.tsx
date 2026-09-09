import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface ScrollDownIndicatorProps {
  targetId?: string;
  className?: string;
}

export const ScrollDownIndicator: React.FC<ScrollDownIndicatorProps> = ({
  targetId = 'why-us',
  className = '',
}) => {
  const handleScroll = () => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: 600, behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`flex flex-col items-center justify-center cursor-pointer group select-none ${className}`}
      onClick={handleScroll}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleScroll();
        }
      }}
      aria-label="Scroll down to explore"
    >
      {/* 3D Physical Mouse Element */}
      <motion.div
        className="relative w-7 h-12 rounded-full border-2 border-[#38bdf8]/50 bg-[#0f172a]/80 backdrop-blur-md flex justify-center p-1.5 shadow-[0_0_20px_rgba(56,189,248,0.25)] group-hover:border-[#38bdf8] group-hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] transition-all duration-300"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        style={{
          transformStyle: 'preserve-3d',
          perspective: 600,
        }}
      >
        {/* Mouse Wheel Wheel with 3D animation */}
        <motion.div
          className="w-1.5 h-3 rounded-full bg-gradient-to-b from-[#38bdf8] to-[#0070f3] shadow-[0_0_8px_#38bdf8]"
          animate={{
            y: [0, 14, 0],
            opacity: [1, 0.3, 1],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* 3D Gloss Highlight */}
        <div className="absolute top-1 left-1.5 w-1 h-3 rounded-full bg-white/40 pointer-events-none" />
      </motion.div>

      {/* Label with subtle 3D hover tracking */}
      <div className="mt-2.5 flex items-center gap-1">
        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#94a3b8] group-hover:text-[#38bdf8] transition-colors duration-300">
          Scroll To Explore
        </span>
      </div>

      {/* Animated Cascading 3D Chevrons */}
      <div className="flex flex-col items-center -mt-0.5">
        <motion.div
          animate={{
            y: [0, 5, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ChevronDown className="w-4 h-4 text-[#38bdf8]" />
        </motion.div>
        <motion.div
          className="-mt-2.5"
          animate={{
            y: [0, 6, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.2,
          }}
        >
          <ChevronDown className="w-4 h-4 text-[#0070f3]" />
        </motion.div>
      </div>
    </div>
  );
};
