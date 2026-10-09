import type { Block } from 'payload'

import { blockMotionFields } from '@/blocks/shared/motion'
import { sectionIntroFields } from '@/blocks/shared/fields'

export const LogoRail: Block = {
  slug: 'logoRail',
  dbName: 'logo_rail',
  interfaceName: 'LogoRailBlock',
  fields: [
    ...sectionIntroFields,
    blockMotionFields({
      defaults: {
        introAnimation: 'fly-up',
        itemAnimation: 'fly-up',
        stagger: 80,
      },
    }),
    {
      name: 'logos',
      dbName: 'logos',
      type: 'array',
      minRows: 3,
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'media', type: 'upload', relationTo: 'media' },
        { name: 'url', type: 'text' },
      ],
    },
  ],
}
