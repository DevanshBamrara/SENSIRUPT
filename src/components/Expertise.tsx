import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, GitCommit, FileCheck, LockKeyhole } from 'lucide-react';
import { ExpertiseDrawer, ExpertiseDetail } from './ExpertiseDrawer';

interface ExpertiseProps {
  onOpenConsultation: (topic?: string) => void;
}

export const Expertise: React.FC<ExpertiseProps> = ({ onOpenConsultation }) => {
  const [selectedItem, setSelectedItem] = useState<ExpertiseDetail | null>(null);

  const practiceItems: ExpertiseDetail[] = [
    {
      id: 'tech-law',
      title: 'Tech Law & Transactions',
      description: 'Structuring high-stakes, technology conveyance, cross-licensing alliances and venture scaling across borders.',
      tags: [
        'Licensing & cross-licensing',
        'Technology transfer',
        'Joint development & co-ownership',
      ],
      fullScope: [
        'Technology Transactions',
        'Technology Law (AI governance, API licensing, SaaS enterprise terms, vendor contracts)',
        'Structuring High-Stakes Alliances (research consortia, cross-border joint ventures)',
      ],
    },
    {
      id: 'venture-advisory',
      title: 'Venture Advisory',
      description: 'Techno-legal due diligence for funds and VCs, from clean IP title to defensibility of the moat and private capital governance.',
      tags: [
        'IP title diligence',
        'Cap-table & portfolio risk review',
        'Term sheet & SHA technical protections',
      ],
      fullScope: [
        'Investment Fund Advisory & Private Capital',
        'Cap-table and shareholder agreement technical protections',
        'Venture governance & cross-border diligence',
      ],
    },
    {
      id: 'privacy-media',
      title: 'Privacy & Media Law',
      description: 'Navigating complex global data-protection, platform governance, and entertainment regulation.',
      tags: [
        'GDPR & global compliance',
        'DPIA & cross-border transfers',
        'Rights acquisition & content licensing',
      ],
      fullScope: [
        'Privacy Law (cross-border data-transfer structures, platform privacy policies)',
        'Media & Entertainment Law (streaming rights, creator representation, copyright defence)',
      ],
    },
    {
      id: 'ip-strategy',
      title: 'IP Strategy & Valuation',
      description: 'Monetising patents and intangible assets, with claim architecture that stands up in financing and M&A.',
      tags: [
        'Patent prosecution (US · Global · PCT)',
        'Prior-art intelligence',
        'Relief-from-royalty & DCF valuation',
      ],
      fullScope: [
        'Intellectual Property Rights',
        'Innovation Strategy & Tech Transfer',
        'IP Valuation & Intangible Asset Management',
        'Asset Brokerage (discreet acquisition, sale, divestment and monetisation of patents)',
      ],
    },
  ];

  const icons = [GitCommit, FileCheck, LockKeyhole, Shield];

  return (
    <section id="expertise" className="min-h-[85vh] flex flex-col justify-center py-24 lg:py-32 bg-[#EBF3FB] relative overflow-hidden">
      {/* Signature Bluish & Pinkish Ambient Lighting */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#8DBDF0]/55 via-[#E3A19C]/45 to-transparent z-10" />
      <div className="absolute top-12 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-[#E3A19C]/20 via-[#EBC9B5]/15 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#8DBDF0]/25 via-[#2E8BE8]/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#E3A19C]/45 via-[#8DBDF0]/55 to-transparent z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
        
        {/* Headline & Intro */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-[54px] font-serif font-light text-[#141414] tracking-normal leading-[1.35]">
            Finance-Aware <span className="font-serif font-normal text-[#2E8BE8]">Techno-Legal</span> Strategy.
          </h2>
          
          <p className="text-sm sm:text-base text-[#3F5F86] font-normal leading-relaxed max-w-2xl mx-auto">
            Legal architecture designed around the balance sheet, the term sheet and the exit.
          </p>

          <p className="text-xs sm:text-[13px] text-[#3F5F86]/80 font-medium tracking-wide max-w-3xl mx-auto pt-1">
            Focus areas: innovation strategy · investment advisory · technology commercialization · intangible asset management · IP valuation · licensing · technology transactions · private capital
          </p>
        </div>

        {/* 4-Column Grid on Desktop, 2x2 on Tablet, 1 on Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {practiceItems.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedItem(item)}
                className="bg-white rounded-2xl p-7 border border-[#3F5F86]/15 hover:border-[#E3A19C] shadow-[0_4px_20px_rgba(20,20,20,0.03)] hover:shadow-[0_16px_36px_rgba(46,139,232,0.10),0_4px_16px_rgba(227,161,156,0.15)] transition-all cursor-pointer group flex flex-col justify-between relative overflow-hidden"
              >
                {/* Thin Sky-to-Pink-to-Gold Top Rule */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-[#8DBDF0]/50 via-[#C6A15B]/50 to-[#E3A19C]/50 group-hover:from-[#2E8BE8] group-hover:via-[#C6A15B] group-hover:to-[#E3A19C] transition-all duration-300" />

                <div className="space-y-4 pt-1">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#EBF3FB] to-[#FDF2F0] text-[#C6A15B] flex items-center justify-center transition-transform duration-200 group-hover:scale-105 border border-[#8DBDF0]/20 group-hover:border-[#E3A19C]/40">
                    <Icon className="w-5 h-5 text-[#C6A15B]" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#141414] leading-snug group-hover:text-[#2E8BE8] transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-[#3F5F86] leading-relaxed">
                    {item.description}
                  </p>

                  {/* 3 Tags with Delicate Brand Colors */}
                  <div className="pt-2 flex flex-col gap-1.5">
                    {item.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className={`text-[11px] font-medium px-2.5 py-1 rounded-md border transition-colors ${
                          tagIdx === 0
                            ? 'bg-[#EBF3FB]/90 text-[#2E8BE8] border-[#8DBDF0]/30'
                            : tagIdx === 1
                            ? 'bg-[#FDF2F0]/90 text-[#B85C55] border-[#E3A19C]/30'
                            : 'bg-[#FAF5EA]/90 text-[#9E7D47] border-[#C6A15B]/30'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-6 border-t border-[#3F5F86]/10 flex items-center justify-between text-xs font-bold uppercase tracking-[0.06em] text-[#2E8BE8]">
                  <span>Learn More</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Slide-over practice scope drawer */}
      <ExpertiseDrawer
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        item={selectedItem}
        onOpenConsultation={onOpenConsultation}
      />
    </section>
  );
};

