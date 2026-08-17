import React from 'react';
import { motion } from 'framer-motion';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="min-h-[85vh] lg:min-h-screen flex flex-col justify-center py-20 lg:py-28 bg-[#EAF4FC] border-y border-sky-200/80 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-white/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10 text-center w-full">
        
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-6xl font-serif font-light text-[#1A1A1A] tracking-tight leading-tight max-w-4xl mx-auto"
        >
          Bridging <span className="font-serif italic font-normal">Silicon Valley Grit</span> with Indian Ingenuity.
        </motion.h2>

        {/* 3-line Concise Body */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 text-base sm:text-xl text-[#2A3447] max-w-3xl mx-auto font-normal leading-relaxed"
        >
          Born at the dawn of India's startup revolution, Sensirupt is a boutique techno-legal advisory founded by ex-directors from US multinationals. We replace the confusion of multiple advisors with one holistic strategy—fueling exits, not just filings.
        </motion.p>

        {/* Trust Badge Stats (Horizontal Row) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 pt-10 border-t border-sky-200/80 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16"
        >
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-serif font-bold text-[#C5A059]">90%+</div>
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#475E80] mt-1.5">Tech Degrees</div>
          </div>
          <div className="w-[1px] h-12 bg-sky-300/60 hidden sm:block" />
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-serif font-bold text-[#C5A059]">$2.5B+</div>
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#475E80] mt-1.5">Deal Advisory</div>
          </div>
          <div className="w-[1px] h-12 bg-sky-300/60 hidden sm:block" />
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-serif font-bold text-[#C5A059]">20+ Yrs</div>
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#475E80] mt-1.5">Global XP</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
