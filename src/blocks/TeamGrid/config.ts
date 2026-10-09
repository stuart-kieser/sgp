import type { Block } from 'payload'

import { blockMotionFields } from '@/blocks/shared/motion'
import { sectionIntroFields } from '@/blocks/shared/fields'
import { linkGroup } from '@/fields/linkGroup'

export const TeamGrid: Block = {
  slug: 'teamGrid',
  dbName: 'team_grid',
  interfaceName: 'TeamGridBlock',
  fields: [
    ...sectionIntroFields,
    blockMotionFields({
      defaults: {
        introAnimation: 'fly-up',
        itemAnimation: 'fly-up',
        stagger: 100,
      },
    }),
    {
      name: 'members',
      dbName: 'memb',
      type: 'array',
      minRows: 2,
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'role', type: 'text', required: true },
        { name: 'bio', type: 'textarea' },
        { name: 'photo', type: 'upload', relationTo: 'media' },
        linkGroup({ appearances: false, overrides: { maxRows: 3 } }),
      ],
    },
  ],
}
