import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'make',
    defaultColumns: ['make'],
  },
  fields: [
    {
      name: 'service',
      type: 'text',
      required: true,
    },
    {
      name: 'photos',
      type: 'upload',
      relationTo: 'media', // assuming you have a media collection
      label: 'Photos',
      required: false,
    },
    {
      name: 'notes',
      type: 'textarea',
      label: 'Service Notes',
    },
  ],
  upload: true,
}
