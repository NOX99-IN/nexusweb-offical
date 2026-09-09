import React from 'react';

interface FloatingPixel {
  id: number;
  size: number;
  left: string;
  top: string;
  duration: number;
  delay: number;
  color: 'emerald' | 'cyan' | 'blue' | 'purple' | 'amber';
  opacity: number;
  rotate: number;
}

const PIXELS: FloatingPixel[] = [
  { id: 1, size: 10, left: '8%', top: '15%', duration: 18, delay: 0, color: 'cyan', opacity: 0.6, rotate: 12 },
  { id: 2, size: 16, left: '18%', top: '35%', duration: 22, delay: 2, color: 'emerald', opacity: 0.5, rotate: 45 },
  { id: 3, size: 8, left: '28%', top: '12%', duration: 15, delay: 4, color: 'blue', opacity: 0.7, rotate: 20 },
  { id: 4, size: 14, left: '82%', top: '20%', duration: 20, delay: 1, color: 'purple', opacity: 0.55, rotate: 30 },
  { id: 5, size: 12, left: '92%', top: '45%', duration: 24, delay: 3, color: 'emerald', opacity: 0.6, rotate: 15 },
  { id: 6, size: 18, left: '75%', top: '70%', duration: 26, delay: 5, color: 'cyan', opacity: 0.45, rotate: 60 },
  { id: 7, size: 10, left: '12%', top: '80%', duration: 19, delay: 2.5, color: 'amber', opacity: 0.5, rotate: 25 },
  { id: 8, size: 12, left: '48%', top: '85%', duration: 21, delay: 6, color: 'blue', opacity: 0.6, rotate: 40 },
  { id: 9, size: 6, left: '60%', top: '25%', duration: 14, delay: 3.5, color: 'emerald', opacity: 0.8, rotate: 10 },
  { id: 10, size: 14, left: '38%', top: '65%', duration: 25, delay: 1.5, color: 'purple', opacity: 0.5, rotate: 50 },
];

export const FloatingPixels: React.FC = () => {
  const getColorClasses = (color: FloatingPixel['color']) => {
    switch (color) {
      case 'emerald':
        return 'bg-[#4edea3] shadow-[0_0_12px_#4edea3] border-emerald-300';
      case 'cyan':
        return 'bg-[#38bdf8] shadow-[0_0_12px_#38bdf8] border-cyan-300';
      case 'blue':
        return 'bg-[#60a5fa] shadow-[0_0_12px_#60a5fa] border-blue-300';
      case 'purple':
        return 'bg-[#c084fc] shadow-[0_0_12px_#c084fc] border-purple-300';
      case 'amber':
        return 'bg-[#fbbf24] shadow-[0_0_12px_#fbbf24] border-amber-300';
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {PIXELS.map((p) => (
        <div
          key={p.id}
          className="absolute"
          style={{
            left: p.left,
            top: p.top,
          }}
        >
          <div
            className={`border border-white/20 rounded-[3px] transition-all will-change-transform ${getColorClasses(
              p.color
            )}`}
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              transform: `rotate(${p.rotate}deg)`,
              animation: `floatAround ${p.duration}s ease-in-out infinite alternate ${p.delay}s`,
            }}
          />
        </div>
      ))}
      <style>{`
        @keyframes floatAround {
          0% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          50% {
            transform: translate3d(14px, -24px, 0) rotate(90deg) scale(1.1);
          }
          100% {
            transform: translate3d(-18px, -45px, 0) rotate(180deg) scale(0.9);
          }
        }
      `}</style>
    </div>
  );
};
