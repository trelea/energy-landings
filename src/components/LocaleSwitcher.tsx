import { useLocale, useTranslations } from 'next-intl'
import { LocaleSwitcherSelect } from './microComponents/LocaleSwitcherSelect'

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher')
  const locale = useLocale()

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      items={[
        {
          value: 'ru',
          label: t('ru'),
        },
        {
          value: 'ro',
          label: t('ro'),
        },
      ]}
      label={t('label')}
    />
  )
}
