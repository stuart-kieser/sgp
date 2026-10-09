import Link from 'next/link'

import { Media } from '@/components/Media'
import { motionDelayStyle, resolveMotionPreset } from '@/blocks/shared/motion'
import { SectionHeader } from '@/blocks/shared/render'

import type { LogoRailBlock as LogoRailBlockProps } from '@/payload-types'

export const LogoRailBlock: React.FC<LogoRailBlockProps> = ({ eyebrow, intro, logos, motion, title }) => {
  return (
    <section className="container">
      <SectionHeader
        className="mb-10"
        eyebrow={eyebrow}
        intro={intro}
        motion={resolveMotionPreset(motion?.introAnimation)}
        title={title}
        align="center"
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {(logos || []).map((logo, index) => {
          const content =
            logo.media && typeof logo.media === 'object' ? (
              <Media
                className="flex items-center justify-center"
                imgClassName="h-12 w-auto object-contain opacity-80 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                resource={logo.media}
              />
            ) : (
              <span className="text-lg font-semibold tracking-wide">{logo.name}</span>
            )

          return (
            <div
              className="group rounded-[1.5rem] border border-border bg-card/70 p-6 shadow-sm"
              data-motion={resolveMotionPreset(motion?.itemAnimation, index)}
              key={index}
              style={motionDelayStyle(index, motion?.stagger ?? 80)}
            >
              {logo.url ? (
                <Link className="flex min-h-20 items-center justify-center" href={logo.url}>
                  {content}
                </Link>
              ) : (
                <div className="flex min-h-20 items-center justify-center">{content}</div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
