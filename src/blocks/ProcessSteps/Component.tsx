import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { motionDelayStyle, resolveMotionPreset } from '@/blocks/shared/motion'
import { SectionHeader } from '@/blocks/shared/render'

import type { ProcessStepsBlock as ProcessStepsBlockProps } from '@/payload-types'

export const ProcessStepsBlock: React.FC<ProcessStepsBlockProps> = ({ eyebrow, intro, motion, steps, title }) => {
  return (
    <section className="container">
      <SectionHeader
        className="mb-10"
        eyebrow={eyebrow}
        intro={intro}
        motion={resolveMotionPreset(motion?.introAnimation)}
        title={title}
      />
      <div className="grid gap-6">
        {(steps || []).map((step, index) => (
          <article
            className="grid gap-6 rounded-[2rem] border border-border bg-card/70 p-6 shadow-sm lg:grid-cols-[auto_1fr_auto]"
            data-motion={resolveMotionPreset(motion?.itemAnimation, index)}
            key={index}
            style={motionDelayStyle(index, motion?.stagger ?? 140)}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background text-sm font-semibold tracking-[0.2em]">
              {step.stepLabel || `0${index + 1}`}
            </div>
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">{step.title}</h3>
              <RichText className="mt-4" data={step.description} enableGutter={false} />
            </div>
            {step.media && typeof step.media === 'object' ? (
              <Media
                className="overflow-hidden rounded-[1.25rem]"
                imgClassName="h-32 w-full min-w-40 object-cover"
                resource={step.media}
              />
            ) : null}
          </article>
        ))}
      </div>
    </section>
  )
}
