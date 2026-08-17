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
    { name: 'Ventures', href: '#ventures' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-sky-200/80 py-3.5 shadow-sm'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* Left: Brand Logo */}
        <div className="flex-1 flex items-center">
          <a href="#" className="inline-block group">
            <span className="font-sans font-black text-2xl tracking-tighter text-[#1A1A1A] group-hover:text-[#0284C7] transition-colors duration-200">
              SENSIRUPT
            </span>
          </a>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center justify-center gap-9 flex-shrink-0">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold uppercase tracking-wider text-[#1A1A1A] hover:text-[#0284C7] transition-colors duration-200 py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Book Briefing Button on the Right */}
        <div className="hidden md:flex items-center justify-end flex-1">
          <button
            onClick={() => onOpenConsultation("Schedule Briefing")}
            className="bg-white/85 hover:bg-white text-[#1A1A1A] hover:text-[#0284C7] border border-white/90 shadow-sm hover:shadow-md rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all hover:scale-105 active:scale-95 backdrop-blur-md"
          >
            <span>Book Briefing</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#0284C7]" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#1A1A1A] bg-white/70 backdrop-blur-md rounded-xl transition-colors border border-white/80"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-sky-200 px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold uppercase tracking-wider text-[#1A1A1A] py-2 border-b border-sky-100 hover:text-[#0284C7] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation("Schedule Briefing");
              }}
              className="w-full bg-[#1A1A1A] hover:bg-black text-white rounded-full py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Book Briefing</span>
              <ArrowRight className="w-4 h-4 text-[#C5A059]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
