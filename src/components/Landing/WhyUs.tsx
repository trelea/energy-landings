import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function WhyUs() {
    const t = useTranslations('WhyUs');

    return (
        <div className='bg-gradient-to-b from-white to-[#F8FBF6] py-16 lg:py-20 w-full'>
            <div className='container max-w-screen-md xl:max-w-screen-xl mx-auto px-4'>
                <div className='flex flex-col gap-10 lg:gap-14 xl:items-center justify-center'>
                    <div className='flex flex-col gap-3 xl:items-center'>
                        {/* <span className='text-primary font-medium text-sm uppercase tracking-wider'>{t('label')}</span> */}
                        <h2 className='font-semibold text-2xl lg:text-4xl max-w-lg xl:text-center leading-snug'>{t('title')}</h2>
                    </div>

                    <div className='flex flex-col xl:flex-row gap-10 xl:gap-8 items-center'>
                        {/* Left Column */}
                        <div className='flex flex-col gap-8 w-full xl:w-auto'>
                            <div className='flex gap-5 items-start p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow'>
                                <div className='w-14 h-14 flex-shrink-0 flex justify-center items-center text-white text-xl font-semibold gradient-badge rounded-xl'>01</div>
                                <div className='flex flex-col gap-2'>
                                    <span className='text-lg font-semibold text-gray-900'>{t('points.1.title')}</span>
                                    <span className='text-gray-500 text-sm leading-relaxed'>{t('points.1.description')}</span>
                                </div>
                            </div>

                            <div className='flex gap-5 items-start p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow'>
                                <div className='w-14 h-14 flex-shrink-0 flex justify-center items-center text-white text-xl font-semibold gradient-badge rounded-xl'>02</div>
                                <div className='flex flex-col gap-2'>
                                    <span className='text-lg font-semibold text-gray-900'>{t('points.2.title')}</span>
                                    <span className='text-gray-500 text-sm leading-relaxed'>{t('points.2.description')}</span>
                                </div>
                            </div>
                        </div>

                        {/* Center Image */}
                        <div className='hidden xl:block relative'>
                            <div className='absolute inset-0 bg-primary/5 rounded-full blur-3xl'></div>
                            <Image src={'/whyus.png'} alt='Why Us' width={400} height={400} className='relative rounded-2xl' />
                        </div>

                        {/* Right Column */}
                        <div className='flex flex-col gap-8 w-full xl:w-auto'>
                            <div className='flex gap-5 items-start p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow xl:flex-row-reverse xl:text-right'>
                                <div className='w-14 h-14 flex-shrink-0 flex justify-center items-center text-white text-xl font-semibold gradient-badge rounded-xl'>03</div>
                                <div className='flex flex-col gap-2'>
                                    <span className='text-lg font-semibold text-gray-900'>{t('points.3.title')}</span>
                                    <span className='text-gray-500 text-sm leading-relaxed'>{t('points.3.description')}</span>
                                </div>
                            </div>

                            <div className='flex gap-5 items-start p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow xl:flex-row-reverse xl:text-right'>
                                <div className='w-14 h-14 flex-shrink-0 flex justify-center items-center text-white text-xl font-semibold gradient-badge rounded-xl'>04</div>
                                <div className='flex flex-col gap-2'>
                                    <span className='text-lg font-semibold text-gray-900'>{t('points.4.title')}</span>
                                    <span className='text-gray-500 text-sm leading-relaxed'>{t('points.4.description')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}