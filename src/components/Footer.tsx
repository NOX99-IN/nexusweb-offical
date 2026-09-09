import React from 'react';
import { BUSINESS_INFO } from '../data';
import { PageId } from '../types';
import { KalingaPixelLogo } from './KalingaPixelLogo';
import { MessageCircle, Mail, Phone, CheckCircle2, ShieldCheck, MapPin, Search, Globe, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: PageId, anchorId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLink = (page: PageId, anchorId?: string) => {
    if (onNavigate) {
      onNavigate(page, anchorId);
    }
  };

  return (
    <footer className="w-full bg-[#060e20] text-[#dae2fd] border-t border-[#222a3d] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1e273f]">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <button
              onClick={() => handleLink('home')}
              className="flex items-center text-left group cursor-pointer"
            >
              <KalingaPixelLogo size="md" variant="horizontal" showTagline={true} />
            </button>
            <p className="text-sm text-[#94a3b8] max-w-sm leading-relaxed">
              We design modern, lightning-fast websites that turn local searches into paying customers for clinics, restaurants, retail shops, and service contractors.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#4edea3] font-medium pt-1">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Direct Founder Consulting by Biswaranjan Pradhan</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              Website Pages
            </span>
            <ul className="flex flex-col gap-2 text-sm text-[#94a3b8]">
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.hash = '#home';
                    handleLink('home');
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left block"
                >
                  Home (#home)
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.hash = '#services';
                    handleLink('services');
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left block"
                >
                  Services (#services)
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.hash = '#about';
                    handleLink('about');
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left block"
                >
                  About Us (#about)
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.hash = '#contact';
                    handleLink('contact');
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left block"
                >
                  Contact (#contact)
                </a>
              </li>
              <li>
                <a
                  href="#pricing-section"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.hash = '#pricing-section';
                    handleLink('home', 'pricing-section');
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left block"
                >
                  Pricing Packages (₹7k – ₹20k)
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.hash = '#portfolio';
                    handleLink('home', 'portfolio');
                  }}
                  className="hover:text-white transition-colors cursor-pointer text-left block"
                >
                  Client Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contacts & WhatsApp */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              Direct Contact
            </span>
            <div className="flex flex-col gap-2.5 text-sm text-[#94a3b8]">
              <a
                href={`https://wa.me/${BUSINESS_INFO.rawPhone}?text=Hi%20Biswaranjan%2C%20I%20want%20to%20get%20a%20website%20for%20my%20local%20business.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#4edea3] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#4edea3]" />
                <span>WhatsApp (Founder): {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.rawTeamPhone}?text=Hi%20Kalinga%20Pixel%20Team%2C%20I%20want%20to%20get%20a%20website%20for%20my%20local%20business.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#67e8f9] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#67e8f9]" />
                <span>WhatsApp (Team Member): {BUSINESS_INFO.teamPhone}</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-2 hover:text-[#93c5fd] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#93c5fd]" />
                <span>Phone: {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-[#c0c1ff]" />
                <span>{BUSINESS_INFO.email}</span>
              </a>
            </div>

            <div className="mt-2 p-3 rounded-xl bg-[#131b2e] border border-[#222a3d] text-xs text-[#94a3b8]">
              <span className="font-semibold text-white block mb-0.5">Hours:</span>
              {BUSINESS_INFO.workingHours}
            </div>
          </div>
        </div>

        {/* Structured SEO Keywords & Local Service Areas Section */}
        <div className="py-8 border-b border-[#1e273f] text-xs text-[#94a3b8] space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#93c5fd] flex items-center gap-1.5">
              <Search className="w-3.5 h-3.5 text-[#4edea3]" /> Top Local Search Keywords &amp; Web Services
            </h3>
            <span className="text-[11px] text-[#64748b]">Google Maps Local SEO Verified • Sub-2s Speed Optimization</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              'Website Design Company in Bhubaneswar',
              'Web Development Agency Odisha',
              'Affordable Website Designer Near Me',
              'Local Business Website Developer',
              'Google Business Profile & Maps SEO',
              'Clinic & Doctor Website Design',
              'Restaurant & Cafe Food Menu Website',
              'Gym & Fitness Studio Web Development',
              'Luxury Architecture & Interior Design Websites',
              'One-Tap WhatsApp Inbound Lead Integration',
              'Mobile First Responsive Web Design (< 2s Speed)',
              'Zero Recurring Retainer Website Packages (₹7k – ₹20k)'
            ].map((keyword, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-lg bg-[#131b2e]/80 border border-[#222a3d] text-[#c3c6d7] text-[11px] hover:border-[#38bdf8]/40 hover:text-white transition-colors"
              >
                {keyword}
              </span>
            ))}
          </div>

          <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-[11px] text-[#94a3b8]">
            <span className="font-semibold text-white flex items-center gap-1 shrink-0">
              <MapPin className="w-3 h-3 text-[#4edea3]" /> Key Service Locations:
            </span>
            <span className="leading-relaxed">
              Bhubaneswar, Cuttack, Puri, Rourkela, Berhampur, Sambalpur, Balasore (Odisha), Mumbai, Delhi NCR, Bengaluru, Hyderabad, Kolkata, Pune &amp; pan-India.
            </span>
          </div>
        </div>

        {/* Bottom Copyright & Trust */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94a3b8]">
          <p>
            © {new Date().getFullYear()} Kalinga Pixel. Founded by Biswaranjan Pradhan. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[#94a3b8]">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#4edea3]" /> 100% Client Code Ownership
            </span>
            <span>•</span>
            <span>Zero Agency Retainers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
