import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['ro', 'ru'],

  localeDetection: false,
  defaultLocale: 'ro',
  localePrefix: 'always',
})
