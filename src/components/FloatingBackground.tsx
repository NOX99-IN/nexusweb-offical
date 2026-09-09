import React from 'react';
import { motion } from 'motion/react';
import { Isometric3DCube } from './Floating3DElements';

export const FloatingBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
      style={{ perspective: 1200 }}
    >
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />

      {/* 3D Floating Geometry - Isometric Cubes in space */}
      <div className="absolute top-[12%] left-[4%] opacity-60 hidden md:block">
        <Isometric3DCube size={46} color="blue" duration={18} />
      </div>

      <div className="absolute top-[22%] right-[5%] opacity-55 hidden md:block">
        <Isometric3DCube size={54} color="cyan" duration={22} />
      </div>

      <div className="absolute top-[65%] left-[6%] opacity-40 hidden lg:block">
        <Isometric3DCube size={42} color="emerald" duration={16} />
      </div>

      <div className="absolute top-[75%] right-[8%] opacity-45 hidden lg:block">
        <Isometric3DCube size={48} color="purple" duration={20} />
      </div>

      {/* Floating 3D Glowing Rings */}
      <motion.div
        className="absolute top-[18%] right-[18%] w-24 h-24 rounded-full border border-[#0070f3]/30 shadow-[0_0_25px_rgba(0,112,243,0.3)] hidden lg:block"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{
          rotateX: [65, 75, 65],
          rotateY: [0, 360],
          y: [-10, 10, -10],
        }}
        transition={{
          rotateY: { duration: 16, repeat: Infinity, ease: 'linear' },
          rotateX: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
          y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
        }}
      />

      <motion.div
        className="absolute top-[60%] right-[25%] w-32 h-32 rounded-full border border-[#10b981]/25 shadow-[0_0_30px_rgba(16,185,129,0.25)] hidden lg:block"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{
          rotateX: [-60, -70, -60],
          rotateZ: [0, 360],
          y: [12, -12, 12],
        }}
        transition={{
          rotateZ: { duration: 20, repeat: Infinity, ease: 'linear' },
          rotateX: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
          y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
        }}
      />

      {/* Floating Orb 1 - Emerald / Mint (Top Left to Center) */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[420px] h-[420px] sm:w-[580px] sm:h-[580px] rounded-full bg-gradient-to-tr from-[#00a572]/35 via-[#10b981]/20 to-[#064e3b]/25 blur-[70px] sm:blur-[90px] transform-gpu will-change-transform"
        animate={{
          x: [0, 60, -30, 40, 0],
          y: [0, 50, 90, 20, 0],
          scale: [1, 1.1, 0.95, 1.05, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating Orb 2 - Sapphire / Blue (Top Right to Center Right) */}
      <motion.div
        className="absolute top-[5%] right-[-12%] w-[400px] h-[400px] sm:w-[540px] sm:h-[540px] rounded-full bg-gradient-to-br from-[#2563eb]/30 via-[#3b82f6]/20 to-[#1d4ed8]/25 blur-[70px] sm:blur-[95px] transform-gpu will-change-transform"
        animate={{
          x: [0, -70, -30, -80, 0],
          y: [0, 70, 30, 60, 0],
          scale: [1, 0.92, 1.08, 0.96, 1],
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
        className="absolute top-[40%] left-[-10%] w-[380px] h-[380px] sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-tl from-[#7c3aed]/25 via-[#8b5cf6]/15 to-[#4c1d95]/25 blur-[75px] sm:blur-[95px] transform-gpu will-change-transform"
        animate={{
          x: [0, 80, 40, 60, 0],
          y: [0, -40, 60, 15, 0],
          scale: [1, 1.08, 0.94, 1.04, 1],
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
        className="absolute bottom-[-8%] right-[5%] w-[400px] h-[400px] sm:w-[520px] sm:h-[520px] rounded-full bg-gradient-to-tr from-[#06b6d4]/25 via-[#0ea5e9]/15 to-[#0369a1]/25 blur-[80px] sm:blur-[100px] transform-gpu will-change-transform"
        animate={{
          x: [0, -50, -90, -20, 0],
          y: [0, -60, -30, -70, 0],
          scale: [1, 1.08, 0.95, 1.05, 1],
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
        className="absolute top-[32%] left-[35%] w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full bg-gradient-to-r from-[#ec4899]/15 via-[#a855f7]/15 to-[#6366f1]/15 blur-[80px] sm:blur-[110px] transform-gpu will-change-transform"
        animate={{
          x: [0, 40, -40, 20, 0],
          y: [0, -40, 30, -15, 0],
          scale: [0.92, 1.1, 0.88, 1.05, 0.92],
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
