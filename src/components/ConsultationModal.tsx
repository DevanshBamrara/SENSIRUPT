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

  useEffect(() => {
    if (initialTopic) {
      setMessage(`Inquiry regarding: ${initialTopic}`);
    }
  }, [initialTopic]);

  // Lock body scroll when modal is open so mobile background cannot scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Allow closing via Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

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
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-md"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
        aria-modal="true"
        role="dialog"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-2xl sm:rounded-3xl max-w-xl w-full max-h-[92dvh] sm:max-h-[88vh] flex flex-col shadow-2xl border border-slate-200 relative overflow-hidden my-auto"
        >
          {/* FIXED TOP HEADER: Close button is ALWAYS visible on all screen sizes */}
          <div className="flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5 border-b border-[#3F5F86]/10 bg-white shrink-0">
            <div>
              <span className="text-[10px] sm:text-xs uppercase font-bold tracking-[0.06em] text-[#C6A15B] block">
                Confidential Advisory Desk
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#141414] leading-snug">
                Schedule Briefing
              </h3>
            </div>
            
            {/* Prominent, easily tappable close button (min 44px touch area) */}
            <button
              onClick={onClose}
              className="w-11 h-11 rounded-full bg-[#F0F7FD] hover:bg-[#E2E8F0] active:scale-95 text-[#141414] flex items-center justify-center transition-all shrink-0 focus:outline-none border border-[#8DBDF0]/20"
              style={{ touchAction: 'manipulation' }}
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-[#141414]" />
            </button>
          </div>

          {/* SCROLLABLE BODY */}
          <div className="overflow-y-auto px-5 sm:px-8 py-5 sm:py-6 flex-1">
            {!isSubmitted ? (
              <div>
                <p className="text-xs sm:text-sm text-[#3F5F86] mb-5 leading-relaxed">
                  Connect directly with our boutique advisory team. Inquiries undergo strict conflict-checking and are protected under professional privilege.
                </p>

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
                      className="w-full min-h-[46px] bg-[#141414] hover:bg-black disabled:bg-[#3F5F86]/60 text-white py-3 rounded-full text-xs font-bold uppercase tracking-[0.06em] flex items-center justify-center gap-2 shadow-md transition-all hover:scale-[1.01] active:scale-98 disabled:pointer-events-none"
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
                    <span>Strict Professional Privilege & Confidentiality</span>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-6 sm:py-8 space-y-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-sky-50 border-2 border-sky-200 flex items-center justify-center mx-auto text-[#0284C7]">
                  <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                  Message Received
                </h3>

                <p className="text-sm font-medium text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-900">{fullName || "there"}</strong>. We have received your message and a confirmation email has been sent to <strong className="text-slate-900">{email}</strong>. Our advisory team will review your inquiry and get back to you within 24 hours.
                </p>

                <div className="pt-3">
                  <button
                    onClick={handleReset}
                    className="bg-[#1A1A1A] text-white hover:bg-black rounded-full px-8 py-3.5 text-xs font-bold uppercase tracking-wider shadow-md transition-colors"
                  >
                    Return to Page
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
