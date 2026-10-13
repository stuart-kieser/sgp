'use client'

import { useEffect } from 'react'

const observerOptions: IntersectionObserverInit = {
  rootMargin: '0px 0px -12% 0px',
  threshold: 0.18,
}

const updateParallax = (elements: Iterable<HTMLElement>) => {
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

    const observedMotionElements = new WeakSet<HTMLElement>()
    const parallaxElements = new Set<HTMLElement>()

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute('data-in-view', 'true')
          revealObserver.unobserve(entry.target)
        }
      })
    }, observerOptions)

    let frame = 0

    const scheduleParallax = () => {
      if (frame) return

      frame = window.requestAnimationFrame(() => {
        updateParallax(parallaxElements)
        frame = 0
      })
    }

    const observeMotionElement = (element: HTMLElement) => {
      if (element.hasAttribute('data-in-view') || observedMotionElements.has(element)) return

      observedMotionElements.add(element)
      revealObserver.observe(element)
    }

    const observeNode = (node: Node) => {
      if (!(node instanceof HTMLElement)) return

      if (node.matches('[data-motion]')) observeMotionElement(node)
      node.querySelectorAll<HTMLElement>('[data-motion]').forEach(observeMotionElement)

      if (node.matches('[data-parallax]')) parallaxElements.add(node)
      node.querySelectorAll<HTMLElement>('[data-parallax]').forEach((element) => {
        parallaxElements.add(element)
      })
    }

    const unobserveNode = (node: Node) => {
      if (!(node instanceof HTMLElement)) return

      if (node.matches('[data-motion]')) {
        revealObserver.unobserve(node)
        observedMotionElements.delete(node)
      }
      node.querySelectorAll<HTMLElement>('[data-motion]').forEach((element) => {
        revealObserver.unobserve(element)
        observedMotionElements.delete(element)
      })

      if (node.matches('[data-parallax]')) parallaxElements.delete(node)
      node.querySelectorAll<HTMLElement>('[data-parallax]').forEach((element) => {
        parallaxElements.delete(element)
      })
    }

    document.querySelectorAll<HTMLElement>('[data-motion]').forEach(observeMotionElement)
    document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((element) => {
      parallaxElements.add(element)
    })

    const mutationObserver = new MutationObserver((mutations) => {
      let shouldUpdateParallax = false

      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes') {
          observeNode(mutation.target)
          shouldUpdateParallax = true
          return
        }

        mutation.removedNodes.forEach(unobserveNode)
        mutation.addedNodes.forEach(observeNode)
        if (mutation.addedNodes.length > 0 || mutation.removedNodes.length > 0) {
          shouldUpdateParallax = true
        }
      })

      if (shouldUpdateParallax) scheduleParallax()
    })

    mutationObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ['data-motion', 'data-parallax'],
      childList: true,
      subtree: true,
    })

    root.setAttribute('data-motion-state', 'ready')

    updateParallax(parallaxElements)

    window.addEventListener('scroll', scheduleParallax, { passive: true })
    window.addEventListener('resize', scheduleParallax)

    return () => {
      mutationObserver.disconnect()
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
