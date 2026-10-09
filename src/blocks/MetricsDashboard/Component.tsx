import { motionDelayStyle, resolveMotionPreset } from '@/blocks/shared/motion'
import { SectionHeader } from '@/blocks/shared/render'

import type { MetricsDashboardBlock as MetricsDashboardBlockProps } from '@/payload-types'

export const MetricsDashboardBlock: React.FC<MetricsDashboardBlockProps> = ({
  eyebrow,
  intro,
  metrics,
  motion,
  title,
}) => {
  return (
    <section className="container">
      <div className="rounded-[2rem] border border-border bg-card/70 p-6 shadow-sm" data-motion={resolveMotionPreset(motion?.sectionAnimation)}>
        <SectionHeader
          className="mb-10"
          eyebrow={eyebrow}
          intro={intro}
          motion={resolveMotionPreset(motion?.introAnimation)}
          title={title}
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {(metrics || []).map((metric, index) => (
            <article
              className="rounded-[1.5rem] border border-border/70 bg-background/70 p-5"
              data-motion={resolveMotionPreset(motion?.itemAnimation, index)}
              key={index}
              style={motionDelayStyle(index, motion?.stagger ?? 90)}
            >
              <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">{metric.label}</p>
              <p className="mt-3 text-4xl font-semibold tracking-tight">{metric.value}</p>
              {metric.trend ? <p className="mt-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">{metric.trend}</p> : null}
              {metric.description ? <p className="mt-3 text-sm leading-6 text-muted-foreground">{metric.description}</p> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
