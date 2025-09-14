// src/components/PageBreak.tsx
import { Button } from './ui/button'

type Upload = { url?: string; filename?: string }
type CustomLink = {
  url?: string
  href?: string
  slug?: string
  // add any other fields your `custom-link` provides
}

export type PageBreakDoc = {
  slug: string
  text: string
  background?: Upload | string
  hasLink?: boolean
  button_text?: string
  link?: string | CustomLink // string when not populated; object when depth>0
}

export default function PageBreak({ doc }: { doc: PageBreakDoc }) {
  if (!doc) return null
  const bg = typeof doc.background === 'string' ? doc.background : doc.background?.url

  return (
    <div
      className="bg-cover bg-center w-full"
      style={{ backgroundImage: bg ? `url(${bg})` : undefined }}
    >
      <div className="px-10 py-8 min-h-[420px] flex flex-col items-end justify-center gap-4">
        <p className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 text-white font-sabre text-xl leading-relaxed whitespace-pre-line text-right">
          {doc.text}
        </p>

        {doc.hasLink ? (
          // If using shadcn Button, asChild lets the anchor inherit styles
          <Button className="rounded-2xl bg-orange-500 px-5 py-2 hover:bg-orange-400 text-xl">
            <a href={doc.link['custom-slug']}>{doc.button_text || 'Learn more'}</a>
          </Button>
        ) : // Fallback if link isn’t populated (depth not provided)
        null}
      </div>
    </div>
  )
}
