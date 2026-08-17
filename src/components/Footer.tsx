import React from 'react';
import { Scale, Globe, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F0F7FD] border-t border-sky-200/70 py-16 text-[#0B1528]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-sky-200/70">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#0284C7]" />
              <span className="font-sans font-extrabold text-lg tracking-tight text-[#0B1528]">
                SENSIRUPT
              </span>
            </div>
            <p className="text-xs text-[#475E80] max-w-sm font-normal leading-relaxed">
              Sensirupt embodies sensible disruption — integrating financial, legal, and technical intelligence into implementation-ready advisory for founders and technology leaders globally.
            </p>
            <div className="text-[11px] text-[#0284C7] font-semibold flex items-center gap-1.5 pt-1">
              <Globe className="w-3.5 h-3.5" /> Multi-Jurisdictional Advisory (US, EU, APAC)
            </div>
          </div>

          {/* Locations Col */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1528]">
              Primary Advisory Desks
            </h4>
            <ul className="space-y-2 text-xs text-[#475E80]">
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                <span><strong className="text-[#0B1528]">Silicon Valley</strong> — Palo Alto, CA 94301, USA</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                <span><strong className="text-[#0B1528]">New Delhi</strong> — Aerocity Corporate Tower, New Delhi, India</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                <span><strong className="text-[#0B1528]">Bengaluru</strong> — Indiranagar Tech Corridor, Bengaluru, India</span>
              </li>
            </ul>
          </div>

          {/* Nav Links Col */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1528]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#475E80]">
              <li><a href="#philosophy" className="hover:text-[#0B1528] transition-colors">Philosophy & Ethos</a></li>
              <li><a href="#specialties" className="hover:text-[#0B1528] transition-colors">Core Practice Areas</a></li>
              <li><a href="#approach" className="hover:text-[#0B1528] transition-colors">Interlocking Triad</a></li>
              <li><a href="#credentials" className="hover:text-[#0B1528] transition-colors">Credentials & Proof Points</a></li>
              <li><a href="#estimator" className="hover:text-[#0B1528] transition-colors">Strategy Estimator</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#475E80] gap-4">
          <p>© {new Date().getFullYear()} Sensirupt Advisory LLP. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#0B1528] cursor-pointer">Confidentiality & Privacy Policy</span>
            <span className="hover:text-[#0B1528] cursor-pointer">Regulatory Disclaimers</span>
            <span className="hover:text-[#0B1528] cursor-pointer">Terms of Engagement</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
