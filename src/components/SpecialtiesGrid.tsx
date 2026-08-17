import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldAlert,
  ArrowUpRight,
  RefreshCw,
  TrendingUp,
  FileCode2,
  PieChart,
  Network,
  Briefcase,
  Lock,
  Tv,
  X,
  CheckCircle2
} from 'lucide-react';

export interface SpecialtyItem {
  id: string;
  icon: any;
  title: string;
  shortDesc: string;
  fullDetails: string[];
  deliverables: string[];
}

interface SpecialtiesGridProps {
  onOpenConsultation: (specialtyTitle: string) => void;
}

export const SpecialtiesGrid: React.FC<SpecialtiesGridProps> = ({ onOpenConsultation }) => {
  const [activeModal, setActiveModal] = useState<SpecialtyItem | null>(null);

  const specialties: SpecialtyItem[] = [
    {
      id: 'ipr',
      icon: ShieldAlert,
      title: 'IP Strategy & Rights (IPR)',
      shortDesc: 'Global patent portfolio architecture, freedom-to-operate (FTO), and defensive patent wall construction.',
      fullDetails: [
        'Multi-jurisdictional patent filing strategy across USPTO, EPO, and WIPO.',
        'Prior art analysis and defensive patent wall construction.',
        'Trade secret architecture and technical clean-room implementation.'
      ],
      deliverables: ['Global IP Roadmap', 'FTO Opinion Letters', 'Trade Secret Protocols']
    },
    {
      id: 'tech-transfer',
      icon: RefreshCw,
      title: 'Technology Transfer',
      shortDesc: 'Structuring university-to-industry commercialization and cross-border tech licensing agreements.',
      fullDetails: [
        'Commercialization terms for academic and research institution spin-offs.',
        'Exclusive vs. non-exclusive field-of-use licensing frameworks.',
        'Royalty rate benchmarking and milestone-based technology escrows.'
      ],
      deliverables: ['Tech Transfer Agreements', 'Escrow Structuring', 'Royalty Valuation']
    },
    {
      id: 'valuation',
      icon: TrendingUp,
      title: 'IP Transactions & Valuation',
      shortDesc: 'Quantitative financial modeling, M&A IP due diligence, and valuation of intangible technology assets.',
      fullDetails: [
        'Relief-from-Royalty and Discounted Cash Flow (DCF) IP valuation models.',
        'Sell-side and buy-side M&A tech stack due diligence.',
        'IP-backed debt financing and collateralization advisory.'
      ],
      deliverables: ['Certified IP Valuation Reports', 'M&A Due Diligence Audits', 'Collateral Terms']
    },
    {
      id: 'tech-law',
      icon: FileCode2,
      title: 'Technology Law',
      shortDesc: 'Regulatory compliance for AI systems, SaaS contracts, open-source governance, and cloud architecture.',
      fullDetails: [
        'Generative AI training data compliance and copyright risk mitigation.',
        'Open-source software (OSS) audit and copyleft license remediation.',
        'Enterprise SLA, MSA, and API integration terms.'
      ],
      deliverables: ['AI Governance Manual', 'OSS Remediation Plan', 'Enterprise MSA Suite']
    },
    {
      id: 'fund-advisory',
      icon: PieChart,
      title: 'Tech Investment Fund Advisory',
      shortDesc: 'Guiding VC and PE funds on technical IP risk assessment, codebase audits, and venture portfolio strategy.',
      fullDetails: [
        'Pre-investment technical and IP due diligence for Seed to Series C.',
        'Portfolio company IP defense and offensive litigation risk modeling.',
        'Fund-level LP reporting on portfolio patent health.'
      ],
      deliverables: ['Venture Due Diligence Memo', 'Portfolio IP Matrix', 'Risk Scorecards']
    },
    {
      id: 'alliance',
      icon: Network,
      title: 'IP-Centric Alliance Structuring',
      shortDesc: 'Designing cross-corporate joint ventures, co-development pacts, and multi-party patent pools.',
      fullDetails: [
        'Joint development agreement (JDA) background vs. foreground IP division.',
        'Consortium and industry standard patent pooling governance.',
        'Cross-licensing covenants and non-assert agreements.'
      ],
      deliverables: ['JDA Framework', 'Patent Pool Covenants', 'Governance Charters']
    },
    {
      id: 'brokerage',
      icon: Briefcase,
      title: 'IP Brokerage',
      shortDesc: 'Monetizing non-core patent assets through targeted divestiture, acquisition, and licensing transactions.',
      fullDetails: [
        'Patent portfolio pruning and monetization candidate identification.',
        'Target buyer/licensee mapping and confidential offering memorandums.',
        'Auction negotiation and patent assignment execution.'
      ],
      deliverables: ['Monetization Prospectus', 'Buyer Target Mapping', 'Assignment Deeds']
    },
    {
      id: 'privacy',
      icon: Lock,
      title: 'Privacy & Data Protection Law',
      shortDesc: 'Global data sovereignty, GDPR, CCPA, and cross-border telemetry compliance for SaaS & AI products.',
      fullDetails: [
        'Data Protection Impact Assessments (DPIA) for complex data pipelines.',
        'Cross-border data transfer mechanisms (SCCs, Binding Corporate Rules).',
        'Biometric, healthcare, and financial telemetry data compliance.'
      ],
      deliverables: ['DPIA Audits', 'Standard Contractual Clauses', 'Data Architecture Rules']
    },
    {
      id: 'media',
      icon: Tv,
      title: 'Media & Entertainment Law',
      shortDesc: 'Digital rights management (DRM), streaming content licensing, and interactive media IP protection.',
      fullDetails: [
        'Digital content licensing and syndication deal structures.',
        'Gaming, metaverse, and virtual asset copyright architecture.',
        'Personality rights, likeness licensing, and voice AI talent releases.'
      ],
      deliverables: ['Distribution Licensing Deals', 'Talent AI Release Deeds', 'DRM Protocols']
    },
  ];

  return (
    <section id="specialties" className="py-24 bg-[#F4F9FD] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 border-b border-sky-200/70 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-[2px] bg-[#0284C7]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7]">
                Practice Areas
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#0B1528]">
              Our Techno-Legal <span className="font-serif italic font-normal">Specialties.</span>
            </h2>
          </div>
          <p className="text-sm text-[#475E80] max-w-md font-normal leading-relaxed">
            Tailored advisory services bridging technology creation, quantitative financial valuation, and global legal protection.
          </p>
        </div>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
              >
                <div
                  onClick={() => setActiveModal(item)}
                  className="sky-card rounded-2xl p-7 h-full flex flex-col justify-between group cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-xl bg-[#0B1528] text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                        <Icon className="w-5 h-5 text-[#38BDF8]" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#F0F7FD] border border-sky-200 flex items-center justify-center text-[#475E80] group-hover:text-[#0284C7] group-hover:border-[#0284C7] transition-all">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-[#0B1528] group-hover:text-[#0284C7] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#475E80] font-normal leading-relaxed">
                      {item.shortDesc}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-sky-100 flex items-center justify-between text-xs text-[#0B1528] font-semibold">
                    <span>Explore Scope</span>
                    <span className="text-[#0284C7] transition-transform group-hover:translate-x-1">
                      Learn More →
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal Drawer */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B1528]/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              className="bg-white rounded-3xl max-w-2xl w-full p-8 shadow-2xl border border-sky-200 relative overflow-hidden"
            >
              <div className="h-1.5 w-full bg-[#0284C7] absolute top-0 left-0" />

              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-6 right-6 p-2 text-[#475E80] hover:text-[#0B1528] rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0B1528] text-white flex items-center justify-center shrink-0">
                  {React.createElement(activeModal.icon, { className: "w-6 h-6 text-[#38BDF8]" })}
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#0284C7]">Practice Scope</span>
                  <h3 className="text-xl font-bold text-[#0B1528]">{activeModal.title}</h3>
                </div>
              </div>

              <p className="text-sm text-[#475E80] leading-relaxed mb-6">
                {activeModal.shortDesc}
              </p>

              <div className="space-y-4 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1528]">Advisory Deliverables</h4>
                <ul className="space-y-2">
                  {activeModal.fullDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs text-[#334A6E]">
                      <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => {
                    const title = activeModal.title;
                    setActiveModal(null);
                    onOpenConsultation(title);
                  }}
                  className="flex-1 bg-[#0B1528] hover:bg-black text-white py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <span>Request {activeModal.title} Briefing</span>
                  <ArrowUpRight className="w-4 h-4 text-[#38BDF8]" />
                </button>
                <button
                  onClick={() => setActiveModal(null)}
                  className="px-6 py-3.5 rounded-full border border-gray-300 text-xs font-semibold text-[#475E80] hover:text-[#0B1528] transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
