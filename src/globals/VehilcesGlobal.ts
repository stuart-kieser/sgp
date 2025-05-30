import { GlobalConfig } from 'payload'

export interface VehiclesGlobal {
  vehicles: {
    make: string
    model: string
    year: number
    engineType?: string
    transmission?: string
    drivetrain?: 'fwd' | 'rwd' | 'awd' | '4wd'
    modifications?: {
      type:
        | 'Engine'
        | 'Exhaust'
        | 'Suspension'
        | 'Brakes'
        | 'Interior'
        | 'Exterior'
        | 'Electronics'
        | 'Wheels/Tires'
        | 'Forced Induction'
        | 'Fuel System'
      description?: string
    }[]
    photos?:
      | string
      | {
          id: string
          url?: string
          filename?: string
          mimeType?: string
          [key: string]: any
        }
    notes?: string
  }[]
}

export const VehiclesGlobalConf: GlobalConfig = {
  slug: 'vehicles',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'vehicles',
      type: 'array',
      label: 'Vehicles',
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

export default VehiclesGlobalConf
