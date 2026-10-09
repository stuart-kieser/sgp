import { Media } from '@/components/Media'
import { motionDelayStyle, resolveMotionPreset } from '@/blocks/shared/motion'
import { SectionHeader } from '@/blocks/shared/render'

import type { MediaMosaicBlock as MediaMosaicBlockProps } from '@/payload-types'

export const MediaMosaicBlock: React.FC<MediaMosaicBlockProps> = ({ eyebrow, intro, items, motion, title }) => {
  return (
    <section className="container">
      <SectionHeader
        className="mb-10"
        eyebrow={eyebrow}
        intro={intro}
        motion={resolveMotionPreset(motion?.introAnimation)}
        title={title}
      />
      <div className="grid auto-rows-[220px] gap-4 md:grid-cols-2 xl:grid-cols-4">
        {(items || []).map((item, index) => (
          <article
            className={`relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm ${
              index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
            }`}
            data-motion={resolveMotionPreset(motion?.itemAnimation, index)}
            key={index}
            style={motionDelayStyle(index, motion?.stagger ?? 110)}
          >
            {item.media && typeof item.media === 'object' ? (
              <Media imgClassName="h-full w-full object-cover" resource={item.media} />
            ) : null}
            {item.title ? (
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-5 text-white">
                <p className="text-lg font-medium">{item.title}</p>
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  )
}
