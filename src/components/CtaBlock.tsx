import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

export default function CtaBlock() {
  const t = useTranslations('CtaBlock')

  return (
    <div className="xl:container xl:max-w-screen-xl mx-auto w-full lg:px-4 py-12 lg:py-16 text-white">
      <div className="cta-block py-16 lg:py-20 px-6 lg:px-12 relative z-0 overflow-hidden lg:rounded-3xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-between max-w-5xl mx-auto">
          <div className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left">
            <span className="text-sm uppercase tracking-wider opacity-80 font-medium">
              {t('label')}
            </span>
            <h2 className="font-semibold text-2xl lg:text-4xl max-w-xl leading-snug">
              {t('title')}
            </h2>
            <p className="max-w-lg opacity-90 text-sm lg:text-base">{t('subtitle')}</p>
          </div>

          <div className="flex flex-col gap-3 items-center">
            <Link
              href="#contact"
              className="bg-white w-full py-4 px-6 rounded-full flex items-center justify-center gap-3 hover:bg-gray-100 transition-colors"
            >
              <span className="text-[#001D3D] font-medium whitespace-nowrap text-center">{t('button')}</span>
            </Link>
            <Link
              href="tel:+37324621097"
              className="border border-white/30 py-4 px-6 rounded-full flex items-center justify-between gap-3 hover:bg-white/10 transition-colors"
            >
              <span className="font-medium whitespace-nowrap">{t('phone')}</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
