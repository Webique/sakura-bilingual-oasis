import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { isRTL, t } = useLanguage();

  return (
    <section id="about" className="py-0 md:py-20 pb-8 md:pb-20 bg-background">
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
              {isRTL 
                ? 'ساكورا هي مورد موثوق لمناشف الاستخدام الواحد عالية الجودة للشركات. منتجاتنا مصنعة في مرافق معقمة متطورة، مما يضمن أعلى مستويات النظافة والأمان والامتثال للمعايير الدولية. نحن نعمل حصرياً من خلال عقود التوريد، ونقدم لشركائنا خدمة احترافية وتوصيل موثوق وجودة ثابتة يمكنهم الاعتماد عليها.'
                : 'Sakura is a trusted B2B supplier of premium single-use towels. Our products are produced in state-of-the-art sterile facilities, ensuring the highest levels of hygiene, safety, and compliance with international standards. We operate exclusively through supply contracts, providing our partners with professional service, reliable delivery, and consistent quality they can count on.'
              }
            </p>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;