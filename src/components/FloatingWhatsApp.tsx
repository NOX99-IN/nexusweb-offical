import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data';
import { MessageCircle, X, ChevronRight, UserCheck } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Contact Selection Panel */}
      {isOpen && (
        <div
          id="whatsapp-contact-selector"
          className="w-80 sm:w-84 bg-[#11192e] border border-[#2d3449] rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        >
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-[#064e3b] to-[#042f2e] text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight">Chat with Us on WhatsApp</h4>
                <p className="text-[11px] text-emerald-200">Select who you'd like to reach</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
              aria-label="Close WhatsApp options"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Contact options */}
          <div className="p-3 space-y-2.5">
            {/* 1. Founder Contact */}
            <a
              id="floating-whatsapp-founder"
              href={`https://wa.me/${BUSINESS_INFO.rawPhone}?text=Hi%20Biswaranjan%2C%20I%20saw%20your%20website%20and%20want%20to%20get%20a%20website%20for%20my%20local%20business.`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/[0.04] hover:bg-[#00a572]/15 border border-white/10 hover:border-[#00a572]/40 transition-all flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#00a572]/20 text-[#4edea3] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-[#00a572]/30">
                <MessageCircle className="w-5 h-5 fill-[#4edea3]/20" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white group-hover:text-[#4edea3] transition-colors">
                    Biswaranjan Pradhan
                  </span>
                  <span className="text-[9px] font-bold text-[#4edea3] bg-[#00a572]/20 px-1.5 py-0.2 rounded border border-[#00a572]/30">
                    Founder
                  </span>
                </div>
                <span className="text-[11px] text-[#94a3b8] block">
                  {BUSINESS_INFO.phone}
                </span>
                <span className="text-[10px] text-emerald-300 font-medium block">
                  Direct quotes &amp; strategy
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-[#94a3b8] group-hover:text-white transition-colors shrink-0" />
            </a>

            {/* 2. Team Member Contact */}
            <a
              id="floating-whatsapp-team"
              href={`https://wa.me/${BUSINESS_INFO.rawTeamPhone}?text=Hi%2C%20I%20want%20to%20connect%20with%20the%20NexusWeb%20team%20about%20a%20website%20project.`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/[0.04] hover:bg-cyan-500/15 border border-white/10 hover:border-cyan-500/40 transition-all flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-[#67e8f9] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-cyan-500/30">
                <MessageCircle className="w-5 h-5 fill-[#67e8f9]/20" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white group-hover:text-[#67e8f9] transition-colors">
                    Team Member Support
                  </span>
                  <span className="text-[9px] font-bold text-[#67e8f9] bg-cyan-500/20 px-1.5 py-0.2 rounded border border-cyan-500/30">
                    Active
                  </span>
                </div>
                <span className="text-[11px] text-[#94a3b8] block">
                  {BUSINESS_INFO.teamPhone}
                </span>
                <span className="text-[10px] text-cyan-300 font-medium block">
                  Client support &amp; inquiries
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-[#94a3b8] group-hover:text-white transition-colors shrink-0" />
            </a>
          </div>

          <div className="px-4 py-2 bg-black/30 border-t border-[#222a3d] text-[10px] text-[#94a3b8] flex items-center justify-between">
            <span>⚡ Typical reply &lt; 15 mins</span>
            <span className="text-emerald-400 font-medium">Mon – Sat, 9 AM – 8 PM</span>
          </div>
        </div>
      )}

      {/* Friendly floating popup bubble */}
      {!isOpen && showTooltip && (
        <div className="relative p-3 max-w-[270px] bg-[#171f33] border border-[#2d3449] rounded-2xl shadow-2xl text-xs text-[#dae2fd] animate-in fade-in slide-in-from-bottom-2 duration-300">
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
          <p className="text-[11px] text-[#94a3b8] leading-relaxed mb-2">
            Chat with Founder <strong>Biswaranjan</strong> or our <strong>Team Member</strong> directly on WhatsApp!
          </p>
          <div className="flex items-center gap-1.5 pt-1 border-t border-[#222a3d] text-[10px] text-emerald-300 font-medium">
            <UserCheck className="w-3 h-3 text-[#4edea3]" />
            <span>2 Direct WhatsApp Lines Available</span>
          </div>
        </div>
      )}

      {/* Main WhatsApp Floating Trigger Button */}
      <button
        id="floating-whatsapp-trigger"
        type="button"
        onClick={() => {
          setIsOpen(!isOpen);
          setShowTooltip(false);
        }}
        className="group hover-bounce-pulse relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#00a572] hover:bg-[#10b981] text-white shadow-[0_10px_30px_rgba(0,165,114,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        aria-label="Toggle WhatsApp contact channels"
      >
        <span className="absolute inset-0 rounded-full bg-[#00a572] animate-ping opacity-30 pointer-events-none group-hover:opacity-50" />
        {isOpen ? (
          <X className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 rotate-90" />
        ) : (
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white/20 transition-transform duration-300 group-hover:scale-110" />
        )}
      </button>
    </div>
  );
};
