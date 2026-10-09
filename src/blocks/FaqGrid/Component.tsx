import RichText from '@/components/RichText'
import { motionDelayStyle, resolveMotionPreset } from '@/blocks/shared/motion'
import { SectionHeader } from '@/blocks/shared/render'

import type { FaqGridBlock as FaqGridBlockProps } from '@/payload-types'

export const FaqGridBlock: React.FC<FaqGridBlockProps> = ({ categories, eyebrow, intro, motion, title }) => {
  return (
    <section className="container">
      <SectionHeader
        className="mb-10"
        eyebrow={eyebrow}
        intro={intro}
        motion={resolveMotionPreset(motion?.introAnimation)}
        title={title}
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {(categories || []).map((category, index) => (
          <div
            className="rounded-[2rem] border border-border bg-card/70 p-6 shadow-sm"
            data-motion={resolveMotionPreset(motion?.itemAnimation, index)}
            key={index}
            style={motionDelayStyle(index, motion?.stagger ?? 70)}
          >
            <h3 className="text-2xl font-semibold tracking-tight">{category.title}</h3>
            <div className="mt-6 space-y-4">
              {(category.items || []).map((item, itemIndex) => (
                <details className="rounded-[1.5rem] border border-border/70 bg-background/70 p-5" key={itemIndex}>
                  <summary className="cursor-pointer list-none text-lg font-medium">{item.question}</summary>
                  <div className="mt-4">
                    <RichText data={item.answer} enableGutter={false} />
                  </div>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
