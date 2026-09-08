import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Friendly floating popup bubble */}
      {showTooltip && (
        <div className="relative p-3 max-w-[260px] bg-[#171f33] border border-[#2d3449] rounded-2xl shadow-2xl text-xs text-[#dae2fd] animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -left-2 w-5 h-5 bg-[#222a3d] rounded-full flex items-center justify-center text-[#94a3b8] hover:text-white border border-[#434655]"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-ping" />
            <span className="font-bold text-white">Online Now</span>
            <span className="text-[10px] text-[#94a3b8] ml-auto">&lt; 15m reply</span>
          </div>
          <p className="text-[11px] text-[#94a3b8]">
            Need a high-converting website for your local business? Chat directly with Biswaranjan!
          </p>
        </div>
      )}

      {/* Main WhatsApp Floating Trigger */}
      <a
        id="floating-whatsapp-trigger"
        href={`https://wa.me/${BUSINESS_INFO.rawPhone}?text=Hi%20Biswaranjan%2C%20I%20saw%20your%20website%20and%20want%20to%20get%20a%20website%20for%20my%20local%20business.`}
        target="_blank"
        rel="noopener noreferrer"
        className="group hover-bounce-pulse relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#00a572] hover:bg-[#10b981] text-white shadow-[0_10px_30px_rgba(0,165,114,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        aria-label="Chat on WhatsApp with Biswaranjan Pradhan"
      >
        <span className="absolute inset-0 rounded-full bg-[#00a572] animate-ping opacity-30 pointer-events-none group-hover:opacity-50" />
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white/20 transition-transform duration-300 group-hover:scale-110" />
      </a>
    </div>
  );
};
