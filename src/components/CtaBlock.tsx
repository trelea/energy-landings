import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function CtaBlock() {
    const t = useTranslations('CtaBlock');

    return (
        <div className='xl:container xl:max-w-screen-xl mx-auto w-full lg:px-4 py-16 text-white'>
            <div className='cta-block py-20 lg:py-24 px-10 relative z-0 overflow-hidden lg:rounded-[56px]'>
                <div className='flex flex-col gap-8 lg:gap-12 items-center justify-center'>
                    <div className='flex flex-col gap-4 items-center justify-center'>
                        <span className='font-medium text-3xl lg:text-[56px] text-center max-w-4xl leading-snug'>{t('title')}</span>
                        <span className='text-center max-w-screen-md'>{t('subtitle')}</span>
                    </div>

                    <Link href="/contacts" className='bg-white ps-6 p-3 rounded-full flex items-center justify-between gap-2 hover:bg-[#eeeeee]'>
                        <span className='text-[#001D3D] font-medium'>{t('button')}</span>
                        <img src="/icons/arrow-up-filled.svg" width={34} height={34} alt="" />
                    </Link>
                </div>
                
                <Image src={"/icons/cta-element.png"} alt="Cta Background" width={600} height={600} className='absolute top-0 -translate-x-1/2 -translate-y-1/2 left-0 -z-10' />

                <Image src={"/icons/cta-element.png"} alt="Cta Background" width={600} height={600} className='absolute bottom-0 translate-x-1/2 translate-y-1/2 right-0 -z-10' />
            </div>
        </div>
    );
}