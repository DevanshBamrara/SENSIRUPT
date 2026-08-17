import React, { useState } from 'react';
import { ArrowRight, Scale, ShieldCheck } from 'lucide-react';

interface CtaBandProps {
  onOpenConsultation: (initialPrompt?: string) => void;
}

export const CtaBand: React.FC<CtaBandProps> = ({ onOpenConsultation }) => {
  const [emailOrPrompt, setEmailOrPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenConsultation(emailOrPrompt.trim() || "CTA Band Briefing Request");
  };

  return (
    <section className="py-24 sky-hero-backdrop relative overflow-hidden border-t border-sky-200/70">
      <div className="absolute inset-0 bg-[#EBF4FC]/90 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-sky-200 shadow-xs">
          <Scale className="w-4 h-4 text-[#0284C7]" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#0B1528]">
            Direct Access Advisory
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-[#0B1528] tracking-tight leading-tight">
          <span className="font-serif italic font-normal">Ready for Sensible Disruption</span>{' '}
          <span className="font-sans font-extrabold block sm:inline">in Your IP Strategy?</span>
        </h2>

        <p className="text-base sm:text-lg text-[#334A6E] max-w-xl mx-auto font-normal leading-relaxed">
          Connect directly with our ex-US tech directors and USPTO-admitted team for a confidential briefing.
        </p>

        {/* Input CTA */}
        <div className="max-w-xl mx-auto pt-2">
          <form onSubmit={handleSubmit} className="relative flex items-center shadow-lg rounded-full">
            <input
              type="text"
              value={emailOrPrompt}
              onChange={(e) => setEmailOrPrompt(e.target.value)}
              placeholder="Enter your email or ask about your IP..."
              className="w-full h-14 pl-6 pr-16 rounded-full bg-white border border-sky-200 text-[#0B1528] placeholder:text-[#64748B] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#0284C7] shadow-sm transition-all"
            />
            <button
              type="submit"
              className="absolute right-2 top-2 bottom-2 w-10 h-10 rounded-full bg-[#0B1528] hover:bg-black text-white flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-md"
              aria-label="Submit Inquiry"
            >
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </form>

          <p className="text-xs font-medium text-[#475E80] mt-3.5 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#0284C7]" /> Strict NDA & Professional Confidentiality Guaranteed
          </p>
        </div>
      </div>
    </section>
  );
};
