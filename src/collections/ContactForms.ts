import type { CollectionConfig } from 'payload'

export const ContactForms: CollectionConfig = {
  slug: 'contact-forms',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'phone', 'createdAt'],
  },
  access: {
    read: () => true,
    create: () => true, // Permite trimiterea formularelor de către vizitatori
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Nume',
    },
    {
      name: 'surname',
      type: 'text',
      label: 'Prenume',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'Email',
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
      label: 'Telefon',
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
      label: 'Mesaj',
    },
    {
      name: 'formType',
      type: 'select',
      options: [
        {
          label: 'Contact Principal',
          value: 'main',
        },
        {
          label: 'Contact Rapid (Homepage)',
          value: 'quick',
        },
      ],
      defaultValue: 'main',
      label: 'Tip formular',
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          label: 'Nou',
          value: 'new',
        },
        {
          label: 'În procesare',
          value: 'processing',
        },
        {
          label: 'Finalizat',
          value: 'completed',
        },
      ],
      defaultValue: 'new',
      admin: {
        position: 'sidebar',
      },
      label: 'Status',
    },
    {
      name: 'notes',
      type: 'textarea',
      admin: {
        position: 'sidebar',
      },
      label: 'Note interne',
    },
  ],
}
