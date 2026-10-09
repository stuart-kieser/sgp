import type { Block } from 'payload'

import { blockMotionFields } from '@/blocks/shared/motion'
import { sectionIntroFields } from '@/blocks/shared/fields'

export const EventSchedule: Block = {
  slug: 'eventSchedule',
  dbName: 'event_sched',
  interfaceName: 'EventScheduleBlock',
  fields: [
    ...sectionIntroFields,
    blockMotionFields({
      defaults: {
        introAnimation: 'fly-up',
        itemAnimation: 'fly-up',
        stagger: 90,
      },
    }),
    {
      name: 'days',
      dbName: 'days',
      type: 'array',
      minRows: 1,
      fields: [
        { name: 'label', type: 'text', required: true },
        {
          name: 'sessions',
          dbName: 'sess',
          type: 'array',
          minRows: 1,
          fields: [
            { name: 'time', type: 'text', required: true },
            { name: 'title', type: 'text', required: true },
            { name: 'speaker', type: 'text' },
            { name: 'location', type: 'text' },
            { name: 'description', type: 'textarea' },
          ],
        },
      ],
    },
  ],
}
