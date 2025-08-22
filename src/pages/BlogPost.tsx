import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isRTL, t } = useLanguage();

  // Blog posts data
  const blogPosts = {
    1: {
      title: isRTL ? 'ما الذي يوجد حقاً على منشفتك؟' : 'What\'s Really on Your Towel?',
      subtitle: isRTL ? 'اختبار ثقافة ساكورا يكشف نتائج صادمة' : 'SAKURA\'s Culture Test Reveals Shocking Results',
      excerpt: isRTL 
        ? 'معظمنا يثق بأن مناشفه نظيفة بعد غسلة بسيطة. تبدو طازجة ورائحتها جيدة - لذا نفترض أنها آمنة. لكن ماذا لو كان المنشف الذي تستخدمه كل يوم يخفي شيئاً لا يمكنك رؤيته؟'
        : 'Most of us trust our towels to be clean after a simple wash. They look fresh, they smell fine—so we assume they\'re safe. But what if the towel you\'re using every day is hiding something you can\'t see?',
      content: isRTL ? {
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
      cultureImage: '/lovable-uploads/40da0e99-8df9-488d-a56f-575b35e19ea6.jpg',
      author: isRTL ? 'فريق ساكورا' : 'SAKURA Team',
      category: isRTL ? 'صحة ونظافة' : 'Health & Hygiene'
    },
    2: {
      title: isRTL ? 'لماذا مناشف ساكورا للاستخدام الواحد أفضل من المناشف التقليدية' : 'Why SAKURA Single-Use Towels Are Better Than Traditional Towels',
      subtitle: isRTL ? 'المشكلة مع المناشف التقليدية' : 'The Problem with Traditional Towels',
      excerpt: isRTL 
        ? 'المناشف التقليدية قد تبدو ميسورة التكلفة، لكنها تأتي مع تكاليف مخفية ومخاطر صحية'
        : 'Traditional towels may seem affordable, but they come with hidden costs and health risks',
      content: isRTL ? {
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
      image: '/lovable-uploads/cb0e4969-0437-4c66-afae-586753419d92.jpg',
      author: isRTL ? 'فريق ساكورا' : 'SAKURA Team',
      category: isRTL ? 'مقارنة المنتجات' : 'Product Comparison'
    }
  };

  const post = blogPosts[id as keyof typeof blogPosts];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            {isRTL ? 'المقال غير موجود' : 'Blog post not found'}
          </h1>
          <Button onClick={() => navigate('/')} className="bg-primary hover:bg-primary/90">
            {isRTL ? 'العودة للرئيسية' : 'Back to Home'}
          </Button>
        </div>
      </div>
    );
  }

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = post.title;
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`);
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`);
        break;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-80 sm:h-96 md:h-[500px] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
        
        {/* Back Button */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
          <Button
            onClick={() => navigate('/')}
            variant="ghost"
            size="sm"
            className="bg-background/80 hover:bg-background text-foreground backdrop-blur-sm h-9 px-3 sm:h-10 sm:px-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">{isRTL ? 'العودة' : 'Back'}</span>
          </Button>
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm text-muted-foreground">
              <span className="bg-primary/10 text-primary px-2 py-1 sm:px-3 rounded-full text-xs">
                {post.category}
              </span>
              <div className="flex items-center gap-1 sm:gap-2">
                <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm">{post.date}</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm">{post.readTime}</span>
              </div>
            </div>
            
            <h1 className={`text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 leading-tight ${
              isRTL ? 'font-arabic text-right' : 'font-inter text-left'
            }`}>
              {post.title}
            </h1>
            
            <p className={`text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed ${
              isRTL ? 'font-arabic text-right' : 'font-inter text-left'
            }`}>
              {post.excerpt}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Article Content */}
          <div className="lg:col-span-3">
            <article className="prose prose-lg max-w-none">
              {/* Author Info */}
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 p-4 sm:p-6 bg-muted/30 rounded-xl">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-base sm:text-lg">
                    {post.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm sm:text-base">{post.author}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {isRTL ? 'كاتب في ساكورا' : 'Writer at SAKURA'}
                  </p>
                </div>
              </div>

              {/* Content Sections */}
              <div className="space-y-6 sm:space-y-8">
                {/* Intro */}
                <div className="text-base sm:text-lg leading-relaxed">
                  <p className={`text-muted-foreground ${
                    isRTL ? 'font-arabic text-right' : 'font-inter text-left'
                  }`}>
                    {post.content.intro}
                  </p>
                </div>

                {/* Content sections - handle different structures */}
                {post.id === 1 ? (
                  <>
                    {/* Results for first blog */}
                    <div className="bg-muted/30 rounded-xl p-4 sm:p-6 border-l-4 border-primary">
                      <h3 className={`text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4 ${
                        isRTL ? 'font-arabic text-right' : 'font-inter text-left'
                      }`}>
                        {isRTL ? 'النتائج الصادمة' : 'The Shocking Results'}
                      </h3>
                      <p className={`text-sm sm:text-base text-muted-foreground leading-relaxed whitespace-pre-line ${
                        isRTL ? 'font-arabic text-right' : 'font-inter text-left'
                      }`}>
                        {post.content.results}
                      </p>
                    </div>

                    {/* Culture Image */}
                    {post.cultureImage && (
                      <div className="relative overflow-hidden rounded-xl my-6">
                        <img
                          src={post.cultureImage}
                          alt="Culture Test Results"
                          className="w-full h-48 sm:h-64 md:h-80 object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent p-3 sm:p-4">
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            {isRTL ? 'نتائج اختبار الثقافة المخبرية' : 'Laboratory culture test results'}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Why Matters */}
                    <div className="bg-primary/5 rounded-xl p-4 sm:p-6 border border-primary/20">
                      <h3 className={`text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4 ${
                        isRTL ? 'font-arabic text-right' : 'font-inter text-left'
                      }`}>
                        {isRTL ? 'لماذا هذا مهم؟' : 'Why Does This Matter?'}
                      </h3>
                      <p className={`text-sm sm:text-base text-foreground leading-relaxed whitespace-pre-line ${
                        isRTL ? 'font-arabic text-right' : 'font-inter text-left'
                      }`}>
                        {post.content.whyMatters}
                      </p>
                    </div>

                    {/* SAKURA Offer */}
                    <div className="bg-accent-gradient/10 rounded-xl p-4 sm:p-6 border border-accent-gradient/20">
                      <h3 className={`text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4 ${
                        isRTL ? 'font-arabic text-right' : 'font-inter text-left'
                      }`}>
                        {isRTL ? 'ماذا تقدم ساكورا؟' : 'What Does SAKURA Offer?'}
                      </h3>
                      <p className={`text-sm sm:text-base text-foreground leading-relaxed whitespace-pre-line ${
                        isRTL ? 'font-arabic text-right' : 'font-inter text-left'
                      }`}>
                        {post.content.sakuraOffer}
                      </p>
                    </div>
                  </>
                ) : post.id === 2 ? (
                  <>
                    {/* Problems for second blog */}
                    <div className="bg-muted/30 rounded-xl p-4 sm:p-6 border-l-4 border-primary">
                      <h3 className={`text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4 ${
                        isRTL ? 'font-arabic text-right' : 'font-inter text-left'
                      }`}>
                        {isRTL ? 'المشاكل الرئيسية' : 'Key Problems'}
                      </h3>
                      <p className={`text-sm sm:text-base text-muted-foreground leading-relaxed whitespace-pre-line ${
                        isRTL ? 'font-arabic text-right' : 'font-inter text-left'
                      }`}>
                        {post.content.problems}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="bg-primary/5 rounded-xl p-4 sm:p-6 border border-primary/20">
                      <h3 className={`text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4 ${
                        isRTL ? 'font-arabic text-right' : 'font-inter text-left'
                      }`}>
                        {isRTL ? 'الحل' : 'The Solution'}
                      </h3>
                      <p className={`text-sm sm:text-base text-foreground leading-relaxed whitespace-pre-line ${
                        isRTL ? 'font-arabic text-right' : 'font-inter text-left'
                      }`}>
                        {post.content.solution}
                      </p>
                    </div>

                    {/* Benefits */}
                    <div className="bg-accent-gradient/10 rounded-xl p-4 sm:p-6 border border-accent-gradient/20">
                      <h3 className={`text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4 ${
                        isRTL ? 'font-arabic text-right' : 'font-inter text-left'
                      }`}>
                        {isRTL ? 'المزايا الرئيسية' : 'Key Benefits'}
                      </h3>
                      <p className={`text-sm sm:text-base text-foreground leading-relaxed whitespace-pre-line ${
                        isRTL ? 'font-arabic text-right' : 'font-inter text-left'
                      }`}>
                        {post.content.benefits}
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="bg-muted/30 rounded-xl p-6">
                    <p className={`text-muted-foreground leading-relaxed ${
                      isRTL ? 'font-arabic text-right' : 'font-inter text-left'
                    }`}>
                      {isRTL ? 'محتوى المقال قيد التطوير' : 'Article content coming soon...'}
                    </p>
                  </div>
                )}

                {/* Why Switch */}
                <div className="bg-muted/30 rounded-xl p-4 sm:p-6">
                  <h3 className={`text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4 ${
                    isRTL ? 'font-arabic text-right' : 'font-inter text-left'
                  }`}>
                    {isRTL ? 'لماذا التبديل؟' : 'Why Make the Switch?'}
                  </h3>
                  <p className={`text-sm sm:text-base text-muted-foreground leading-relaxed whitespace-pre-line ${
                    isRTL ? 'font-arabic text-right' : 'font-inter text-left'
                  }`}>
                    {post.content.whySwitch}
                  </p>
                </div>

                {/* Takeaway */}
                <div className="bg-primary/5 rounded-xl p-4 sm:p-6 border-l-4 border-primary">
                  <h3 className={`text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4 ${
                    isRTL ? 'font-arabic text-right' : 'font-inter text-left'
                  }`}>
                    {isRTL ? 'الخلاصة' : 'The Takeaway'}
                  </h3>
                  <p className={`text-sm sm:text-base text-foreground leading-relaxed whitespace-pre-line ${
                    isRTL ? 'font-arabic text-right' : 'font-inter text-left'
                  }`}>
                    {post.content.takeaway}
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-8 sm:mt-12 p-6 sm:p-8 bg-gradient-to-r from-primary/10 to-accent-gradient/10 rounded-xl border border-primary/20 text-center">
                <h3 className={`text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 ${
                  isRTL ? 'font-arabic' : 'font-inter'
                }`}>
                  {isRTL ? 'جرب ساكورا اليوم' : 'Try SAKURA Today'}
                </h3>
                <p className={`text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto ${
                  isRTL ? 'font-arabic' : 'font-inter'
                }`}>
                  {isRTL 
                    ? 'اكتشف الفرق بنفسك مع مناشف ساكورا للاستخدام الواحد. صحة أفضل، راحة أكبر، وبيئة أنظف.'
                    : 'Discover the difference yourself with SAKURA single-use towels. Better health, greater comfort, and a cleaner environment.'
                  }
                </p>
                <Button 
                  onClick={() => navigate('/#contact')}
                  className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg"
                >
                  {isRTL ? 'تواصل معنا' : 'Contact Us'}
                </Button>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 mt-8 lg:mt-0">
            <div className="sticky top-8 space-y-4 sm:space-y-6">
              {/* Share Section */}
              <div className="bg-card p-4 sm:p-6 rounded-xl border border-border">
                <h4 className={`font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base ${
                  isRTL ? 'font-arabic text-right' : 'font-inter text-left'
                }`}>
                  {isRTL ? 'شارك المقال' : 'Share Article'}
                </h4>
                <div className="flex gap-2 sm:gap-3">
                  <Button
                    onClick={() => handleShare('facebook')}
                    variant="ghost"
                    size="sm"
                    className="flex-1 bg-blue-50 hover:bg-blue-100 text-blue-600 h-8 sm:h-9"
                  >
                    <Facebook className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                  <Button
                    onClick={() => handleShare('twitter')}
                    variant="ghost"
                    size="sm"
                    className="flex-1 bg-sky-50 hover:bg-sky-100 text-sky-600 h-8 sm:h-9"
                  >
                    <Twitter className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                  <Button
                    onClick={() => handleShare('linkedin')}
                    variant="ghost"
                    size="sm"
                    className="flex-1 bg-blue-50 hover:bg-blue-100 text-blue-600 h-8 sm:h-9"
                  >
                    <Linkedin className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </div>
              </div>

              {/* Related Articles */}
              <div className="bg-card p-4 sm:p-6 rounded-xl border border-border">
                <h4 className={`font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base ${
                  isRTL ? 'font-arabic text-right' : 'font-inter text-left'
                }`}>
                  {isRTL ? 'مقالات ذات صلة' : 'Related Articles'}
                </h4>
                <div className="space-y-4">
                  {Object.entries(blogPosts).map(([postId, postData]) => {
                    if (postId === id) return null;
                    return (
                      <div
                        key={postId}
                        onClick={() => navigate(`/blog/${postId}`)}
                        className="cursor-pointer group"
                      >
                        <div className="w-full h-24 bg-muted rounded-lg mb-2 overflow-hidden">
                          <img
                            src={postData.image}
                            alt={postData.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <h5 className={`text-sm font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors ${
                          isRTL ? 'font-arabic text-right' : 'font-inter text-left'
                        }`}>
                          {postData.title}
                        </h5>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-primary/10 to-accent-gradient/10 p-4 sm:p-6 rounded-xl border border-primary/20">
                <h4 className={`font-semibold text-foreground mb-2 sm:mb-3 text-sm sm:text-base ${
                  isRTL ? 'font-arabic text-right' : 'font-inter text-left'
                }`}>
                  {isRTL ? 'ابق على اطلاع' : 'Stay Updated'}
                </h4>
                <p className={`text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 ${
                  isRTL ? 'font-arabic text-right' : 'font-inter text-left'
                }`}>
                  {isRTL 
                    ? 'احصل على أحدث المقالات والأخبار من ساكورا'
                    : 'Get the latest articles and news from SAKURA'
                  }
                </p>
                <Button 
                  onClick={() => navigate('/#contact')}
                  className="w-full bg-primary hover:bg-primary/90 text-white h-8 sm:h-9 text-sm sm:text-base"
                >
                  {isRTL ? 'اشترك الآن' : 'Subscribe Now'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
