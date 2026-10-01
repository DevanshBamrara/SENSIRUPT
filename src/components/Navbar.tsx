import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: (topic?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Practice Areas', href: '#practice-areas' },
    { name: 'Ventures', href: '#ventures' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#8DBDF0]/25 py-3.5 shadow-[0_4px_20px_rgba(46,139,232,0.06)]'
          : 'bg-transparent border-b border-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">

        {/* Left: Brand Logo */}
        <div className="flex-1 flex items-center">
          <a href="#" className="inline-block group focus:outline-none">
            <span className="font-sans font-extrabold text-2xl tracking-tighter text-[#141414] group-hover:text-[#2E8BE8] transition-colors duration-200">
              SENSIRUPT
            </span>
          </a>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center justify-center gap-8 flex-shrink-0" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[13px] font-semibold uppercase tracking-[0.06em] text-[#141414] hover:text-[#2E8BE8] transition-colors duration-200 py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: White pill "Book Briefing →" */}
        <div className="hidden md:flex items-center justify-end flex-1">
          <button
            onClick={() => onOpenConsultation("General Advisory Briefing")}
            className="bg-white hover:bg-[#FDF2F0]/40 text-[#141414] border border-white/90 hover:border-[#E3A19C]/60 shadow-[0_2px_12px_rgba(46,139,232,0.12)] hover:shadow-[0_4px_16px_rgba(227,161,156,0.22)] rounded-full px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.06em] flex items-center gap-2 transition-all duration-200 hover:scale-[1.02] active:scale-95"
          >
            <span>Book Briefing</span>
            <span className="text-[#2E8BE8] font-bold">→</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#141414] bg-white/80 backdrop-blur-md rounded-xl transition-colors border border-white/80 focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#3F5F86]/10 px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold uppercase tracking-[0.06em] text-[#141414] py-2 border-b border-[#EBF3FB] hover:text-[#2E8BE8] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation("General Advisory Briefing");
              }}
              className="w-full bg-[#141414] hover:bg-black text-white rounded-full py-3.5 text-xs font-semibold uppercase tracking-[0.06em] flex items-center justify-center gap-2 shadow-md transition-all active:scale-98"
            >
              <span>Book Briefing</span>
              <span className="text-[#C6A15B] font-bold">→</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
