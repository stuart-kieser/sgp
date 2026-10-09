import { SectionHeader } from '@/blocks/shared/render'
import { resolveMotionPreset } from '@/blocks/shared/motion'

import type { QuoteMarqueeBlock as QuoteMarqueeBlockProps } from '@/payload-types'

export const QuoteMarqueeBlock: React.FC<QuoteMarqueeBlockProps> = ({ eyebrow, intro, motion, quotes, title }) => {
  const items = [...(quotes || []), ...(quotes || [])]

  return (
    <section className="container overflow-hidden">
      <SectionHeader
        className="mb-10"
        eyebrow={eyebrow}
        intro={intro}
        motion={resolveMotionPreset(motion?.introAnimation)}
        title={title}
        align="center"
      />
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card/70 py-6 shadow-sm">
        <div className="marquee-track flex w-max gap-4 px-4">
          {items.map((quote, index) => (
            <blockquote
              className="w-[320px] rounded-[1.5rem] border border-border bg-background/80 p-5"
              key={`${quote.author}-${index}`}
            >
              <p className="text-sm leading-7">"{quote.quote}"</p>
              <footer className="mt-4 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{quote.author}</span>
                {quote.company ? ` · ${quote.company}` : ''}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
