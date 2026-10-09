import type { Block } from 'payload'

import { sectionIntroFields } from '@/blocks/shared/fields'
import { blockMotionFields } from '@/blocks/shared/motion'
import { layoutBlockEditor } from '@/blocks/shared/editor'
import { linkGroup } from '@/fields/linkGroup'

export const Timeline: Block = {
  slug: 'timeline',
  interfaceName: 'TimelineBlock',
  fields: [
    ...sectionIntroFields,
    blockMotionFields({
      defaults: {
        introAnimation: 'fly-up',
        itemAnimation: 'alternate-sides',
      },
    }),
    {
      name: 'items',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'period',
          type: 'text',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'richText',
          editor: layoutBlockEditor,
          required: true,
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
