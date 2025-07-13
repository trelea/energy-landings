import { getPayload } from 'payload'
import config from '../../../../payload.config'

import { getTranslations, getLocale } from 'next-intl/server';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import NewsCard from '@/components/microComponents/NewsCard';

export default async function Blogs() {
  const payload = await getPayload({ config })
  const blogs = await payload.find({ collection: 'news' })

  const t = await getTranslations('News');
  const locale = await getLocale();

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <Navbar isDarkMode />

      <div className='container max-w-screen-md xl:max-w-screen-xl mx-auto px-4 py-10 lg:py-12'>
        <span className='text-4xl font-semibold'>{t('title')}</span>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 mt-8'>
          {blogs.docs.map((blog) => (
            <NewsCard
              key={blog.id}
              title={locale === 'ru' ? blog.title_ru : blog.title_ro}
              description={locale === 'ru' ? blog.excerpt_ru : blog.excerpt_ro}
              date={new Date(blog.createdAt).toLocaleDateString()}
              // @ts-ignore
              imageUrl={blog.featuredImage?.url || "/default-news.png"}
              redirectLink={`/blogs/${blog.slug || blog.id}`}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
