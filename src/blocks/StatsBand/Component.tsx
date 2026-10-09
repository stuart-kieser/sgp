import { motionDelayStyle, resolveMotionPreset } from '@/blocks/shared/motion'
import RichText from '@/components/RichText'

import type { StatsBandBlock as StatsBandBlockProps } from '@/payload-types'

export const StatsBandBlock: React.FC<StatsBandBlockProps> = ({
  eyebrow,
  intro,
  items,
  motion,
  title,
}) => {
  return (
    <section className="container">
      <div
        className="overflow-hidden rounded-[2rem] border border-border bg-foreground text-background shadow-sm"
        data-motion={resolveMotionPreset(motion?.sectionAnimation)}
      >
        <div className="grid gap-10 px-6 py-10 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:py-12">
          <div className="space-y-4" data-motion={resolveMotionPreset(motion?.introAnimation)}>
            {eyebrow ? (
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-background/65">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
            {intro ? (
              <RichText
                className="text-background/75 dark:prose-invert"
                data={intro}
                enableGutter={false}
              />
            ) : null}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {(items || []).map((item, index) => (
              <div
                className="rounded-[1.5rem] border border-background/10 bg-background/8 p-5"
                data-motion={resolveMotionPreset(motion?.itemAnimation, index)}
                key={index}
                style={motionDelayStyle(index, motion?.stagger ?? 100)}
              >
                <p className="text-4xl font-semibold tracking-tight md:text-5xl">{item.value}</p>
                <p className="mt-2 text-base font-medium">{item.label}</p>
                {item.description ? (
                  <p className="mt-3 text-sm leading-6 text-background/70">{item.description}</p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
