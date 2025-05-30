import { GlobalConfig } from 'payload'

export interface BrandGlobal {
  brands: {
    make: string
    photos?: {
      id: string
      url: string
    }[]
    notes?: string
  }[]
}

export const Brands: GlobalConfig = {
  slug: 'brands',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'brands',
      label: 'Brands',
      type: 'array',
      fields: [
        {
          name: 'make',
          type: 'text',
          required: true,
        },
        {
          name: 'photos',
          type: 'upload',
          relationTo: 'media',
          label: 'Photos',
          required: false,
        },
        {
          name: 'notes',
          type: 'textarea',
          label: 'Brand Notes',
        },
      ],
    },
  ],
  hooks: {
    afterChange: [
      async () => {
        await fetch(
          `${process.env.PAYLOAD_PUBLIC_API_URL}/api/revalidate?secret=${process.env.PAYLOAD_SECRET}&path=/`,
        )
      },
    ],
  },
}

export default Brands
