import type { Block } from 'payload'

import { blockMotionFields } from '@/blocks/shared/motion'
import { sectionIntroFields } from '@/blocks/shared/fields'
import { linkGroup } from '@/fields/linkGroup'

export const CtaBand: Block = {
  slug: 'ctaBand',
  dbName: 'cta_band',
  interfaceName: 'CtaBandBlock',
  fields: [
    ...sectionIntroFields,
    blockMotionFields({
      defaults: {
        sectionAnimation: 'soft-scale',
        introAnimation: 'fly-up',
        itemAnimation: 'fly-up',
      },
    }),
    linkGroup({ appearances: ['default', 'outline'], overrides: { maxRows: 2 } }),
    { name: 'media', type: 'upload', relationTo: 'media' },
  ],
}
