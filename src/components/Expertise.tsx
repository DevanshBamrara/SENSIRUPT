import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, TrendingUp, FileCode2, Lock } from 'lucide-react';

interface ExpertiseProps {
  onOpenConsultation: (topic?: string) => void;
}

export const Expertise: React.FC<ExpertiseProps> = ({ onOpenConsultation }) => {
  const items = [
    {
      icon: ShieldAlert,
      title: "IP Strategy & Valuation",
      desc: "Monetizing patents and intangible assets.",
    },
    {
      icon: TrendingUp,
      title: "Tech Law & Transactions",
      desc: "Structuring high-stakes IP-centric alliances.",
    },
    {
      icon: FileCode2,
      title: "Venture Advisory",
      desc: "Techno-legal due diligence for funds and VCs.",
    },
    {
      icon: Lock,
      title: "Privacy & Media Law",
      desc: "Navigating complex data and entertainment regulations.",
    },
  ];

  return (
    <section id="expertise" className="min-h-[85vh] lg:min-h-screen flex flex-col justify-center py-20 lg:py-28 bg-[#F4F9FD] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        
        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-serif font-light text-[#1A1A1A] tracking-tight">
            Finance-Aware <span className="font-serif italic font-normal">Techno-Legal Strategy.</span>
          </h2>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => onOpenConsultation(item.title)}
                className="bg-white rounded-3xl p-8 border border-sky-200/80 shadow-sm hover:shadow-xl hover:border-[#0284C7]/50 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className="w-13 h-13 rounded-2xl bg-[#1A1A1A] text-white flex items-center justify-center p-3 transition-transform duration-300 group-hover:scale-105 shadow-md">
                    <Icon className="w-6 h-6 text-[#C5A059]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] group-hover:text-[#0284C7] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#475E80] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-sky-100 flex items-center text-xs font-bold uppercase tracking-wider text-[#0284C7] group-hover:translate-x-1 transition-transform">
                  <span>Learn More →</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
