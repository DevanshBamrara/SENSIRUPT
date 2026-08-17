import React, { useState } from 'react';
import { Calculator, ArrowRight, Shield, Clock, Award } from 'lucide-react';

interface AdvisoryCalculatorProps {
  onOpenConsultation: (summary: string) => void;
}

export const AdvisoryCalculator: React.FC<AdvisoryCalculatorProps> = ({ onOpenConsultation }) => {
  const [stage, setStage] = useState<'early' | 'scaleup' | 'ma' | 'enterprise'>('scaleup');
  const [focus, setFocus] = useState<'patent' | 'valuation' | 'ai' | 'transfer'>('patent');
  const [jurisdiction, setJurisdiction] = useState<'us' | 'eu' | 'asia' | 'global'>('us');

  const stageLabels = {
    early: 'Seed / Deep-Tech R&D',
    scaleup: 'Growth & Series A-C',
    ma: 'M&A / Corporate Divestiture',
    enterprise: 'Global IP Portfolio Governance',
  };

  const focusLabels = {
    patent: 'IP Strategy & Defensive Patent Wall',
    valuation: 'IP Transactions & DCF Valuation',
    ai: 'AI & Data Privacy Compliance Governance',
    transfer: 'Tech Transfer & Commercial Alliance',
  };

  const jurisdictionLabels = {
    us: 'United States (USPTO)',
    eu: 'European Union & UK',
    asia: 'South East Asia & India',
    global: 'Multi-Jurisdiction WIPO / Global',
  };

  const calculateScope = () => {
    let timeline = '2–4 Weeks Initial Audit';
    let teamLead = 'Senior IP Attorney + Tech Partner';
    let primaryRisk = 'Freedom to Operate & Codebase Copyleft Risk';
    let keyDeliverable = 'Comprehensive Global IP Protection & FTO Opinion';

    if (focus === 'valuation') {
      timeline = '3–5 Weeks Financial Modeling';
      teamLead = 'Ex-US Corporate Director + Financial Analyst';
      primaryRisk = 'Over/Under-valuation in M&A & Royalty Licensing';
      keyDeliverable = 'Certified Intangible Asset DCF Valuation Report';
    } else if (focus === 'ai') {
      timeline = '2–3 Weeks Telemetry Audit';
      teamLead = 'Privacy Attorney + Systems Architect';
      primaryRisk = 'Generative AI Training Data & Trans-Border Flow Violations';
      keyDeliverable = 'AI Regulatory Framework & DPIA Assessment';
    } else if (focus === 'transfer') {
      timeline = '4–6 Weeks Contract Negotiation';
      teamLead = 'Tech Transfer Partner + Litigator';
      primaryRisk = 'Foreground vs. Background IP Leakage in Joint Ventures';
      keyDeliverable = 'Joint Commercialization & Licensing Suite';
    }

    return { timeline, teamLead, primaryRisk, keyDeliverable };
  };

  const result = calculateScope();

  const handleRequest = () => {
    const summary = `Advisory Estimate Request: ${stageLabels[stage]} | ${focusLabels[focus]} | ${jurisdictionLabels[jurisdiction]}`;
    onOpenConsultation(summary);
  };

  return (
    <section id="estimator" className="py-24 bg-[#F4F9FD] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 border-b border-sky-200/70 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-[2px] bg-[#0284C7]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7]">
                Scope Modeling Tool
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-[#0B1528]">
              Techno-Legal Strategy <span className="font-serif italic font-normal">Estimator.</span>
            </h2>
          </div>
          <p className="text-sm text-[#475E80] max-w-md font-normal leading-relaxed">
            Configure your venture parameters to instantly model your advisory scope, timeline, and risk roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-sky-200 shadow-sm space-y-6">
              {/* Step 1: Stage */}
              <div className="space-y-2.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#0B1528]">
                  1. Venture Phase / Maturity
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {(Object.keys(stageLabels) as Array<keyof typeof stageLabels>).map((key) => (
                    <button
                      key={key}
                      onClick={() => setStage(key)}
                      className={`px-4 py-3 rounded-xl text-xs font-semibold text-left transition-all border ${
                        stage === key
                          ? 'bg-[#0B1528] text-white border-[#0B1528] shadow-sm'
                          : 'bg-[#F0F7FD] text-[#334A6E] border-sky-200 hover:bg-white hover:border-[#0284C7]'
                      }`}
                    >
                      {stageLabels[key]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Primary Focus */}
              <div className="space-y-2.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#0B1528]">
                  2. Primary Advisory Objective
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(Object.keys(focusLabels) as Array<keyof typeof focusLabels>).map((key) => (
                    <button
                      key={key}
                      onClick={() => setFocus(key)}
                      className={`px-4 py-3 rounded-xl text-xs font-semibold text-left transition-all border ${
                        focus === key
                          ? 'bg-[#0284C7] text-white border-[#0284C7] shadow-sm'
                          : 'bg-[#F0F7FD] text-[#334A6E] border-sky-200 hover:bg-white hover:border-[#0284C7]'
                      }`}
                    >
                      {focusLabels[key]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Jurisdiction */}
              <div className="space-y-2.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#0B1528]">
                  3. Key Regulatory Jurisdiction
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(Object.keys(jurisdictionLabels) as Array<keyof typeof jurisdictionLabels>).map((key) => (
                    <button
                      key={key}
                      onClick={() => setJurisdiction(key)}
                      className={`px-3 py-3 rounded-xl text-xs font-semibold text-center transition-all border ${
                        jurisdiction === key
                          ? 'bg-[#0284C7] text-white border-[#0284C7] shadow-sm'
                          : 'bg-[#F0F7FD] text-[#334A6E] border-sky-200 hover:bg-white hover:border-[#0284C7]'
                      }`}
                    >
                      {jurisdictionLabels[key]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-8 border border-sky-200 shadow-lg relative overflow-hidden space-y-5">
              <div className="h-1.5 w-full bg-[#0284C7] absolute top-0 left-0" />

              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-[#0B1528] text-white flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-[#38BDF8]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#0284C7]">Calculated Model</span>
                  <h3 className="text-lg font-bold text-[#0B1528]">Advisory Blueprint</h3>
                </div>
              </div>

              <div className="space-y-3.5 text-xs">
                <div className="p-3.5 rounded-2xl bg-[#F0F7FD] border border-sky-200">
                  <div className="text-[11px] text-[#475E80] font-semibold mb-1 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#0284C7]" /> Execution Timeline
                  </div>
                  <div className="font-bold text-sm text-[#0B1528]">{result.timeline}</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#F0F7FD] border border-sky-200">
                  <div className="text-[11px] text-[#475E80] font-semibold mb-1 flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#0284C7]" /> Designated Engagement Lead
                  </div>
                  <div className="font-bold text-sm text-[#0B1528]">{result.teamLead}</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#F0F7FD] border border-sky-200">
                  <div className="text-[11px] text-[#475E80] font-semibold mb-1 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#0284C7]" /> Primary Risk Mitigation
                  </div>
                  <div className="font-semibold text-xs text-[#0B1528]">{result.primaryRisk}</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#EBF4FC] border border-sky-200">
                  <div className="text-[11px] text-[#0284C7] font-bold mb-1">Core Deliverable</div>
                  <div className="font-bold text-xs text-[#0B1528]">{result.keyDeliverable}</div>
                </div>
              </div>

              <button
                onClick={handleRequest}
                className="w-full bg-[#0B1528] hover:bg-black text-white py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 group"
              >
                <span>Request Briefing for This Blueprint</span>
                <ArrowRight className="w-4 h-4 text-[#38BDF8] transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
