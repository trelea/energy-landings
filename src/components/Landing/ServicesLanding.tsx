import { getTranslations, getLocale } from 'next-intl/server';

import ServiceLandingCard from '../microComponents/ServiceLandingCard';
import { getPayload } from 'payload';
import config from '../../payload.config';

export default async function ServicesLanding() {
    const payload = await getPayload({ config });
    const services = await payload.find({ collection: 'services', limit: 3 });
    
    const t = await getTranslations('ServicesLanding');
    const locale = await getLocale();

    return (
        <div className='container max-w-screen-md xl:max-w-screen-xl w-full mx-auto px-4 py-16'>
            <div className='flex flex-col gap-8 lg:gap-12 xl:items-center justify-center'>
                <span className='font-medium text-[32px] max-w-sm xl:text-center'>{t('title')}</span>

                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
                    {services.docs.map((service) => (
                        <ServiceLandingCard
                            key={service.id}
                            title={locale === 'ru' ? service.title_ru : service.title_ro}
                            description={locale === 'ru' ? service.description_ru : service.description_ro}
                            redirectLink={`/services/${service.slug || service.id}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}