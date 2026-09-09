import React from 'react';

interface KalingaPixelLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'horizontal' | 'mark';
  showTagline?: boolean;
}

export const KalingaPixelLogo: React.FC<KalingaPixelLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'horizontal',
  showTagline = false,
}) => {
  // Dimension scales
  const dimensions = {
    sm: { markH: 26, markW: 28, textClass: 'text-base', subClass: 'text-[9px]' },
    md: { markH: 34, markW: 36, textClass: 'text-xl', subClass: 'text-[10px]' },
    lg: { markH: 44, markW: 48, textClass: 'text-2xl', subClass: 'text-xs' },
    xl: { markH: 60, markW: 66, textClass: 'text-3xl', subClass: 'text-sm' },
  }[size];

  // The KP Vector Mark matching user's brand design
  const MarkSvg = (
    <svg
      viewBox="0 0 160 140"
      className="shrink-0 transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_12px_rgba(0,102,255,0.35)]"
      style={{ height: dimensions.markH, width: 'auto' }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Kalinga Pixel Logo Mark"
    >
      <defs>
        <linearGradient id="kpKBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="30%" stopColor="#0070f3" />
          <stop offset="100%" stopColor="#0051cc" />
        </linearGradient>
        <linearGradient id="kpFoldShadow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0052cc" />
          <stop offset="100%" stopColor="#003599" />
        </linearGradient>
      </defs>

      {/* K Vertical Bar */}
      <rect x="10" y="14" width="22" height="112" rx="2" fill="url(#kpKBlueGrad)" />

      {/* K Top Diagonal Arm */}
      <path
        d="M 32 60 L 74 14 L 102 14 L 54 68 Z"
        fill="url(#kpKBlueGrad)"
      />

      {/* K Bottom Diagonal Leg (Overlapping 3D fold) */}
      <path
        d="M 44 60 L 106 126 L 76 126 L 30 76 Z"
        fill="url(#kpFoldShadow)"
      />

      {/* P Loop Outer Body (Deep Slate with slight blue tone for dark mode legibility) */}
      <path
        d="M 72 20 C 90 20 126 20 132 20 C 152 20 166 34 166 54 C 166 74 152 88 132 88 L 94 88 L 94 66 L 126 66 C 134 66 142 61 142 54 C 142 47 134 42 126 42 L 72 42 Z"
        fill="#0f172a"
        stroke="#334155"
        strokeWidth="1.5"
      />

      {/* Mouse Cursor Pointer Arrow inside P */}
      <polygon
        points="108,46 126,54 119,57 124,67 119,69 114,59 110,63"
        fill="#0070f3"
      />
    </svg>
  );

  if (variant === 'mark') {
    return <div className={`inline-flex items-center ${className}`}>{MarkSvg}</div>;
  }

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 ${className}`}>
      {MarkSvg}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline gap-1.5 leading-none">
          <span className={`font-black tracking-tight text-white ${dimensions.textClass} uppercase font-sans`}>
            KALINGA
          </span>
          <span className={`font-black tracking-wider text-[#0070f3] ${dimensions.textClass} uppercase font-sans`}>
            PIXEL
          </span>
        </div>
        {showTagline ? (
          <div className="flex items-center gap-1.5 mt-1">
            <span className="h-[1.5px] w-3.5 bg-[#0070f3] rounded-full" />
            <span className={`font-bold tracking-[0.18em] text-[#94a3b8] uppercase ${dimensions.subClass}`}>
              Websites For Your Business
            </span>
            <span className="h-[1.5px] w-3.5 bg-[#0070f3] rounded-full" />
          </div>
        ) : (
          <span className={`font-semibold tracking-wider text-[#64748b] uppercase ${dimensions.subClass} -mt-0.5 hidden sm:block`}>
            Websites For Your Business
          </span>
        )}
      </div>
    </div>
  );
};
