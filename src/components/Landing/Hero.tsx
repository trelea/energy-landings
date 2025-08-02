import { useTranslations } from 'next-intl'
import Navbar from '../Navbar'
import Image from 'next/image'

export default function Hero() {
  const t = useTranslations('Hero')

  return (
    <div className="hero-bg w-full h-[90vh] lg:h-screen">
      <Navbar />
      <div className="h-[60%] ">
        <div className="container mx-auto px-5 flex flex-col h-full items-center justify-center gap-9">
          <div className="flex flex-col gap-2 items-center justify-center max-w-xl lg:max-w-4xl">
            {/* <span className="text-center text-base lg:text-xl opacity-80 text-white">
              {t('label')}
            </span> */}

            <span className="text-4xl md:text-6xl lg:text-[81px] text-center font-semibold text-white leading-snug">
              {t('title1')}
            </span>

            <span className="text-lg lg:text-2xl text-center text-white opacity-80">
              {t('subtitle')}
            </span>
          </div>

          {/* <div className="flex gap-4 items-center justify-center w-full max-w-xs">
            <a
              href="#contact"
              className="bg-white ps-6 p-3 rounded-full w-full flex items-center justify-between gap-2 hover:bg-[#eeeeee]"
            >
              <span className="text-[#001D3D] font-medium">{t('cta')}</span>

              <Image src="/icons/arrow-up-filled.svg" width={34} height={34} alt="" />
            </a>
          </div> */}
        </div>

        {/* <div className="container flex justify-between mx-auto my-10 px-10">
          <div className="flex flex-col justify-start gap-3 bg-[#76767666] border border-[#B1B1B1] text-white p-4 rounded-xl backdrop-blur-sm max-w-[310px] h-full">
            <div className="flex items-center gap-2">
              <div className="bg-white w-1 h-6 rounded-full rotate-[35deg]"></div>
              <div className="bg-white w-1 h-6 rounded-full rotate-[35deg]"></div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span>{t('motto')}</span>
              <span>{t('author')}</span>
            </div>
          </div>

          <div className="hidden lg:flex flex-col justify-start gap-3 bg-[#76767666] border border-[#B1B1B1] text-white p-4 rounded-xl backdrop-blur-sm max-w-[310px] translate-y-10 h-full">
            <span className="text-lg font-medium">{t('cta2')}</span>
            <span>{t('subtitle')}</span>
          </div>
        </div> */}
      </div>
    </div>
  )
}
