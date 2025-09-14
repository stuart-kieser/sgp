import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: { staticDir: './media' },
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
