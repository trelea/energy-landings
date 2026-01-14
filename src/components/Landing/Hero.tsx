import { useTranslations } from 'next-intl'
import Navbar from '../Navbar'
import Image from 'next/image'

export default function Hero() {
  const t = useTranslations('Hero')

  return (
    <div className="hero-bg w-full min-h-screen">
      <Navbar />
      <div className="container mx-auto px-5 py-12 lg:py-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[75vh]">
          {/* Left Column - Main Content */}
          <div className="flex flex-col gap-6 lg:gap-8 justify-center">
            <div className="flex flex-col gap-4">
              {/* <span className="text-sm lg:text-base uppercase tracking-wider opacity-90 text-white font-medium">
                {t('label')}
              </span> */}

              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                {t('title1')}
              </h1>

              <p className="text-base lg:text-lg text-white opacity-90 max-w-lg leading-relaxed">
                {t('subtitle')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
              <a
                href="#contact"
                className="bg-white py-4 px-6 rounded-full flex items-center justify-between gap-3 hover:bg-[#eeeeee] transition-colors"
              >
                <span className="text-[#001D3D] font-medium">{t('cta')}</span>
              </a>
              <a
                href="#services"
                className="border border-white/40 text-white py-4 px-6 rounded-full flex items-center backdrop-blur-3xl justify-between gap-3 hover:bg-white/10 transition-colors"
              >
                <span className="font-medium">{t('cta2')}</span>
              </a>
            </div>

            {/* Quick Stats - Desktop
            <div className="hidden lg:flex gap-8 mt-4 pt-6 border-t border-white/20">
              <div className="flex flex-col">
                <span className="text-2xl xl:text-3xl font-bold text-white">{t('stat1Value')}</span>
                <span className="text-sm text-white/70">{t('stat1Label')}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl xl:text-3xl font-bold text-white">{t('stat2Value')}</span>
                <span className="text-sm text-white/70">{t('stat2Label')}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl xl:text-3xl font-bold text-white">{t('stat3Value')}</span>
                <span className="text-sm text-white/70">{t('stat3Label')}</span>
              </div>
            </div> */}

            {/* Motto Card - Mobile/Tablet */}
            <div className="lg:hidden flex flex-col gap-3 bg-[#76767666] border border-[#B1B1B1] text-white p-5 rounded-xl backdrop-blur-md">
              <div className="flex flex-col gap-2">
                <span className="text-sm opacity-90">{t('motto')}</span>
                <span className="text-sm font-medium">{t('author')}</span>
              </div>
            </div>
          </div>

          {/* Right Column - Company Info Card */}
          <div className="flex flex-col gap-4">
            {/* Main Company Card */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 lg:p-6 text-white shadow-2xl">
              <div className="flex flex-col gap-4">
                <div className="border-b border-white/20 pb-3">
                  <h3 className="text-xl lg:text-2xl font-bold mb-1">
                    {t('companyName')}
                  </h3>
                  {/* <p className="text-sm opacity-80">{t('location')}</p> */}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  {/* Address Info */}
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div className="flex flex-col">
                      <span className="opacity-60 text-xs">{t('legalAddressLabel')}</span>
                      <span>{t('legalAddress')}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div className="flex flex-col">
                      <span className="opacity-60 text-xs">{t('postalAddressLabel')}</span>
                      <span>{t('postalAddress')}</span>
                    </div>
                  </div>

                  {/* Phone Numbers */}
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div className="flex flex-col gap-0.5">
                      <a href={`tel:${t('phone1').replace(/\s/g, '')}`} className="hover:underline">
                        {t('phone1')}
                      </a>
                      <a href={`tel:${t('phone2').replace(/\s/g, '')}`} className="hover:underline">
                        {t('phone2')}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                    <div className="flex flex-col">
                      <a href={`mailto:${t('email')}`} className="hover:underline break-all">
                        {t('email')}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-3 mt-1">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-4 h-4 flex-shrink-0 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-sm">{t('director')}</span>
                  </div>
                  {/* <div className="grid grid-cols-2 gap-2 text-xs opacity-80">
                    <div>
                      <span className="opacity-70">c/f: </span>
                      <span>{t('fiscalCode')}</span>
                    </div>
                    <div>
                      <span className="opacity-70">TVA: </span>
                      <span>{t('tva')}</span>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            {/* Motto Card - Desktop */}
            <div className="hidden lg:flex flex-col gap-2 bg-[#76767666] border border-[#B1B1B1] text-white p-4 rounded-xl backdrop-blur-md">
              <span className="opacity-90 text-sm italic">{t('motto')}</span>
              <span className="font-medium text-sm">{t('author')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
