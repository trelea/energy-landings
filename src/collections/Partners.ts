import type { CollectionConfig } from 'payload'

export const Partners: CollectionConfig = {
  slug: 'partners',
  admin: {
    useAsTitle: 'name_ro',
    defaultColumns: ['name_ro', 'name_ru', 'type', 'featured'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name_ro',
      type: 'text',
      required: true,
      label: 'Nume (Română)',
    },
    {
      name: 'name_ru',
      type: 'text',
      required: true,
      label: 'Название (Русский)',
    },
    {
      name: 'type',
      type: 'select',
      options: [
        {
          label: 'Partner',
          value: 'partner',
        },
        {
          label: 'Colaborator',
          value: 'collaborator',
        },
        {
          label: 'Client',
          value: 'client',
        },
      ],
      required: true,
      label: 'Tip',
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
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Logo',
    },
    {
      name: 'website',
      type: 'text',
      label: 'Website',
    },
    {
      name: 'featured',
      type: 'checkbox',
      admin: {
        description: 'Afișează partenerul pe pagina principală',
      },
      label: 'Evidențiat pe homepage',
    },
    {
      name: 'order',
      type: 'number',
      label: 'Ordine afișare',
    },
  ],
}
