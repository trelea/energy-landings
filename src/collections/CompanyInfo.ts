import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const CompanyInfo: CollectionConfig = {
  slug: 'company-info',
  admin: {
    useAsTitle: 'companyName_ro',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'companyName_ro',
      type: 'text',
      required: true,
      label: 'Numele companiei (Română)',
    },
    {
      name: 'companyName_ru',
      type: 'text',
      required: true,
      label: 'Название компании (Русский)',
    },
    {
      name: 'aboutUs_ro',
      type: 'richText',
      required: true,
      label: 'Despre noi (Română)',
      editor: lexicalEditor({}),
    },
    {
      name: 'aboutUs_ru',
      type: 'richText',
      required: true,
      label: 'О нас (Русский)',
      editor: lexicalEditor({}),
    },
    {
      name: 'companyHistory_ro',
      type: 'richText',
      label: 'Istoria companiei (Română)',
      editor: lexicalEditor({}),
    },
    {
      name: 'companyHistory_ru',
      type: 'richText',
      label: 'История компании (Русский)',
      editor: lexicalEditor({}),
    },
    {
      name: 'mission_ro',
      type: 'richText',
      label: 'Misiunea (Română)',
      editor: lexicalEditor({}),
    },
    {
      name: 'mission_ru',
      type: 'richText',
      label: 'Миссия (Русский)',
      editor: lexicalEditor({}),
    },
    {
      name: 'vision_ro',
      type: 'richText',
      label: 'Viziunea (Română)',
      editor: lexicalEditor({}),
    },
    {
      name: 'vision_ru',
      type: 'richText',
      label: 'Видение (Русский)',
      editor: lexicalEditor({}),
    },
    {
      name: 'gallery',
      type: 'array',
      label: 'Galerie foto',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption_ro',
          type: 'text',
          label: 'Descriere (Română)',
        },
        {
          name: 'caption_ru',
          type: 'text',
          label: 'Описание (Русский)',
        },
      ],
    },
    {
      name: 'contactInfo',
      type: 'group',
      label: 'Informații de contact',
      fields: [
        {
          name: 'address_ro',
          type: 'textarea',
          required: true,
          label: 'Adresa (Română)',
        },
        {
          name: 'address_ru',
          type: 'textarea',
          required: true,
          label: 'Адрес (Русский)',
        },
        {
          name: 'phone',
          type: 'text',
          required: true,
          label: 'Telefon',
        },
        {
          name: 'email',
          type: 'email',
          required: true,
          label: 'Email',
        },
        {
          name: 'workingHours_ro',
          type: 'text',
          label: 'Program de lucru (Română)',
        },
        {
          name: 'workingHours_ru',
          type: 'text',
          label: 'Рабочие часы (Русский)',
        },
        {
          name: 'googleMapsUrl',
          type: 'text',
          label: 'URL Google Maps',
        },
      ],
    },
    {
      name: 'socialMedia',
      type: 'group',
      label: 'Rețele sociale',
      fields: [
        {
          name: 'facebook',
          type: 'text',
          label: 'Facebook URL',
        },
        {
          name: 'instagram',
          type: 'text',
          label: 'Instagram URL',
        },
        {
          name: 'linkedin',
          type: 'text',
          label: 'LinkedIn URL',
        },
        {
          name: 'twitter',
          type: 'text',
          label: 'Twitter URL',
        },
      ],
    },
  ],
}
