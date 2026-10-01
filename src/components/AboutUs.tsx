import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedStatProps {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

const AnimatedStat: React.FC<AnimatedStatProps & { extraNode?: React.ReactNode }> = ({
  target,
  decimals = 0,
  prefix = '',
  suffix = '',
  duration = 1800,
  extraNode,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(easeProgress * target);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [inView, target, duration]);

  const displayValue = decimals > 0 
    ? count.toFixed(decimals) 
    : Math.floor(count).toString();

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-serif font-bold text-[#C6A15B] tracking-tight inline-flex items-center justify-center">
      <span>{prefix}{displayValue}{suffix}</span>
      {extraNode}
    </div>
  );
};

export const AboutUs: React.FC = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  return (
    <section id="about" className="min-h-[75vh] flex flex-col justify-center py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Signature Bluish & Pinkish Ethereal Atmosphere */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#8DBDF0]/60 via-[#E3A19C]/50 to-transparent z-10" />
      <div className="absolute top-8 -left-20 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-[#8DBDF0]/22 via-[#2E8BE8]/8 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-8 -right-20 w-[450px] h-[450px] rounded-full bg-gradient-to-tl from-[#E3A19C]/18 via-[#EBC9B5]/15 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#E3A19C]/45 via-[#8DBDF0]/55 to-transparent z-10" />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10 text-center w-full">
        
        {/* Headline with generous line-height and clean spacing (no overlapping descenders, no italic) */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl lg:text-[54px] font-serif font-light text-[#141414] leading-[1.38] tracking-normal max-w-4xl mx-auto"
        >
          <span className="block mb-1 sm:mb-2">
            Bridging <span className="font-serif font-normal">Silicon Valley Practice</span>
          </span>
          <span className="block text-[#141414]">
            with Global Deep-Tech Ingenuity.
          </span>
        </motion.h2>

        {/* Verbatim Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 text-[17px] sm:text-[19px] text-[#3F5F86] max-w-3xl mx-auto font-normal leading-[1.7]"
        >
          Sensirupt is a boutique techno-legal advisory, founded by former directors of US multinationals. We give global founders, funds and corporates a single point of accountability across intellectual property, technology transactions and deal structuring. One integrated strategy fueling rapid value creation, not just filings.
        </motion.p>

        {/* Hairline Divider & 3 Moving Animated Stats */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 pt-12 border-t border-[#3F5F86]/15 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16"
        >
          <div className="text-center min-w-[140px]">
            <AnimatedStat target={100} suffix="+" duration={1800} />
            <div className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.06em] text-[#3F5F86] mt-2">
              Cross-Border Deals
            </div>
          </div>
          
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#8DBDF0]/40 via-[#C6A15B]/30 to-[#E3A19C]/40 hidden sm:block" />
          
          <div className="text-center min-w-[140px] relative">
            <AnimatedStat
              target={2.5}
              decimals={1}
              prefix="$"
              suffix="B+"
              duration={2000}
              extraNode={
                <div className="relative inline-block ml-0.5">
                  <button
                    type="button"
                    onClick={() => setShowDisclaimer(!showDisclaimer)}
                    title="Click to view valuation disclaimer"
                    className="inline-flex items-center justify-center text-xl sm:text-2xl text-[#C6A15B] hover:text-[#141414] font-serif transition-colors px-1 align-super -mt-2 cursor-pointer focus:outline-none"
                    aria-expanded={showDisclaimer}
                  >
                    *
                  </button>
                  
                  {/* Interactive Popover */}
                  {showDisclaimer && (
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-64 sm:w-72 p-3.5 bg-white text-[#141414] text-xs font-normal rounded-xl shadow-2xl border border-[#3F5F86]/15 z-30 text-left">
                      <div className="flex items-start justify-between gap-2 mb-1.5 border-b border-[#3F5F86]/10 pb-1">
                        <span className="font-bold text-[10px] uppercase tracking-wider text-[#C6A15B]">Advisory Value Disclaimer</span>
                        <button
                          onClick={() => setShowDisclaimer(false)}
                          className="text-[#3F5F86] hover:text-[#141414] text-xs px-1"
                          aria-label="Close disclaimer"
                        >
                          ✕
                        </button>
                      </div>
                      <p className="text-[#3F5F86] leading-relaxed text-[11px]">
                        Combined aggregate transaction, M&A due diligence, licensing, and intangible asset valuation advised across global client engagements.
                      </p>
                    </div>
                  )}
                </div>
              }
            />
            <div className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.06em] text-[#3F5F86] mt-2">
              Deal Advisory
            </div>
          </div>
          
          <div className="w-[1px] h-12 bg-[#3F5F86]/20 hidden sm:block" />
          
          <div className="text-center min-w-[140px]">
            <AnimatedStat target={20} suffix="+ Yrs" duration={1600} />
            <div className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.06em] text-[#3F5F86] mt-2">
              Global XP
            </div>
          </div>
        </motion.div>

        {/* Small Footnote Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-[11px] sm:text-xs text-[#3F5F86]/70 font-medium">
            * Combined aggregate advisory value across portfolio companies, M&A due diligence, and global technology transactions.
          </p>
        </div>

      </div>
    </section>
  );
};
