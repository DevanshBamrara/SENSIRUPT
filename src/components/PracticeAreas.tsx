import React from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  ShieldCheck,
  Terminal,
  Lightbulb,
  Landmark,
  Activity,
  Leaf,
  Clapperboard,
  Trophy,
  ArrowRight,
} from 'lucide-react';

interface PracticeAreasProps {
  onOpenConsultation: (topic?: string) => void;
}

export const PracticeAreas: React.FC<PracticeAreasProps> = ({ onOpenConsultation }) => {
  const domains = [
    {
      title: 'Artificial Intelligence (AI)',
      description: 'Legal, IP and regulatory strategy for AI-driven products, models and data pipelines.',
      icon: Cpu,
    },
    {
      title: 'Privacy & Data Protection',
      description: 'Data governance, compliance and privacy-by-design advisory for growing technology businesses.',
      icon: ShieldCheck,
    },
    {
      title: 'Cyberlaw & IT Law',
      description: 'Legal guidance on digital infrastructure, platforms, e-commerce and information technology matters.',
      icon: Terminal,
    },
    {
      title: 'Intellectual Property (IP)',
      description: 'Patent, trademark, copyright and trade secret strategy, valuation and portfolio management.',
      icon: Lightbulb,
    },
    {
      title: 'FinTech',
      description: 'Regulatory, licensing and transaction advisory for financial technology and digital payment businesses.',
      icon: Landmark,
    },
    {
      title: 'Medical & Health Law',
      description: 'Legal and IP support for medical devices, healthtech platforms and life sciences innovation.',
      icon: Activity,
    },
    {
      title: 'Environmental Law',
      description: 'Advisory for climate-tech, sustainability and clean-energy ventures navigating regulatory frameworks.',
      icon: Leaf,
    },
    {
      title: 'Entertainment Law',
      description: 'IP, licensing and contract advisory for creators, studios and digital entertainment platforms.',
      icon: Clapperboard,
    },
    {
      title: 'Sports Law',
      description: 'Legal and IP advisory for sports technology, athlete brands and sports-tech ventures.',
      icon: Trophy,
    },
  ];

  return (
    <section id="practice-areas" className="py-24 lg:py-32 bg-[#EBF3FB]/70 border-t border-[#3F5F86]/10 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20 space-y-4">
          <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-serif font-light text-[#141414] tracking-normal leading-[1.38] mx-auto">
            <span className="block mb-1 sm:mb-2">Advising Across the Full Spectrum of</span>
            <span className="block text-[#141414]">Technology and Business Law.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#3F5F86] font-normal leading-relaxed max-w-2xl mx-auto pt-1">
            Innovation doesn’t sit inside one legal box, and neither do we. Our practice spans the legal domains that matter to technology companies, creators, investors and institutions today — so you get one integrated team instead of five separate specialists.
          </p>
        </div>

        {/* 9 Cards in 3x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {domains.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
                onClick={() => onOpenConsultation(`Practice Inquiry: ${domain.title}`)}
                className="bg-white rounded-2xl p-7 border border-[#3F5F86]/15 hover:border-[#E3A19C] shadow-[0_4px_20px_rgba(20,20,20,0.03)] hover:shadow-[0_12px_32px_rgba(20,20,20,0.07)] transition-all cursor-pointer group flex flex-col justify-between relative overflow-hidden"
              >
                {/* Thin gold top rule */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-[#C6A15B]/30 group-hover:bg-[#C6A15B] transition-colors" />

                <div className="space-y-4 pt-1">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF3FB] text-[#C6A15B] flex items-center justify-center transition-transform duration-200 group-hover:scale-105 border border-[#3F5F86]/10">
                    <Icon className="w-5 h-5 text-[#C6A15B]" />
                  </div>

                  <h3 className="text-lg font-bold text-[#141414] leading-snug group-hover:text-[#2E8BE8] transition-colors">
                    {domain.title}
                  </h3>

                  <p className="text-sm text-[#3F5F86] leading-relaxed">
                    {domain.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-[#3F5F86]/10 flex items-center justify-between text-xs font-bold uppercase tracking-[0.06em] text-[#2E8BE8]">
                  <span>Inquire Domain</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
