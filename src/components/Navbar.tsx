import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../data';
import { PageId } from '../types';
import { MessageCircle, Menu, X, CheckCircle2 } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId, anchorId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', page: 'home' as PageId, href: '#home' },
    { label: 'Services', page: 'services' as PageId, href: '#services' },
    { label: 'About', page: 'about' as PageId, href: '#about' },
    { label: 'Pricing', page: 'home' as PageId, anchorId: 'pricing-section', href: '#pricing-section' },
    { label: 'Portfolio', page: 'home' as PageId, anchorId: 'portfolio', href: '#portfolio' },
    { label: 'Contact', page: 'contact' as PageId, href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
    e.preventDefault();
    if (window.location.hash !== item.href) {
      window.location.hash = item.href;
    }
    onNavigate(item.page, item.anchorId);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b1326]/95 backdrop-blur-xl border-b border-[#222a3d] shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
          : 'bg-[#0b1326]/85 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a
          href="#home"
          id="nav-logo-link"
          onClick={(e) => {
            e.preventDefault();
            window.location.hash = '#home';
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 shrink-0 group text-left cursor-pointer"
        >
          <div className="relative">
            <img
              src={BUSINESS_INFO.logoUrl}
              alt="NexusWeb Agency Logo"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl tracking-tight text-white flex items-center gap-1.5">
              NexusWeb
              <span className="inline-flex items-center gap-0.5 text-[10px] font-medium bg-[#00a572]/20 text-[#4edea3] px-1.5 py-0.5 rounded-full border border-[#00a572]/30">
                <CheckCircle2 className="w-2.5 h-2.5" /> Direct
              </span>
            </span>
            <span className="text-[11px] text-[#94a3b8] -mt-0.5 font-medium hidden sm:block">
              Websites For Local Businesses
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          id="desktop-nav"
          className="hidden lg:flex items-center gap-1 p-1.5 bg-[#131b2e]/80 rounded-xl border border-[#222a3d]"
        >
          {navItems.map((item) => {
            const isPageActive = currentPage === item.page && !item.anchorId;
            return (
              <a
                key={item.label}
                id={`nav-link-${item.href.replace('#', '')}`}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                  isPageActive
                    ? 'bg-[#222a3d] text-white shadow-sm font-semibold'
                    : 'text-[#c3c6d7] hover:text-white hover:bg-[#171f33]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons & WhatsApp CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            id="nav-whatsapp-btn"
            href={`https://wa.me/${BUSINESS_INFO.rawPhone}?text=Hi%20Biswaranjan%2C%20I%20saw%20your%20website%20and%20want%20to%20consult%20about%20a%20website%20for%20my%20business.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00a572] text-white hover:bg-[#10b981] font-semibold text-sm transition-all shadow-[0_4px_16px_rgba(0,165,114,0.35)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span className="hidden sm:inline">WhatsApp</span>
            <span className="inline sm:hidden">Chat</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#171f33] text-[#c3c6d7] hover:text-white border border-[#222a3d] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden border-b border-[#222a3d] bg-[#0b1326]/98 backdrop-blur-2xl px-6 py-5 shadow-2xl animate-in slide-in-from-top duration-200"
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isPageActive = currentPage === item.page && !item.anchorId;
              return (
                <a
                  key={item.label}
                  id={`mobile-nav-link-${item.href.replace('#', '')}`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`px-4 py-2.5 rounded-lg text-base font-medium text-left transition-colors cursor-pointer block ${
                    isPageActive
                      ? 'bg-[#222a3d] text-white font-semibold'
                      : 'text-[#dae2fd] hover:bg-[#171f33] hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}

            <div className="pt-4 border-t border-[#222a3d] mt-2 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${BUSINESS_INFO.rawPhone}?text=Hi%20Biswaranjan%2C%20I%20want%20a%20website%20for%20my%20local%20business.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#00a572] hover:bg-[#10b981] text-white font-semibold text-xs sm:text-sm shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Founder ({BUSINESS_INFO.phone})</span>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.rawTeamPhone}?text=Hi%2C%20I%20want%20to%20connect%20with%20NexusWeb%20team%20about%20a%20website.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#0891b2] hover:bg-[#06b6d4] text-white font-semibold text-xs sm:text-sm shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Team Member ({BUSINESS_INFO.teamPhone})</span>
              </a>

              <div className="flex items-center justify-between text-xs text-[#94a3b8] px-1 pt-1">
                <span>Fast Replies &lt; 15 mins</span>
                <span className="text-emerald-400">Available Mon – Sat</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
