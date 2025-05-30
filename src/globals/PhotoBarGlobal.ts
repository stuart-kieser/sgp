// payload/globals/photoBar.ts
import { GlobalConfig } from 'payload'

export interface PhotoBarGlobal {
  images: {
    image:
      | {
          id: string
          url: string
          // other media fields if needed
        }
      | string
    caption?: string
  }[]
}

const PhotoBarGlobalConf: GlobalConfig = {
  slug: 'photo-bar',
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
        {
          name: 'caption',
          type: 'text',
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

export default PhotoBarGlobalConf
