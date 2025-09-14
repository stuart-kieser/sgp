import Image from 'next/image'
import { Page } from '@/payload-types'
import { toAbsolute } from '@/lib/utils'

// @ts-ignore
type LayoutBlock = Page['layout'][0]

export default function ContentBlockReversed({ block }: { block: LayoutBlock }) {
  const containerWidth = typeof block.width === 'string' ? block.width : 'max-w-6xl'

  return (
    <section className={`w-full ${containerWidth} mx-auto px-4 py-8 sm:px-6 sm:py-12`}>
      <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-6 md:gap-10">
        {/* Image first on mobile; text first on desktop (reversed) */}
        <div className="order-1 md:order-2">
          <div className="w-full overflow-hidden rounded-xl shadow-md">
            <Image
              src={toAbsolute(block.image.url)}
              alt={block.image.alt || 'image'}
              width={800}
              height={600}
              className="w-full h-auto object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
              loading="lazy"
            />
          </div>
        </div>

        <div className="order-2 md:order-1 text-white">
          <h2 className="font-sabre text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight">
            {block.contentHeader}
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-relaxed whitespace-pre-wrap break-words">
            {block.contentText}
          </p>
        </div>
      </div>
    </section>
  )
}
