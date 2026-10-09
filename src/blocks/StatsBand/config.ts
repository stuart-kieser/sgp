import type { Block } from 'payload'

import { sectionIntroFields } from '@/blocks/shared/fields'
import { blockMotionFields } from '@/blocks/shared/motion'

export const StatsBand: Block = {
  slug: 'statsBand',
  interfaceName: 'StatsBandBlock',
  fields: [
    ...sectionIntroFields,
    blockMotionFields({
      defaults: {
        sectionAnimation: 'soft-scale',
        introAnimation: 'fly-up',
        itemAnimation: 'fly-up',
      },
    }),
    {
      name: 'items',
      type: 'array',
      minRows: 2,
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
        },
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
        },
      ],
    },
  ],
}
