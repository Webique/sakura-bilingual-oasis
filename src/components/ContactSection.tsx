import React from 'react';
import { Mail, Phone, Instagram, Music2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection = () => {
  const { isRTL, t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-foreground mb-4 ${
            isRTL ? 'font-arabic' : 'font-inter'
          }`}>
            {t('contact.title')}
          </h2>
        </div>

        <div className="mx-auto max-w-5xl">
          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone Card */}
            <div className="group rounded-2xl border border-border bg-background p-6 shadow-sm transition hover:shadow-md">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className={`min-w-0 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <p className="text-sm text-muted-foreground">{isRTL ? 'الهاتف' : 'Phone'}</p>
                  <a href="tel:0557891155" className="truncate text-lg font-semibold hover:text-primary">
                    0557891155
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="group rounded-2xl border border-border bg-background p-6 shadow-sm transition hover:shadow-md">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className={`min-w-0 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <p className="text-sm text-muted-foreground">{isRTL ? 'البريد الإلكتروني' : 'Email'}</p>
                  <a href="mailto:founder@sakuraa.co" className="truncate text-lg font-semibold hover:text-primary">
                    founder@sakuraa.co
                  </a>
                </div>
              </div>
            </div>

            {/* Social Card */}
            <div className="group rounded-2xl border border-border bg-background p-6 shadow-sm transition hover:shadow-md">
              <div className="flex items-center">
                <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                  <div className="rounded-full bg-primary/10 p-3">
                    <Instagram className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">{isRTL ? 'وسائل التواصل' : 'Social'}</p>
                </div>
                <div className={`flex items-center gap-3 ${isRTL ? 'w-full justify-end' : 'ml-auto'}`}>
                  <a
                    href="https://www.instagram.com/Sakura.co1/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-primary hover:text-white transition"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@sakura.co1"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="TikTok"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-primary hover:text-white transition"
                  >
                    <Music2 className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Tax Number */}
          <div className="mt-8 rounded-xl border border-border bg-background p-4 text-center">
            <p className={`${isRTL ? 'font-arabic' : 'font-inter'} text-sm text-muted-foreground`}>
              {isRTL ? 'الرقم الضريبي:' : 'Tax Number:'} 100241115596214
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;