import React from 'react';
import { Calendar, ArrowRight, ArrowLeft, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const BlogSection = () => {
  const { isRTL, t } = useLanguage();

  // Sample blog posts
  const blogPosts = [
    {
      id: 1,
      title: isRTL ? 'معايير النظافة في الفنادق الفاخرة' : 'Hygiene Standards in Luxury Hotels',
      excerpt: isRTL 
        ? 'كيف تضمن الفنادق الفاخرة أعلى معايير النظافة باستخدام المناشف أحادية الاستخدام'
        : 'How luxury hotels ensure the highest hygiene standards using single-use towels',
      date: isRTL ? '15 يناير 2025' : 'January 15, 2025',
      readTime: isRTL ? '5 دقائق' : '5 min read',
      image: '/lovable-uploads/0d4bb454-7d0c-4253-a959-6b56b0d0f60f.png'
    },
    {
      id: 2,
      title: isRTL ? 'الاستدامة في صناعة المناشف' : 'Sustainability in Towel Manufacturing',
      excerpt: isRTL 
        ? 'نظرة على الممارسات المستدامة في إنتاج المناشف وتأثيرها على البيئة'
        : 'A look at sustainable practices in towel production and their environmental impact',
      date: isRTL ? '10 يناير 2025' : 'January 10, 2025',
      readTime: isRTL ? '7 دقائق' : '7 min read',
      image: '/lovable-uploads/eaf070aa-e0c9-4d20-b356-aa0636005603.png'
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

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section id="blog" className="py-20 bg-background">
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
              className="card-elegant group cursor-pointer"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Blog Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
              <h3 className={`text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors ${
                isRTL ? 'font-arabic text-right' : 'font-inter text-left'
              }`}>
                {post.title}
              </h3>

              {/* Blog Excerpt */}
              <p className={`text-muted-foreground mb-6 leading-relaxed ${
                isRTL ? 'font-arabic text-right' : 'font-inter text-left'
              }`}>
                {post.excerpt}
              </p>


            </article>
          ))}
        </div>


      </div>
    </section>
  );
};

export default BlogSection;