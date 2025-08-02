import { useTranslations } from 'next-intl';
import { Award, Users, Zap, Shield } from 'lucide-react';

export default function WhyUs() {
    const t = useTranslations('WhyUs');
    
    return (
        <div className='container max-w-screen-md xl:max-w-screen-xl mx-auto px-4 py-16'>
            <div className='flex flex-col gap-8 lg:gap-12 xl:items-center justify-center'>
                <span className='font-medium text-[32px] max-w-sm xl:text-center'>{t('title')}</span>

                <div className='flex flex-col xl:flex-row gap-14'>
                    <div className='flex gap-6'>
                        <div className='w-full flex flex-col gap-8 items-start justify-start border border-[#CCCCCC] p-6 rounded-lg'>
                            <div className='w-16 h-16 flex justify-center items-center text-white p-3 bg-gradient-to-b from-[#A6E22E] to-[#6D9915] rounded-full'>
                                <Award size={28} />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <span className='text-xl font-medium'>{t('points.1.title')}</span>
                                <span className='text-[#666666]'>{t('points.1.description')}</span>
                            </div>
                        </div>

                        <div className='w-full flex flex-col gap-8 items-start justify-start border border-[#CCCCCC] p-6 rounded-lg'>
                            <div className='w-16 h-16 flex justify-center items-center text-white p-3 bg-gradient-to-b from-[#A6E22E] to-[#6D9915] rounded-full'>
                                <Users size={28} />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <span className='text-xl font-medium'>{t('points.2.title')}</span>
                                <span className='text-[#666666]'>{t('points.2.description')}</span>
                            </div>
                        </div>

                        <div className='w-full flex flex-col gap-8 items-start justify-start border border-[#CCCCCC] p-6 rounded-lg'>
                            <div className='w-16 h-16 flex justify-center items-center text-white p-3 bg-gradient-to-b from-[#A6E22E] to-[#6D9915] rounded-full'>
                                <Zap size={28} />
                            </div>
                            <div className='flex flex-col justify-center items-start gap-4'>
                                <span className='text-xl font-medium'>{t('points.3.title')}</span>
                                <span className='text-[#666666] text-start'>{t('points.3.description')}</span>
                            </div>
                        </div>

                        <div className='w-full flex flex-col gap-8 items-start justify-start border border-[#CCCCCC] p-6 rounded-lg'>
                            <div className='w-16 h-16 flex justify-center items-center text-white p-3 bg-gradient-to-b from-[#A6E22E] to-[#6D9915] rounded-full'>
                                <Shield size={28} />
                            </div>
                            <div className='flex flex-col justify-center items-start gap-4'>
                                <span className='text-xl font-medium'>{t('points.4.title')}</span>
                                <span className='text-[#666666] text-start'>{t('points.4.description')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}