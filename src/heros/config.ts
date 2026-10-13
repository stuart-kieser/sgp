import type { Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'lowImpact',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'High Impact',
          value: 'highImpact',
        },
        {
          label: 'Medium Impact',
          value: 'mediumImpact',
        },
        {
          label: 'Low Impact',
          value: 'lowImpact',
        },
        {
          label: 'Auto-scrolling Carousel',
          value: 'autoScroll',
        },
      ],
      required: true,
    },
    {
      name: 'richText',
      type: 'richText',
      admin: {
        condition: (_, { type } = {}) => type !== 'autoScroll',
      },
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: false,
    },
    linkGroup({
      overrides: {
        admin: {
          condition: (_, { type } = {}) => type !== 'autoScroll',
          initCollapsed: true,
        },
        maxRows: 2,
      },
    }),
    {
      name: 'scrollSpeed',
      type: 'select',
      label: 'Scroll speed',
      defaultValue: 'slow',
      options: [
        { label: 'Fast', value: 'fast' },
        { label: 'Medium', value: 'medium' },
        { label: 'Slow', value: 'slow' },
      ],
      admin: {
        condition: (_, { type } = {}) => type === 'autoScroll',
      },
      required: true,
    },
    {
      name: 'slides',
      type: 'array',
      minRows: 1,
      admin: {
        condition: (_, { type } = {}) => type === 'autoScroll',
      },
      fields: [
        { name: 'eyebrow', type: 'text' },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea' },
        { name: 'media', type: 'upload', relationTo: 'media', required: true },
        linkGroup({
          appearances: ['default', 'outline'],
          overrides: { maxRows: 1 },
        }),
      ],
    },
    {
      name: 'media',
      type: 'upload',
      admin: {
        condition: (_, { type } = {}) => ['highImpact', 'mediumImpact'].includes(type),
      },
      relationTo: 'media',
      required: true,
    },
  ],
  label: false,
}
