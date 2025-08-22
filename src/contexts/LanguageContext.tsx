import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  isRTL: boolean;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.commitments': 'Commitments',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Sakura — Supplying Single-Use Towels with Commitment & Responsibility',
    'hero.subtitle': 'We operate exclusively through B2B supply contracts — not retail.',
    'hero.cta1': 'Explore Our Commitments',
    'hero.cta2': 'Contact Us',
    
    // About Section
    'about.title': 'About Sakura',
    'about.content': 'Sakura is a specialized B2B supplier of high-quality single-use towels. Our products are manufactured in sterile environments to ensure maximum hygiene, safety, and compliance with international standards. We exclusively work through supply contracts, delivering professionalism, reliability, and consistent quality.',
    
    // Commitments
    'commitments.title': 'Our Commitments',
    'commitment.responsibility.title': 'Responsibility & Trust',
    'commitment.responsibility.desc': 'We stand by our clients with reliability.',
    'commitment.iso.title': 'Global Standards',
    'commitment.iso.desc': 'ISO internationally certified.',
    'commitment.cruelty.title': 'Cruelty-Free',
    'commitment.cruelty.desc': 'Produced with high ethics.',
    'commitment.eco.title': 'Eco-Friendly',
    'commitment.eco.desc': 'Sustainable production.',
    'commitment.sterile.title': 'Sterile Manufacturing',
    'commitment.sterile.desc': 'Made in controlled sterile facilities.',
    
    // Blog
    'blog.title': 'The Sakura Blog',
    'blog.subtitle': 'All about single-use towels: hygiene insights, production standards, and industry updates.',
    
    // Contact
    'contact.title': 'Get in Touch for Supply Contracts',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.info': 'Contact Information',
    
    // Footer
    'footer.rights': '© 2025 Sakura. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms & Conditions',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.commitments': 'التزاماتنا',
    'nav.blog': 'المدونة',
    'nav.contact': 'تواصل معنا',
    
    // Hero Section
    'hero.title': 'ساكورا — نوفر مناشف استخدام واحد بالتزام ومسؤولية',
    'hero.subtitle': 'نعمل فقط عبر عقود التوريد — لا نبيع بالتجزئة',
    'hero.cta1': 'تعرف على التزاماتنا',
    'hero.cta2': 'تواصل معنا',
    
    // About Section
    'about.title': 'عن ساكورا',
    'about.content': 'ساكورا هي المورد الموثوق للمناشف ذات الاستخدام الواحد عالية الجودة، المصممة خصيصًا لتلبية احتياجات الشركات. يتم تصنيع منتجاتنا في مرافق معقمة ومتطورة، بما يضمن أعلى معايير النظافة والسلامة والالتزام بالمواصفات الدولية.\nنحن نعمل حصريًا عبر عقود توريد رسمية، ونقدّم لشركائنا خدمات احترافية تشمل التوصيل الموثوق وجودة ثابتة يمكن الاعتماد عليها.',
    
    // Commitments
    'commitments.title': 'التزاماتنا',
    'commitment.responsibility.title': 'مسؤولية وموثوقية',
    'commitment.responsibility.desc': 'نقف مع عملائنا بكل التزام وثقة.',
    'commitment.iso.title': 'معايير عالمية',
    'commitment.iso.desc': 'معتمدون وفق الأيزو الدولي.',
    'commitment.cruelty.title': 'خالية من القسوة',
    'commitment.cruelty.desc': 'مصنّعة بأخلاقيات عالية.',
    'commitment.eco.title': 'صديقة للبيئة',
    'commitment.eco.desc': 'عمليات إنتاج مستدامة.',
    'commitment.sterile.title': 'تصنيع معقم',
    'commitment.sterile.desc': 'مرافق معقمة لضمان النظافة',
    
    // Blog
    'blog.title': 'مدونة ساكورا',
    'blog.subtitle': 'كل ما تحتاج معرفته عن المناشف ذات الاستخدام الواحد: حول النظافة، معايير الإنتاج، وأحدث مستجدات وتحديات صناعة المناشف',
    
    // Contact
    'contact.title': 'تواصل معنا لعقود التوريد',
    'contact.name': 'الاسم',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'الهاتف',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال الرسالة',
    'contact.info': 'معلومات التواصل',
    
    // Footer
    'footer.rights': '© 2025 ساكورا. جميع الحقوق محفوظة.',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'الشروط والأحكام',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('sakura-language', newLanguage);
  };

  const isRTL = language === 'ar';

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('sakura-language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ar')) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', language);
  }, [language, isRTL]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, isRTL, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};