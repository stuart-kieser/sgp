import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import { motionDelayStyle, resolveMotionPreset } from '@/blocks/shared/motion'
import { SectionHeader } from '@/blocks/shared/render'

import type { CaseStudyPreviewBlock as CaseStudyPreviewBlockProps } from '@/payload-types'

export const CaseStudyPreviewBlock: React.FC<CaseStudyPreviewBlockProps> = ({
  eyebrow,
  intro,
  motion,
  studies,
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
        {(studies || []).map((study, index) => (
          <article
            className="grid gap-6 overflow-hidden rounded-[2rem] border border-border bg-card/70 p-6 shadow-sm lg:grid-cols-[0.9fr_1.1fr]"
            data-motion={resolveMotionPreset(motion?.itemAnimation, index)}
            key={index}
            style={motionDelayStyle(index, motion?.stagger ?? 140)}
          >
            {study.media && typeof study.media === 'object' ? (
              <Media imgClassName="aspect-[4/3] w-full rounded-[1.5rem] object-cover" resource={study.media} />
            ) : (
              <div className="flex aspect-[4/3] items-center justify-center rounded-[1.5rem] bg-muted text-muted-foreground">
                Add a cover image
              </div>
            )}
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">{study.client}</p>
              <h3 className="text-3xl font-semibold tracking-tight">{study.title}</h3>
              <p className="text-sm leading-7 text-muted-foreground">{study.summary}</p>
              {study.results?.length ? (
                <div className="flex flex-wrap gap-3">
                  {study.results.map((result, resultIndex) => (
                    <span className="rounded-full border border-border px-3 py-1 text-sm" key={resultIndex}>
                      {result.label}
                    </span>
                  ))}
                </div>
              ) : null}
              {study.links?.length ? (
                <div className="flex flex-wrap gap-3">
                  {study.links.map(({ link }, linkIndex) => (
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
