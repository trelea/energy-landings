import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title_ro',
    defaultColumns: ['title_ro', 'title_ru', 'slug', 'status'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title_ro',
      type: 'text',
      required: true,
      label: 'Titlu (Română)',
    },
    {
      name: 'title_ru',
      type: 'text',
      required: true,
      label: 'Заголовок (Русский)',
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      admin: {
        position: 'sidebar',
      },
      label: 'URL Slug',
    },
    {
      name: 'content_ro',
      type: 'richText',
      required: true,
      label: 'Conținut (Română)',
      editor: lexicalEditor({}),
    },
    {
      name: 'content_ru',
      type: 'richText',
      required: true,
      label: 'Содержание (Русский)',
      editor: lexicalEditor({}),
    },
    {
      name: 'seo',
      type: 'group',
      label: 'Setări SEO',
      fields: [
        {
          name: 'title_ro',
          type: 'text',
          label: 'SEO Titlu (Română)',
        },
        {
          name: 'title_ru',
          type: 'text',
          label: 'SEO Заголовок (Русский)',
        },
        {
          name: 'description_ro',
          type: 'textarea',
          label: 'SEO Descriere (Română)',
        },
        {
          name: 'description_ru',
          type: 'textarea',
          label: 'SEO Описание (Русский)',
        },
        {
          name: 'keywords_ro',
          type: 'text',
          label: 'Cuvinte cheie (Română)',
        },
        {
          name: 'keywords_ru',
          type: 'text',
          label: 'Ключевые слова (Русский)',
        },
      ],
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Imagine principală',
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          label: 'Ciornă',
          value: 'draft',
        },
        {
          label: 'Publicat',
          value: 'published',
        },
      ],
      defaultValue: 'draft',
      admin: {
        position: 'sidebar',
      },
      label: 'Status',
    },
  ],
}
