'use client'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'

const AUTOPLAY_INTERVALS = {
  fast: 2000,
  medium: 4000,
  slow: 6000,
} as const

export const AutoScrollHero: React.FC<Page['hero']> = ({ scrollSpeed, slides }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const slideCount = slides?.length ?? 0
  const autoplayInterval = AUTOPLAY_INTERVALS[scrollSpeed ?? 'slow']

  useEffect(() => {
    if (slideCount < 2 || isPaused) return

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) return

    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slideCount)
    }, autoplayInterval)

    return () => window.clearInterval(interval)
  }, [autoplayInterval, isPaused, slideCount])

  if (!slideCount) return null

  const goToSlide = (index: number) => {
    setActiveIndex((index + slideCount) % slideCount)
  }

  return (
    <section
      aria-label="Featured content"
      aria-roledescription="carousel"
      className="relative isolate min-h-[540px] overflow-hidden bg-foreground text-background md:min-h-[680px]"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsPaused(false)
      }}
      onFocus={() => setIsPaused(true)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={(event) => {
        if (!event.currentTarget.contains(document.activeElement)) setIsPaused(false)
      }}
    >
      <div
        className="absolute inset-0 flex transition-transform duration-700 ease-in-out motion-reduce:transition-none"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slides?.map((slide, index) => (
          <div
            aria-hidden={index !== activeIndex}
            className="relative isolate min-h-[540px] w-full min-w-full md:min-h-[680px]"
            key={slide.id ?? index}
            inert={index !== activeIndex}
            role="group"
            aria-label={`${index + 1} of ${slideCount}`}
            aria-roledescription="slide"
          >
            <Media
              className="absolute inset-0"
              imgClassName="h-full w-full object-cover"
              priority={index === 0}
              resource={slide.media}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />
            <div className="container relative flex min-h-[540px] items-end pb-24 pt-28 md:min-h-[680px] md:items-center md:pb-20">
              <div className="w-full max-w-3xl">
                {slide.eyebrow ? (
                  <p className="mb-5 text-sm font-semibold uppercase tracking-[0.14em] text-white/80">
                    {slide.eyebrow}
                  </p>
                ) : null}
                <h1 className="w-full max-w-full break-words text-3xl font-semibold leading-tight text-white md:max-w-3xl md:text-6xl font-sabre">
                  {slide.title}
                </h1>
                {slide.description ? (
                  <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 md:text-lg">
                    {slide.description}
                  </p>
                ) : null}
                {slide.links?.[0]?.link ? (
                  <div className="mt-8">
                    <CMSLink size="lg" {...slide.links[0].link} />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>

      {slideCount > 1 ? (
        <div className="container absolute inset-x-0 bottom-0 flex items-center justify-between pb-6 md:pb-8">
          <div className="flex items-center gap-2" role="group" aria-label="Choose a slide">
            {slides?.map((slide, index) => (
              <button
                aria-current={index === activeIndex ? 'true' : undefined}
                aria-label={`Show slide ${index + 1}`}
                className={`h-2 rounded-full transition-[width,background-color] ${
                  index === activeIndex ? 'w-10 bg-white' : 'w-2 bg-white/55 hover:bg-white/80'
                }`}
                key={slide.id ?? index}
                onClick={() => goToSlide(index)}
                type="button"
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              aria-label="Previous slide"
              className="flex size-11 items-center justify-center rounded-full border border-white/60 text-white transition-colors hover:bg-white hover:text-black"
              onClick={() => goToSlide(activeIndex - 1)}
              type="button"
            >
              <ArrowLeft aria-hidden="true" size={19} />
            </button>
            <button
              aria-label="Next slide"
              className="flex size-11 items-center justify-center rounded-full border border-white/60 text-white transition-colors hover:bg-white hover:text-black"
              onClick={() => goToSlide(activeIndex + 1)}
              type="button"
            >
              <ArrowRight aria-hidden="true" size={19} />
            </button>
          </div>
        </div>
      ) : null}
    </section>
  )
}