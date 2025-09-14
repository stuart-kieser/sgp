'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { Carousel, CarouselContent } from './ui/carousel'

interface IntroItem {
  id: number
  heading?: string
  para?: string
  isCustomPage: boolean
  link?: string
  pageLink?: string
  /** note the dashed key in your data */
  linkText: string
  image: {
    id: number
    alt: string
    thumbnailURL: null
    filename: string
    mimeType: string
    filesize: number
    width: number
    height: number
    focalX: number
    focalY: number
    updatedAt?: string
    createdAt?: string
    url: string
  }
  updatedAt?: string
  createdAt?: string
}

interface IntroProps {
  intro: IntroItem[]
  /** ms between slides; optional */
  intervalMs?: number
}

export default function Introduction({ intro, intervalMs = 4000 }: IntroProps) {
  const [positionX, setPositionX] = useState(0)

  const slides = useMemo(() => {
    const base = (process.env.NEXT_PUBLIC_PAYLOAD_URL || '').replace(/\/$/, '')
    return (intro || []).map((item) => {
      // Prefer `url` (API path or absolute); fallback to /media/filename if you serve it statically
      let src = ''
      if (item.image.url) {
        src = /^https?:\/\//i.test(item.image.url) ? item.image.url : `${base}${item.image.url}`
      } else if (item.image.filename) {
        // Only works if you’ve exposed /media (via public/media or a rewrite)
        src = `/media/${item.image.filename}`
      }
      const ctaText = item.linkText || 'Learn more'
      return { ...item, src, ctaText }
    })
  }, [intro])

  const count = slides.length
  const slideWidthPct = count > 0 ? 100 / count : 100

  // Auto-advance; keep in sync with `count` and `intervalMs`
  useEffect(() => {
    if (count <= 1) return
    const id = setInterval(() => {
      setPositionX((prev) => (prev + 1) % count)
    }, intervalMs)
    return () => clearInterval(id)
  }, [count, intervalMs])

  // Reset to first slide if data changes (prevents stale index)
  useEffect(() => {
    setPositionX(0)
  }, [count])

  return (
    <Carousel className="overflow-hidden m-0 p-0">
      <CarouselContent
        className="flex flex-row m-0"
        style={{
          width: `${Math.max(count, 1) * 100}%`,
          transform: `translateX(-${positionX * slideWidthPct}%)`,
          transition: 'transform 0.7s ease-in-out',
        }}
      >
        {slides.map((vec) => (
          <section
            key={vec.id}
            style={{
              backgroundImage: vec.src ? `url(${vec.src})` : undefined,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: `${slideWidthPct}%`,
              minHeight: '600px',
            }}
            className="content-center lg:min-h-[600px]"
            aria-label={vec.heading || 'Slide'}
          >
            <div className="text-white font-bold text-2xl relative text-center flex flex-col gap-8 p-8">
              {vec.heading && <h1 className="text-xl md:text-5xl font-sabre">{vec.heading}</h1>}

              {vec.para && (
                <p className="text-transparent sm:text-white text-center p-4 hidden md:block">
                  {vec.para}
                </p>
              )}

              {(vec.link || (vec as any).pageLink['custom-slug']) && (
                <Link href={vec.link ? vec.link : (vec as any).pageLink['custom-slug']}>
                  <button className="rounded-2xl bg-orange-500 px-5 py-2 hover:bg-orange-400 text-xl">
                    {vec.ctaText}
                  </button>
                </Link>
              )}
            </div>
          </section>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
