import type { CSSProperties } from 'react'
import type { Field } from 'payload'

const motionOptions = [
  {
    label: 'None',
    value: 'none',
  },
  {
    label: 'Fly Up',
    value: 'fly-up',
  },
  {
    label: 'Fly Left',
    value: 'fly-left',
  },
  {
    label: 'Fly Right',
    value: 'fly-right',
  },
  {
    label: 'Soft Scale',
    value: 'soft-scale',
  },
  {
    label: 'Alternate Sides',
    value: 'alternate-sides',
  },
] as const

const presetGuidance = {
  intro:
    'Recommended presets: subtle = None or Fly Up, medium = Fly Up, dramatic = Fly Left or Fly Right.',
  items:
    'Recommended presets: subtle = Fly Up, medium = Alternate Sides, dramatic = Fly Left / Fly Right with higher stagger.',
  section:
    'Recommended presets: subtle = None, medium = Soft Scale, dramatic = Soft Scale with a higher stagger on child items.',
  stagger:
    'Recommended presets: subtle = 40-80ms, medium = 100-160ms, dramatic = 220-380ms.',
  parallax:
    'Recommended presets: subtle = 8-16, medium = 18-28, dramatic = 32-48. Visible only when the block item has media.',
} as const

export const blockMotionFields = ({
  defaults,
  enableParallax = false,
}: {
  defaults?: {
    introAnimation?: string
    itemAnimation?: string
    sectionAnimation?: string
    stagger?: number
    parallaxStrength?: number
  }
  enableParallax?: boolean
} = {}): Field => {
  const fields: Field[] = [
    {
      name: 'sectionAnimation',
      type: 'select',
      label: 'Section Animation',
      defaultValue: defaults?.sectionAnimation || 'none',
      options: [...motionOptions],
      admin: {
        description: presetGuidance.section,
      },
    },
    {
      name: 'introAnimation',
      type: 'select',
      label: 'Intro Animation',
      defaultValue: defaults?.introAnimation || 'fly-up',
      options: [...motionOptions],
      admin: {
        description: presetGuidance.intro,
      },
    },
    {
      name: 'itemAnimation',
      type: 'select',
      label: 'Item Animation',
      defaultValue: defaults?.itemAnimation || 'fly-up',
      options: [...motionOptions],
      admin: {
        description: presetGuidance.items,
      },
    },
    {
      name: 'stagger',
      type: 'number',
      label: 'Stagger Delay',
      defaultValue: defaults?.stagger ?? 120,
      min: 0,
      max: 500,
      admin: {
        description: `Delay between repeated item animations in milliseconds. ${presetGuidance.stagger}`,
        step: 10,
      },
    },
  ]

  if (enableParallax) {
    fields.push({
      name: 'parallaxStrength',
      type: 'number',
      label: 'Parallax Strength',
      defaultValue: defaults?.parallaxStrength ?? 20,
      min: 0,
      max: 60,
      admin: {
        description: `Higher values create a stronger vertical parallax drift on media. ${presetGuidance.parallax}`,
      },
    })
  }

  return {
    name: 'motion',
    type: 'group',
    label: 'Motion Settings',
    admin: {
      description:
        'Use these controls to tune how the block enters the viewport. Start with medium values, then increase stagger or side-based motion when you want a more dramatic reveal.',
    },
    fields,
  }
}

export const resolveMotionPreset = (value?: string | null, index = 0) => {
  if (!value || value === 'none') return undefined
  if (value === 'alternate-sides') {
    return index % 2 === 0 ? 'fly-left' : 'fly-right'
  }

  return value
}

export const motionDelayStyle = (index: number, stagger = 120): CSSProperties => ({
  '--motion-delay': `${index * stagger}ms`,
}) as CSSProperties
