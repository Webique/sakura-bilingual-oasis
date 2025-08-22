import React from 'react';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const BlogSection = () => {
  const { isRTL, t } = useLanguage();
  const navigate = useNavigate();

  // Sample blog posts
  const blogPosts = [
    {
      id: 1,
      title: isRTL ? 'ما الذي يوجد حقًا على منشفتك؟' : 'What\'s Really on Your Towel?',
      subtitle: isRTL ? 'اختبار ساكورا المخبري يكشف نتائج صادمة' : 'SAKURA\'s Culture Test Reveals Shocking Results',
      excerpt: isRTL 
        ? 'أجرى فريق SAKURA اختبارًا على منشفة "نظيفة" بطريقة الزرع المخبري، وقد كشفت النتائج عن وجود مستعمرات بكتيرية بالرغم من أنها كانت تبدو نظيفة تمامًا.'
        : 'Most of us trust our towels to be clean after a simple wash. They look fresh, they smell fine—so we assume they\'re safe. But what if the towel you\'re using every day is hiding something you can\'t see?',
      fullContent: isRTL ? {
        intro: 'أجرى فريق SAKURA اختبارًا على منشفة "نظيفة" بطريقة الزرع المخبري، وقد كشفت النتائج عن وجود مستعمرات بكتيرية بالرغم من أنها كانت تبدو نظيفة تمامًا.',
        results: '🧫 النتائج المفاجئة\n• المستعمرات الصفراء: يُحتمل أن تكون من نوع Staphylococcus aureus، وهي بكتيريا شائعة على الجلد والأسطح.\n• المستعمرات البيضاء أو الشاحبة: قد تكون من Staphylococcus epidermidis أو أنواع أخرى من الفلورا الجلدية المعتادة.\n• النقاط البرتقالية: قد تعود إلى بكتيريا مصبوغة مثل Serratia marcescens، تظهر عادة في الأماكن الرطبة.',
        whyMatters: '❓ لماذا هذا الأمر مهم؟\nكل مرة تستخدم فيها منشفة ملوثة، تنقل البكتيريا والغبار والرواسب إلى بشرتك. هذا قد يؤدي إلى:\n• تهيّج البشرة.\n• انسداد المسام.\n• انتقال العدوى.\n\nوذلك خاصة للبشرة الحساسة أو المعرضة لحب الشباب.',
        sakuraOffer: '🌿 ما الذي تقدمه SAKURA؟\nمناشف SAKURA مصنوعة من 100% من الألياف النباتية، وهي قابلة للتحلل الحيوي ومخصصة للاستخدام لمرة واحدة فقط.\nهذا يضمن أن تحصل على سطح جديد ونظيف في كل مرة.',
        whySwitch: '🌸 لماذا عليك التبديل؟\n• لأن بشرتك تستحق الأفضل.\n• توفر لك راحة البال، بعيدًا عن التلوث أو رواسب الغسيل.\n• تمنحك بشرة أكثر صحة وسعادة.',
        takeaway: '✨ الخلاصة\nاكتشف الفرق مع SAKURA. بشرتك ستشكرك.'
      } : {
        intro: 'Most of us trust our towels to be clean after a simple wash. They look fresh, they smell fine—so we assume they\'re safe. But what if the towel you\'re using every day is hiding something you can\'t see?\n\nThe SAKURA team decided to put a "clean" towel to the test using a laboratory culture method. The results were eye-opening: multiple bacterial colonies were found, even though the towel appeared spotless.',
        results: '🧫 The Shocking Results\n• Yellow colonies: Likely Staphylococcus aureus, a common bacterium found on skin and household surfaces.\n• White or pale colonies: Possibly Staphylococcus epidermidis or other natural skin flora.\n• Orange spots: Indicative of pigmented bacteria such as Serratia marcescens, often present in damp environments.',
        whyMatters: '❓ Why Does This Matter?\nEvery time you use a contaminated towel, you unknowingly transfer bacteria, dust, and residue onto your skin. Over time, this can cause irritation, clogged pores, and even infections—especially if you have sensitive or acne-prone skin.',
        sakuraOffer: '🌿 What Does SAKURA Offer?\nSAKURA towels are made from 100% plant-based fibers, fully biodegradable, and designed for single use only. This means you always enjoy a fresh, clean, hygienic surface—no hidden bacteria, no laundry residue.',
        whySwitch: '🌸 Why Make the Switch?\n• Because your skin deserves the very best.\n• SAKURA provides you with comfort, away from contamination and laundry residue, giving you healthier skin.',
        takeaway: '✨ The Takeaway\nYour skin shouldn\'t have to fight hidden bacteria every time you dry your face. With SAKURA single-use towels, you get hygiene, safety, and peace of mind—all in one simple switch.\n\n👉 Discover the difference with SAKURA. Your skin will thank you.'
      },
      date: isRTL ? '15 يناير 2025' : 'January 15, 2025',
      readTime: isRTL ? '5 دقائق' : '5 min read',
      image: '/lovable-uploads/11f5a605-f9ae-4fcf-a58d-5d7eab3cddfe.jpg',
      cultureImage: '/lovable-uploads/40da0e99-8df9-488d-a56f-575b35e19ea6.jpg'
    },
    {
      id: 2,
      title: isRTL ? 'استهلاك واهتراء المناشف العادية مقارنة بمناشف ساكورا للاستخدام الواحد 🌿' : 'Why SAKURA Single-Use Towels Are Better Than Traditional Towels',
      subtitle: isRTL ? '🧺 المناشف العادية: تكلفة خفية أكبر مما تتوقع' : '🧺 The Problem with Traditional Towels',
      excerpt: isRTL 
        ? 'قد تبدو المناشف العادية خيارًا اقتصاديًا، لكن الواقع مختلف'
        : 'Traditional towels may seem affordable, but they come with hidden costs and health risks',
      fullContent: isRTL ? {
        intro: 'قد تبدو المناشف العادية خيارًا اقتصاديًا، لكن الواقع مختلف:',
        problems: '• استهلاك عالي: تحتاج لغسيل متكرر بعد كل استخدام، ما يعني هدرًا للماء والكهرباء والمنظفات.\n• اهتراء سريع: مع كثرة الغسيل تبدأ الألياف بالضعف وتظهر الروائح.\n• مخاطر صحية: تصبح بيئة مثالية لتكاثر البكتيريا والفطريات، خصوصًا مع الرطوبة، مما يعرّض البشرة الحساسة أو المعرضة لحب الشباب لمشاكل إضافية.',
        solution: 'ساكورا: الحل الصحي والاقتصادي الذكي 🌸\nمناشف ساكورا مصممة للاستخدام الواحد لتمنحك:',
        benefits: '• نظافة مضمونة: كل منشفة جديدة ومعقمة، وداعًا للبكتيريا والروائح.\n• راحة ورفاهية: لا غسيل، لا مناشف بالية، لا قلق من التلوث.\n• صديقة للبيئة: قابلة للتحلل الحيوي، فتحافظ على كوكبنا.\n• مظهر فاخر: مثالية للمنازل، العيادات، الصالونات، الفنادق والمنتجعات.',
        whySwitch: '✨ لماذا التبديل إلى ساكورا خطوة أذكى؟\n• لأنها توفر المال على المدى البعيد.\n• لأنها تحافظ على صحتك وصحة عملائك.\n• لأنها تمنحك رفاهية الاستخدام الواحد بنقاء دائم.\n• لأنها تحمي البيئة وتقلل من استهلاك الماء والكهرباء.',
        takeaway: '🌍 جرب ساكورا اليوم\nالمناشف العادية قد تبدو حلًا بسيطًا، لكنها تحمل تكاليف خفية ومخاطر صحية.\nبينما مناشف ساكورا تمنحك النظافة، الفخامة، والراحة مع توفير اقتصادي وحماية للبيئة.\n\n🌸✨ جرّب ساكورا اليوم، واكتشف الفرق بنفسك'
      } : {
        intro: 'Traditional towels may seem affordable, but they come with hidden costs and health risks:',
        problems: '• Frequent washing wastes water, electricity, and detergents.\n• Towels wear out quickly and lose quality.\n• Damp fibers create a breeding ground for bacteria and fungi.\n• Extra laundry means higher monthly expenses.',
        solution: '🌸 The SAKURA Solution\nSAKURA single-use towels are made from 100% plant-based, biodegradable fibers. They are:',
        benefits: '• Hygienic: Fresh and sterile every time.\n• Convenient: No washing, no odors, no wear.\n• Cost-efficient: Save on laundry, water, and energy.\n• Eco-friendly: Sustainable and kind to the planet.\n• Premium: Perfect for spas, salons, clinics, gyms, hotels, and home use.',
        whySwitch: '🌍 Why Switch to SAKURA?\nTraditional towels create waste, cost more, and carry hidden bacteria. With SAKURA single-use towels, you get hygiene, convenience, and eco-friendly luxury—all in one simple switch.',
        takeaway: '👉 Upgrade to SAKURA today. Your skin—and the planet—will thank you.'
      },
      date: isRTL ? '10 يناير 2025' : 'January 10, 2025',
      readTime: isRTL ? '7 دقائق' : '7 min read',
      image: '/lovable-uploads/cb0e4969-0437-4c66-afae-586753419d92.jpg'
    },
    {
      id: 3,
      title: isRTL ? 'معتمد من الآيزو: ماذا يعني ذلك؟' : 'ISO Certified: What Does It Mean?',
      excerpt: isRTL 
        ? 'فهم أهمية شهادات الآيزو في ضمان جودة المناشف الطبية'
        : 'Understanding the importance of ISO certifications in medical towel quality assurance',
      date: isRTL ? '5 يناير 2025' : 'January 5, 2025',
      readTime: isRTL ? '6 دقائق' : '6 min read',
      image: '/lovable-uploads/d78af038-9e42-4355-92e1-da1bd3a1a16c.png'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-foreground mb-4 ${
            isRTL ? 'font-arabic' : 'font-inter'
          }`}>
            {t('blog.title')}
          </h2>
          <p className={`text-lg text-muted-foreground max-w-3xl mx-auto ${
            isRTL ? 'font-arabic' : 'font-inter'
          }`}>
            {t('blog.subtitle')}
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="bg-card rounded-xl p-6 shadow-elegant hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
              onClick={() => post.fullContent && navigate(`/blog/${post.id}`)}
            >
              {/* Blog Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{
                    objectPosition: post.id === 2 ? 'center 20%' : 'center center'
                  }}
                />
              </div>

              {/* Blog Meta */}
              <div className={`flex items-center gap-4 text-sm text-muted-foreground mb-4 ${
                isRTL ? 'flex-row-reverse font-arabic' : 'font-inter'
              }`}>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Blog Title */}
              <h3 className={`text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors ${
                isRTL ? 'font-arabic text-right' : 'font-inter text-left'
              }`}>
                {post.title}
              </h3>

              {/* Blog Subtitle */}
              {post.subtitle && (
                <p className={`text-sm text-muted-foreground mb-3 leading-relaxed ${
                  isRTL ? 'font-arabic text-right' : 'font-inter text-left'
                }`}>
                  {post.subtitle}
                </p>
              )}

              {/* Blog Excerpt */}
              <p className={`text-muted-foreground mb-4 leading-relaxed ${
                isRTL ? 'font-arabic text-right' : 'font-inter text-left'
              }`}>
                {post.excerpt}
              </p>

              {/* Read More Button */}
              {post.fullContent && (
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/blog/${post.id}`);
                  }}
                  variant="outline"
                  className={`w-full group/btn hover:bg-primary hover:text-white transition-colors duration-300 ${
                    isRTL ? 'flex-row-reverse' : ''
                  }`}
                >
                  <span className={isRTL ? 'font-arabic' : 'font-inter'}>
                    {isRTL ? 'اقرأ المزيد' : 'Read More'}
                  </span>
                  <ArrowRight className={`h-4 w-4 ${isRTL ? 'ml-2 rotate-180' : 'mr-2'}`} />
                </Button>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;