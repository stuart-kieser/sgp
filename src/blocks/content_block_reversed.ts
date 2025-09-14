import { Block } from 'payload'

export const ContentBlockReversed: Block = {
  slug: 'content-block-reversed', // required
  imageURL: '/blocks/content-block-reversed.png',
  imageAltText: 'A nice thumbnail image to show what this block looks like',
  interfaceName: 'ContentBlockReversed', // optional
  fields: [
    // required
    {
      name: 'contentHeader',
      type: 'text',
      required: true,
    },
    {
      name: 'contentText',
      type: 'textarea',
    },
    { type: 'upload', name: 'image', relationTo: 'media' },
    {
      name: 'width',
      type: 'select',
      options: ['w-1/2', 'w-1/3', 'w-full'],
      defaultValue: 'w-full',
    },
  ],
}
