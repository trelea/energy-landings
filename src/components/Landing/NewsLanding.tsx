import { getPayload } from 'payload';
import config from '../../payload.config';

import { getTranslations, getLocale } from 'next-intl/server';

import Image from 'next/image';
import NewsCard from '@/components/microComponents/NewsCard';

import { Link } from '@/i18n/navigation';

export default async function NewsLanding() {
    const payload = await getPayload({ config })
    const blogs = await payload.find({ collection: 'news' })

    const t = await getTranslations('NewsLanding');
    const locale = await getLocale();

    return (
        <div className='container max-w-screen-md xl:max-w-screen-xl w-full mx-auto px-4 py-16'>
            <div className='flex flex-col gap-6 xl:items-center justify-center'>
                <div className='flex justify-between items-center gap-2 w-full'>
                    <span className='font-medium text-xl lg:text-2xl'>{t('title')}</span>
                    
                    <Link href='/blogs' className='flex gap-1 text-[#4CAF50] whitespace-nowrap'>
                        <span className='font-medium'>{t('button')}</span>
                        <Image src="/icons/chevron-right.svg" alt="chevron" width={18} height={18}/>
                    </Link>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
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
        </div>
    );
}