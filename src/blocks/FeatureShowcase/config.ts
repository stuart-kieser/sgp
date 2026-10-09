import type { Block } from 'payload'

import { blockMotionFields } from '@/blocks/shared/motion'
import { sectionIntroFields } from '@/blocks/shared/fields'
import { linkGroup } from '@/fields/linkGroup'

export const FeatureShowcase: Block = {
  slug: 'featureShowcase',
  dbName: 'feat_show',
  interfaceName: 'FeatureShowcaseBlock',
  fields: [
    ...sectionIntroFields,
    blockMotionFields({
      defaults: {
        introAnimation: 'fly-up',
        itemAnimation: 'fly-up',
        parallaxStrength: 20,
      },
      enableParallax: true,
    }),
    {
      name: 'items',
      dbName: 'feat_show_items',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'kicker',
          type: 'text',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
        },
        linkGroup({
          appearances: ['default', 'outline'],
          overrides: {
            maxRows: 2,
          },
        }),
      ],
    },
  ],
}
