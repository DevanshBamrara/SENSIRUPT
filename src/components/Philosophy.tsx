import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles, CheckCircle2 } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 bg-[#EBF4FC] relative overflow-hidden border-b border-sky-200/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[2px] bg-[#0284C7]" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7]">
            Our Ethos & Positioning
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Serif Pull Quote */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="relative">
              <Quote className="w-12 h-12 text-[#0284C7]/25 absolute -top-6 -left-4 pointer-events-none" />
              <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-serif italic font-normal text-[#0B1528] leading-snug tracking-tight">
                "Sensirupt embodies sensible disruption — purposeful, thoughtful disruption. Reshaping the world through technology that is bold yet responsible, innovative yet grounded."
              </blockquote>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-sky-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-[#0B1528] text-white flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 text-[#38BDF8]" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-[#0B1528]">
                    No Conflicting Advice
                  </h4>
                  <p className="text-xs text-[#475E80] leading-relaxed">
                    Founders typically waste months reconciling conflicting guidance from separate litigators, financiers, and technical consultants. Sensirupt unifies all three dimensions into one cohesive decision model.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 space-y-5 text-[#0B1528]"
          >
            <h3 className="text-2xl sm:text-3xl font-serif font-medium tracking-tight text-[#0B1528]">
              Bridging the gap between innovators, financiers, and the law.
            </h3>

            <div className="space-y-3 text-sm sm:text-base text-[#334A6E] font-normal leading-relaxed">
              <p>
                Sensirupt's founders — ex-directors of US companies and former leaders at Indian multinationals — bring finance-aware techno-legal advisory to innovative businesses globally across <strong className="text-[#0B1528] font-bold">Silicon Valley, Europe, South East Asia, and China</strong>.
              </p>

              <p>
                Over <strong className="text-[#0B1528] font-bold">90% of our team holds technology degrees</strong> — closing the critical domain gap between creators of deep-tech intellectual property and the legal professionals advising them.
              </p>
            </div>

            {/* Checklist */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-sky-200">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0B1528]">
                <CheckCircle2 className="w-4 h-4 text-[#0284C7]" /> Deal-Desk Tested Structuring
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0B1528]">
                <CheckCircle2 className="w-4 h-4 text-[#0284C7]" /> IP Monetization & Valuation
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0B1528]">
                <CheckCircle2 className="w-4 h-4 text-[#0284C7]" /> Deep-Tech Code Audit Ready
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0B1528]">
                <CheckCircle2 className="w-4 h-4 text-[#0284C7]" /> Regulatory & Privacy Safeguards
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
