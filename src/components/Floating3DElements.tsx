import React from 'react';
import { motion } from 'motion/react';
import { Zap, MapPin, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';

// Pure CSS 3D Cube Component
export const Isometric3DCube: React.FC<{
  size?: number;
  className?: string;
  duration?: number;
  color?: 'blue' | 'emerald' | 'purple' | 'cyan';
}> = ({ size = 60, className = '', duration = 14, color = 'blue' }) => {
  const half = size / 2;

  const colorThemes = {
    blue: {
      front: 'from-[#0070f3]/70 to-[#0051cc]/80 border-[#38bdf8]/60',
      back: 'from-[#0047b3]/60 to-[#002f80]/70 border-[#0070f3]/40',
      right: 'from-[#005cd6]/80 to-[#003d99]/90 border-[#38bdf8]/50',
      left: 'from-[#0047b3]/60 to-[#002b73]/80 border-[#0070f3]/40',
      top: 'from-[#38bdf8]/85 to-[#0070f3]/85 border-[#bae6fd]/80',
      bottom: 'from-[#002f80]/80 to-[#001f5c]/90 border-[#005cd6]/50',
      glow: 'rgba(0, 112, 243, 0.45)',
    },
    emerald: {
      front: 'from-[#10b981]/70 to-[#059669]/80 border-[#34d399]/60',
      back: 'from-[#047857]/60 to-[#064e3b]/70 border-[#10b981]/40',
      right: 'from-[#059669]/80 to-[#047857]/90 border-[#34d399]/50',
      left: 'from-[#047857]/60 to-[#022c22]/80 border-[#10b981]/40',
      top: 'from-[#34d399]/85 to-[#10b981]/85 border-[#a7f3d0]/80',
      bottom: 'from-[#022c22]/80 to-[#011710]/90 border-[#059669]/50',
      glow: 'rgba(16, 185, 129, 0.45)',
    },
    purple: {
      front: 'from-[#8b5cf6]/70 to-[#6d28d9]/80 border-[#c4b5fd]/60',
      back: 'from-[#5b21b6]/60 to-[#4c1d95]/70 border-[#8b5cf6]/40',
      right: 'from-[#7c3aed]/80 to-[#5b21b6]/90 border-[#c4b5fd]/50',
      left: 'from-[#5b21b6]/60 to-[#2e1065]/80 border-[#8b5cf6]/40',
      top: 'from-[#a78bfa]/85 to-[#8b5cf6]/85 border-[#ddd6fe]/80',
      bottom: 'from-[#2e1065]/80 to-[#1e0a45]/90 border-[#6d28d9]/50',
      glow: 'rgba(139, 92, 246, 0.45)',
    },
    cyan: {
      front: 'from-[#06b6d4]/70 to-[#0891b2]/80 border-[#67e8f9]/60',
      back: 'from-[#0e7490]/60 to-[#155e75]/70 border-[#06b6d4]/40',
      right: 'from-[#0891b2]/80 to-[#0e7490]/90 border-[#67e8f9]/50',
      left: 'from-[#0e7490]/60 to-[#164e63]/80 border-[#06b6d4]/40',
      top: 'from-[#22d3ee]/85 to-[#06b6d4]/85 border-[#a5f3fc]/80',
      bottom: 'from-[#164e63]/80 to-[#083344]/90 border-[#0891b2]/50',
      glow: 'rgba(6, 182, 212, 0.45)',
    },
  }[color];

  return (
    <div
      className={`relative select-none pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        perspective: 800,
      }}
    >
      <motion.div
        className="w-full h-full relative"
        style={{
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateX: [15, 375],
          rotateY: [25, 385],
          rotateZ: [0, 360],
          y: [-8, 8, -8],
        }}
        transition={{
          rotateX: { duration, repeat: Infinity, ease: 'linear' },
          rotateY: { duration: duration * 1.2, repeat: Infinity, ease: 'linear' },
          rotateZ: { duration: duration * 2, repeat: Infinity, ease: 'linear' },
          y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        {/* Front Face */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${colorThemes.front} border backdrop-blur-xs rounded-xs`}
          style={{
            transform: `translateZ(${half}px)`,
            boxShadow: `0 0 15px ${colorThemes.glow}`,
          }}
        />

        {/* Back Face */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${colorThemes.back} border backdrop-blur-xs rounded-xs`}
          style={{
            transform: `rotateY(180deg) translateZ(${half}px)`,
          }}
        />

        {/* Right Face */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${colorThemes.right} border backdrop-blur-xs rounded-xs`}
          style={{
            transform: `rotateY(90deg) translateZ(${half}px)`,
          }}
        />

        {/* Left Face */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${colorThemes.left} border backdrop-blur-xs rounded-xs`}
          style={{
            transform: `rotateY(-90deg) translateZ(${half}px)`,
          }}
        />

        {/* Top Face */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${colorThemes.top} border backdrop-blur-xs rounded-xs`}
          style={{
            transform: `rotateX(90deg) translateZ(${half}px)`,
          }}
        />

        {/* Bottom Face */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${colorThemes.bottom} border backdrop-blur-xs rounded-xs`}
          style={{
            transform: `rotateX(-90deg) translateZ(${half}px)`,
          }}
        />
      </motion.div>
    </div>
  );
};

// Interactive Floating Badge in 3D Space
export const Floating3DBadge: React.FC<{
  icon: React.ReactNode;
  label: string;
  sublabel: string;
  color?: 'emerald' | 'blue' | 'purple' | 'cyan';
  className?: string;
  delay?: number;
  yOffset?: number;
}> = ({
  icon,
  label,
  sublabel,
  color = 'blue',
  className = '',
  delay = 0,
  yOffset = 12,
}) => {
  const styles = {
    blue: 'border-blue-500/40 bg-[#0f172a]/85 shadow-[0_12px_28px_-6px_rgba(0,112,243,0.35)]',
    emerald: 'border-emerald-500/40 bg-[#064e3b]/85 shadow-[0_12px_28px_-6px_rgba(16,185,129,0.35)]',
    purple: 'border-purple-500/40 bg-[#1e1b4b]/85 shadow-[0_12px_28px_-6px_rgba(139,92,246,0.35)]',
    cyan: 'border-cyan-500/40 bg-[#0c4a6e]/85 shadow-[0_12px_28px_-6px_rgba(6,182,212,0.35)]',
  }[color];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [-yOffset, yOffset, -yOffset],
        rotateX: [-4, 4, -4],
        rotateY: [-6, 6, -6],
      }}
      transition={{
        opacity: { duration: 0.6, delay },
        scale: { duration: 0.6, delay },
        y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay },
        rotateX: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay },
        rotateY: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay },
      }}
      whileHover={{
        scale: 1.08,
        y: -5,
        transition: { duration: 0.2 },
      }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 800,
      }}
      className={`absolute z-20 px-3.5 py-2.5 rounded-2xl border backdrop-blur-md flex items-center gap-3 cursor-default transition-all select-none ${styles} ${className}`}
    >
      <div className="shrink-0 p-2 rounded-xl bg-white/10 text-white shadow-inner flex items-center justify-center">
        {icon}
      </div>
      <div className="text-left leading-tight">
        <div className="text-xs font-bold text-white tracking-tight flex items-center gap-1.5">
          {label}
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        </div>
        <div className="text-[10px] text-gray-300 font-medium">{sublabel}</div>
      </div>
    </motion.div>
  );
};
