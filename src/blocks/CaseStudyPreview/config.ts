import type { Block } from 'payload'

import { blockMotionFields } from '@/blocks/shared/motion'
import { sectionIntroFields } from '@/blocks/shared/fields'
import { linkGroup } from '@/fields/linkGroup'

export const CaseStudyPreview: Block = {
  slug: 'caseStudyPreview',
  dbName: 'case_prev',
  interfaceName: 'CaseStudyPreviewBlock',
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
      name: 'studies',
      dbName: 'studies',
      type: 'array',
      minRows: 1,
      fields: [
        { name: 'client', type: 'text', required: true },
        { name: 'title', type: 'text', required: true },
        { name: 'summary', type: 'textarea', required: true },
        { name: 'media', type: 'upload', relationTo: 'media' },
        {
          name: 'results',
          dbName: 'results',
          type: 'array',
          fields: [{ name: 'label', type: 'text', required: true }],
        },
        linkGroup({ appearances: ['default', 'outline'], overrides: { maxRows: 2 } }),
      ],
    },
  ],
}
