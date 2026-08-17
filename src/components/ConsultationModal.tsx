import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, Lock } from 'lucide-react';

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
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialTopic) {
      setMessage(`Inquiry regarding: ${initialTopic}`);
    }
  }, [initialTopic]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
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
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#0284C7]">
                  Confidential Advisory Desk
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
                  Schedule Briefing
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Connect directly with our boutique techno-legal advisory team. Inquiries undergo strict conflict-checking under NDA.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Dr. Aris Thorne"
                    className="w-full h-12 px-4 rounded-xl bg-white border-2 border-slate-200 text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#0284C7] focus:ring-4 focus:ring-sky-100 transition-all placeholder:text-slate-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full h-12 px-4 rounded-xl bg-white border-2 border-slate-200 text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#0284C7] focus:ring-4 focus:ring-sky-100 transition-all placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5">
                      Company / Fund
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Nexus BioTech"
                      className="w-full h-12 px-4 rounded-xl bg-white border-2 border-slate-200 text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#0284C7] focus:ring-4 focus:ring-sky-100 transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5">
                    Inquiry Details / Scope Summary
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your tech, patent portfolio, or deal objective..."
                    className="w-full p-4 rounded-xl bg-white border-2 border-slate-200 text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#0284C7] focus:ring-4 focus:ring-sky-100 transition-all resize-none placeholder:text-slate-400"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#1A1A1A] hover:bg-black text-white py-4 rounded-full text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-[1.01] active:scale-98"
                  >
                    <span>Submit Confidential Inquiry</span>
                    <ArrowRight className="w-4 h-4 text-[#C5A059]" />
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-500 pt-1">
                  <Lock className="w-3.5 h-3.5 text-[#0284C7]" />
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
                Thank you, <strong className="text-slate-900">{fullName || "Innovator"}</strong>. Our senior partners are reviewing your inquiry. Expect a direct confidential response within 4 business hours.
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-md mx-auto text-left text-xs space-y-1">
                <div className="text-[10px] uppercase font-bold text-[#0284C7]">Assigned Advisory Desk</div>
                <div className="font-bold text-slate-900 text-sm">Boutique Techno-Legal Strategy Group</div>
                <div className="text-slate-500 text-xs">Conflict Check Ref: #SR-{Math.floor(100000 + Math.random() * 900000)}</div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="bg-[#1A1A1A] text-white hover:bg-black rounded-full px-8 py-3.5 text-xs font-bold uppercase tracking-wider shadow-md"
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
