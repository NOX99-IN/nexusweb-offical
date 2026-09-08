import React from 'react';
import { motion } from 'motion/react';

export const FloatingBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
    >
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />

      {/* Floating Orb 1 - Emerald / Mint (Top Left to Center) */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[480px] h-[480px] sm:w-[650px] sm:h-[650px] rounded-full bg-gradient-to-tr from-[#00a572]/40 via-[#10b981]/25 to-[#064e3b]/30 blur-[100px] sm:blur-[140px]"
        animate={{
          x: [0, 80, -40, 60, 0],
          y: [0, 70, 120, 30, 0],
          scale: [1, 1.15, 0.95, 1.08, 1],
          rotate: [0, 45, 90, 45, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating Orb 2 - Sapphire / Blue (Top Right to Center Right) */}
      <motion.div
        className="absolute top-[5%] right-[-15%] w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] rounded-full bg-gradient-to-br from-[#2563eb]/35 via-[#3b82f6]/25 to-[#1d4ed8]/30 blur-[110px] sm:blur-[150px]"
        animate={{
          x: [0, -90, -40, -110, 0],
          y: [0, 90, 40, 80, 0],
          scale: [1, 0.9, 1.12, 0.95, 1],
          rotate: [0, -60, -120, -60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* Floating Orb 3 - Violet / Royal Purple (Middle Left to Bottom) */}
      <motion.div
        className="absolute top-[40%] left-[-12%] w-[420px] h-[420px] sm:w-[580px] sm:h-[580px] rounded-full bg-gradient-to-tl from-[#7c3aed]/30 via-[#8b5cf6]/20 to-[#4c1d95]/30 blur-[110px] sm:blur-[140px]"
        animate={{
          x: [0, 110, 50, 90, 0],
          y: [0, -60, 80, 20, 0],
          scale: [1, 1.1, 0.92, 1.05, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* Floating Orb 4 - Cyan / Sky Blue (Bottom Right) */}
      <motion.div
        className="absolute bottom-[-10%] right-[5%] w-[460px] h-[460px] sm:w-[620px] sm:h-[620px] rounded-full bg-gradient-to-tr from-[#06b6d4]/30 via-[#0ea5e9]/20 to-[#0369a1]/30 blur-[120px] sm:blur-[160px]"
        animate={{
          x: [0, -70, -120, -30, 0],
          y: [0, -80, -40, -90, 0],
          scale: [1, 1.12, 0.94, 1.08, 1],
          rotate: [0, 90, 180, 90, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
      />

      {/* Floating Orb 5 - Magenta / Rose Accent (Center Subtle Pulse) */}
      <motion.div
        className="absolute top-[30%] left-[35%] w-[380px] h-[380px] sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-r from-[#ec4899]/20 via-[#a855f7]/20 to-[#6366f1]/20 blur-[130px] sm:blur-[170px]"
        animate={{
          x: [0, 50, -50, 30, 0],
          y: [0, -50, 40, -20, 0],
          scale: [0.9, 1.15, 0.85, 1.1, 0.9],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.5,
        }}
      />
    </div>
  );
};
