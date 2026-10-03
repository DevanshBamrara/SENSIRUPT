import React from 'react';
import { motion } from 'framer-motion';

interface VenturesProps {
  onOpenConsultation: (ventureTitle?: string) => void;
}

export const Ventures: React.FC<VenturesProps> = ({ onOpenConsultation }) => {
  const ventures = [
    {
      sector: 'CleanTech · Academic spin-out',
      title: 'Clean Air Technology',
      origin: 'Premier Deep-Tech Research Consortia',
      description: 'World-first AC-integrated air purifier. Technology-transfer and spin-out structuring, with cross-border IP defence for the underlying research.',
      outcomeLabel: 'Won:',
      outcomeText: 'Prime broadcast venture funding. Patented breakthrough filtration.',
    },
    {
      sector: 'Sustainability · Infrastructure',
      title: 'Water Conservation',
      origin: 'Institutional Infrastructure',
      description: 'Waterless urinal technology saving millions of litres daily. Intangible asset structuring and commercialisation covenants.',
      outcomeLabel: 'Secured:',
      outcomeText: 'National venture backing and a high-defensibility green-tech patent portfolio.',
    },
    {
      sector: 'Hardware · Electric mobility',
      title: 'Folding EV Mobility',
      origin: 'World-first diamond-frame design',
      description: 'A mechanical-engineering innovation. Strategic patent prosecution and international term-sheet structuring.',
      outcomeLabel: 'Secured:',
      outcomeText: 'Broadcast venture capital, international trademark and design patent.',
    },
    {
      sector: 'Automotive · Electric mobility',
      title: 'Self-Balancing Gyro Tech',
      origin: 'Mentored by Global Automotive Research & Mobility Consortia',
      description: "The world's first self-balancing scooter. Foundational IP claims architecture and international go-to-market counsel.",
      outcomeLabel: 'Featured:',
      outcomeText: 'International Mobility Expo showcase. Invited to counsel leading deep-tech spin-outs.',
    },
    {
      sector: 'Spatial computing · AI/XR',
      title: 'Immersive 3D Platform',
      origin: 'Global Deep-Tech Spatial Startup',
      description: 'Virtual 3D spatial technology. Cross-border corporate structuring and equity agreements for the Series A.',
      outcomeLabel: 'Results:',
      outcomeText: '$12M+ annual turnover. $6.5M Series A from institutional venture funds.',
    },
    {
      sector: 'MedTech · Early diagnostics',
      title: 'FDA-Cleared Medical Device',
      origin: 'Global health innovation',
      description: 'A non-invasive, radiation-free breast-lump detector. Patent claim drafting, international IP defence and strategic financing.',
      outcomeLabel: 'Results:',
      outcomeText: '$3M Series A. Backed by global biopharma leaders. Featured in BBC documentary.',
    },
  ];

  return (
    <section id="ventures" className="min-h-screen flex flex-col justify-center py-24 lg:py-32 bg-[#EBF3FB] relative overflow-hidden">
      {/* Signature Bluish & Pinkish Ambient Lighting */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#8DBDF0]/55 via-[#E3A19C]/45 to-transparent z-10" />
      <div className="absolute top-1/4 -right-20 w-[480px] h-[480px] rounded-full bg-gradient-to-bl from-[#E3A19C]/20 via-[#EBC9B5]/15 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-[#8DBDF0]/25 via-[#2E8BE8]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20 space-y-4">
          <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-serif font-light text-[#141414] tracking-normal leading-[1.38] mx-auto">
            <span className="block mb-1 sm:mb-2">Breakthrough Innovations</span>
            <span className="block font-serif font-normal text-[#2E8BE8]">Scaled to Market Leadership.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#3F5F86] font-normal leading-relaxed pt-1">
            Innovations we have strategised, funded and protected.
          </p>
        </div>

        {/* 3-Column Grid of 6 Cards (Desktop: 3 cols, Tablet: 2 cols, Mobile: 1 col) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {ventures.map((venture, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: (index % 3) * 0.09 }}
              onClick={() => onOpenConsultation(`Case Inquiry: ${venture.title}`)}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-[#3F5F86]/15 hover:border-[#E3A19C] shadow-[0_4px_20px_rgba(20,20,20,0.03)] hover:shadow-[0_16px_36px_rgba(46,139,232,0.08),0_4px_16px_rgba(227,161,156,0.12)] transition-all cursor-pointer group flex flex-col justify-between relative overflow-hidden"
            >
              {/* Thin sky-to-gold-to-pink top rule */}
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-[#8DBDF0]/40 via-[#C6A15B]/50 to-[#E3A19C]/40 group-hover:from-[#2E8BE8] group-hover:via-[#C6A15B] group-hover:to-[#E3A19C] transition-all duration-300" />

              <div className="space-y-4">
                {/* Sector tag (gold to blush small caps) */}
                <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#C6A15B] group-hover:text-[#B85C55] transition-colors">
                  {venture.sector}
                </div>

                {/* Title & Origin */}
                <div>
                  <h3 className="text-xl font-bold text-[#141414] group-hover:text-[#2E8BE8] transition-colors leading-snug">
                    {venture.title}
                  </h3>
                  <p className="text-xs font-medium text-[#3F5F86] mt-1">
                    Origin: {venture.origin}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-[#3F5F86] leading-relaxed">
                  {venture.description}
                </p>

                {/* Outcome line */}
                <div className="p-3.5 rounded-xl bg-[#EBF3FB]/80 border border-[#3F5F86]/10 text-xs leading-relaxed">
                  <span className="font-bold text-[#141414] mr-1.5">{venture.outcomeLabel}</span>
                  <span className="text-[#3F5F86] font-medium">{venture.outcomeText}</span>
                </div>
              </div>

              {/* Curious Link */}
              <div className="pt-5 mt-5 border-t border-[#3F5F86]/10 flex items-center justify-between text-xs font-bold uppercase tracking-[0.06em] text-[#2E8BE8]">
                <span>Curious?</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footnote */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#3F5F86]/80 font-medium">
            Client identities are described to the extent permitted by professional confidentiality.
          </p>
        </div>

      </div>
    </section>
  );
};

