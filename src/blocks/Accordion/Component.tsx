import { motionDelayStyle, resolveMotionPreset } from '@/blocks/shared/motion'
import RichText from '@/components/RichText'

import type { AccordionBlock as AccordionBlockProps } from '@/payload-types'

export const AccordionBlock: React.FC<AccordionBlockProps> = ({
  eyebrow,
  intro,
  items,
  motion,
  title,
}) => {
  return (
    <section className="container">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        <div className="space-y-4" data-motion={resolveMotionPreset(motion?.introAnimation)}>
          {eyebrow ? (
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
          {intro ? (
            <RichText className="text-muted-foreground" data={intro} enableGutter={false} />
          ) : null}
        </div>

        <div className="space-y-4">
          {(items || []).map((item, index) => (
            <details
              className="group rounded-3xl border border-border bg-card/70 p-6 shadow-sm backdrop-blur"
              data-motion={resolveMotionPreset(motion?.itemAnimation, index)}
              key={index}
              open={item.defaultOpen ?? false}
              style={motionDelayStyle(index, motion?.stagger ?? 110)}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="text-lg font-medium">{item.title}</span>
                <span className="text-2xl leading-none text-muted-foreground transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="mt-4 border-t border-border pt-4">
                <RichText data={item.content} enableGutter={false} />
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
