import { getPayload } from 'payload'
import config from '../../../../payload.config'

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getTranslations, getLocale } from 'next-intl/server';

import ServiceCard from '@/components/microComponents/ServiceCard';

export default async function ServicesPage() {
  const payload = await getPayload({ config });
  const services = await payload.find({ collection: 'services' });
  
  const t = await getTranslations('Services');
  const locale = await getLocale();

  return (
    <main className="flex flex-col w-full items-center justify-center">
      <Navbar isDarkMode />

      <div className='container max-w-screen-md xl:max-w-screen-xl mx-auto px-4 py-10 lg:py-12'>
        <span className='text-4xl font-semibold'>{t('title')}</span>
        <p className='mt-4 text-lg text-gray-600'>{t('description')}</p>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
          {services.docs.map((service) => (
            <ServiceCard
              key={service.id}
              title={locale === 'ru' ? service.title_ru : service.title_ro}
              description={locale === 'ru' ? service.description_ru : service.description_ro}
              // @ts-ignore
              imageUrl={service.image?.url || '/icons/default-service.png'}
              redirectLink={`/services/${service.slug || service.id}`}
            />
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
