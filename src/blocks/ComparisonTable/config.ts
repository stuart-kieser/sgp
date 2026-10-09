import type { Block } from 'payload'

import { blockMotionFields } from '@/blocks/shared/motion'
import { sectionIntroFields } from '@/blocks/shared/fields'

export const ComparisonTable: Block = {
  slug: 'comparisonTable',
  dbName: 'comp_tbl',
  interfaceName: 'ComparisonTableBlock',
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
      name: 'columns',
      dbName: 'cols',
      type: 'array',
      minRows: 2,
      fields: [{ name: 'label', type: 'text', required: true }],
    },
    {
      name: 'rows',
      dbName: 'rows',
      type: 'array',
      minRows: 2,
      fields: [
        { name: 'label', type: 'text', required: true },
        {
          name: 'cells',
          dbName: 'cells',
          type: 'array',
          minRows: 2,
          fields: [{ name: 'value', type: 'text', required: true }],
        },
      ],
    },
  ],
}
