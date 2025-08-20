import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, isRTL, t } = useLanguage();

  const navItems = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.commitments', href: '#commitments' },
    { key: 'nav.blog', href: '#blog' },
    { key: 'nav.contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-elegant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }} className="block">
              <img src="/lovable-uploads/logo.png" alt="Sakura" className="h-8 md:h-9 w-auto" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className={`flex items-center space-x-8 ${isRTL ? 'space-x-reverse' : ''}`}>
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-foreground hover:text-primary transition-colors duration-200 ${
                    isRTL ? 'font-arabic' : 'font-inter'
                  }`}
                >
                  {t(item.key)}
                </button>
              ))}
            </div>
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className={`flex items-center space-x-4 ${isRTL ? 'space-x-reverse' : ''}`}>
            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
              className="hidden sm:flex items-center space-x-2"
            >
              <Globe className="h-4 w-4" />
              <span className="font-medium">
                {language === 'en' ? 'العربية' : 'English'}
              </span>
            </Button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                onClick={() => setIsOpen(!isOpen)}
                variant="ghost"
                size="sm"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-500 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="bg-card/95 backdrop-blur-xl border-t border-border/50 shadow-2xl">
          <div className="px-6 py-6 space-y-4">
            {/* Navigation Items */}
            {navItems.map((item, index) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className={`group w-full text-left px-4 py-4 rounded-xl bg-background/50 hover:bg-accent-gradient hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  isRTL ? 'font-arabic text-right' : 'font-inter text-left'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: isOpen ? 'slideInUp 0.5s ease-out forwards' : 'none'
                }}
              >
                <span className="text-lg font-semibold text-foreground group-hover:text-white transition-colors duration-300">
                  {t(item.key)}
                </span>
                <div className="mt-1 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></div>
              </button>
            ))}
            
            {/* Language Toggle */}
            <div className="pt-4 border-t border-border/30">
              <Button
                onClick={toggleLanguage}
                variant="outline"
                size="lg"
                className="w-full bg-background/80 hover:bg-accent-gradient hover:text-white hover:border-accent-gradient transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <Globe className="h-5 w-5 mr-3" />
                <span className="font-semibold text-lg">
                  {language === 'en' ? 'العربية' : 'English'}
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;