import { GlobalConfig } from 'payload'

const CustomLinkGlobalConf: GlobalConfig = {
  slug: 'custom-link',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'custom-page-links',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'custom-slug',
          type: 'text',
          required: true,
          hooks: {
            beforeChange: [
              ({ value }) => {
                return (value as string).trimEnd().replaceAll(' ', '-')
              },
            ],
            afterChange: [
              async ({ value }) => {
                await fetch(
                  `${process.env.PAYLOAD_PUBLIC_API_URL}/api/revalidate?secret=${process.env.PAYLOAD_SECRET}&path=/${value}`,
                )
              },
            ],
          },
        },
        {
          name: 'custom-page',
          type: 'relationship',
          relationTo: 'page',
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
export default CustomLinkGlobalConf
