import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { AboutUs } from '@/components/AboutUs';
import { Expertise } from '@/components/Expertise';
import { Ventures } from '@/components/Ventures';
import { ContactFooter } from '@/components/ContactFooter';
import { ConsultationModal } from '@/components/ConsultationModal';

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
    <div className="min-h-screen bg-[#F0F7FD] text-[#1A1A1A] font-sans antialiased selection:bg-[#BCE0FD] selection:text-[#0C4A6E]">
      {/* 1. Navbar */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* 2. Hero Section */}
      <Hero onOpenConsultation={handleOpenConsultation} />

      {/* 3. About Us Section */}
      <AboutUs />

      {/* 4. Our Expertise Section */}
      <Expertise onOpenConsultation={handleOpenConsultation} />

      {/* 5. Ventures / Success Stories Section */}
      <Ventures onOpenConsultation={handleOpenConsultation} />

      {/* 6. Contact Us / Footer */}
      <ContactFooter onOpenConsultation={handleOpenConsultation} />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
        initialTopic={consultationTopic}
      />
    </div>
  );
}

export default App;
