import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { isRTL, t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: isRTL ? "خطأ" : "Error",
        description: isRTL ? "يرجى ملء جميع الحقول المطلوبة" : "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: isRTL ? "تم الإرسال بنجاح" : "Message Sent Successfully",
      description: isRTL ? "سنتواصل معك قريباً" : "We'll get back to you soon",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

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
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="bg-card-gradient rounded-2xl p-8 shadow-elegant">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Field */}
              <div>
                <label 
                  htmlFor="name" 
                  className={`block text-sm font-medium text-foreground mb-2 ${
                    isRTL ? 'font-arabic text-right' : 'font-inter text-left'
                  }`}
                >
                  {t('contact.name')} *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full ${isRTL ? 'text-right font-arabic' : 'text-left font-inter'}`}
                  dir={isRTL ? 'rtl' : 'ltr'}
                />
              </div>

              {/* Email Field */}
              <div>
                <label 
                  htmlFor="email" 
                  className={`block text-sm font-medium text-foreground mb-2 ${
                    isRTL ? 'font-arabic text-right' : 'font-inter text-left'
                  }`}
                >
                  {t('contact.email')} *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full"
                  dir="ltr"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label 
                  htmlFor="phone" 
                  className={`block text-sm font-medium text-foreground mb-2 ${
                    isRTL ? 'font-arabic text-right' : 'font-inter text-left'
                  }`}
                >
                  {t('contact.phone')}
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full"
                  dir="ltr"
                />
              </div>

              {/* Message Field */}
              <div>
                <label 
                  htmlFor="message" 
                  className={`block text-sm font-medium text-foreground mb-2 ${
                    isRTL ? 'font-arabic text-right' : 'font-inter text-left'
                  }`}
                >
                  {t('contact.message')} *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full resize-none ${isRTL ? 'text-right font-arabic' : 'text-left font-inter'}`}
                  dir={isRTL ? 'rtl' : 'ltr'}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="btn-hero w-full"
                size="lg"
              >
                <Send className="h-5 w-5 mr-2" />
                <span className={isRTL ? 'font-arabic' : 'font-inter'}>
                  {t('contact.send')}
                </span>
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            
            {/* Contact Info Header */}
            <div>
              <h3 className={`text-2xl font-semibold text-foreground mb-6 ${
                isRTL ? 'font-arabic text-right' : 'font-inter text-left'
              }`}>
                {t('contact.info')}
              </h3>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              
              {/* Email */}
              <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className={isRTL ? 'text-right' : 'text-left'}>
                  <p className="text-sm text-muted-foreground font-medium">
                    {isRTL ? 'البريد الإلكتروني' : 'Email'}
                  </p>
                  <a 
                    href="mailto:info@sakura-towels.com" 
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    info@sakura-towels.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className={isRTL ? 'text-right' : 'text-left'}>
                  <p className="text-sm text-muted-foreground font-medium">
                    {isRTL ? 'الهاتف' : 'Phone'}
                  </p>
                  <a 
                    href="tel:+966123456789" 
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    +966 12 345 6789
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className={isRTL ? 'text-right' : 'text-left'}>
                  <p className="text-sm text-muted-foreground font-medium">
                    {isRTL ? 'العنوان' : 'Address'}
                  </p>
                  <p className={`text-foreground ${isRTL ? 'font-arabic' : 'font-inter'}`}>
                    {isRTL 
                      ? 'الرياض، المملكة العربية السعودية'
                      : 'Riyadh, Saudi Arabia'
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-8 border-t border-border">
              <h4 className={`text-lg font-medium text-foreground mb-4 ${
                isRTL ? 'font-arabic text-right' : 'font-inter text-left'
              }`}>
                {isRTL ? 'تابعنا على وسائل التواصل' : 'Follow Us'}
              </h4>
              <div className={`flex gap-4 ${isRTL ? 'justify-end' : 'justify-start'}`}>
                <a
                  href="#"
                  className="bg-primary/10 p-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-primary/10 p-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;