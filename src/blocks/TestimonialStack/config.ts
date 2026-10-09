import type { Block } from 'payload'

import { blockMotionFields } from '@/blocks/shared/motion'
import { sectionIntroFields } from '@/blocks/shared/fields'

export const TestimonialStack: Block = {
  slug: 'testimonialStack',
  dbName: 'test_stack',
  interfaceName: 'TestimonialStackBlock',
  fields: [
    ...sectionIntroFields,
    blockMotionFields({
      defaults: {
        introAnimation: 'fly-up',
        itemAnimation: 'alternate-sides',
        stagger: 160,
      },
    }),
    {
      name: 'testimonials',
      dbName: 'test_stack_quotes',
      type: 'array',
      minRows: 2,
      fields: [
        { name: 'quote', type: 'textarea', required: true },
        { name: 'author', type: 'text', required: true },
        { name: 'role', type: 'text' },
        { name: 'company', type: 'text' },
        { name: 'avatar', type: 'upload', relationTo: 'media' },
      ],
    },
  ],
}
