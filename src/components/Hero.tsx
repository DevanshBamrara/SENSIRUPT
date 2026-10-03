import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenConsultation: (initialPrompt?: string) => void;
}

const ROTATING_QUERIES = [
  "Protect proprietary IP & assets…",
  "Structure cross-border deals…",
  "Scale deep-tech ventures…",
  "Tech licensing & transactions…",
];

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const [promptInput, setPromptInput] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [displayedPlaceholder, setDisplayedPlaceholder] = useState('');
  const [queryIndex, setQueryIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Dynamic typewriter effect that halts immediately when user focuses or types
  useEffect(() => {
    if (isFocused || promptInput.length > 0) {
      return;
    }

    const currentQuery = ROTATING_QUERIES[queryIndex];
    const typingSpeed = isDeleting ? 25 : 45;
    const pauseDuration = 2200;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentQuery.length) {
          setDisplayedPlaceholder(currentQuery.substring(0, charIndex + 1));
          setCharIndex(prev => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (charIndex > 0) {
          setDisplayedPlaceholder(currentQuery.substring(0, charIndex - 1));
          setCharIndex(prev => prev - 1);
        } else {
          setIsDeleting(false);
          setQueryIndex((prev) => (prev + 1) % ROTATING_QUERIES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, queryIndex, isFocused, promptInput]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (promptInput.trim()) {
      onOpenConsultation(promptInput);
    } else if (displayedPlaceholder && !isFocused) {
      onOpenConsultation(displayedPlaceholder);
    } else {
      onOpenConsultation("Technology Commercialization & Investment Advisory");
    }
  };

  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden sky-hero-backdrop flex flex-col justify-center select-none pt-28 sm:pt-32 lg:pt-24 pb-12 sm:pb-16 lg:pb-16">
      {/* Delicate ambient blush & sky atmosphere */}
      <div className="absolute top-1/4 left-10 w-80 h-80 rounded-full bg-[#8DBDF0]/25 blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-[#E3A19C]/20 blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center my-auto z-10">
        
        {/* LEFT COLUMN: Two-Voice Headline, Subcopy & Glass Input Pill (~65%) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start justify-center space-y-6 sm:space-y-7 order-1"
        >
          {/* Two-Voice Headline - Upright, Generous Line-Height (No Italic) */}
          <h1 className="text-[#141414] text-left">
            <span className="font-serif font-normal block text-4xl sm:text-6xl lg:text-7xl xl:text-[76px] text-[#141414] leading-[1.25] mb-2 sm:mb-3">
              Sensible Disruption
            </span>
            <span className="font-sans font-extrabold block text-3xl sm:text-5xl lg:text-6xl xl:text-[62px] text-[#141414] leading-[1.2] tracking-tight">
              for Technology Leaders.
            </span>
          </h1>

          {/* Verbatim Sub-copy with comfortable line-height */}
          <p className="text-[17px] sm:text-[19px] text-[#141414]/90 font-normal leading-[1.7] max-w-xl">
            We replace fragmented advice with a single, implementation-ready roadmap. Integrating finance, law and technology to turn innovation into high-ROI assets.
          </p>

          {/* Glassmorphic Input Pill with Compact, Visible Typewriter */}
          <div className="w-full max-w-xl pt-1">
            <form onSubmit={handleSubmit} className="relative flex items-center rounded-full hero-glass-pill p-1.5 transition-all focus-within:bg-white/90 shadow-[0_12px_36px_rgba(46,139,232,0.20),0_4px_20px_rgba(227,161,156,0.22)] border border-white/90 focus-within:border-[#E3A19C]/70">
              <input
                type="text"
                value={promptInput}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={(e) => setPromptInput(e.target.value)}
                placeholder={isFocused ? "Type your inquiry…" : displayedPlaceholder || "Protect proprietary IP & assets…"}
                className="w-full min-w-0 h-12 sm:h-14 pl-4 sm:pl-6 pr-32 sm:pr-44 bg-transparent text-[#141414] placeholder:text-[#3F5F86]/80 text-xs sm:text-sm md:text-base font-medium focus:outline-none transition-all truncate"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 bg-white hover:bg-[#F4EAD5]/40 text-[#141414] hover:text-[#2E8BE8] border border-white px-3.5 sm:px-6 rounded-full text-xs font-bold uppercase tracking-[0.06em] flex items-center gap-1.5 sm:gap-2 transition-all duration-200 hover:scale-[1.02] active:scale-95 shadow-sm shrink-0 whitespace-nowrap"
              >
                <span>Book Briefing</span>
                <span className="text-[#2E8BE8] font-bold text-sm">→</span>
              </button>
            </form>

            {/* Micro-line under pill with subtle brand accents */}
            <p className="mt-3 pl-4 text-xs sm:text-[13px] tracking-wide text-[#3F5F86] font-medium flex items-center gap-2 flex-wrap">
              <span>Global Innovation & Tech Strategy</span>
              <span className="text-[#E3A19C] font-bold">·</span>
              <span>Cross-Border Transactions</span>
              <span className="text-[#2E8BE8] font-bold">·</span>
              <span>Deep-Tech Commercialization</span>
            </p>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Lady Justice Cutout (~35%) with Pink & Sky Halo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="lg:col-span-5 relative flex items-center justify-center lg:justify-end order-2 mt-2 lg:mt-0"
        >
          <div className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px] aspect-[2/3] flex items-center justify-center">
            {/* Signature Robe-Pink & Sky-Blue Ambient Halo */}
            <div className="absolute -inset-6 sm:-inset-10 rounded-full bg-gradient-to-tr from-[#E3A19C]/35 via-[#EBC9B5]/25 to-[#8DBDF0]/30 blur-3xl -z-10 pointer-events-none" />
            
            <picture className="w-full h-full flex items-center justify-center">
              <source srcSet="/lady-justice-cutout.webp" type="image/webp" />
              <img
                src="/lady-justice-cutout.png"
                alt="Lady Justice Artwork with scales and sword - Sensirupt"
                loading="eager"
                decoding="async"
                // @ts-expect-error - fetchpriority is standard HTML5 attribute
                fetchpriority="high"
                className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(8,35,70,0.18)] animate-float-gentle"
              />
            </picture>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
