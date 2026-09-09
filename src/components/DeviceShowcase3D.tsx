import React, { useState, useRef, useEffect } from 'react';
import {
  Lock,
  RotateCw,
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  Star,
  CheckCircle2,
  Calendar,
  Sparkles,
  Smartphone,
  Laptop,
  Maximize2,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface ClientPreview {
  id: string;
  name: string;
  category: string;
  url: string;
  tagline: string;
  color: string;
  phoneMessage: string;
  heroHeadline: string;
  heroBadge: string;
  stats: { label: string; value: string }[];
  accentColor: string;
}

const PREVIEWS: ClientPreview[] = [
  {
    id: 'clinic',
    name: 'Aura Aesthetics Dental Clinic',
    category: 'Healthcare & Clinic',
    url: 'https://auradental.in/appointments',
    tagline: 'Premier Dental Implants & Smile Design in Bhubaneswar',
    color: '#0ea5e9',
    accentColor: '#38bdf8',
    phoneMessage: 'Hi Doctor, I would like to book a dental checkup consultation.',
    heroHeadline: 'Smile With Complete Confidence Every Day',
    heroBadge: '⚡ Same-Day Consultations Available',
    stats: [
      { label: 'Patient Rating', value: '4.9 ★' },
      { label: 'Google Reviews', value: '380+' },
      { label: 'WhatsApp Inquiries', value: '3.8x' },
    ],
  },
  {
    id: 'restaurant',
    name: 'Spice Symphony Fine Dining',
    category: 'Restaurant & Lounge',
    url: 'https://spicesymphony.com/menu',
    tagline: 'Authentic Coastal Culinary Flavors & Craft Beverages',
    color: '#f59e0b',
    accentColor: '#fbbf24',
    phoneMessage: 'Hi Spice Symphony, I want to reserve a dinner table for 4 guests.',
    heroHeadline: 'Experience Masterpiece Coastal Gastronomy',
    heroBadge: '🍽️ Zero-Commission Table Booking',
    stats: [
      { label: 'Direct Bookings', value: '620+' },
      { label: 'Commission Saved', value: '₹1.2L' },
      { label: 'Food Rating', value: '4.8 ★' },
    ],
  },
  {
    id: 'fitness',
    name: 'Apex Fitness & CrossFit Studio',
    category: 'Gym & Sports Club',
    url: 'https://apexfitness.in/trial-pass',
    tagline: 'High-Energy Strength, Conditioning & Personal Training',
    color: '#10b981',
    accentColor: '#4edea3',
    phoneMessage: 'Hi Apex Fitness, I want to claim my Free 1-Day Trial Pass.',
    heroHeadline: 'Transform Your Body & Unlock Peak Strength',
    heroBadge: '🔥 Claim Free 1-Day Trial Workout',
    stats: [
      { label: 'New Memberships', value: '+200%' },
      { label: 'PageSpeed Score', value: '99/100' },
      { label: 'Batch Bookings', value: 'Live' },
    ],
  },
  {
    id: 'interior',
    name: 'Urban Crafts Interior Studio',
    category: 'Luxury Architecture',
    url: 'https://urbancrafts.design/portfolio',
    tagline: 'Turnkey Residential Villas & Bespoke Living Spaces',
    color: '#a855f7',
    accentColor: '#c084fc',
    phoneMessage: 'Hi Urban Crafts, I am interested in interior design for my 3BHK home.',
    heroHeadline: 'Designing Spaces That Elevate Modern Living',
    heroBadge: '📐 Instant Budget Estimate Calculator',
    stats: [
      { label: 'Projects Completed', value: '85+' },
      { label: 'Signed Contracts', value: '₹42L+' },
      { label: 'Client Trust', value: '100%' },
    ],
  },
];

export const DeviceShowcase3D: React.FC = () => {
  const [activePreview, setActivePreview] = useState<ClientPreview>(PREVIEWS[0]);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse 3D Tilt calculation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5

    // Smooth tilt angles
    setTilt({
      x: x * 14, // rotateY
      y: -y * 14, // rotateX
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div className="w-full my-8 relative flex flex-col items-center">
      {/* Client Preview Selector Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8 z-20">
        <span className="text-xs font-semibold text-[#94a3b8] mr-1 hidden sm:inline flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-[#38bdf8]" /> Interactive Live Preview:
        </span>
        {PREVIEWS.map((item) => (
          <button
            key={item.id}
            onClick={() => setActivePreview(item)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer flex items-center gap-1.5 border ${
              activePreview.id === item.id
                ? 'bg-[#172554] text-white border-blue-400 shadow-[0_0_15px_rgba(56,189,248,0.4)] scale-105'
                : 'bg-[#11192e] text-[#94a3b8] border-[#222c47] hover:text-white hover:border-[#38bdf8]/40'
            }`}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: item.accentColor }}
            />
            <span>{item.category}</span>
          </button>
        ))}
      </div>

      {/* 3D Staging Canvas */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="w-full max-w-5xl relative px-2 sm:px-4 cursor-pointer"
        style={{ perspective: 1400 }}
      >
        {/* Device Stage with 3D Tilt */}
        <div
          className="relative transition-transform duration-200 ease-out flex items-center justify-center py-6"
          style={{
            transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Ambient Ground Lighting / Shadow */}
          <div className="absolute -bottom-6 w-4/5 h-16 bg-gradient-to-t from-blue-600/20 via-[#00a572]/15 to-transparent blur-2xl rounded-full pointer-events-none -translate-z-20" />

          {/* ========================================================
              LAPTOP 3D MOCKUP
             ======================================================== */}
          <div
            className="w-full max-w-3xl relative rounded-2xl bg-gradient-to-b from-[#2b3347] via-[#1c2235] to-[#121727] p-2.5 sm:p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(59,130,246,0.15)] border border-[#3e4863]"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Top Display Bezel with Camera */}
            <div className="relative flex items-center justify-center pb-1">
              <div className="w-2 h-2 rounded-full bg-black border border-white/20 flex items-center justify-center">
                <div className="w-0.5 h-0.5 rounded-full bg-cyan-400 animate-pulse" />
              </div>
            </div>

            {/* ========================================================
                BROWSER MOCKUP CONTAINER
               ======================================================== */}
            <div className="relative rounded-xl overflow-hidden bg-[#0a0f1d] border border-[#222c47] shadow-inner">
              {/* Browser Header Bar */}
              <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 bg-[#141b2d] border-b border-[#222c47] select-none text-xs">
                {/* Traffic Light Dots */}
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] border border-[#e0443e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] border border-[#1aab29]" />
                  {/* Browser Nav Arrows */}
                  <div className="hidden sm:flex items-center gap-2 ml-3 text-[#64748b]">
                    <ArrowLeft className="w-3 h-3 hover:text-white transition-colors" />
                    <ArrowRight className="w-3 h-3 hover:text-white transition-colors" />
                    <RotateCw className="w-3 h-3 hover:text-white transition-colors" />
                  </div>
                </div>

                {/* URL Bar */}
                <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#0a0f1d] border border-[#222c47] text-[#94a3b8] text-[11px] max-w-[280px] sm:max-w-md w-full justify-center mx-2 truncate">
                  <Lock className="w-3 h-3 text-[#4edea3] shrink-0" />
                  <span className="text-[#38bdf8] font-mono truncate">{activePreview.url}</span>
                  <span className="hidden md:inline px-1.5 py-0.2 rounded text-[9px] bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                    256-Bit SSL
                  </span>
                </div>

                {/* Active Indicator */}
                <div className="flex items-center gap-1 text-[11px] text-[#4edea3]">
                  <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-ping" />
                  <span className="hidden sm:inline font-medium">Sub-2s Speed</span>
                </div>
              </div>

              {/* ========================================================
                  WEBSITE SCROLL ANIMATION AREA
                 ======================================================== */}
              <div className="relative h-64 sm:h-80 md:h-[390px] overflow-hidden bg-[#070b16] select-none">
                {/* Smooth website auto-scroll track */}
                <div
                  className="w-full flex flex-col animate-smooth-scroll"
                  style={{
                    animationDuration: isHovered ? '28s' : '18s',
                  }}
                >
                  {/* Repeated website view for infinite smooth scroll */}
                  {[1, 2].map((cycle) => (
                    <div key={cycle} className="w-full flex flex-col shrink-0">
                      {/* Rendered Website Hero Banner */}
                      <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-b from-[#0c1427] via-[#090e1d] to-[#070b16] border-b border-white/5">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-[#93c5fd] text-[11px] font-semibold mb-3">
                          <Sparkles className="w-3 h-3 text-[#4edea3]" />
                          <span>{activePreview.heroBadge}</span>
                        </div>
                        <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight max-w-lg mb-2">
                          {activePreview.heroHeadline}
                        </h2>
                        <p className="text-xs sm:text-sm text-[#94a3b8] max-w-md mb-4 line-clamp-2">
                          {activePreview.tagline}. Powered by high-speed responsive web architecture and Google Maps Local SEO.
                        </p>

                        <div className="flex flex-wrap items-center gap-3">
                          <a
                            href={`https://wa.me/${BUSINESS_INFO.rawPhone}?text=${encodeURIComponent(
                              activePreview.phoneMessage
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#00a572] hover:bg-[#10b981] text-white font-bold text-xs shadow-md transition-colors"
                          >
                            <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
                            <span>1-Tap WhatsApp Lead</span>
                          </a>
                          <span className="text-[11px] text-[#94a3b8] flex items-center gap-1">
                            <Star className="w-3.5 h-3.5 fill-[#f59e0b] text-[#f59e0b]" /> 4.9 Verified Rating
                          </span>
                        </div>
                      </div>

                      {/* Rendered Feature Metrics / Live Cards */}
                      <div className="grid grid-cols-3 gap-2 sm:gap-3 p-3 sm:p-5 bg-[#0a1020]">
                        {activePreview.stats.map((st, i) => (
                          <div
                            key={i}
                            className="p-2 sm:p-3 rounded-xl bg-[#11192e] border border-[#222c47] text-center"
                          >
                            <span className="text-sm sm:text-lg font-bold text-[#38bdf8] block">
                              {st.value}
                            </span>
                            <span className="text-[10px] sm:text-xs text-[#94a3b8] block truncate">
                              {st.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Rendered Product / Service Row */}
                      <div className="p-4 sm:p-6 bg-[#070b16] space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold uppercase tracking-wider text-white">
                            Popular Service Packages
                          </span>
                          <span className="text-[10px] text-[#4edea3] font-semibold">
                            ● Instant Booking Open
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-3 rounded-xl bg-[#0f172a] border border-[#1e293b] flex flex-col justify-between">
                            <div>
                              <span className="text-xs font-bold text-white block">
                                Comprehensive Initial Consultation
                              </span>
                              <span className="text-[11px] text-[#94a3b8]">
                                Includes digital diagnostic scan &amp; treatment roadmap.
                              </span>
                            </div>
                            <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-xs">
                              <span className="font-bold text-[#4edea3]">₹499 Only</span>
                              <span className="text-[10px] text-[#38bdf8] underline">Book Now →</span>
                            </div>
                          </div>
                          <div className="p-3 rounded-xl bg-[#0f172a] border border-[#1e293b] flex flex-col justify-between">
                            <div>
                              <span className="text-xs font-bold text-white block">
                                Full Premium Service Session
                              </span>
                              <span className="text-[11px] text-[#94a3b8]">
                                Verified expert procedure with warranty coverage.
                              </span>
                            </div>
                            <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-xs">
                              <span className="font-bold text-[#4edea3]">₹1,999</span>
                              <span className="text-[10px] text-[#38bdf8] underline">Reserve →</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Rendered Google Reviews Reel */}
                      <div className="p-4 bg-[#0a1020] border-t border-white/5 flex items-center justify-between text-xs text-[#94a3b8]">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-[10px]">
                            G
                          </div>
                          <div>
                            <span className="text-white font-semibold block text-[11px]">
                              Google Verified Reviews
                            </span>
                            <div className="flex items-center text-[#f59e0b] text-[10px]">
                              ★★★★★ <span className="text-[#94a3b8] ml-1">(140+ Reviews)</span>
                            </div>
                          </div>
                        </div>
                        <span className="px-2.5 py-1 rounded bg-[#1e293b] text-white text-[10px] font-medium">
                          Bhubaneswar &amp; Pan-India
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Subtle Dynamic Screen Glare Overlay */}
                <div
                  className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-70"
                  style={{
                    transform: `translate(${tilt.x * 2}px, ${tilt.y * 2}px)`,
                  }}
                />
              </div>
            </div>

            {/* Laptop Base Bottom Lip & Trackpad Notch */}
            <div className="relative mt-2 flex justify-center">
              <div className="w-24 h-1 rounded-full bg-[#4a5578] shadow-inner" />
            </div>
          </div>

          {/* ========================================================
              SMARTPHONE 3D MOCKUP (Positioned overlapping right)
             ======================================================== */}
          <div
            className="absolute -bottom-3 right-0 sm:right-4 md:right-8 w-36 sm:w-48 md:w-56 rounded-[28px] sm:rounded-[36px] bg-gradient-to-b from-[#2b3347] via-[#1a2133] to-[#0f1422] p-2 sm:p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_30px_rgba(0,165,114,0.25)] border border-[#3e4863] z-20 transition-all duration-300 hover:scale-105"
            style={{
              transform: `translateZ(60px) rotateY(${tilt.x * -0.5}deg) rotateX(${
                tilt.y * 0.5
              }deg)`,
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Phone Screen Container */}
            <div className="relative rounded-[22px] sm:rounded-[28px] overflow-hidden bg-[#070b16] border border-[#222c47] aspect-[9/19]">
              {/* Dynamic Island / Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 sm:w-18 h-3.5 sm:h-4 bg-black rounded-full z-30 flex items-center justify-end px-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {/* Mobile Screen Header */}
              <div className="pt-7 px-3 pb-2 bg-[#0c1427] border-b border-white/5 flex items-center justify-between">
                <span className="text-[10px] sm:text-xs font-bold text-white truncate max-w-[80%]">
                  {activePreview.name}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3]" />
              </div>

              {/* Mobile Website Content */}
              <div className="p-3 text-left space-y-2.5">
                <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-400/20 text-[9px] text-[#93c5fd]">
                  ⚡ Fast Mobile View
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-white leading-tight">
                  {activePreview.heroHeadline}
                </h3>
                <p className="text-[10px] text-[#94a3b8] line-clamp-2">
                  {activePreview.tagline}
                </p>

                {/* Mobile Mini Cards */}
                <div className="grid grid-cols-2 gap-1.5 pt-1">
                  <div className="p-1.5 rounded-lg bg-[#11192e] border border-white/5 text-center">
                    <span className="text-[11px] font-bold text-[#38bdf8] block">0.9s</span>
                    <span className="text-[8px] text-[#94a3b8]">PageSpeed</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-[#11192e] border border-white/5 text-center">
                    <span className="text-[11px] font-bold text-[#4edea3] block">100%</span>
                    <span className="text-[8px] text-[#94a3b8]">Responsive</span>
                  </div>
                </div>

                {/* Mobile Sticky WhatsApp Action Trigger */}
                <div className="pt-2">
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.rawPhone}?text=${encodeURIComponent(
                      activePreview.phoneMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1.5 py-2 rounded-xl bg-[#00a572] hover:bg-[#10b981] text-white font-bold text-[10px] shadow-[0_4px_12px_rgba(0,165,114,0.4)] transition-transform active:scale-95"
                  >
                    <MessageCircle className="w-3 h-3 fill-white/20" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>

              {/* Phone Glass Specular Reflection */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-white/10" />
            </div>
          </div>
        </div>
      </div>

      {/* CSS for Seamless Website Scroll Animation */}
      <style>{`
        @keyframes smoothScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(0, -50%, 0);
          }
        }
        .animate-smooth-scroll {
          animation: smoothScroll linear infinite;
        }
      `}</style>
    </div>
  );
};
