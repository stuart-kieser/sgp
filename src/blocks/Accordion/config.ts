import type { Block } from 'payload'

import { sectionIntroFields } from '@/blocks/shared/fields'
import { blockMotionFields } from '@/blocks/shared/motion'
import { layoutBlockEditor } from '@/blocks/shared/editor'

export const Accordion: Block = {
  slug: 'accordion',
  interfaceName: 'AccordionBlock',
  fields: [
    ...sectionIntroFields,
    blockMotionFields({
      defaults: {
        introAnimation: 'fly-left',
        itemAnimation: 'alternate-sides',
      },
    }),
    {
      name: 'items',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'content',
          type: 'richText',
          editor: layoutBlockEditor,
          required: true,
        },
        {
          name: 'defaultOpen',
          type: 'checkbox',
          label: 'Open by default',
        },
      ],
    },
  ],
}
