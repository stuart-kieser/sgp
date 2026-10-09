import type { Field } from 'payload'

import { layoutBlockEditor } from './editor'

export const sectionIntroFields: Field[] = [
  {
    name: 'eyebrow',
    type: 'text',
  },
  {
    name: 'title',
    type: 'text',
    required: true,
  },
  {
    name: 'intro',
    type: 'richText',
    editor: layoutBlockEditor,
    label: 'Introduction',
  },
]
