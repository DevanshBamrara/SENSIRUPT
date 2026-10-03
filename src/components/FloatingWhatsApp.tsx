import React from 'react';

export const FloatingWhatsApp: React.FC = () => {
  const phoneNumber = '917827963285';
  const defaultMessage = encodeURIComponent(
    'Hello Sensirupt Team, I would like to inquire about your techno-legal and commercialization advisory services.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <aside aria-label="WhatsApp quick contact" className="fixed bottom-6 right-6 z-40 floating-whatsapp-widget">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="Connect on WhatsApp (+91 78279 63285)"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-[0_8px_24px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Connect on WhatsApp (+91 78279 63285)"
      >
        {/* Official WhatsApp SVG Logo */}
        <svg
          viewBox="0 0 24 24"
          width="30"
          height="30"
          fill="currentColor"
          aria-hidden="true"
          className="w-7 h-7 text-white"
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-.04 0-.08 0-.12 0-1.5 0-2.96-.4-4.24-1.17l-.3-.18-3.12.82.83-3.04-.2-.32a8.17 8.17 0 0 1-1.25-4.35c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.16 0-.35.06-.53.25-.19.19-.71.7-.71 1.7 0 1.01.73 1.98.83 2.12.1.14 1.44 2.2 3.49 3.09.49.21.87.34 1.17.43.49.16.94.13 1.29.08.4-.06 1.22-.5 1.39-.98.17-.48.17-.9.12-.98-.05-.09-.19-.14-.4-.25s-1.22-.6-1.41-.67c-.19-.07-.33-.1-.47.1-.14.21-.54.67-.66.81-.12.14-.24.16-.45.05-.21-.1-.88-.32-1.68-1.03-.62-.55-1.04-1.23-1.16-1.44-.12-.21-.01-.32.09-.43.1-.09.21-.24.31-.36.11-.12.14-.21.21-.35.07-.14.03-.26-.02-.36s-.47-1.13-.64-1.55c-.17-.41-.35-.35-.48-.36-.12 0-.27-.01-.41-.01" />
        </svg>
        <span className="absolute top-1 right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
      </a>
    </aside>
  );
};
