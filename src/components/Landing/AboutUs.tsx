import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function AboutUs() {
    const t = useTranslations('AboutUs');

    return (
        <div className="container max-w-screen-md xl:max-w-screen-xl mx-auto px-4 py-16 lg:py-20">
            <div className="flex flex-col xl:flex-row justify-center items-center gap-14 lg:gap-24">
                <div className="flex flex-col items-start gap-14">
                    <div className="flex flex-col gap-4">
                        <span className="font-medium text-4xl lg:text-6xl leading-snug">{t('title')}</span>
                        <span className="leading-relaxed">{t('description')}</span>
                    </div>
                    {/* <div className="flex gap-5 lg:gap-14">
                        <div className="flex flex-col items-center gap-1">
                            <span className="font-medium text-[32px]">$15k+</span>
                            <span className="text-[#717171] uppercase text-center text-sm">{t('label1')}</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <span className="font-medium text-[32px]">200+</span>
                            <span className="text-[#717171] uppercase text-center text-sm">{t('label2')}</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <span className="font-medium text-[32px]">100%</span>
                            <span className="text-[#717171] uppercase text-center text-sm">{t('label3')}</span>
                        </div>
                    </div> */}
                </div>
                <Image src="/about.svg" alt="About Us" width={500} height={500} className="w-full" />
            </div>
        </div>
    );
}