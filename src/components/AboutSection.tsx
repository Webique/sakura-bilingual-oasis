import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { isRTL, t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Section Title */}
          <h2 className={`text-3xl md:text-4xl font-bold text-foreground mb-8 ${
            isRTL ? 'font-arabic' : 'font-inter'
          }`}>
            {t('about.title')}
          </h2>

          {/* Content */}
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant">
            <p className={`text-lg md:text-xl text-muted-foreground leading-relaxed ${
              isRTL ? 'font-arabic text-right' : 'font-inter text-left'
            }`}>
              {t('about.content')}
            </p>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;