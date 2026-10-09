import type { Block } from 'payload'

import { blockMotionFields } from '@/blocks/shared/motion'
import { sectionIntroFields } from '@/blocks/shared/fields'
import { layoutBlockEditor } from '@/blocks/shared/editor'
import { linkGroup } from '@/fields/linkGroup'

export const FeatureTabs: Block = {
  slug: 'featureTabs',
  dbName: 'feat_tabs',
  interfaceName: 'FeatureTabsBlock',
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
      name: 'tabs',
      dbName: 'tabs',
      type: 'array',
      minRows: 2,
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'title', type: 'text', required: true },
        { name: 'content', type: 'richText', editor: layoutBlockEditor, required: true },
        { name: 'media', type: 'upload', relationTo: 'media' },
        linkGroup({ appearances: ['default', 'outline'], overrides: { maxRows: 2 } }),
      ],
    },
  ],
}
