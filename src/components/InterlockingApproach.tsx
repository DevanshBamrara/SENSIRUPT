import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CircleDollarSign, Scale, Cpu, Sparkles, Layers } from 'lucide-react';

export const InterlockingApproach: React.FC = () => {
  const [activePillar, setActivePillar] = useState<'finance' | 'legal' | 'technical' | 'core'>('core');

  const pillarData = {
    finance: {
      title: "Financial Intelligence",
      icon: CircleDollarSign,
      color: "#0284C7",
      description: "Quantitative IP valuation, Discounted Cash Flow modeling, M&A deal structuring, and royalty economics that align with venture capital and corporate treasury realities.",
      bulletPoints: [
        "Relief-from-Royalty & DCF financial modeling",
        "M&A tech stack valuation & deal terms",
        "Venture fund portfolio IP risk scorecards"
      ]
    },
    legal: {
      title: "Legal & Regulatory Intelligence",
      icon: Scale,
      color: "#0369A1",
      description: "USPTO & multi-jurisdictional patent prosecution, cross-border technology licensing, privacy law, and trade secret architecture.",
      bulletPoints: [
        "USPTO, EPO & WIPO global patent filings",
        "Cross-border technology transfer agreements",
        "Generative AI & privacy regulatory compliance"
      ]
    },
    technical: {
      title: "Technical Intelligence",
      icon: Cpu,
      color: "#0B1528",
      description: "Over 90% of our team holds technology and engineering degrees. We read source code, analyze hardware schematics, and evaluate deep-tech architectures directly.",
      bulletPoints: [
        "Deep-tech & AI codebase auditing",
        "Prior art search by domain engineers",
        "Open-source software license governance"
      ]
    },
    core: {
      title: "Sensirupt Unified Synthesis",
      icon: Sparkles,
      color: "#0284C7",
      description: "Where all three disciplines converge. Founders receive one implementation-ready directive rather than having to translate between siloed lawyers, accountants, and engineers.",
      bulletPoints: [
        "Single implementation roadmap across finance, law, & tech",
        "Ex-US Tech Director & Silicon Valley deal execution",
        "Zero friction between technical innovation & legal protection"
      ]
    }
  };

  const current = pillarData[activePillar];

  return (
    <section id="approach" className="py-24 bg-[#EBF4FC] relative overflow-hidden border-t border-b border-sky-200/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-sky-200 shadow-xs">
            <Layers className="w-3.5 h-3.5 text-[#0284C7]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7]">
              The Interlocking Triad
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#0B1528]">
            Finance + Legal + Technical <span className="font-serif italic font-normal">Intelligence.</span>
          </h2>
          <p className="text-sm text-[#475E80] font-normal leading-relaxed max-w-lg mx-auto">
            Most firms advise in isolation. Click any pillar to see how Sensirupt synthesizes all three domains into unified advisory.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Interactive SVG Diagram */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative min-h-[360px]">
            <svg
              viewBox="0 0 500 450"
              className="w-full max-w-md h-auto drop-shadow-sm select-none"
            >
              {/* Top Circle: Finance */}
              <g
                onClick={() => setActivePillar('finance')}
                className="cursor-pointer transition-all duration-300"
              >
                <circle
                  cx="250"
                  cy="140"
                  r="115"
                  fill={activePillar === 'finance' ? 'rgba(2, 132, 199, 0.22)' : 'rgba(2, 132, 199, 0.08)'}
                  stroke="#0284C7"
                  strokeWidth={activePillar === 'finance' ? '2.5' : '1'}
                  className="transition-all duration-300 hover:fill-sky-200/40"
                />
                <text x="250" y="110" textAnchor="middle" fill="#0284C7" fontSize="12" fontWeight="700" letterSpacing="1.5">
                  FINANCE
                </text>
                <text x="250" y="130" textAnchor="middle" fill="#475E80" fontSize="11" fontWeight="500">
                  Valuation & Deals
                </text>
              </g>

              {/* Bottom Left Circle: Legal */}
              <g
                onClick={() => setActivePillar('legal')}
                className="cursor-pointer transition-all duration-300"
              >
                <circle
                  cx="160"
                  cy="290"
                  r="115"
                  fill={activePillar === 'legal' ? 'rgba(3, 105, 161, 0.2)' : 'rgba(3, 105, 161, 0.08)'}
                  stroke="#0369A1"
                  strokeWidth={activePillar === 'legal' ? '2.5' : '1'}
                  className="transition-all duration-300 hover:fill-sky-200/40"
                />
                <text x="135" y="300" textAnchor="middle" fill="#0369A1" fontSize="12" fontWeight="700" letterSpacing="1.5">
                  LEGAL
                </text>
                <text x="135" y="320" textAnchor="middle" fill="#475E80" fontSize="11" fontWeight="500">
                  Rights & IP Law
                </text>
              </g>

              {/* Bottom Right Circle: Technical */}
              <g
                onClick={() => setActivePillar('technical')}
                className="cursor-pointer transition-all duration-300"
              >
                <circle
                  cx="340"
                  cy="290"
                  r="115"
                  fill={activePillar === 'technical' ? 'rgba(11, 21, 40, 0.2)' : 'rgba(11, 21, 40, 0.08)'}
                  stroke="#0B1528"
                  strokeWidth={activePillar === 'technical' ? '2.5' : '1'}
                  className="transition-all duration-300 hover:fill-slate-200/40"
                />
                <text x="365" y="300" textAnchor="middle" fill="#0B1528" fontSize="12" fontWeight="700" letterSpacing="1.5">
                  TECHNICAL
                </text>
                <text x="365" y="320" textAnchor="middle" fill="#475E80" fontSize="11" fontWeight="500">
                  90%+ Tech Degrees
                </text>
              </g>

              {/* Center Interlocking Core */}
              <g
                onClick={() => setActivePillar('core')}
                className="cursor-pointer group"
              >
                <circle
                  cx="250"
                  cy="245"
                  r="26"
                  fill="#0B1528"
                  stroke="#38BDF8"
                  strokeWidth="2"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <text x="250" y="250" textAnchor="middle" fill="#38BDF8" fontSize="11" fontWeight="800">
                  S
                </text>
              </g>
            </svg>

            {/* Selector Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
              <button
                onClick={() => setActivePillar('finance')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                  activePillar === 'finance'
                    ? 'bg-[#0284C7] text-white shadow-xs'
                    : 'bg-white text-[#475E80] border border-sky-200 hover:bg-sky-50'
                }`}
              >
                Financial
              </button>
              <button
                onClick={() => setActivePillar('legal')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                  activePillar === 'legal'
                    ? 'bg-[#0369A1] text-white shadow-xs'
                    : 'bg-white text-[#475E80] border border-sky-200 hover:bg-sky-50'
                }`}
              >
                Legal
              </button>
              <button
                onClick={() => setActivePillar('technical')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                  activePillar === 'technical'
                    ? 'bg-[#0B1528] text-white shadow-xs'
                    : 'bg-white text-[#475E80] border border-sky-200 hover:bg-sky-50'
                }`}
              >
                Technical
              </button>
              <button
                onClick={() => setActivePillar('core')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all border ${
                  activePillar === 'core'
                    ? 'bg-[#0B1528] text-[#38BDF8] border-[#0B1528]'
                    : 'bg-white text-[#0B1528] border-sky-200'
                }`}
              >
                ★ Unified Core
              </button>
            </div>
          </div>

          {/* Right Explanation Card */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-8 border border-sky-200 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-xs"
                    style={{ backgroundColor: current.color }}
                  >
                    {React.createElement(current.icon, { className: "w-6 h-6" })}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#0284C7]">Integrated Discipline</span>
                    <h3 className="text-xl font-bold text-[#0B1528]">{current.title}</h3>
                  </div>
                </div>

                <p className="text-sm text-[#334A6E] leading-relaxed mb-5">
                  {current.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-sky-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1528]">Core Capabilities</h4>
                  {current.bulletPoints.map((pt, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs text-[#0B1528] font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
