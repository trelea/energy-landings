import type { CollectionConfig } from 'payload'

export const Certificates: CollectionConfig = {
  slug: 'certificates',
  admin: {
    useAsTitle: 'title_ro',
    defaultColumns: ['title_ro', 'title_ru', 'issuer_ro', 'validUntil'],
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
      name: 'description_ro',
      type: 'textarea',
      label: 'Descriere (Română)',
    },
    {
      name: 'description_ru',
      type: 'textarea',
      label: 'Описание (Русский)',
    },
    {
      name: 'issuer_ro',
      type: 'text',
      required: true,
      label: 'Emitent (Română)',
    },
    {
      name: 'issuer_ru',
      type: 'text',
      required: true,
      label: 'Издатель (Русский)',
    },
    {
      name: 'issueDate',
      type: 'date',
      required: true,
      label: 'Data emiterii',
    },
    {
      name: 'validUntil',
      type: 'date',
      label: 'Valabil până la',
    },
    {
      name: 'certificateNumber',
      type: 'text',
      label: 'Numărul certificatului',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Imagine certificat',
    },
    {
      name: 'pdfFile',
      type: 'upload',
      relationTo: 'media',
      label: 'Fișier PDF',
    },
    {
      name: 'featured',
      type: 'checkbox',
      admin: {
        description: 'Afișează certificatul în mod proeminent',
      },
      label: 'Evidențiat',
    },
    {
      name: 'order',
      type: 'number',
      label: 'Ordine afișare',
    },
  ],
}
