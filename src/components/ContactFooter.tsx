import React, { useState } from 'react';
import { MapPin, Mail, Phone, Lock, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { submitInquiry } from '@/lib/sendInquiry';

interface ContactFooterProps {
  onOpenConsultation: (topic?: string) => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ onOpenConsultation }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    practiceArea: 'IP Strategy & Valuation',
    message: '',
    website: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setIsSubmitting(true);

    const result = await submitInquiry(formState);
    setIsSubmitting(false);

    if (result.success) {
      setSubmitted(true);
    } else {
      setErrorMessage(result.error || 'Failed to dispatch inquiry. Please try again.');
    }
  };

  return (
    <footer id="contact" className="min-h-[85vh] flex flex-col justify-between bg-white relative overflow-hidden pt-24 pb-12 text-[#141414]">
      {/* Signature Bluish & Pinkish Ambient Lighting */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#8DBDF0]/55 via-[#E3A19C]/45 to-transparent z-10" />
      <div className="absolute top-12 left-0 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-[#8DBDF0]/20 via-[#2E8BE8]/8 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 right-0 w-[480px] h-[480px] rounded-full bg-gradient-to-tl from-[#E3A19C]/18 via-[#EBC9B5]/12 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full my-auto relative z-10">

        {/* Main Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#3F5F86]/10 items-start">

          {/* Left Column: Heading, Copy, CTA & Details Block */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl lg:text-[62px] font-serif font-light text-[#141414] tracking-normal leading-[1.32]">
                <span>Disrupt Sensibly.</span> <br />
                <span className="font-serif font-normal text-[#2E8BE8]">Let's talk.</span>
              </h2>
              <p className="text-[17px] sm:text-[19px] text-[#3F5F86] max-w-lg font-normal leading-[1.6]">
                Connect directly with our boutique techno-legal advisory team for a confidential, conflict-checked consultation.
              </p>
            </div>

            {/* Quick Action Button */}
            <div>
              <button
                onClick={() => onOpenConsultation("General Advisory Briefing")}
                className="bg-[#141414] hover:bg-black text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.06em] flex items-center gap-3 transition-all hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-[0_8px_24px_rgba(46,139,232,0.25)]"
              >
                <span>Book Briefing</span>
                <span className="text-[#C6A15B] font-bold">→</span>
              </button>
            </div>

            {/* Direct Contact Details Block */}
            <div className="space-y-4 pt-4 border-t border-[#3F5F86]/10 max-w-md">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-[#EBF3FB] border border-[#8DBDF0]/20 flex items-center justify-center shrink-0 text-[#C6A15B] mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#141414]">Office Address</div>
                  <div className="text-sm font-medium text-[#3F5F86] leading-relaxed">
                    20th Floor, Galaxy Blue Sapphire Plaza, Greater Noida W Rd, Sector 4, Noida, UP - 201309
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-xl bg-[#EBF3FB] border border-[#8DBDF0]/20 flex items-center justify-center shrink-0 text-[#C6A15B]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#141414]">Direct Email</div>
                  <a
                    href="mailto:info@sensirupt.com"
                    className="text-sm font-semibold text-[#2E8BE8] hover:text-[#141414] transition-colors"
                  >
                    info@sensirupt.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-xl bg-[#EBF3FB] border border-[#8DBDF0]/20 flex items-center justify-center shrink-0 text-[#C6A15B]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#141414]">Direct Phone / WhatsApp</div>
                  <a
                    href="https://wa.me/917827963285"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#141414] hover:text-[#2E8BE8] transition-colors"
                  >
                    +91 78279 63285
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Confidential Inquiry Form with Top Accent */}
          <div className="lg:col-span-6 bg-[#EBF3FB]/90 rounded-2xl p-8 sm:p-10 border border-[#8DBDF0]/25 shadow-[0_8px_30px_rgba(46,139,232,0.06),0_2px_12px_rgba(227,161,156,0.08)] relative overflow-hidden">
            {/* Top Tri-Tone Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#2E8BE8] via-[#C6A15B] to-[#E3A19C]" />
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field (hidden from legitimate users, catches bots) */}
                <div style={{ position: 'absolute', left: '-9999px', top: '-9999px', opacity: 0, pointerEvents: 'none' }} aria-hidden="true">
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formState.website}
                    onChange={(e) => setFormState({ ...formState, website: e.target.value })}
                  />
                </div>

                <div className="border-b border-[#3F5F86]/10 pb-3 mb-4">
                  <span className="text-xs uppercase font-bold tracking-[0.06em] text-[#C6A15B]">
                    Confidential Desk
                  </span>
                  <h3 className="text-xl font-bold text-[#141414] mt-1">
                    Direct Inquiry & Briefing Request
                  </h3>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.06em] text-[#141414] mb-1.5">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Your Full Name"
                    className="w-full h-11 px-4 rounded-xl bg-white border border-[#3F5F86]/20 text-sm font-medium text-[#141414] focus:outline-none focus:border-[#2E8BE8] focus:ring-2 focus:ring-[#2E8BE8]/20 transition-all placeholder:text-[#3F5F86]/60"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-[0.06em] text-[#141414] mb-1.5">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full h-11 px-4 rounded-xl bg-white border border-[#3F5F86]/20 text-sm font-medium text-[#141414] focus:outline-none focus:border-[#2E8BE8] focus:ring-2 focus:ring-[#2E8BE8]/20 transition-all placeholder:text-[#3F5F86]/60"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-[0.06em] text-[#141414] mb-1.5">
                      Company
                    </label>
                    <input
                      type="text"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      placeholder="Company / Fund Name"
                      className="w-full h-11 px-4 rounded-xl bg-white border border-[#3F5F86]/20 text-sm font-medium text-[#141414] focus:outline-none focus:border-[#2E8BE8] focus:ring-2 focus:ring-[#2E8BE8]/20 transition-all placeholder:text-[#3F5F86]/60"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.06em] text-[#141414] mb-1.5">
                    Practice Area
                  </label>
                  <select
                    value={formState.practiceArea}
                    onChange={(e) => setFormState({ ...formState, practiceArea: e.target.value })}
                    className="w-full h-11 px-4 rounded-xl bg-white border border-[#3F5F86]/20 text-sm font-medium text-[#141414] focus:outline-none focus:border-[#2E8BE8] focus:ring-2 focus:ring-[#2E8BE8]/20 transition-all"
                  >
                    <option value="IP Strategy & Valuation">IP Strategy & Valuation</option>
                    <option value="Tech Law & Transactions">Tech Law & Transactions</option>
                    <option value="Venture Advisory">Venture Advisory</option>
                    <option value="Privacy & Media Law">Privacy & Media Law</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.06em] text-[#141414] mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Briefly describe your IP, transaction, or advisory scope…"
                    className="w-full p-3.5 rounded-xl bg-white border border-[#3F5F86]/20 text-sm font-medium text-[#141414] focus:outline-none focus:border-[#2E8BE8] focus:ring-2 focus:ring-[#2E8BE8]/20 transition-all resize-none placeholder:text-[#3F5F86]/60"
                  />
                </div>

                {errorMessage && (
                  <div className="flex items-center gap-2 text-xs text-red-600 bg-red-50 border border-red-200 p-3 rounded-xl">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#141414] hover:bg-black disabled:bg-[#3F5F86]/60 text-white py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.06em] flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-[1.01] active:scale-98 disabled:pointer-events-none"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#C6A15B]" />
                        <span>Dispatching Request…</span>
                      </>
                    ) : (
                      <>
                        <span>Send Confidential Request</span>
                        <span className="text-[#C6A15B] font-bold">→</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-xs text-[#3F5F86] pt-1">
                  <Lock className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>Strict Professional Privilege & Conflict Checking</span>
                </div>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-white border border-[#3F5F86]/20 flex items-center justify-center mx-auto text-[#2E8BE8]">
                  <CheckCircle2 className="w-7 h-7 text-[#2E8BE8]" />
                </div>
                <h4 className="text-2xl font-serif font-bold text-[#141414]">Message Received</h4>
                <p className="text-sm text-[#3F5F86] max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{formState.name}</strong>. We have received your inquiry and a confirmation email has been sent to <strong>{formState.email}</strong>. Our advisory team will get back to you within 24 hours.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        name: '',
                        email: '',
                        company: '',
                        practiceArea: 'IP Strategy & Valuation',
                        message: '',
                        website: '',
                      });
                    }}
                    className="bg-[#141414] text-white hover:bg-black px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.06em] transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Section 3.7: Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#3F5F86] gap-4">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-[#141414] tracking-tight">SENSIRUPT</span>
            <span>— © 2026 All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6 text-xs font-medium">
            <a href="#contact" className="hover:text-[#141414] transition-colors">Confidentiality Policy</a>
            <span className="text-[#3F5F86]/30">·</span>
            <a href="#contact" className="hover:text-[#141414] transition-colors">Terms of Advisory</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

