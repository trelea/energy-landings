import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const SiteSettings: CollectionConfig = {
  slug: 'site-settings',
  admin: {
    useAsTitle: 'siteName_ro',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'siteName_ro',
      type: 'text',
      required: true,
      label: 'Numele site-ului (Română)',
    },
    {
      name: 'siteName_ru',
      type: 'text',
      required: true,
      label: 'Название сайта (Русский)',
    },
    {
      name: 'siteDescription_ro',
      type: 'textarea',
      label: 'Descrierea site-ului (Română)',
    },
    {
      name: 'siteDescription_ru',
      type: 'textarea',
      label: 'Описание сайта (Русский)',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Logo companie',
    },
    {
      name: 'favicon',
      type: 'upload',
      relationTo: 'media',
      label: 'Favicon',
    },
    {
      name: 'homepage',
      type: 'group',
      label: 'Setări pagina principală',
      fields: [
        {
          name: 'heroTitle_ro',
          type: 'text',
          label: 'Titlu banner principal (Română)',
        },
        {
          name: 'heroTitle_ru',
          type: 'text',
          label: 'Заголовок баннера (Русский)',
        },
        {
          name: 'heroSubtitle_ro',
          type: 'textarea',
          label: 'Subtitlu banner (Română)',
        },
        {
          name: 'heroSubtitle_ru',
          type: 'textarea',
          label: 'Подзаголовок баннера (Русский)',
        },
        {
          name: 'heroImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Imagine banner principal',
        },
        {
          name: 'ctaText_ro',
          type: 'text',
          label: 'Text buton CTA (Română)',
        },
        {
          name: 'ctaText_ru',
          type: 'text',
          label: 'Текст кнопки CTA (Русский)',
        },
        {
          name: 'ctaLink',
          type: 'text',
          label: 'Link buton CTA',
        },
        {
          name: 'introText_ro',
          type: 'richText',
          label: 'Text introducere (Română)',
          editor: lexicalEditor({}),
        },
        {
          name: 'introText_ru',
          type: 'richText',
          label: 'Вступительный текст (Русский)',
          editor: lexicalEditor({}),
        },
      ],
    },
  ],
}
