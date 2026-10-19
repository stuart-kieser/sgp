'use client'

import React, { useEffect, useState } from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <>
      <nav aria-label="Main navigation" className="hidden items-center gap-3 md:flex">
        {navItems.map(({ link }, i) => (
          <CMSLink key={i} {...link} appearance="link" className="font-sabre" />
        ))}
      </nav>
      <div className="relative md:hidden">
        <button
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="flex size-11 items-center justify-center rounded-md text-white hover:bg-black/10 focus-visible:outline-2 focus-visible:outline-offset-2"
          onClick={() => setIsOpen((open) => !open)}
          type="button"
        >
          {isOpen ? <X aria-hidden="true" size={24} /> : <Menu aria-hidden="true" size={24} />}
        </button>
        {isOpen ? (
          <nav
            aria-label="Mobile navigation"
            className="absolute right-0 top-full z-30 mt-2 flex w-[min(22rem,calc(100vw-2rem))] flex-col gap-1 rounded-md bg-[#00a79d] p-3 shadow-lg"
            id="mobile-navigation"
            onClick={() => setIsOpen(false)}
          >
            {navItems.map(({ link }, i) => (
              <CMSLink
                key={i}
                {...link}
                appearance="link"
                className="font-sabre px-3 py-3"
              />
            ))}
          </nav>
        ) : null}
      </div>
    </>
  )
}
