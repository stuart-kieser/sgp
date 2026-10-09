import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { motionDelayStyle, resolveMotionPreset } from '@/blocks/shared/motion'
import { SectionHeader } from '@/blocks/shared/render'

import type { FeatureTabsBlock as FeatureTabsBlockProps } from '@/payload-types'

export const FeatureTabsBlock: React.FC<FeatureTabsBlockProps> = ({ eyebrow, intro, motion, tabs, title }) => {
  return (
    <section className="container">
      <SectionHeader
        className="mb-10"
        eyebrow={eyebrow}
        intro={intro}
        motion={resolveMotionPreset(motion?.introAnimation)}
        title={title}
      />
      <div className="space-y-4">
        {(tabs || []).map((tab, index) => (
          <details
            className="group rounded-[2rem] border border-border bg-card/70 p-6 shadow-sm"
            data-motion={resolveMotionPreset(motion?.itemAnimation, index)}
            key={index}
            open={index === 0}
            style={motionDelayStyle(index, motion?.stagger ?? 100)}
          >
            <summary className="flex list-none items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{tab.label}</p>
                <h3 className="mt-1 text-2xl font-semibold tracking-tight">{tab.title}</h3>
              </div>
              <span className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Open
              </span>
            </summary>
            <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
              <RichText data={tab.content} enableGutter={false} />
              <div className="space-y-4">
                {tab.media && typeof tab.media === 'object' ? (
                  <div className="overflow-hidden rounded-[1.5rem]">
                    <Media imgClassName="aspect-[4/3] w-full object-cover" resource={tab.media} />
                  </div>
                ) : null}
                {tab.links?.length ? (
                  <div className="flex flex-wrap gap-3">
                    {tab.links.map(({ link }, linkIndex) => (
                      <CMSLink
                        appearance={link.appearance === 'outline' ? 'outline' : 'default'}
                        key={linkIndex}
                        {...link}
                      />
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
