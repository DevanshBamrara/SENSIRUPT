import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface VenturesProps {
  onOpenConsultation: (ventureTitle?: string) => void;
}

export const Ventures: React.FC<VenturesProps> = ({ onOpenConsultation }) => {
  const ventures = [
    {
      title: "Clean Air Technology",
      subtitle: "IIT Kanpur, Bombay & IISc",
      description: "India's 1st AC-integrated purifier.",
      achievementLabel: "Won:",
      achievementText: "National television funding. Patented breakthrough filtration.",
    },
    {
      title: "Water Conservation",
      subtitle: "Institutional Infrastructure",
      description: "Waterless urinal technology saving millions of liters daily.",
      achievementLabel: "Secured:",
      achievementText: "National TV funding + Green-tech patent portfolio.",
    },
    {
      title: "Folding EV Mobility",
      subtitle: "World-First Diamond-Frame",
      description: "Mechanical engineering innovation.",
      achievementLabel: "Secured:",
      achievementText: "National TV funding, International Trademark & Design Patent.",
    },
    {
      title: "Self-Balancing Gyro Tech",
      subtitle: "Mentored by ARAI & Ministry of Heavy Industries",
      description: "World's 1st self-balancing scooter.",
      achievementLabel: "Featured:",
      achievementText: "Auto Expo 2023, Delhi. Invited by SINE IIT Bombay to mentor others.",
    },
    {
      title: "Immersive 3D Platform",
      subtitle: "IIT Delhi Startup",
      description: "Virtual 3D spatial tech.",
      achievementLabel: "Results:",
      achievementText: "₹100 Cr Turnover. $6.5M Series A from Siana Capital & Chiratae Ventures.",
    },
    {
      title: "FDA-Cleared Medical Device",
      subtitle: "Global Health Innovation",
      description: "Non-invasive, radiation-free breast lump detector.",
      achievementLabel: "Results:",
      achievementText: "$3M Series A. Backed by Biocon. Featured in BBC Documentary.",
    },
  ];

  return (
    <section id="ventures" className="min-h-screen flex flex-col justify-center py-24 lg:py-32 bg-[#EAF4FC] relative border-t border-sky-200/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-serif font-light text-[#1A1A1A] tracking-tight">
            Breakthroughs Scaled to <span className="font-serif italic font-normal text-[#C5A059]">9 Figures.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#475E80] font-normal leading-relaxed">
            Innovations we've strategized, funded, and protected.
          </p>
        </div>

        {/* 3-Column Grid of 6 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ventures.map((venture, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => onOpenConsultation(venture.title)}
              className="bg-white rounded-3xl p-8 border border-sky-200 shadow-sm hover:shadow-xl hover:border-[#0284C7]/50 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Title & Subtitle */}
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl font-bold text-[#1A1A1A] group-hover:text-[#0284C7] transition-colors leading-snug">
                      {venture.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-[#F0F7FD] border border-sky-200 flex items-center justify-center text-[#475E80] group-hover:text-[#0284C7] group-hover:border-[#0284C7] transition-all shrink-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-xs font-semibold italic text-[#C5A059] mt-1">
                    {venture.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-[#2A3447] leading-relaxed">
                  {venture.description}
                </p>

                {/* Achievement Highlight */}
                <div className="p-3.5 rounded-2xl bg-[#F0F7FD] border border-sky-100 text-xs leading-relaxed">
                  <span className="font-bold text-[#1A1A1A] mr-1">{venture.achievementLabel}</span>
                  <span className="text-[#475E80]">{venture.achievementText}</span>
                </div>
              </div>

              {/* CTA Link */}
              <div className="pt-5 mt-5 border-t border-sky-100 flex items-center text-xs font-bold uppercase tracking-wider text-[#0284C7] group-hover:translate-x-1 transition-transform">
                <span>Curious? →</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
