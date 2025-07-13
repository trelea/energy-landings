import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Certifications() {
    const t = useTranslations('Certifications');

    return (
        <div className='container max-w-screen-md lg:max-w-screen-lg mx-auto px-4 py-12 lg:py-16'>
            <div className='flex flex-col gap-8 justify-center'>
                <span className='font-semibold text-2xl lg:text-[32px]'>{t('title')}</span>

                <div className='grid grid-cols-2 xl:grid-cols-4 gap-2 lg:gap-8'>
                    <Image src={t('image1')} alt={'certificates'} className='shadow-xl w-full' width={300} height={600}/>
                    <Image src={t('image2')} alt={'certificates'} className='shadow-xl w-full' width={300} height={600}/>
                    <Image src={t('image3')} alt={'certificates'} className='shadow-xl w-full' width={300} height={600}/>
                    <Image src={t('image4')} alt={'certificates'} className='shadow-xl w-full' width={300} height={600}/>
                </div>
            </div>
        </div>
    );
}