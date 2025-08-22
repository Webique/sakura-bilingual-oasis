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
      title: isRTL ? 'ما الذي يوجد حقاً على منشفتك؟' : 'What\'s Really on Your Towel?',
      subtitle: isRTL ? 'اختبار ثقافة ساكورا يكشف نتائج صادمة' : 'SAKURA\'s Culture Test Reveals Shocking Results',
      excerpt: isRTL 
        ? 'معظمنا يثق بأن مناشفه نظيفة بعد غسلة بسيطة. تبدو طازجة ورائحتها جيدة - لذا نفترض أنها آمنة. لكن ماذا لو كان المنشف الذي تستخدمه كل يوم يخفي شيئاً لا يمكنك رؤيته؟'
        : 'Most of us trust our towels to be clean after a simple wash. They look fresh, they smell fine—so we assume they\'re safe. But what if the towel you\'re using every day is hiding something you can\'t see?',
      fullContent: isRTL ? {
        intro: 'قرر فريق ساكورا اختبار منشف "نظيف" باستخدام طريقة الثقافة المخبرية. كانت النتائج مذهلة: تم العثور على مستعمرات بكتيرية متعددة، على الرغم من أن المنشف بدا نظيفاً تماماً.',
        results: 'النتائج الصادمة\n• مستعمرات صفراء: على الأرجح المكورات العنقودية الذهبية، بكتيريا شائعة موجودة على الجلد والأسطح المنزلية.\n• مستعمرات بيضاء أو شاحبة: من المحتمل المكورات العنقودية الجلدية أو غيرها من النباتات الجلدية الطبيعية.\n• بقع برتقالية: تشير إلى بكتيريا ملونة مثل Serratia marcescens، غالباً ما تكون موجودة في البيئات الرطبة.',
        whyMatters: 'لماذا هذا مهم؟\nفي كل مرة تستخدم منشفاً ملوثاً، تنقل بكتيريا وغبار وبقايا إلى بشرتك دون علمك. مع مرور الوقت، يمكن أن يسبب هذا تهيجاً، انسداد المسام، وحتى التهابات - خاصة إذا كان لديك بشرة حساسة أو عرضة لحب الشباب.',
        sakuraOffer: 'ماذا تقدم ساكورا؟\nمناشف ساكورا مصنوعة من ألياف نباتية 100%، قابلة للتحلل الحيوي بالكامل، ومصممة للاستخدام الواحد فقط. هذا يعني أنك تستمتع دائماً بسطح نظيف ومعقم وصحي - لا بكتيريا مخفية، لا بقايا غسيل.',
        whySwitch: 'لماذا التبديل؟\n• لأن بشرتك تستحق الأفضل\n• ساكورا تمنحك الراحة، بعيداً عن التلوث وبقايا الغسيل، مما يمنحك بشرة أكثر صحة.',
        takeaway: 'الخلاصة\nبشرتك لا يجب أن تحارب البكتيريا المخفية في كل مرة تجفف وجهك. مع مناشف ساكورا للاستخدام الواحد، تحصل على النظافة والأمان وراحة البال - كل ذلك في تبديل بسيط واحد.\n• اكتشف الفرق مع ساكورا. بشرتك ستشكرك.'
      } : {
        intro: 'The SAKURA team decided to put a "clean" towel to the test using a laboratory culture method. The results were eye-opening: multiple bacterial colonies were found, even though the towel appeared spotless.',
        results: 'The Shocking Results\n• Yellow colonies: Likely Staphylococcus aureus, a common bacterium found on skin and household surfaces.\n• White or pale colonies: Possibly Staphylococcus epidermidis or other natural skin flora.\n• Orange spots: Indicative of pigmented bacteria such as Serratia marcescens, often present in damp environments.',
        whyMatters: 'Why Does This Matter?\nEvery time you use a contaminated towel, you unknowingly transfer bacteria, dust, and residue onto your skin. Over time, this can cause irritation, clogged pores, and even infections—especially if you have sensitive or acne-prone skin.',
        sakuraOffer: 'What Does SAKURA Offer?\nSAKURA towels are made from 100% plant-based fibers, fully biodegradable, and designed for single use only. This means you always enjoy a fresh, clean, hygienic surface—no hidden bacteria, no laundry residue.',
        whySwitch: 'Why Make the Switch?\n• Because your skin deserves the very best\n• Sakura provides you with comfort, away from contamination and laundry residue, giving you healthier skin.',
        takeaway: 'The Takeaway\nYour skin shouldn\'t have to fight hidden bacteria every time you dry your face. With SAKURA single-use towels, you get hygiene, safety, and peace of mind—all in one simple switch.\n• Discover the difference with SAKURA. Your skin will thank you.'
      },
      date: isRTL ? '15 يناير 2025' : 'January 15, 2025',
      readTime: isRTL ? '5 دقائق' : '5 min read',
      image: '/lovable-uploads/11f5a605-f9ae-4fcf-a58d-5d7eab3cddfe.jpg',
      cultureImage: '/lovable-uploads/40da0e99-8df9-488d-a56f-575b35e19ea6.jpg'
    },
    {
      id: 2,
      title: isRTL ? 'لماذا مناشف ساكورا للاستخدام الواحد أفضل من المناشف التقليدية' : 'Why SAKURA Single-Use Towels Are Better Than Traditional Towels',
      subtitle: isRTL ? 'المشكلة مع المناشف التقليدية' : 'The Problem with Traditional Towels',
      excerpt: isRTL 
        ? 'المناشف التقليدية قد تبدو ميسورة التكلفة، لكنها تأتي مع تكاليف مخفية ومخاطر صحية'
        : 'Traditional towels may seem affordable, but they come with hidden costs and health risks',
      fullContent: isRTL ? {
        intro: 'عند التفكير في المناشف العادية قد نراها خيارًا اقتصاديًا للوهلة الأولى، لكن الواقع مختلف:',
        problems: '• الاستهلاك العالي: المناشف تحتاج إلى غسيل متكرر بعد كل استخدام، وهذا يعني استهلاك كميات هائلة من الماء والكهرباء والمنظفات.\n• اهتراء سريع: مع كثرة الغسيل والتعرض للمنظفات القوية، تبدأ الألياف بالضعف، وتظهر الروائح، وتقل جودتها بشكل ملحوظ.\n• التكلفة التراكمية: إذا حسبنا تكاليف شراء المناشف + الغسيل الدوري + استهلاك الطاقة والماء، نجد أن الفاتورة الشهرية تتضاعف دون أن نشعر.\n• مخاطر صحية: المناشف العادية تصبح بيئة مثالية لتكاثر البكتيريا والفطريات، خصوصًا مع الرطوبة وسوء التجفيف، مما يعرّض البشرة للحساسية أو البثور.',
        solution: 'ساكورا: الحل الصحي والاقتصادي الذكي\nمناشف ساكورا للاستخدام الواحد صُممت لتضع حدًا لهذه المعاناة:',
        benefits: '• نظافة مضمونة: كل منشفة جديدة ومعقمة، مما يعني وداعًا للبكتيريا والروائح العالقة.\n• بدون غسيل، بدون اهتراء: لا حاجة لغسل متكرر أو مواد تنظيف تضر بالبيئة والجيب.\n• اقتصادية على المدى الطويل: التوفير في الماء والكهرباء ومواد التنظيف يعوض تكلفة شراء المناشف، ويُقلل الجهد والوقت.\n• صديقة للبيئة: مناشف ساكورا قابلة للتحلل الحيوي بالكامل، فتمنحك راحة البال بأنك تحافظ على كوكبنا.\n• مظهر راقٍ وتجربة فاخرة: سواء في المنزل، العيادات، الصالونات أو الفنادق، تقدم ساكورا تجربة عناية مختلفة وفاخرة لعملائك أو لعائلتك.',
        whySwitch: 'لماذا التبديل إلى ساكورا خطوة أذكى؟\n• لأنها توفّر المال على المدى البعيد.\n• لأنها تحافظ على صحتك وصحة عملائك.\n• لأنها تمنحك رفاهية الاستخدام الواحد دون قلق من الغسيل أو الروائح.\n• لأنها تحمي البيئة وتقلل من الاستهلاك غير الضروري للمياه والكهرباء.',
        takeaway: 'المناشف العادية قد تبدو حلًا بسيطًا، لكنها تحمل تكاليف مخفية واستهلاك زائد. بينما مناشف ساكورا للاستخدام الواحد تمنحك النظافة، الفخامة، والراحة مع توفير اقتصادي وحماية للبيئة.\n• جرب ساكورا اليوم، واكتشف الفرق بنفسك'
      } : {
        intro: 'Traditional towels may seem affordable, but they come with hidden costs and health risks:',
        problems: '• Frequent washing wastes water, electricity, and detergents.\n• Towels wear out quickly and lose quality.\n• Damp fibers create a breeding ground for bacteria and fungi.\n• Extra laundry means higher monthly expenses.',
        solution: 'The SAKURA Solution\nSAKURA single-use towels are made from 100% plant-based, biodegradable fibers. They are:',
        benefits: '• Hygienic: Fresh and sterile every time.\n• Convenient: No washing, no odors, no wear.\n• Cost-efficient: Save on laundry, water, and energy.\n• Eco-friendly: Sustainable and kind to the planet.\n• Premium: Perfect for spas, salons, clinics, gyms, hotels, and home use.',
        whySwitch: 'Why Make the Switch?\n• Because they save money in the long run.\n• Because they protect your health and your clients\' health.\n• Because they give you the luxury of single-use without worry about washing or odors.\n• Because they protect the environment and reduce unnecessary consumption of water and electricity.',
        takeaway: 'Traditional towels create waste, cost more, and carry hidden bacteria. With SAKURA single-use towels, you get hygiene, convenience, and eco-friendly luxury—all in one simple switch.\n• Upgrade to SAKURA today. Your skin—and the planet—will thank you.'
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