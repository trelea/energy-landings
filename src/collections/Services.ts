import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title_ro',
    defaultColumns: ['title_ro', 'title_ru', 'featured', 'updatedAt'],
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
      label: 'Название (Русский)',
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      admin: {
        position: 'sidebar',
        description: 'URL-friendly version of title',
      },
    },
    {
      name: 'description_ro',
      type: 'textarea',
      required: true,
      label: 'Descriere scurtă (Română)',
    },
    {
      name: 'description_ru',
      type: 'textarea',
      required: true,
      label: 'Краткое описание (Русский)',
    },
    {
      name: 'detailedDescription_ro',
      type: 'richText',
      required: true,
      label: 'Descriere detaliată (Română)',
      editor: lexicalEditor({}),
    },
    {
      name: 'detailedDescription_ru',
      type: 'richText',
      required: true,
      label: 'Подробное описание (Русский)',
      editor: lexicalEditor({}),
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Imagine reprezentativă',
    },
    {
      name: 'featured',
      type: 'checkbox',
      admin: {
        position: 'sidebar',
        description: 'Afișează serviciul pe pagina principală',
      },
      label: 'Evidențiat pe homepage',
    },
    {
      name: 'order',
      type: 'number',
      admin: {
        position: 'sidebar',
        description: 'Ordinea de afișare (număr mai mic = prima poziție)',
      },
      label: 'Ordine afișare',
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
