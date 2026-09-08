import React from 'react';
import { Hero } from '../components/Hero';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Services } from '../components/Services';
import { Pricing } from '../components/Pricing';
import { Portfolio } from '../components/Portfolio';
import { FAQ } from '../components/FAQ';
import { ContactSection } from '../components/ContactSection';
import { PageId } from '../types';
import { ArrowRight, Sparkles, PhoneCall } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface HomePageProps {
  onNavigate: (page: PageId, anchorId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div id="home" className="w-full">
      {/* Hero Section */}
      <Hero />

      {/* Why Choose Us & 4-Step Process */}
      <WhyChooseUs />

      {/* Core Services Section */}
      <div className="relative">
        <Services />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 flex justify-center -mt-8">
          <button
            onClick={() => {
              onNavigate('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#171f33] hover:bg-[#222a3d] text-[#93c5fd] hover:text-white font-semibold text-sm border border-[#2d3449] hover:border-[#3b82f6]/50 transition-all shadow-md group"
          >
            <span>Explore All 8 Specialized Local Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Pricing Packages: Basic (₹7,000–₹10,000) & Business (₹12,000–₹20,000) */}
      <Pricing />

      {/* Client Success Stories & Case Studies */}
      <Portfolio />

      {/* Frequently Asked Questions */}
      <FAQ />

      {/* Direct Contact & Discovery Form */}
      <ContactSection />
    </div>
  );
};
