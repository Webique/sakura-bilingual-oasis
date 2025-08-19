import React from 'react';
import { Globe, Instagram, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const { language, toggleLanguage, isRTL, t } = useLanguage();

  const footerLinks = [
    { key: 'nav.blog', href: '#blog' },
    { key: 'nav.commitments', href: '#commitments' },
    { key: 'footer.privacy', href: '#privacy' },
    { key: 'footer.terms', href: '#terms' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Section */}
          <div className={`space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
            <div className={`text-2xl font-bold text-primary ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {language === 'ar' ? 'ساكورا' : 'Sakura'}
            </div>
            <p className={`text-muted-foreground max-w-xs ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {isRTL 
                ? 'نوفر مناشف استخدام واحد عالية الجودة للقطاعات التجارية'
                : 'Supplying premium single-use towels for commercial sectors'
              }
            </p>
            
            {/* Social Links */}
            <div className={`flex space-x-3 ${isRTL ? 'space-x-reverse justify-end' : 'justify-start'}`}>
              <a
                href="#"
                className="bg-muted p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="bg-muted p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:info@sakura-towels.com"
                className="bg-muted p-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={`space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
            <h3 className={`text-lg font-semibold text-foreground ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {isRTL ? 'روابط سريعة' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className={`text-muted-foreground hover:text-primary transition-colors ${
                      isRTL ? 'font-arabic' : 'font-inter'
                    }`}
                  >
                    {t(link.key)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={`space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
            <h3 className={`text-lg font-semibold text-foreground ${isRTL ? 'font-arabic' : 'font-inter'}`}>
              {t('contact.info')}
            </h3>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                info@sakura-towels.com
              </p>
              <p className="text-muted-foreground">
                +966 12 345 6789
              </p>
              <p className={`text-muted-foreground ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                {isRTL 
                  ? 'الرياض، المملكة العربية السعودية'
                  : 'Riyadh, Saudi Arabia'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={`mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 ${
          isRTL ? 'md:flex-row-reverse' : ''
        }`}>
          
          {/* Copyright */}
          <p className={`text-muted-foreground text-sm ${isRTL ? 'font-arabic' : 'font-inter'}`}>
            {t('footer.rights')}
          </p>

          {/* Language Toggle */}
          <Button
            onClick={toggleLanguage}
            variant="outline"
            size="sm"
            className="flex items-center space-x-2"
          >
            <Globe className="h-4 w-4" />
            <span className="font-medium">
              {language === 'en' ? 'العربية' : 'English'}
            </span>
          </Button>
        </div>

        {/* Decorative Element */}
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-1">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-primary/20 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;