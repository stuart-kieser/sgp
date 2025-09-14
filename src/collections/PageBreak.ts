// src/collections/PageBreaks.ts
import type { CollectionConfig } from 'payload'

export const PageBreaks: CollectionConfig = {
  slug: 'page-breaks',
  labels: { singular: 'Page Break', plural: 'Page Breaks' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'updatedAt'],
    components: { beforeListTable: ['@/components/pagebreakInstruction'] },
  },
  access: { read: () => true },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'text',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Multiline text. Newlines are respected. Keep the copy short.',
      },
    },

    // --- Button toggle & fields ---
    {
      name: 'hasLink',
      type: 'checkbox',
      label: 'Show Button',
      defaultValue: false,
    },
    {
      name: 'button_text',
      type: 'text',
      label: 'Button text',
      admin: {
        condition: (data) => Boolean(data?.hasLink),
      },
      validate: (val, { siblingData }) => {
        if (siblingData?.hasLink && !val) return 'Required when “Show Button” is checked'
        return true
      },
    },
    {
      name: 'link',
      type: 'relationship',
      relationTo: 'page', // your custom link collection
      admin: {
        condition: (data) => Boolean(data?.hasLink),
        description: 'Select a Custom Link doc to use for the button target',
      },
      validate: (val, { siblingData }) => {
        if (siblingData?.hasLink && !val) return 'Link is required when “Show Button” is checked'
        return true
      },
    },

    // --- Background image ---
    {
      name: 'background',
      type: 'upload',
      relationTo: 'media', // ensure you have a 'media' uploads collection
      required: true,
    },
  ],
  hooks: {
    afterChange: [
      async () => {
        await fetch(
          `${process.env.PAYLOAD_PUBLIC_API_URL}/api/revalidate?secret=${process.env.PAYLOAD_SECRET}&path=/`,
        )
      },
    ],
  },
}

export default PageBreaks
