import type { Block } from 'payload'

import { blockMotionFields } from '@/blocks/shared/motion'
import { sectionIntroFields } from '@/blocks/shared/fields'

export const MediaMosaic: Block = {
  slug: 'mediaMosaic',
  dbName: 'media_mosaic',
  interfaceName: 'MediaMosaicBlock',
  fields: [
    ...sectionIntroFields,
    blockMotionFields({
      defaults: {
        introAnimation: 'fly-up',
        itemAnimation: 'alternate-sides',
        stagger: 110,
      },
    }),
    {
      name: 'items',
      dbName: 'media_mosaic_items',
      type: 'array',
      minRows: 3,
      fields: [
        { name: 'title', type: 'text' },
        { name: 'media', type: 'upload', relationTo: 'media', required: true },
      ],
    },
  ],
}
