import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const News: CollectionConfig = {
  slug: 'news',
  admin: {
    useAsTitle: 'title_ro',
    defaultColumns: ['title_ro', 'title_ru', 'category', 'publishedDate', 'status'],
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
      name: 'category',
      type: 'select',
      options: [
        {
          label: 'Informații generale din industrie',
          value: 'general',
        },
        {
          label: 'Informații privilegiate și blog',
          value: 'privileged',
        },
      ],
      required: true,
      admin: {
        position: 'sidebar',
      },
      label: 'Categorie',
    },
    {
      name: 'excerpt_ro',
      type: 'textarea',
      required: true,
      label: 'Rezumat scurt (Română)',
      admin: {
        description: 'Descriere scurtă pentru listări',
      },
    },
    {
      name: 'excerpt_ru',
      type: 'textarea',
      required: true,
      label: 'Краткое содержание (Русский)',
      admin: {
        description: 'Краткое описание для списков',
      },
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
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Imagine principală',
    },
    {
      name: 'gallery',
      type: 'array',
      label: 'Galerie imagini',
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
      name: 'publishedDate',
      type: 'date',
      required: true,
      defaultValue: () => new Date(),
      admin: {
        position: 'sidebar',
      },
      label: 'Data publicării',
    },
    {
      name: 'featured',
      type: 'checkbox',
      admin: {
        position: 'sidebar',
        description: 'Afișează articolul pe pagina principală',
      },
      label: 'Evidențiat pe homepage',
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
