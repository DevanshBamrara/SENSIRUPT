import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';

export interface ExpertiseDetail {
  id: string;
  title: string;
  description: string;
  tags: string[];
  fullScope: string[];
}

interface ExpertiseDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  item: ExpertiseDetail | null;
  onOpenConsultation: (topic: string) => void;
}

export const ExpertiseDrawer: React.FC<ExpertiseDrawerProps> = ({
  isOpen,
  onClose,
  item,
  onOpenConsultation,
}) => {
  if (!isOpen || !item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#141414]/40 backdrop-blur-xs transition-opacity"
        />

        {/* Slide-over panel */}
        <motion.aside
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 280 }}
          className="relative w-full max-w-lg bg-white h-full shadow-2xl z-10 flex flex-col justify-between overflow-y-auto border-l border-[#3F5F86]/15"
        >
          {/* Header */}
          <div className="p-8 sm:p-10 border-b border-[#3F5F86]/10">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold tracking-[0.06em] text-[#C6A15B]">
                Practice Area Scope
              </span>
              <button
                onClick={onClose}
                className="p-2 text-[#3F5F86] hover:text-[#141414] hover:bg-[#EBF3FB] rounded-full transition-colors focus:outline-none"
                aria-label="Close practice scope"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-light text-[#141414] mt-4 leading-snug">
              {item.title}
            </h3>
            <p className="mt-3 text-sm text-[#3F5F86] leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Body: 10-Module Full Scope */}
          <div className="p-8 sm:p-10 space-y-6 flex-1">
            <div>
              <h4 className="text-xs uppercase font-bold tracking-[0.06em] text-[#141414] mb-3">
                Core Capabilities & Scope
              </h4>
              <ul className="space-y-3">
                {item.fullScope.map((scopeItem, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#3F5F86] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                    <span>{scopeItem}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase font-bold tracking-[0.06em] text-[#141414] mb-3">
                Key Deliverables
              </h4>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-block px-3 py-1.5 rounded-full text-xs font-medium bg-[#EBF3FB] text-[#3F5F86] border border-[#3F5F86]/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="p-8 sm:p-10 bg-[#EBF3FB]/50 border-t border-[#3F5F86]/10">
            <button
              onClick={() => {
                onClose();
                onOpenConsultation(item.title);
              }}
              className="w-full bg-[#141414] hover:bg-black text-white py-3.5 px-6 rounded-full text-xs font-bold uppercase tracking-[0.06em] flex items-center justify-center gap-2 shadow-md transition-all active:scale-98"
            >
              <span>Book Briefing on this Practice</span>
              <ArrowRight className="w-4 h-4 text-[#C6A15B]" />
            </button>
          </div>
        </motion.aside>
      </div>
    </AnimatePresence>
  );
};
