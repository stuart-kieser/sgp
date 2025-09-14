import { CollectionConfig, CollectionBeforeValidateHook } from 'payload'

const clearOppositeField: CollectionBeforeValidateHook = ({ data, originalDoc }) => {
  // use latest intent if toggled this request, else fall back to stored doc
  const isCustom = Boolean(data?.isCustomPage ?? originalDoc?.isCustomPage)

  const next = { ...data }
  if (isCustom) {
    // clear "link" when using a custom page
    next.link = null
  } else {
    // clear "pageLink" when NOT using a custom page
    next.pageLink = null
  }
  return next
}

export const Intro: CollectionConfig = {
  slug: 'intros',
  access: { read: () => true },
  admin: {
    components: { beforeListTable: ['@/components/introInstruction'] },
  },
  fields: [
    { name: 'heading', type: 'text', required: true },
    { name: 'para', type: 'textarea', required: true },

    {
      name: 'isCustomPage',
      type: 'checkbox',
      defaultValue: false,
      admin: { description: 'If checked, choose a custom link instead of a page relationship.' },
    },

    // shown when isCustomPage === false
    {
      name: 'link',
      type: 'select',
      options: ['/gallery', '/services', '/contact-us', '/vehicles', '/'],
      admin: { condition: (data) => !Boolean(data?.isCustomPage) },
      // conditional requirement instead of required: true
    },

    // shown when isCustomPage === true
    {
      name: 'pageLink',
      type: 'relationship',
      relationTo: 'page',
      admin: { condition: (data) => Boolean(data?.isCustomPage) },
      validate: (value: any, { siblingData }: any) => {
        if (siblingData?.isCustomPage) {
          return value ? true : 'Page link is required when Custom Page is ON'
        }
        return true
      },
    },

    { name: 'linkText', type: 'text' },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
  hooks: {
    beforeValidate: [clearOppositeField], // <- does the clearing reliably
    afterChange: [
      async () => {
        await fetch(
          `${process.env.PAYLOAD_PUBLIC_API_URL}/api/revalidate?secret=${process.env.PAYLOAD_SECRET}&path=/`,
        )
      },
    ],
  },
}
