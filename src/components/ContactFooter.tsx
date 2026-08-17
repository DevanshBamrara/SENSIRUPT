import React from 'react';
import { MapPin, Mail, Phone, ArrowRight } from 'lucide-react';

interface ContactFooterProps {
  onOpenConsultation: (topic?: string) => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ onOpenConsultation }) => {
  return (
    <footer id="contact" className="min-h-[85vh] lg:min-h-screen flex flex-col justify-between bg-white border-t border-sky-200/80 pt-24 pb-12 text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full my-auto">
        
        {/* Main Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-sky-100 items-center">
          
          {/* Left: Headline & CTA */}
          <div className="lg:col-span-6 space-y-7">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-light text-[#1A1A1A] tracking-tight leading-[1.08]">
              Disrupt Sensibly. <br />
              <span className="font-serif italic font-normal text-[#0284C7]">Let's talk.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#475E80] max-w-md font-normal leading-relaxed">
              Connect directly with our boutique techno-legal advisory team for a confidential, conflict-checked consultation.
            </p>
            <div>
              <button
                onClick={() => onOpenConsultation("General Advisory Briefing")}
                className="bg-[#1A1A1A] hover:bg-black text-white px-9 py-4 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-xl"
              >
                <span>Book Briefing</span>
                <ArrowRight className="w-4 h-4 text-[#C5A059]" />
              </button>
            </div>
          </div>

          {/* Right: Contact Details */}
          <div className="lg:col-span-6 space-y-6 bg-[#F4F9FD] rounded-3xl p-8 sm:p-12 border border-sky-200/80 shadow-lg">
            <div className="space-y-6 text-sm text-[#2A3447]">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-sky-200 flex items-center justify-center shrink-0 text-[#0284C7] shadow-xs mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] mb-1">Address</div>
                  <div className="leading-relaxed text-xs sm:text-sm text-[#475E80] font-medium">
                    20th Floor, Galaxy Blue Sapphire Plaza, Greater Noida W Rd, Sector 4, Noida, UP - 201309, India
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-sky-200 flex items-center justify-center shrink-0 text-[#0284C7] shadow-xs">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] mb-1">Email</div>
                  <a href="mailto:sensirupt@gmail.com" className="text-xs sm:text-sm text-[#0284C7] font-bold hover:underline">
                    sensirupt@gmail.com
                  </a>
                </div>
              </div>

              {/* Contact Phone */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-sky-200 flex items-center justify-center shrink-0 text-[#0284C7] shadow-xs">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] mb-1">Contact</div>
                  <a href="tel:+917827963285" className="text-xs sm:text-sm text-[#1A1A1A] font-bold hover:text-[#0284C7] transition-colors">
                    +91 7827963285
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] gap-4">
          <div className="flex items-center gap-2">
            <span className="font-black text-[#1A1A1A]">SENSIRUPT</span>
            <span>— © {new Date().getFullYear()} All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6 text-[11px] font-medium">
            <span className="hover:text-[#1A1A1A] cursor-pointer">Confidentiality Policy</span>
            <span className="hover:text-[#1A1A1A] cursor-pointer">Terms of Advisory</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
