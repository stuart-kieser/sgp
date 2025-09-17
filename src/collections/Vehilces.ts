import { CollectionConfig } from 'payload'

export const Vehicles: CollectionConfig = {
  slug: 'vehicles',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'make',
      type: 'text',
      required: true,
    },
    {
      name: 'model',
      type: 'text',
      required: true,
    },
    {
      name: 'year',
      type: 'number',
      required: true,
    },
    {
      name: 'engineType',
      type: 'text',
      label: 'Engine Type',
      required: true,
    },
    {
      name: 'transmission',
      type: 'text',
      required: true,
    },
    {
      name: 'drivetrain',
      type: 'select',
      options: [
        { label: 'FWD', value: 'fwd' },
        { label: 'RWD', value: 'rwd' },
        { label: 'AWD', value: 'awd' },
        { label: '4WD', value: '4wd' },
      ],
      required: true,
    },
    {
      name: 'modifications',
      type: 'array', // still an array because you can have many mods
      label: 'Modifications',
      fields: [
        {
          name: 'type',
          type: 'select',
          options: [
            'Engine',
            'Exhaust',
            'Suspension',
            'Brakes',
            'Interior',
            'Exterior',
            'Electronics',
            'Wheels/Tires',
            'Forced Induction',
            'Fuel System',
          ],
        },
        {
          name: 'description',
          type: 'textarea',
        },
      ],
      required: true,
    },
    {
      name: 'photos',
      type: 'upload',
      relationTo: 'media',
      label: 'Photos',
      required: true,
    },
    {
      name: 'notes',
      type: 'textarea',
      label: 'Build Notes',
      required: true,
    },
  ],
  hooks: {
    afterChange: [
      async () => {
        await fetch(
          `${process.env.PAYLOAD_PUBLIC_API_URL}/api/revalidate?secret=${process.env.PAYLOAD_SECRET}&path=/vehicles`,
        )
      },
    ],
  },
}

export default Vehicles
