import React from 'react';
import { Shield, Award, Heart, Leaf, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const CommitmentsSection = () => {
  const { isRTL, t } = useLanguage();

  const commitments = [
    {
      icon: Shield,
      titleKey: 'commitment.responsibility.title',
      descKey: 'commitment.responsibility.desc',
    },
    {
      icon: Award,
      titleKey: 'commitment.iso.title',
      descKey: 'commitment.iso.desc',
    },
    {
      icon: Heart,
      titleKey: 'commitment.cruelty.title',
      descKey: 'commitment.cruelty.desc',
    },
    {
      icon: Leaf,
      titleKey: 'commitment.eco.title',
      descKey: 'commitment.eco.desc',
    },
    {
      icon: Zap,
      titleKey: 'commitment.sterile.title',
      descKey: 'commitment.sterile.desc',
    },
  ];

  return (
    <section id="commitments" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-foreground mb-4 ${
            isRTL ? 'font-arabic' : 'font-inter'
          }`}>
            {t('commitments.title')}
          </h2>
        </div>

        {/* Commitments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {commitments.map((commitment, index) => {
            const IconComponent = commitment.icon;
            return (
              <div
                key={commitment.titleKey}
                className="card-commitment group"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Icon */}
                <div className="bg-gold-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-gold">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>

                {/* Title */}
                <h3 className={`text-xl font-semibold text-foreground mb-4 ${
                  isRTL ? 'font-arabic' : 'font-inter'
                }`}>
                  {t(commitment.titleKey)}
                </h3>

                {/* Description */}
                <p className={`text-muted-foreground leading-relaxed ${
                  isRTL ? 'font-arabic' : 'font-inter'
                }`}>
                  {t(commitment.descKey)}
                </p>
              </div>
            );
          })}
        </div>

        
      </div>
    </section>
  );
};

export default CommitmentsSection;