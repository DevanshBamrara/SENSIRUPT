import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { AboutUs } from '@/components/AboutUs';
import { Expertise } from '@/components/Expertise';
import { PracticeAreas } from '@/components/PracticeAreas';
import { Ventures } from '@/components/Ventures';
import { ContactFooter } from '@/components/ContactFooter';
import { ConsultationModal } from '@/components/ConsultationModal';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

export function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationTopic, setConsultationTopic] = useState('');

  const handleOpenConsultation = (topic: string = '') => {
    setConsultationTopic(topic);
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#EBF3FB] text-[#141414] font-sans antialiased selection:bg-[#8DBDF0]/50 selection:text-[#141414]">
      {/* 1. Navbar */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* 2. Hero Section */}
      <Hero onOpenConsultation={handleOpenConsultation} />

      {/* 3. About Us Section */}
      <AboutUs />

      {/* 4. Our Strategic Expertise Section */}
      <Expertise onOpenConsultation={handleOpenConsultation} />

      {/* 5. Comprehensive Practice Areas Section */}
      <PracticeAreas onOpenConsultation={handleOpenConsultation} />

      {/* 6. Ventures / Track Record Section */}
      <Ventures onOpenConsultation={handleOpenConsultation} />

      {/* 7. Contact Us / Direct Details & Footer */}
      <ContactFooter onOpenConsultation={handleOpenConsultation} />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
        initialTopic={consultationTopic}
      />

      {/* Floating WhatsApp Contact Button */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
