import React from 'react';
import { BUSINESS_INFO, HERO_SHOWCASE } from '../data';
import { MessageCircle, ArrowDown, Star, CheckCircle2, ShieldCheck, Sparkles, Zap, MapPin, TrendingUp, PhoneCall } from 'lucide-react';
import { ThreeDTilt } from './ThreeDTilt';
import { ScrollDownIndicator } from './ScrollDownIndicator';
import { Floating3DBadge, Isometric3DCube } from './Floating3DElements';
import { DeviceShowcase3D } from './DeviceShowcase3D';
import { TextReveal } from './TextReveal';
import { MagneticButton } from './MagneticButton';
import { FloatingPixels } from './FloatingPixels';

interface HeroProps {
  onSelectCaseStudy?: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-[#0b1326] pt-10 pb-16 lg:pt-14 lg:pb-24">
      {/* Floating Pixels for Kalinga Pixel Brand Atmosphere */}
      <FloatingPixels />

      {/* Background Decorative Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(37,99,235,0.18),transparent)] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-[#00a572]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-2/3 left-10 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

      {/* Floating 3D Isometric Elements in Hero */}
      <div className="absolute top-12 left-6 opacity-80 hidden xl:block pointer-events-none">
        <Isometric3DCube size={52} color="blue" duration={16} />
      </div>
      <div className="absolute top-20 right-8 opacity-75 hidden xl:block pointer-events-none">
        <Isometric3DCube size={48} color="emerald" duration={14} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Top Urgency / Feature Badge with 3D Depth */}
        <div
          id="hero-urgency-badge"
          style={{ transformStyle: 'preserve-3d' }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-950/80 via-teal-900/60 to-blue-950/80 border border-emerald-500/40 text-[#4edea3] text-xs sm:text-sm font-semibold mb-6 shadow-[0_8px_20px_-4px_rgba(16,185,129,0.3)] hover:border-[#4edea3]/60 transition-all hover:scale-105 duration-300"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-[#4edea3] animate-pulse" />
          <span>⚡ Websites Delivered in 3-5 Days • 100% Mobile Ready</span>
        </div>

        {/* Main Display Headline with Text Reveal Animation */}
        <h1
          id="hero-main-title"
          className="text-4xl sm:text-5xl lg:text-[56px] lg:leading-[1.15] font-extrabold text-[#dae2fd] max-w-4xl tracking-tight mb-5 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
        >
          <TextReveal
            text="Get More Local Customers With A Fast, High-Converting Website"
            highlightWords={['Fast,', 'High-Converting']}
            highlightClassName="text-transparent bg-clip-text bg-gradient-to-r from-[#93c5fd] via-[#60a5fa] to-[#b4c5ff]"
          />
        </h1>

        {/* Subtitle with Primary SEO Keywords */}
        <p className="text-base sm:text-lg lg:text-xl text-[#94a3b8] max-w-3xl mb-8 leading-relaxed">
          Premier website design company &amp; web developer in Bhubaneswar serving businesses across India. We build custom, mobile-first websites that rank #1 on Google Maps and turn local searchers into direct WhatsApp leads. Simple one-time pricing, zero recurring agency fees.
        </p>

        {/* Primary Call-to-Actions with Magnetic Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mb-10">
          <MagneticButton strength={12}>
            <a
              id="hero-primary-whatsapp-btn"
              href={`https://wa.me/${BUSINESS_INFO.rawPhone}?text=Hi%20Biswaranjan%2C%20I%20want%20to%20get%20more%20customers%20with%20a%20website%20for%20my%20local%20business.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#00a572] hover:bg-[#10b981] text-white font-bold text-base sm:text-lg transition-all shadow-[0_12px_32px_-6px_rgba(0,165,114,0.55)] hover:shadow-[0_18px_36px_-6px_rgba(0,165,114,0.7)] active:scale-98"
            >
              <MessageCircle className="w-6 h-6 fill-white/20" />
              <span>Chat on WhatsApp (+91 9124236518)</span>
            </a>
          </MagneticButton>

          <MagneticButton strength={10}>
            <a
              id="hero-secondary-pricing-btn"
              href="#pricing-section"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#171f33]/90 hover:bg-[#222a3d] text-[#dae2fd] border border-[#2d3449] hover:border-[#38bdf8]/50 font-semibold text-base transition-all shadow-lg hover:shadow-[#0070f3]/20"
            >
              <span>View Packages &amp; Pricing</span>
              <ArrowDown className="w-4 h-4 text-[#93c5fd]" />
            </a>
          </MagneticButton>
        </div>

        {/* Social Proof Bar */}
        <div
          id="hero-social-proof-bar"
          className="flex flex-col sm:flex-row items-center gap-3 py-2.5 px-6 rounded-2xl bg-gradient-to-r from-indigo-950/80 via-slate-900/90 to-purple-950/80 border border-indigo-500/30 shadow-[0_8px_25px_rgba(30,27,75,0.4)] mb-8 hover:border-indigo-400/50 transition-all"
        >
          <div className="flex items-center gap-1 text-[#f59e0b]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#f59e0b]" />
            ))}
            <span className="font-bold text-white text-sm ml-1.5">4.9/5</span>
          </div>
          <span className="hidden sm:inline text-[#434655]">•</span>
          <p className="text-xs sm:text-sm text-[#94a3b8]">
            Trusted by <strong className="text-white font-semibold">45+ clinics, retail shops, restaurants &amp; contractors</strong> across India
          </p>
        </div>

        {/* 3D Laptop + Smartphone Stage with Browser Mockup & Website Scroll Animation */}
        <div className="w-full relative mt-2">
          {/* Floating 3D Badges anchored to grid edges */}
          <Floating3DBadge
            icon={<Zap className="w-4 h-4 text-[#4edea3]" />}
            label="1.2s Load Speed"
            sublabel="98+ Google Lighthouse"
            color="emerald"
            className="-top-6 -left-3 hidden lg:flex"
            delay={0.1}
            yOffset={10}
          />

          <Floating3DBadge
            icon={<MapPin className="w-4 h-4 text-[#38bdf8]" />}
            label="Google Maps #1"
            sublabel="Local Search Domination"
            color="blue"
            className="-top-8 -right-3 hidden lg:flex"
            delay={0.3}
            yOffset={12}
          />

          <Floating3DBadge
            icon={<TrendingUp className="w-4 h-4 text-[#c084fc]" />}
            label="+240% Inquiries"
            sublabel="Direct WhatsApp Pipeline"
            color="purple"
            className="-bottom-4 -left-4 hidden xl:flex"
            delay={0.5}
            yOffset={8}
          />

          <Floating3DBadge
            icon={<PhoneCall className="w-4 h-4 text-[#67e8f9]" />}
            label="1-Tap Leads"
            sublabel="Instant Caller Connect"
            color="cyan"
            className="-bottom-6 -right-4 hidden xl:flex"
            delay={0.2}
            yOffset={10}
          />

          {/* 3D Laptop & Smartphone Showcase */}
          <DeviceShowcase3D />

          {/* Category Cards Showcase */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-left mt-6"
            style={{ perspective: 1200 }}
          >
            {HERO_SHOWCASE.map((item, index) => {
              const cardGradients = [
                'bg-gradient-to-br from-[#1e1b4b]/85 via-[#0f172a]/95 to-[#172554]/80 border-blue-500/35 hover:border-blue-400/80 shadow-[0_12px_30px_rgba(0,112,243,0.18)]',
                'bg-gradient-to-br from-[#064e3b]/85 via-[#0f172a]/95 to-[#065f46]/80 border-emerald-500/35 hover:border-emerald-400/80 shadow-[0_12px_30px_rgba(16,185,129,0.18)]',
                'bg-gradient-to-br from-[#581c87]/85 via-[#0f172a]/95 to-[#3b0764]/80 border-purple-500/35 hover:border-purple-400/80 shadow-[0_12px_30px_rgba(139,92,246,0.18)]',
                'bg-gradient-to-br from-[#0c4a6e]/85 via-[#0f172a]/95 to-[#1e3a8a]/80 border-cyan-500/35 hover:border-cyan-400/80 shadow-[0_12px_30px_rgba(6,182,212,0.18)]',
              ];
              const gradientClass = cardGradients[index % cardGradients.length];

              return (
                <ThreeDTilt
                  key={index}
                  maxTilt={10}
                  scale={1.03}
                  className="h-full rounded-2xl"
                >
                  <div
                    className={`h-full rounded-2xl ${gradientClass} border overflow-hidden transition-all duration-300 group flex flex-col justify-between`}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="relative h-44 overflow-hidden bg-[#131b2e]">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                        loading="eager"
                        decoding="async"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-70" />
                      <span
                        style={{ transform: 'translateZ(30px)' }}
                        className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-gradient-to-r from-blue-900/95 to-indigo-900/95 text-[#93c5fd] font-semibold text-xs backdrop-blur border border-blue-500/40 shadow-md"
                      >
                        {item.category}
                      </span>
                    </div>

                    <div className="p-4 flex-1 flex flex-col justify-between" style={{ transform: 'translateZ(20px)' }}>
                      <div>
                        <h3 className="font-bold text-white text-base truncate group-hover:text-[#93c5fd] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs text-[#94a3b8] mt-1.5 line-clamp-2 leading-relaxed">
                          {item.summary}
                        </p>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-[#4edea3] text-xs font-semibold">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>{item.metric}</span>
                        </div>
                        <span className="text-[11px] text-[#93c5fd] font-medium group-hover:underline">
                          Live Preview →
                        </span>
                      </div>
                    </div>
                  </div>
                </ThreeDTilt>
              );
            })}
          </div>

          {/* Guarantee pill below grid */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-[#94a3b8]">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#4edea3]" /> 100% Satisfaction Guarantee
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#93c5fd]" /> Zero Recurring Agency Retainers
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#4edea3]" /> Full Code &amp; Domain Ownership
            </span>
          </div>

          {/* 3D Animated Scroll Down Indicator */}
          <div className="mt-12 flex justify-center">
            <ScrollDownIndicator targetId="why-us" />
          </div>
        </div>
      </div>
    </section>
  );
};

