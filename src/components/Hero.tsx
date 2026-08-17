import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: (initialPrompt?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const [promptInput, setPromptInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (promptInput.trim()) {
      onOpenConsultation(promptInput);
    } else {
      onOpenConsultation("IP & Techno-Legal Strategy Consultation");
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden sky-hero-backdrop flex items-center justify-center select-none pt-24 pb-12 lg:pt-0 lg:pb-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center z-10">
        
        {/* LEFT COLUMN: Punchy Editorial Copy & Glass Input CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-7 order-1"
        >
          {/* Headline */}
          <h1 className="tracking-tight text-[#1A1A1A] leading-[1.06] text-left">
            <span className="font-serif italic font-normal block text-4xl sm:text-6xl lg:text-7xl xl:text-[80px] text-[#1A1A1A]">
              Sensible Disruption
            </span>
            <span className="font-sans font-black block text-3xl sm:text-5xl lg:text-6xl xl:text-[66px] text-[#1A1A1A] mt-1">
              for Technology Leaders.
            </span>
          </h1>

          {/* Concise Sub-text */}
          <p className="text-base sm:text-lg text-[#2A3447] font-normal leading-relaxed max-w-lg">
            We replace fragmented advice with a singular, implementation-ready roadmap. Integrating finance, law, and tech to turn innovation into high-ROI assets.
          </p>

          {/* Glassmorphic Search / Input Bar */}
          <div className="w-full max-w-xl pt-2">
            <form onSubmit={handleSubmit} className="relative flex items-center rounded-full bg-white/55 backdrop-blur-xl border border-white/80 shadow-2xl p-1.5 transition-all focus-within:bg-white/85 focus-within:shadow-sky-300/40">
              <input
                type="text"
                value={promptInput}
                onChange={(e) => setPromptInput(e.target.value)}
                placeholder="Ask about protecting your IP..."
                className="w-full h-12 sm:h-14 pl-5 sm:pl-6 pr-36 sm:pr-44 bg-transparent text-[#1A1A1A] placeholder:text-[#475E80] text-sm sm:text-base font-semibold focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 bg-white/95 hover:bg-white text-[#1A1A1A] border border-white px-4 sm:px-6 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all duration-200 hover:scale-[1.03] active:scale-95 shadow-md shrink-0"
              >
                <span className="hidden sm:inline text-[#1A1A1A]">Book Briefing</span>
                <span className="sm:hidden text-[#1A1A1A]">Book</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#0284C7]" />
              </button>
            </form>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Lady Justice Cutout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="lg:col-span-5 relative flex items-center justify-center lg:justify-end order-2 mt-4 lg:mt-0"
        >
          <div className="relative w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[440px] aspect-[2/3] flex items-center justify-center">
            <picture className="w-full h-full flex items-center justify-center">
              <source srcSet="/lady-justice-cutout.webp" type="image/webp" />
              <img
                src="/lady-justice-cutout.png"
                alt="Lady Justice Artwork - Sensirupt"
                loading="eager"
                decoding="async"
                // @ts-expect-error - fetchpriority is standard HTML5 attribute
                fetchpriority="high"
                className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(8,35,70,0.22)] animate-float-gentle"
              />
            </picture>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
