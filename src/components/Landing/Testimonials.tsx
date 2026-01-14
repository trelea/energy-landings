'use client';

import { useTranslations } from 'next-intl';

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
}

const TestimonialCard = ({ quote, author, company }: TestimonialCardProps) => (
  <div className="flex flex-col gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all h-full">
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    <p className="text-gray-600 text-sm lg:text-base leading-relaxed flex-grow">&ldquo;{quote}&rdquo;</p>
    <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
      <div className="w-10 h-10 rounded-full gradient-badge flex items-center justify-center text-white font-semibold text-sm">
        {author.charAt(0)}
      </div>
      <div>
        <p className="font-semibold text-gray-900 text-sm">{author}</p>
        <p className="text-xs text-gray-500">{company}</p>
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  const t = useTranslations('Testimonials');

  const testimonials = [0, 1, 2].map(i => ({
    quote: t(`items.${i}.quote`),
    author: t(`items.${i}.author`),
    company: t(`items.${i}.company`)
  }));

  return (
    <div className="bg-white py-16 lg:py-20 w-full">
      <div className="container max-w-screen-md xl:max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col gap-3 items-center mb-10 lg:mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">{t('label')}</span>
          <h2 className="text-2xl lg:text-4xl font-semibold text-center">
            {t('title')}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
}
