// payload/globals/photoBar.ts
import { GlobalConfig } from 'payload'

export interface GalleryGlobal {
  images: {
    image:
      | {
          id: string
          url: string
        }
      | string
    caption?: string
  }[]
}

const GalleryGlobalConf: GlobalConfig = {
  slug: 'gallery',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'images',
      label: 'Images',
      type: 'array',
      fields: [
        {
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
  hooks: {
    afterChange: [
      async () => {
        await fetch(
          `${process.env.PAYLOAD_PUBLIC_API_URL}/api/revalidate?secret=${process.env.PAYLOAD_SECRET}&path=/gallery`,
        )
      },
    ],
  },
}

export default GalleryGlobalConf
