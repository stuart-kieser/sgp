import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { motionDelayStyle, resolveMotionPreset } from '@/blocks/shared/motion'

import type { TimelineBlock as TimelineBlockProps } from '@/payload-types'

export const TimelineBlock: React.FC<TimelineBlockProps> = ({
  eyebrow,
  intro,
  items,
  motion,
  title,
}) => {
  return (
    <section className="container">
      <div className="mb-10 max-w-3xl space-y-4" data-motion={resolveMotionPreset(motion?.introAnimation)}>
        {eyebrow ? (
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
        {intro ? (
          <RichText className="text-muted-foreground" data={intro} enableGutter={false} />
        ) : null}
      </div>

      <div className="relative space-y-6 before:absolute before:bottom-0 before:left-5 before:top-0 before:w-px before:bg-border md:before:left-1/3">
        {(items || []).map((item, index) => (
          <article
            className="grid gap-4 md:grid-cols-[minmax(0,0.28fr)_minmax(0,0.72fr)] md:gap-8"
            data-motion={resolveMotionPreset(motion?.itemAnimation, index)}
            key={index}
            style={motionDelayStyle(index, motion?.stagger ?? 130)}
          >
            <div className="relative pl-14 md:pl-0 md:pr-10">
              <span className="absolute left-[0.8rem] top-2 h-4 w-4 rounded-full border-4 border-background bg-foreground md:left-auto md:right-[-0.55rem]" />
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {item.period}
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-border bg-card/80 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight">{item.title}</h3>
              <RichText className="mt-4" data={item.description} enableGutter={false} />

              {item.links?.length ? (
                <div className="mt-6 flex flex-wrap gap-3">
                  {item.links.map(({ link }, linkIndex) => (
                    <CMSLink
                      appearance={link.appearance === 'outline' ? 'outline' : 'default'}
                      key={linkIndex}
                      {...link}
                    />
                  ))}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
