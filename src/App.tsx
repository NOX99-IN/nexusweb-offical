import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { FloatingBackground } from './components/FloatingBackground';
import { PageSkeleton } from './components/SkeletonLoader';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PageId } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [targetPage, setTargetPage] = useState<PageId>('home');
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const startPageTransition = (newPage: PageId, callback?: () => void) => {
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }

    setTargetPage(newPage);
    setIsTransitioning(true);

    transitionTimeoutRef.current = setTimeout(() => {
      setCurrentPage(newPage);
      setIsTransitioning(false);
      if (callback) callback();
    }, 320);
  };

  // Initialize and sync with URL hash
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      let destination: PageId = 'home';
      let anchor: string | null = null;

      if (hash === 'services') {
        destination = 'services';
      } else if (hash === 'about') {
        destination = 'about';
      } else if (hash === 'contact' || hash === 'contacts') {
        destination = 'contact';
      } else if (hash === 'pricing-section' || hash === 'portfolio' || hash === 'why-us' || hash === 'faqs') {
        destination = 'home';
        anchor = hash;
      }

      if (destination !== currentPage) {
        startPageTransition(destination, () => {
          if (anchor) {
            setTimeout(() => {
              const el = document.getElementById(anchor!);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 50);
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        });
      } else if (anchor) {
        const el = document.getElementById(anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => {
      window.removeEventListener('hashchange', handleHash);
      if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
    };
  }, [currentPage]);

  const handleNavigate = (page: PageId, anchorId?: string) => {
    if (anchorId) {
      window.location.hash = anchorId;
      if (currentPage !== page) {
        startPageTransition(page, () => {
          setTimeout(() => {
            const el = document.getElementById(anchorId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 50);
        });
      } else {
        const el = document.getElementById(anchorId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.hash = page;
      if (currentPage !== page) {
        startPageTransition(page, () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd] font-sans selection:bg-[#00a572] selection:text-white relative flex flex-col justify-between overflow-x-hidden">
      {/* Dynamic Colorful Floating Motion Background */}
      <FloatingBackground />

      {/* Top Fixed Multi-Page Navigation */}
      <div className="relative z-50">
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      </div>

      {/* Dynamic Page Routing with Skeleton Loader on Transitions */}
      <main className="pt-20 flex-1 relative z-10">
        <AnimatePresence mode="wait">
          {isTransitioning ? (
            <motion.div
              key={`skeleton-${targetPage}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <PageSkeleton page={targetPage} />
            </motion.div>
          ) : (
            <motion.div
              key={`content-${currentPage}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
              {currentPage === 'services' && <ServicesPage onNavigate={handleNavigate} />}
              {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
              {currentPage === 'contact' && <ContactPage onNavigate={handleNavigate} />}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Persistent Floating WhatsApp Trigger */}
      <div className="relative z-50">
        <FloatingWhatsApp />
      </div>

      {/* Global Footer with Page Links */}
      <div className="relative z-10">
        <Footer onNavigate={handleNavigate} />
      </div>
    </div>
  );
}

