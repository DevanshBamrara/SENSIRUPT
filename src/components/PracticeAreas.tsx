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
    <section id="practice-areas" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Signature Bluish & Pinkish Ambient Lighting */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#8DBDF0]/55 via-[#E3A19C]/45 to-transparent z-10" />
      <div className="absolute top-1/3 -left-20 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-[#8DBDF0]/20 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[450px] h-[450px] rounded-full bg-gradient-to-tl from-[#E3A19C]/18 via-[#EBC9B5]/12 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#E3A19C]/45 via-[#8DBDF0]/55 to-transparent z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20 space-y-4">
          <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-serif font-light text-[#141414] tracking-normal leading-[1.38] mx-auto">
            <span className="block mb-1 sm:mb-2">Advising Across the Full Spectrum of</span>
            <span className="block font-serif font-normal text-[#2E8BE8]">Technology and Business Law.</span>
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
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: (index % 3) * 0.09 }}
                onClick={() => onOpenConsultation(`Practice Inquiry: ${domain.title}`)}
                className="bg-white rounded-2xl p-7 border border-[#3F5F86]/15 hover:border-[#E3A19C] shadow-[0_4px_20px_rgba(20,20,20,0.03)] hover:shadow-[0_16px_36px_rgba(46,139,232,0.08),0_4px_16px_rgba(227,161,156,0.12)] transition-all cursor-pointer group flex flex-col justify-between relative overflow-hidden"
              >
                {/* Thin sky-to-gold-to-pink top rule */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-[#8DBDF0]/50 via-[#C6A15B]/40 to-[#E3A19C]/50 group-hover:from-[#2E8BE8] group-hover:via-[#C6A15B] group-hover:to-[#E3A19C] transition-all duration-300" />

                <div className="space-y-4 pt-1">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#EBF3FB] to-[#FDF2F0] text-[#C6A15B] flex items-center justify-center transition-transform duration-200 group-hover:scale-105 border border-[#8DBDF0]/20 group-hover:border-[#E3A19C]/40">
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
