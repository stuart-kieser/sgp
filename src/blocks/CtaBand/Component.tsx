import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import { resolveMotionPreset } from '@/blocks/shared/motion'
import { SectionHeader } from '@/blocks/shared/render'

import type { CtaBandBlock as CtaBandBlockProps } from '@/payload-types'

export const CtaBandBlock: React.FC<CtaBandBlockProps> = ({ eyebrow, intro, links, media, motion, title }) => {
  return (
    <section className="container">
      <div
        className="overflow-hidden rounded-[2rem] border border-border bg-foreground text-background shadow-sm"
        data-motion={resolveMotionPreset(motion?.sectionAnimation)}
      >
        <div className="grid gap-8 px-6 py-10 md:px-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeader
              eyebrow={eyebrow}
              intro={intro}
              inverse
              motion={resolveMotionPreset(motion?.introAnimation)}
              title={title}
            />
            {links?.length ? (
              <div className="mt-6 flex flex-wrap gap-3">
                {links.map(({ link }, index) => (
                  <CMSLink appearance="outline" key={index} {...link} />
                ))}
              </div>
            ) : null}
          </div>
          {media && typeof media === 'object' ? (
            <div className="overflow-hidden rounded-[1.5rem]">
              <Media imgClassName="aspect-[4/3] w-full object-cover" resource={media} />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
