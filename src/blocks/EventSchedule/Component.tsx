import { motionDelayStyle, resolveMotionPreset } from '@/blocks/shared/motion'
import { SectionHeader } from '@/blocks/shared/render'

import type { EventScheduleBlock as EventScheduleBlockProps } from '@/payload-types'

export const EventScheduleBlock: React.FC<EventScheduleBlockProps> = ({ days, eyebrow, intro, motion, title }) => {
  return (
    <section className="container">
      <SectionHeader
        className="mb-10"
        eyebrow={eyebrow}
        intro={intro}
        motion={resolveMotionPreset(motion?.introAnimation)}
        title={title}
      />
      <div className="space-y-8">
        {(days || []).map((day, dayIndex) => (
          <div key={dayIndex}>
            <h3 className="mb-4 text-2xl font-semibold tracking-tight">{day.label}</h3>
            <div className="space-y-4">
              {(day.sessions || []).map((session, sessionIndex) => (
                <article
                  className="grid gap-4 rounded-[1.75rem] border border-border bg-card/70 p-5 shadow-sm md:grid-cols-[180px_1fr]"
                  data-motion={resolveMotionPreset(motion?.itemAnimation, sessionIndex)}
                  key={sessionIndex}
                  style={motionDelayStyle(sessionIndex, motion?.stagger ?? 90)}
                >
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">{session.time}</p>
                    {session.location ? <p className="mt-2 text-sm text-muted-foreground">{session.location}</p> : null}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">{session.title}</h4>
                    {session.speaker ? <p className="mt-2 text-sm font-medium text-muted-foreground">{session.speaker}</p> : null}
                    {session.description ? <p className="mt-3 text-sm leading-7 text-muted-foreground">{session.description}</p> : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
