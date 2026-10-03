import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, Lock, Loader2, AlertCircle } from 'lucide-react';
import { submitInquiry } from '@/lib/sendInquiry';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialTopic = '',
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [website, setWebsite] = useState(''); // Honeypot trap
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');

  useEffect(() => {
    if (initialTopic) {
      setMessage(`Inquiry regarding: ${initialTopic}`);
    }
  }, [initialTopic]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setIsSubmitting(true);

    const result = await submitInquiry({
      name: fullName,
      email,
      company,
      message,
      practiceArea: initialTopic || 'Schedule Briefing',
      website,
    });

    setIsSubmitting(false);

    if (result.success) {
      if (result.ref) setRefCode(result.ref);
      setIsSubmitted(true);
    } else {
      setErrorMessage(result.error || 'Failed to dispatch inquiry. Please try again.');
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setErrorMessage('');
    setFullName('');
    setEmail('');
    setCompany('');
    setMessage('');
    setWebsite('');
    setRefCode('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          className="bg-white rounded-3xl max-w-xl w-full p-8 sm:p-10 shadow-2xl border border-slate-200 relative my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-slate-500 hover:text-slate-900 rounded-full hover:bg-slate-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {!isSubmitted ? (
            <div>
              {/* Header */}
              <div className="mb-6">
                <span className="text-xs uppercase font-bold tracking-[0.06em] text-[#C6A15B]">
                  Confidential Advisory Desk
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-light text-[#141414] mt-1">
                  Schedule Briefing
                </h3>
                <p className="text-sm text-[#3F5F86] mt-2 leading-relaxed">
                  Connect directly with our boutique techno-legal advisory team. Inquiries undergo strict conflict-checking under NDA.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field (hidden from legitimate users, catches bots) */}
                <div style={{ position: 'absolute', left: '-9999px', top: '-9999px', opacity: 0, pointerEvents: 'none' }} aria-hidden="true">
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.06em] text-[#141414] mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Dr. Aris Thorne"
                    className="w-full h-11 px-4 rounded-xl bg-white border border-[#3F5F86]/20 text-sm font-medium text-[#141414] focus:outline-none focus:border-[#2E8BE8] focus:ring-2 focus:ring-[#2E8BE8]/20 transition-all placeholder:text-[#3F5F86]/50"
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full h-11 px-4 rounded-xl bg-white border border-[#3F5F86]/20 text-sm font-medium text-[#141414] focus:outline-none focus:border-[#2E8BE8] focus:ring-2 focus:ring-[#2E8BE8]/20 transition-all placeholder:text-[#3F5F86]/50"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-[0.06em] text-[#141414] mb-1.5">
                      Company / Fund
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Nexus BioTech"
                      className="w-full h-11 px-4 rounded-xl bg-white border border-[#3F5F86]/20 text-sm font-medium text-[#141414] focus:outline-none focus:border-[#2E8BE8] focus:ring-2 focus:ring-[#2E8BE8]/20 transition-all placeholder:text-[#3F5F86]/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.06em] text-[#141414] mb-1.5">
                    Inquiry Details / Scope Summary
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your tech, patent portfolio, or deal objective…"
                    className="w-full p-3.5 rounded-xl bg-white border border-[#3F5F86]/20 text-sm font-medium text-[#141414] focus:outline-none focus:border-[#2E8BE8] focus:ring-2 focus:ring-[#2E8BE8]/20 transition-all resize-none placeholder:text-[#3F5F86]/50"
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
                    className="w-full bg-[#141414] hover:bg-black disabled:bg-[#3F5F86]/60 text-white py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.06em] flex items-center justify-center gap-2 shadow-md transition-all hover:scale-[1.01] active:scale-98 disabled:pointer-events-none"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#C6A15B]" />
                        <span>Dispatching Inquiry…</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Confidential Inquiry</span>
                        <ArrowRight className="w-4 h-4 text-[#C6A15B]" />
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-xs font-medium text-[#3F5F86] pt-1">
                  <Lock className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>256-Bit Encrypted • Strict Professional Confidentiality</span>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-8 space-y-5">
              <div className="w-16 h-16 rounded-full bg-sky-50 border-2 border-sky-200 flex items-center justify-center mx-auto text-[#0284C7]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                Inquiry Received
              </h3>

              <p className="text-sm font-medium text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-900">{fullName || "Innovator"}</strong>. A confirmation receipt has been dispatched to <strong className="text-slate-900">{email}</strong>. Our senior partners are reviewing your inquiry. Expect a direct confidential response within 4 business hours.
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-md mx-auto text-left text-xs space-y-1">
                <div className="text-[10px] uppercase font-bold text-[#0284C7]">Assigned Advisory Desk</div>
                <div className="font-bold text-slate-900 text-sm">Boutique Techno-Legal Strategy Group</div>
                <div className="text-slate-500 text-xs">Conflict Check Ref: #{refCode || 'SR-CONFIDENTIAL'}</div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="bg-[#1A1A1A] text-white hover:bg-black rounded-full px-8 py-3.5 text-xs font-bold uppercase tracking-wider shadow-md transition-colors"
                >
                  Return to Page
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
