import type { Block } from 'payload'

import { blockMotionFields } from '@/blocks/shared/motion'
import { sectionIntroFields } from '@/blocks/shared/fields'
import { layoutBlockEditor } from '@/blocks/shared/editor'

export const StickyStory: Block = {
  slug: 'stickyStory',
  dbName: 'sticky_story',
  interfaceName: 'StickyStoryBlock',
  fields: [
    ...sectionIntroFields,
    blockMotionFields({
      defaults: {
        introAnimation: 'fly-up',
        itemAnimation: 'alternate-sides',
        stagger: 180,
      },
    }),
    {
      name: 'panels',
      dbName: 'panels',
      type: 'array',
      minRows: 2,
      fields: [
        { name: 'eyebrow', type: 'text' },
        { name: 'title', type: 'text', required: true },
        { name: 'content', type: 'richText', editor: layoutBlockEditor, required: true },
        { name: 'media', type: 'upload', relationTo: 'media' },
      ],
    },
  ],
}
