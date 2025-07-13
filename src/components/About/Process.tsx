import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function Process() {
  const t = useTranslations('Process')

  return (
    <div className="container max-w-screen-md lg:max-w-screen-lg mx-auto px-4 py-12 lg:py-16">
      <div className="flex flex-col gap-8 justify-center">
        <span className="font-semibold text-2xl lg:text-[32px] lg:text-center">{t('title')}</span>

        <div className="flex flex-col gap-14">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start lg:items-center">
            <Image
              src={t('steps.0.image')}
              alt={'process step 0'}
              width={350}
              height={600}
              className="w-full"
            />
            <div className="flex flex-col gap-4">
              <span className="text-2xl font-medium">{t('steps.0.title')}</span>
              <span>{t('steps.0.description')}</span>
              <a href="#" className="text-[#4CAF50] font-medium flex items-center gap-2">
                {t('steps.0.button')}
                <Image src="/icons/arrow-up-right-blue.svg" alt="chevron" width={18} height={17} />
              </a>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start lg:items-center">
            <Image
              src={t('steps.1.image')}
              alt={'process step 0'}
              width={350}
              height={600}
              className="w-full lg:order-1"
            />
            <div className="flex flex-col gap-4">
              <span className="text-2xl font-medium">{t('steps.1.title')}</span>
              <span>{t('steps.1.description')}</span>
              <a href="#" className="text-[#4CAF50] font-medium flex items-center gap-2">
                {t('steps.1.button')}
                <Image src="/icons/arrow-up-right-blue.svg" alt="chevron" width={18} height={17} />
              </a>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start lg:items-center">
            <Image
              src={t('steps.2.image')}
              alt={'process step 0'}
              width={350}
              height={600}
              className="w-full"
            />
            <div className="flex flex-col gap-4">
              <span className="text-2xl font-medium">{t('steps.2.title')}</span>
              <span>{t('steps.2.description')}</span>
              <a href="#" className="text-[#4CAF50] font-medium flex items-center gap-2">
                {t('steps.2.button')}
                <Image src="/icons/arrow-up-right-blue.svg" alt="chevron" width={18} height={17} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
