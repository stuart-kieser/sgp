import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { motionDelayStyle, resolveMotionPreset } from '@/blocks/shared/motion'
import { SectionHeader } from '@/blocks/shared/render'

import type { StickyStoryBlock as StickyStoryBlockProps } from '@/payload-types'

export const StickyStoryBlock: React.FC<StickyStoryBlockProps> = ({
  eyebrow,
  intro,
  motion,
  panels,
  title,
}) => {
  const heroMedia = panels?.[0]?.media

  return (
    <section className="container">
      <SectionHeader
        className="mb-10"
        eyebrow={eyebrow}
        intro={intro}
        motion={resolveMotionPreset(motion?.introAnimation)}
        title={title}
      />
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          {heroMedia && typeof heroMedia === 'object' ? (
            <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm">
              <Media imgClassName="aspect-[4/5] w-full object-cover" resource={heroMedia} />
            </div>
          ) : (
            <div className="flex aspect-[4/5] items-center justify-center rounded-[2rem] border border-dashed border-border bg-card/40 text-muted-foreground">
              Add media to the first panel for a sticky visual.
            </div>
          )}
        </div>
        <div className="space-y-6">
          {(panels || []).map((panel, index) => (
            <article
              className="rounded-[2rem] border border-border bg-card/70 p-6 shadow-sm"
              data-motion={resolveMotionPreset(motion?.itemAnimation, index)}
              key={index}
              style={motionDelayStyle(index, motion?.stagger ?? 180)}
            >
              {panel.eyebrow ? <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{panel.eyebrow}</p> : null}
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">{panel.title}</h3>
              <RichText className="mt-4" data={panel.content} enableGutter={false} />
              {panel.media && typeof panel.media === 'object' ? (
                <div className="mt-6 overflow-hidden rounded-[1.5rem] lg:hidden">
                  <Media imgClassName="aspect-[16/10] w-full object-cover" resource={panel.media} />
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
