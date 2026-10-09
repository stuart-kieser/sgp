import { motionDelayStyle, resolveMotionPreset } from '@/blocks/shared/motion'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

import type { FeatureShowcaseBlock as FeatureShowcaseBlockProps } from '@/payload-types'

export const FeatureShowcaseBlock: React.FC<FeatureShowcaseBlockProps> = ({
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
          <RichText className="max-w-2xl text-muted-foreground" data={intro} enableGutter={false} />
        ) : null}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {(items || []).map((item, index) => (
          <article
            className="group relative overflow-hidden rounded-[2rem] border border-border bg-card/80 p-6 shadow-sm"
            data-motion={resolveMotionPreset(motion?.itemAnimation, index)}
            key={index}
            style={motionDelayStyle(index, motion?.stagger ?? 120)}
          >
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-foreground/25 to-transparent" />
            {item.media && typeof item.media === 'object' ? (
              <div className="mb-6 overflow-hidden rounded-[1.5rem] bg-muted">
                <div data-parallax={String(motion?.parallaxStrength ?? 20)}>
                  <Media
                    imgClassName="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    pictureClassName="block"
                    resource={item.media}
                  />
                </div>
              </div>
            ) : null}

            <div className="space-y-3">
              {item.kicker ? (
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  {item.kicker}
                </p>
              ) : null}
              <h3 className="text-2xl font-semibold tracking-tight">{item.title}</h3>
              <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
            </div>

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
          </article>
        ))}
      </div>
    </section>
  )
}
