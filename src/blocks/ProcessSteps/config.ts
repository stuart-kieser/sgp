import type { Block } from 'payload'

import { blockMotionFields } from '@/blocks/shared/motion'
import { sectionIntroFields } from '@/blocks/shared/fields'
import { layoutBlockEditor } from '@/blocks/shared/editor'

export const ProcessSteps: Block = {
  slug: 'processSteps',
  dbName: 'proc_steps',
  interfaceName: 'ProcessStepsBlock',
  fields: [
    ...sectionIntroFields,
    blockMotionFields({
      defaults: {
        introAnimation: 'fly-up',
        itemAnimation: 'alternate-sides',
        stagger: 140,
      },
    }),
    {
      name: 'steps',
      dbName: 'steps',
      type: 'array',
      minRows: 2,
      fields: [
        { name: 'stepLabel', type: 'text' },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'richText', editor: layoutBlockEditor, required: true },
        { name: 'media', type: 'upload', relationTo: 'media' },
      ],
    },
  ],
}
