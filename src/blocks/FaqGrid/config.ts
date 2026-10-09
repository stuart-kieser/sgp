import type { Block } from 'payload'

import { blockMotionFields } from '@/blocks/shared/motion'
import { sectionIntroFields } from '@/blocks/shared/fields'
import { layoutBlockEditor } from '@/blocks/shared/editor'

export const FaqGrid: Block = {
  slug: 'faqGrid',
  dbName: 'faq_grid',
  interfaceName: 'FaqGridBlock',
  fields: [
    ...sectionIntroFields,
    blockMotionFields({
      defaults: {
        introAnimation: 'fly-up',
        itemAnimation: 'fly-up',
        stagger: 70,
      },
    }),
    {
      name: 'categories',
      dbName: 'cats',
      type: 'array',
      minRows: 1,
      fields: [
        { name: 'title', type: 'text', required: true },
        {
          name: 'items',
          dbName: 'faq_grid_items',
          type: 'array',
          minRows: 1,
          fields: [
            { name: 'question', type: 'text', required: true },
            { name: 'answer', type: 'richText', editor: layoutBlockEditor, required: true },
          ],
        },
      ],
    },
  ],
}
