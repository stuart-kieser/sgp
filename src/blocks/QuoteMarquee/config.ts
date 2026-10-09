import type { Block } from 'payload'

import { blockMotionFields } from '@/blocks/shared/motion'
import { sectionIntroFields } from '@/blocks/shared/fields'

export const QuoteMarquee: Block = {
  slug: 'quoteMarquee',
  dbName: 'quote_marq',
  interfaceName: 'QuoteMarqueeBlock',
  fields: [
    ...sectionIntroFields,
    blockMotionFields({
      defaults: {
        introAnimation: 'fly-up',
        itemAnimation: 'fly-up',
        stagger: 60,
      },
    }),
    {
      name: 'quotes',
      dbName: 'quote_marq_quotes',
      type: 'array',
      minRows: 3,
      fields: [
        { name: 'quote', type: 'textarea', required: true },
        { name: 'author', type: 'text', required: true },
        { name: 'company', type: 'text' },
      ],
    },
  ],
}
