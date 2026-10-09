import type { Block } from 'payload'

import { blockMotionFields } from '@/blocks/shared/motion'
import { sectionIntroFields } from '@/blocks/shared/fields'

export const MetricsDashboard: Block = {
  slug: 'metricsDashboard',
  dbName: 'metrics_dash',
  interfaceName: 'MetricsDashboardBlock',
  fields: [
    ...sectionIntroFields,
    blockMotionFields({
      defaults: {
        sectionAnimation: 'soft-scale',
        introAnimation: 'fly-up',
        itemAnimation: 'fly-up',
        stagger: 90,
      },
    }),
    {
      name: 'metrics',
      dbName: 'metrics',
      type: 'array',
      minRows: 3,
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'value', type: 'text', required: true },
        { name: 'trend', type: 'text' },
        { name: 'description', type: 'textarea' },
      ],
    },
  ],
}
