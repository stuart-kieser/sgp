'use client'

import { useEffect } from 'react'

const observerOptions: IntersectionObserverInit = {
  rootMargin: '0px 0px -12% 0px',
  threshold: 0.18,
}

const updateParallax = (elements: HTMLElement[]) => {
  const viewportHeight = window.innerHeight || 1

  elements.forEach((element) => {
    const rect = element.getBoundingClientRect()
    const center = rect.top + rect.height / 2
    const offset = (viewportHeight / 2 - center) / viewportHeight
    const strength = Number(element.dataset.parallax || 18)

    element.style.setProperty('--parallax-y', `${offset * strength}px`)
  })
}

export const MotionController = () => {
  useEffect(() => {
    const root = document.documentElement
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    root.classList.add('motion-enhanced')
    root.setAttribute('data-motion-state', prefersReducedMotion ? 'reduced' : 'booting')

    if (prefersReducedMotion) {
      return () => {
        root.classList.remove('motion-enhanced')
        root.removeAttribute('data-motion-state')
      }
    }

    const motionElements = Array.from(document.querySelectorAll<HTMLElement>('[data-motion]'))
    const parallaxElements = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'))

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute('data-in-view', 'true')
          revealObserver.unobserve(entry.target)
        }
      })
    }, observerOptions)

    motionElements.forEach((element) => {
      revealObserver.observe(element)
    })
    root.setAttribute('data-motion-state', 'ready')

    let frame = 0

    const scheduleParallax = () => {
      if (frame) return

      frame = window.requestAnimationFrame(() => {
        updateParallax(parallaxElements)
        frame = 0
      })
    }

    updateParallax(parallaxElements)

    window.addEventListener('scroll', scheduleParallax, { passive: true })
    window.addEventListener('resize', scheduleParallax)

    return () => {
      revealObserver.disconnect()
      window.removeEventListener('scroll', scheduleParallax)
      window.removeEventListener('resize', scheduleParallax)

      if (frame) {
        window.cancelAnimationFrame(frame)
      }

      root.classList.remove('motion-enhanced')
      root.removeAttribute('data-motion-state')
    }
  }, [])

  return null
}
