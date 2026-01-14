import { getPayload } from 'payload';
import config from '../../payload.config';

import { getTranslations, getLocale } from 'next-intl/server';

import NewsCard from '@/components/microComponents/NewsCard';

import { Link } from '@/i18n/navigation';

export default async function NewsLanding() {
    const payload = await getPayload({ config })
    const blogs = await payload.find({ collection: 'news' });

    const featuredBlogs = blogs.docs.filter(blog => blog.featured === true);

    const t = await getTranslations('NewsLanding');
    const locale = await getLocale();

    return (
        <div className='bg-[#FAFCF9] py-16 lg:py-20 w-full'>
            <div className='container max-w-screen-md xl:max-w-screen-xl w-full mx-auto px-4'>
                <div className='flex flex-col gap-8 xl:items-center justify-center'>
                    <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 w-full'>
                        <div className='flex flex-col gap-2'>
                            <span className='text-primary font-medium text-sm uppercase tracking-wider'>{t('label')}</span>
                            <h2 className='font-semibold text-2xl lg:text-3xl'>{t('title')}</h2>
                        </div>

                        <Link href='/blogs' className='flex items-center gap-2 text-primary hover:gap-3 transition-all group'>
                            <span className='font-medium'>{t('button')}</span>
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
                        {featuredBlogs.map((blog) => (
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
            </div>
        </div>
    );
}