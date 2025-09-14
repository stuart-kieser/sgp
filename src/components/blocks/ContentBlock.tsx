import Image from 'next/image'
import { Page } from '@/payload-types'
import { toAbsolute } from '@/lib/utils'

// @ts-ignore
type LayoutBlock = Page['layout'][0]

export default function ContentBlock({ block }: { block: LayoutBlock }) {
  const containerWidth = typeof block.width === 'string' ? block.width : 'max-w-6xl'

  return (
    <section className={`w-full ${containerWidth} mx-auto px-4 py-8 sm:px-6 sm:py-12`}>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10">
        {/* Image */}
        <div className="relative w-full overflow-hidden rounded-xl shadow-md aspect-[3/4] md:aspect-[4/3]">
          <Image
            src={toAbsolute(block.image.url)}
            alt={block.image.alt || 'image'}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
            loading="lazy"
          />
        </div>

        {/* Text */}
        <div className="text-white max-w-prose">
          <h2 className="font-sabre text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight break-words">
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

// import { cn } from '@/lib/utils'
// import React from 'react'
// import RichText from '@/components/RickText'

// import type { ContentBlock as ContentBlockProps } from '@/payload-types'

// const ContentBlock: React.FC<ContentBlockProps> = (props) => {
//   const { columns } = props

//   const colsSpanClasses = {
//     full: '12',
//     half: '6',
//     oneThird: '4',
//     twoThirds: '8',
//   }

//   return (
//     <div className="container my-16">
//       <div className="grid grid-cols-4 lg:grid-cols-12 gap-y-8 gap-x-16">
//         {columns &&
//           columns.length > 0 &&
//           columns.map((col, index) => {
//             const { enableLink, richText, size } = col

//             return (
//               <div
//                 className={cn(`col-span-4 lg:col-span-${colsSpanClasses[size!]}`, {
//                   'md:col-span-2': size !== 'full',
//                 })}
//                 key={index}
//               >
//                 {richText && <RichText data={richText} enableGutter={false} />}
//               </div>
//             )
//           })}
//       </div>
//     </div>
//   )
// }

// export default ContentBlock
