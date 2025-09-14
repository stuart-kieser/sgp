import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const TextBlock: Block = {
  slug: 'text-block', // required
  imageURL: '/blocks/text-block.png',
  imageAltText: 'A nice thumbnail image to show what this block looks like',
  interfaceName: 'TextBlock', // optional
  fields: [
    // required
    {
      name: 'contentHeader',
      type: 'text',
      required: true,
    },
    {
      name: 'contentText',
      type: 'richText',
      required: true,
    },
    {
      name: 'width',
      type: 'select',
      options: ['w-1/2', 'w-1/3', 'w-full'],
      defaultValue: 'w-full',
    },
  ],
}
