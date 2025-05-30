import type { CollectionConfig } from 'payload'

export const Brands: CollectionConfig = {
  slug: 'brand',
  admin: {
    useAsTitle: 'make',
    defaultColumns: ['make'],
  },
  fields: [
    {
      name: 'make',
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
      label: 'Brands Notes',
    },
  ],
}

export default Brands
