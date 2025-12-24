import Image from 'next/image'
import { Page } from '@/payload-types'
import { toAbsolute } from '@/lib/utils'

// @ts-ignore
type LayoutBlock = Page['mediablock'][0]

export default function MediaBlock({ block }: { block: LayoutBlock }) {
  const containerWidth = typeof block.width === 'string' ? block.width : 'max-w-6xl'

  return (
    <section className={`w-full ${containerWidth} mx-auto px-4 py-8 sm:px-6 sm:py-12`}>
      <div className="grid grid-cols-1 items-center place-items-center">
        {/* Image */}
        <Image
          src={toAbsolute(block.media.url)}
          alt={block.media.alt || 'image'}
          className="object-cover w-full"
          width={250}
          height={250}
          loading="lazy"
        />
      </div>
    </section>
  )
}
