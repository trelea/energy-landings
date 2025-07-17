import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function WhyUs() {
    const t = useTranslations('WhyUs');
    
    return (
        <div className='container max-w-screen-md xl:max-w-screen-xl mx-auto px-4 py-16'>
            <div className='flex flex-col gap-8 lg:gap-12 xl:items-center justify-center'>
                <span className='font-medium text-[32px] max-w-sm xl:text-center'>{t('title')}</span>

                <div className='flex flex-col xl:flex-row gap-14 items-center'>
                    <div className='flex flex-col gap-14'>
                        <div className='flex flex-col gap-8 items-start justify-center'>
                            <div className='flex flex-col gap-4 p-4 border rounded-xl border-[#E0E0E0] bg-[#fff9f8] w-full'>
                                <span className='text-xl font-medium'>{t('points.1.title')}</span>
                                <span className='text-[#666666]'>{t('points.1.description')}</span>
                            </div>
                        </div>

                        <div className='flex flex-col gap-8 items-start justify-center'>
                            <div className='flex flex-col gap-4 p-4 border rounded-xl border-[#E0E0E0] bg-[#fff9f8] w-full'>
                                <span className='text-xl font-medium'>{t('points.2.title')}</span>
                                <span className='text-[#666666]'>{t('points.2.description')}</span>
                            </div>
                        </div>
                    </div>

                    <Image src={'/whyus.webp'} alt='Why Us' width={450} height={400} className='hidden xl:block' />

                    <div className='flex flex-col gap-14'>
                        <div className='flex flex-col gap-8 items-start xl:items-end justify-center'>
                            <div className='flex flex-col justify-center items-start lg:items-end gap-4 p-4 rounded-xl border border-[#E0E0E0] bg-[#fff9f8] w-full'>
                                <span className='text-xl font-medium xl:text-end'>{t('points.3.title')}</span>
                                <span className='text-[#666666] text-start xl:text-end'>{t('points.3.description')}</span>
                            </div>
                        </div>

                        <div className='flex flex-col gap-8 items-start xl:items-end justify-center'>
                            <div className='flex flex-col justify-center gap-4 items-start lg:items-end p-4 border rounded-xl border-[#E0E0E0] bg-[#fff9f8] w-full'>
                                <span className='text-xl font-medium xl:text-end'>{t('points.4.title')}</span>
                                <span className='text-[#666666] text-start xl:text-end'>{t('points.4.description')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}