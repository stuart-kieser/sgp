import type { CollectionConfig } from 'payload'

export const Vehicles: CollectionConfig = {
  slug: 'vehicles',
  admin: {
    useAsTitle: 'model',
    defaultColumns: ['make', 'model', 'year', 'owner', 'engineType'],
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
      required: false,
    },
    {
      name: 'transmission',
      type: 'text',
      required: false,
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
      required: false,
    },
    {
      name: 'modifications',
      type: 'array',
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
      relationTo: 'media', // assuming you have a media collection
      label: 'Photos',
      required: false,
    },
    {
      name: 'notes',
      type: 'textarea',
      label: 'Build Notes',
    },
  ],
}

export default Vehicles
