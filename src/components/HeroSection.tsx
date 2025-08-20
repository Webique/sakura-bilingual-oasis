import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { isRTL, t } = useLanguage();

  

  return (
    <section
      id="home"
      className="relative min-h-[60vh] md:min-h-screen flex items-center justify-center pt-16 bg-cover bg-center bg-no-repeat md:bg-center bg-hero-mobile"
      style={{ 
        backgroundImage: "url('/lovable-uploads/sahura-132.jpg')"
      }}
    >
      <div className="absolute inset-0 bg-background/60"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-28">
        <div className="mx-auto max-w-2xl md:max-w-3xl text-center">
          <img src="/lovable-uploads/logo.png" alt="Sakura" className="mx-auto w-56 md:w-80 lg:w-[24rem]" />
          <p className={`${isRTL ? 'font-arabic' : 'font-inter'} mt-6 text-lg md:text-xl leading-relaxed`} style={{ color: 'rgba(72,74,76,255)' }}>
            {isRTL 
              ? 'اختيارك الصحي.. مناشف ساكورا القابلة للتحلل 🌿'
              : 'Your healthy choice… Sakura\'s biodegradable towels 🌿'
            }
          </p>
        </div>
      </div>

      
    </section>
  );
};

export default HeroSection;