import React from 'react';
import {
  MapPin,
  MessageCircle,
  Zap,
  ShieldCheck,
  Code2,
  Globe2,
  Smartphone,
  Cpu,
  Sparkles,
  CreditCard,
  SearchCheck,
} from 'lucide-react';

interface MarqueeItem {
  icon: React.ReactNode;
  label: string;
  sublabel: string;
}

const MARQUEE_ITEMS: MarqueeItem[] = [
  {
    icon: <MapPin className="w-5 h-5 text-[#4edea3]" />,
    label: 'Google Maps Local 3-Pack',
    sublabel: 'Top Local Search Rank',
  },
  {
    icon: <MessageCircle className="w-5 h-5 text-[#38bdf8]" />,
    label: 'WhatsApp Business API',
    sublabel: '1-Tap Direct Chat Leads',
  },
  {
    icon: <Zap className="w-5 h-5 text-[#fbbf24]" />,
    label: 'Google PageSpeed 98+',
    sublabel: 'Sub-2s Instant Mobile Load',
  },
  {
    icon: <Code2 className="w-5 h-5 text-[#60a5fa]" />,
    label: 'React & Modern TypeScript',
    sublabel: 'Zero Legacy WordPress Bloat',
  },
  {
    icon: <Globe2 className="w-5 h-5 text-[#c084fc]" />,
    label: 'Cloudflare Global Edge',
    sublabel: 'Ultra-Fast 99.9% Uptime',
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-[#4edea3]" />,
    label: 'Bank-Grade SSL Certificate',
    sublabel: '256-Bit Encrypted HTTPS',
  },
  {
    icon: <Smartphone className="w-5 h-5 text-[#38bdf8]" />,
    label: '100% Mobile Responsive',
    sublabel: 'Tested on iOS & Android',
  },
  {
    icon: <CreditCard className="w-5 h-5 text-[#34d399]" />,
    label: 'UPI & Instant QR Payments',
    sublabel: 'Google Pay, PhonePe, Cards',
  },
  {
    icon: <SearchCheck className="w-5 h-5 text-[#93c5fd]" />,
    label: 'Schema.org JSON-LD',
    sublabel: 'Rich SERP FAQ Snippets',
  },
  {
    icon: <Cpu className="w-5 h-5 text-[#f472b6]" />,
    label: '100% Client Ownership',
    sublabel: 'Zero Monthly Agency Lock-in',
  },
];

export const LogoMarquee: React.FC = () => {
  return (
    <section className="relative w-full py-8 overflow-hidden bg-[#070e22] border-y border-[#1a233a]">
      {/* Side Gradient Masks for Seamless Edge Fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-[#070e22] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-[#070e22] to-transparent z-10 pointer-events-none" />

      {/* Floating Ambient Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-64 h-24 bg-blue-500/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-64 h-24 bg-emerald-500/10 blur-3xl pointer-events-none" />

      {/* Marquee Track (Duplicated for Infinite Seamless Loop) */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-5 py-2.5 mx-3 rounded-xl bg-[#11192e]/80 border border-[#222c47] hover:border-[#38bdf8]/50 hover:bg-[#16213b] transition-all duration-200 group shrink-0"
          >
            <div className="p-2 rounded-lg bg-black/40 border border-white/5 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#93c5fd] transition-colors whitespace-nowrap">
                {item.label}
              </span>
              <span className="text-[11px] text-[#94a3b8] whitespace-nowrap">
                {item.sublabel}
              </span>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .animate-marquee {
          animation: marquee 34s linear infinite;
        }
      `}</style>
    </section>
  );
};
