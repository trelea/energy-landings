import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function AboutUs() {
    const t = useTranslations('AboutUs');

    return (
        <div className="container max-w-screen-md xl:max-w-screen-xl mx-auto px-4 py-16 lg:py-20">
            <div className="flex flex-col xl:flex-row justify-center items-center gap-10 lg:gap-16">
                <div className="flex flex-col items-start gap-8 xl:max-w-xl">
                    <div className="flex flex-col gap-3">
                        <span className="text-primary font-medium text-sm uppercase tracking-wider">{t('label')}</span>
                        <h2 className="font-semibold text-3xl lg:text-5xl leading-tight">{t('title')}</h2>
                    </div>
                    <p className="leading-relaxed text-gray-600 text-base lg:text-lg">{t('description')}</p>

                    {/* Stats Row */}
                    <div className="flex gap-6 lg:gap-10 pt-4 border-t border-gray-200 w-full">
                        <div className="flex flex-col items-center gap-1">
                            <span className="font-bold text-2xl lg:text-3xl text-primary">{t('stat1Value')}</span>
                            <span className="text-gray-500 text-xs lg:text-sm text-center">{t('stat1Label')}</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <span className="font-bold text-2xl lg:text-3xl text-primary">{t('stat2Value')}</span>
                            <span className="text-gray-500 text-xs lg:text-sm text-center">{t('stat2Label')}</span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                            <span className="font-bold text-2xl lg:text-3xl text-primary">{t('stat3Value')}</span>
                            <span className="text-gray-500 text-xs lg:text-sm text-center">{t('stat3Label')}</span>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute -inset-4 bg-primary/5 rounded-3xl -z-10"></div>
                    <Image src="/about.jpg" alt="About Us" width={500} height={400} className="rounded-2xl shadow-lg object-cover aspect-[16/12]" />
                </div>
            </div>
        </div>
    );
}