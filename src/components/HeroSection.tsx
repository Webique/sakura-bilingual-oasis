import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const { isRTL, t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section id="home" className="min-h-screen bg-hero-gradient flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Hero Content Container */}
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 lg:p-16 shadow-elegant max-w-4xl mx-auto animate-fade-in-up">
            
            {/* Hero Title */}
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight ${
              isRTL ? 'font-arabic' : 'font-inter'
            }`}>
              {t('hero.title')}
            </h1>

            {/* Hero Subtitle */}
            <p className={`text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed ${
              isRTL ? 'font-arabic' : 'font-inter'
            }`}>
              {t('hero.subtitle')}
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${
              isRTL ? 'sm:space-x-reverse sm:space-x-6' : 'sm:space-x-6'
            }`}>
              <Button
                onClick={() => scrollToSection('#commitments')}
                className="btn-hero group"
                size="lg"
              >
                <span className={isRTL ? 'font-arabic' : 'font-inter'}>
                  {t('hero.cta1')}
                </span>
                <ArrowIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                onClick={() => scrollToSection('#contact')}
                variant="outline"
                className="btn-hero-outline"
                size="lg"
              >
                <span className={isRTL ? 'font-arabic' : 'font-inter'}>
                  {t('hero.cta2')}
                </span>
              </Button>
            </div>

            {/* Floating Elements */}
            <div className="mt-16 flex justify-center items-center space-x-8 opacity-60">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse-soft"></div>
              <div className="w-3 h-3 bg-primary/70 rounded-full animate-pulse-soft" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;