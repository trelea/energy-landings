import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function OurStory() {
    const t = useTranslations('OurStory');
    
    return (
        <div className='container max-w-screen-xl mx-auto px-4 py-10 lg:py-12'>
            <div className='flex flex-col gap-8 lg:gap-16 xl:items-center justify-center'>
                <div className='flex flex-col gap-4 items-start text-left'>
                    <span className='font-semibold text-4xl lg:text-5xl'>{t('title')}</span>
                    {t('description')
                        .split('\n\n') // fiecare paragraf nou e separat de două linii
                        .map((para, index) => (
                            <p key={index} className="text-[#404040] leading-7 text-base xl:text-lg mb-4">
                            {para}
                            </p>
                    ))}
                </div>

                <Image src={t('image')} alt={'about'} width={1100} height={600}/>
            </div>
        </div>
    );
}