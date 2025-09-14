import { Block } from 'payload'

export const ContentBlock: Block = {
  slug: 'content-block', // required
  imageURL: '/blocks/content-block.png',
  imageAltText: 'A nice thumbnail image to show what this block looks like',
  interfaceName: 'ContentBlock', // optional
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

// import type { Block, Field } from 'payload'

// import {
//   FixedToolbarFeature,
//   HeadingFeature,
//   InlineToolbarFeature,
//   lexicalEditor,
// } from '@payloadcms/richtext-lexical'

// const columnFields: Field[] = [
//   {
//     name: 'size',
//     type: 'select',
//     defaultValue: 'oneThird',
//     options: [
//       {
//         label: 'One Third',
//         value: 'oneThird',
//       },
//       {
//         label: 'Half',
//         value: 'half',
//       },
//       {
//         label: 'Two Thirds',
//         value: 'twoThirds',
//       },
//       {
//         label: 'Full',
//         value: 'full',
//       },
//     ],
//   },
//   {
//     name: 'richText',
//     type: 'richText',
//     editor: lexicalEditor({
//       features: ({ rootFeatures }) => {
//         return [
//           ...rootFeatures,
//           HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
//           FixedToolbarFeature(),
//           InlineToolbarFeature(),
//         ]
//       },
//     }),
//     label: false,
//   },
//   {
//     name: 'enableLink',
//     type: 'checkbox',
//   },
// ]

// export const ContentBlock: Block = {
//   slug: 'content-block',
//   interfaceName: 'ContentBlock',
//   fields: [
//     {
//       name: 'columns',
//       type: 'array',
//       admin: {
//         initCollapsed: true,
//       },
//       fields: columnFields,
//     },
//   ],
// }
