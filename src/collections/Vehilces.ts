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
    },
    {
      name: 'model',
      type: 'text',
    },
    {
      name: 'year',
      type: 'number',
    },
    {
      name: 'engineType',
      type: 'text',
      label: 'Engine Type',
    },
    {
      name: 'transmission',
      type: 'text',
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
    },
    {
      name: 'photos',
      type: 'upload',
      relationTo: 'media',
      label: 'Photos',
    },
    {
      name: 'notes',
      type: 'textarea',
      label: 'Build Notes',
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
