import { Media } from '@/components/Media'
import { motionDelayStyle, resolveMotionPreset } from '@/blocks/shared/motion'
import { SectionHeader } from '@/blocks/shared/render'

import type { TestimonialStackBlock as TestimonialStackBlockProps } from '@/payload-types'

export const TestimonialStackBlock: React.FC<TestimonialStackBlockProps> = ({
  eyebrow,
  intro,
  motion,
  testimonials,
  title,
}) => {
  return (
    <section className="container">
      <SectionHeader
        className="mb-10"
        eyebrow={eyebrow}
        intro={intro}
        motion={resolveMotionPreset(motion?.introAnimation)}
        title={title}
      />
      <div className="space-y-6">
        {(testimonials || []).map((item, index) => (
          <article
            className="grid gap-6 rounded-[2rem] border border-border bg-card/75 p-6 shadow-sm md:grid-cols-[auto_1fr]"
            data-motion={resolveMotionPreset(motion?.itemAnimation, index)}
            key={index}
            style={motionDelayStyle(index, motion?.stagger ?? 160)}
          >
            <div className="flex items-start">
              {item.avatar && typeof item.avatar === 'object' ? (
                <Media
                  className="overflow-hidden rounded-full"
                  imgClassName="h-16 w-16 rounded-full object-cover"
                  resource={item.avatar}
                />
              ) : (
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-foreground text-background text-xl font-semibold">
                  {item.author?.[0]}
                </div>
              )}
            </div>
            <div className="space-y-4">
              <p className="text-xl leading-8 tracking-tight md:text-2xl">"{item.quote}"</p>
              <div className="text-sm text-muted-foreground">
                <p className="font-medium text-foreground">{item.author}</p>
                <p>
                  {[item.role, item.company].filter(Boolean).join(' · ')}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
