'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useLocale, useTranslations } from 'next-intl'
import LocaleSwitcher from './LocaleSwitcher'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'

export default function Navbar({ isDarkMode }: { isDarkMode?: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = useTranslations('Navbar')
  const locale = useLocale()
  const navigation = [
    { name: t('navlink1'), href: '/' },
    { name: t('navlink2'), href: '/about-us' },
    { name: t('navlink3'), href: '/services' },
    { name: t('navlink4'), href: '/blogs' },
  ]

  return (
    <header className="top-0 z-999 w-full" id="home">
      <nav
        className="z-50 border-[#747474] flex justify-center p-5 max-w-screen-xl mx-auto w-full"
        aria-label="Global"
      >
        <div className="container flex w-full justify-between items-center">
          <div className="flex items-center gap-8">
            <Image
              src={isDarkMode ? '/logos/logo-white.svg' : '/logos/logo-text.svg'}
              alt="Green Energy Logo"
              width={150}
              height={50}
            />
            {/* <h1 className="text-center font-bold text-xl text-white">LOGO</h1> */}

            <div
              className={`h-7 w-0.5 hidden lg:block ${
                isDarkMode ? 'bg-[#D9D9D9]' : 'bg-[#8A9EB5]'
              }`}
            />

            <div className="hidden lg:flex gap-10">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  locale={locale}
                  className={`cursor-pointer hover:font-medium transition-all ${
                    isDarkMode
                      ? 'text-[#4C4C4C] hover:text-[#151515]'
                      : 'text-[#D5E1EF] hover:text-[#FFFFFF]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-1 md:gap-4">
            <LocaleSwitcher />

            <Link
              href="/contacts"
              locale={locale}
              className={`ps-6 p-2 rounded-full w-full flex items-center justify-between gap-4 ${
                isDarkMode
                  ? 'bg-[#FFC107] hover:bg-[#ffc107cb] text-white'
                  : 'bg-white hover:bg-[#eeeeee] text-[#001D3D]'
              }`}
            >
              <span className="font-medium">{t('button')}</span>
              <Image
                src={isDarkMode ? '/icons/arrow-up-empty.svg' : '/icons/arrow-up-filled.svg'}
                width={34}
                height={34}
                alt=""
              />
            </Link>
          </div>

          <div className="flex lg:hidden px-2">
            <button
              type="button"
              className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${
                isDarkMode ? 'text-gray-500' : 'text-gray-200'
              }`}
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#1b1b1b52] backdrop-blur-xl px-6 py-12 lg:py-5 lg:px-8 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Image src="/logos/logo-text.svg" alt="Green Energy Logo" width={150} height={56} />
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)} // <-- close the panel on click
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-900 transition"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6 flex items-center justify-between">
                <a
                  onClick={() => setMobileMenuOpen(false)}
                  href="#contact"
                  className="bg-white ps-6 p-2 rounded-full w-full flex items-center justify-between gap-4 hover:bg-[#eeeeee]"
                >
                  <span className="text-[#001D3D] font-medium">{t('button')}</span>

                  <Image src="/icons/arrow-up-filled.svg" width={34} height={34} alt="" />
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
