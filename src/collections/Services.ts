import { CallToAction } from '@/blocks/call_to_action'
import { ContentBlock } from '@/blocks/content_block'
import { ContentBlockReversed } from '@/blocks/content_block_reversed'
import { TextBlock } from '@/blocks/text_block'
import { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      hooks: {
        beforeChange: [
          ({ value }) => {
            return (value as string).trimEnd().replaceAll(' ', '-')
          },
        ],
      },
    },
    {
      name: 'info',
      type: 'textarea',
      required: true,
    },
    {
      name: 'layout', // required
      type: 'blocks', // required
      minRows: 1,
      maxRows: 20,
      blocks: [
        // required
        ContentBlock,
        ContentBlockReversed,
        TextBlock,
        CallToAction,
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],

  hooks: {
    afterChange: [
      async ({ doc }) => {
        await fetch(
          `${process.env.PAYLOAD_PUBLIC_API_URL}/api/revalidate?secret=${process.env.PAYLOAD_SECRET}&path=/services/${doc.slug}`,
        )
      },
    ],
  },
}
