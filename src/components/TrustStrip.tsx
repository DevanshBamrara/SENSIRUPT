import React from 'react';
import { motion } from 'framer-motion';
import { Shield, GraduationCap, Globe, Building2 } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const credentials = [
    {
      icon: Shield,
      title: "USPTO & Berkeley Law Qualified",
      subtitle: "Admitted & Regulated Practice",
    },
    {
      icon: Building2,
      title: "Ex-US Tech Directors",
      subtitle: "Fortune 500 Executive Leadership",
    },
    {
      icon: Globe,
      title: "Silicon Valley • EU • APAC",
      subtitle: "Cross-Border Deal Desk",
    },
    {
      icon: GraduationCap,
      title: "90%+ STEM Degree Team",
      subtitle: "Engineers Advising Innovators",
    },
  ];

  return (
    <section id="credentials" className="py-12 bg-[#F0F7FD] border-y border-sky-200/70 relative z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center divide-x-0 md:divide-x divide-sky-200">
          {credentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 ${
                  index !== 0 ? 'md:pl-8' : ''
                }`}
              >
                <div className="w-11 h-11 rounded-full bg-white border border-sky-200 flex items-center justify-center shrink-0 shadow-xs text-[#0B1528]">
                  <Icon className="w-5 h-5 text-[#0284C7]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0B1528] tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#475E80] font-medium mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
