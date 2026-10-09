import type { Block } from 'payload'

import { blockMotionFields } from '@/blocks/shared/motion'
import { sectionIntroFields } from '@/blocks/shared/fields'
import { linkGroup } from '@/fields/linkGroup'

export const PricingGrid: Block = {
  slug: 'pricingGrid',
  dbName: 'price_grid',
  interfaceName: 'PricingGridBlock',
  fields: [
    ...sectionIntroFields,
    blockMotionFields({
      defaults: {
        introAnimation: 'fly-up',
        itemAnimation: 'fly-up',
        stagger: 120,
      },
    }),
    {
      name: 'plans',
      dbName: 'plans',
      type: 'array',
      minRows: 2,
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'price', type: 'text', required: true },
        { name: 'billingNote', type: 'text' },
        { name: 'summary', type: 'textarea' },
        { name: 'featured', type: 'checkbox' },
        {
          name: 'features',
          dbName: 'feat',
          type: 'array',
          minRows: 1,
          fields: [{ name: 'label', type: 'text', required: true }],
        },
        linkGroup({
          appearances: ['default', 'outline'],
          overrides: { maxRows: 1 },
        }),
      ],
    },
  ],
}
