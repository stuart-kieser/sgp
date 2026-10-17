import { createElement } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { CMSLink } from '@/components/Link'

describe('CMSLink', () => {
  it('converts localhost custom URLs to same-site paths', () => {
    render(
      createElement(CMSLink, {
        label: 'Contact',
        type: 'custom',
        url: 'http://localhost:3000/contact?source=hero#form',
      }),
    )

    expect(screen.getByRole('link', { name: 'Contact' }).getAttribute('href')).toBe(
      '/contact?source=hero#form',
    )
  })

  it('keeps external custom URLs unchanged', () => {
    render(
      createElement(CMSLink, {
        label: 'External',
        type: 'custom',
        url: 'https://example.com/contact',
      }),
    )

    expect(screen.getByRole('link', { name: 'External' }).getAttribute('href')).toBe(
      'https://example.com/contact',
    )
  })
})
