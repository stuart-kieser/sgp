import { CallToAction } from '@/blocks/call_to_action'
import { ContentBlock } from '@/blocks/content_block'
import { ContentBlockReversed } from '@/blocks/content_block_reversed'
import { MediaBlock } from '@/blocks/media_block'
import { TextBlock } from '@/blocks/text_block'
import { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'page',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    { name: 'title', type: 'text', required: true },
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
      name: 'info',
      type: 'textarea',
      required: true,
      maxLength: 60,
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
        MediaBlock,
        // CallToAction,
      ],
    },
  ],
  hooks: {
    afterChange: [
      async ({ doc }) => {
        await fetch(
          `${process.env.PAYLOAD_PUBLIC_API_URL}/api/revalidate?secret=${process.env.PAYLOAD_SECRET}&path=/${doc['custom-slug']}`,
        )
      },
    ],
  },
}
