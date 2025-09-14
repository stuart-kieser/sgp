'use client'

import * as React from 'react'
// switched from NavigationMenu to DropdownMenu for better alignment
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Separator } from '@/components/ui/separator'

import { Menu } from 'lucide-react'

import data from '@/data'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const routes = [
  { label: 'Home', href: '/' },
  { label: 'Vehicles', href: '/vehicles' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact us', href: '/contact-us' },
]

const baseButtonClasses =
  'group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 bg-transparent border-none shadow-none hover:bg-teal-500'

const listItemClasses =
  'group inline-flex h-9 w-full items-center justify-start rounded-md px-4 py-2 font-medium hover:scale-105 active:scale-95 text-xs'

const NavBar: React.FC<{ className?: string }> = ({ className = '' }) => {
  const router = useRouter()
  const services = React.useMemo(() => data.getServices?.() ?? [], [])
  const [open, setOpen] = React.useState(false)
  const close = React.useCallback(() => setOpen(false), [])

  return (
    <header className={`w-full ${className}`}>
      {/* Mobile */}
      <div className="lg:hidden flex items-center justify-between w-screen px-6">
        <div className="font-sabre text-lg tracking-wide">SGP</div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="default"
              aria-label="Open menu"
              className="font-sabre bg-[#00a79d] hover:bg-teal-500 shadow-none"
            >
              <Menu className="h-5 w-5" color="black" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="font-sabre w-80">
            <SheetHeader>
              <SheetTitle className="text-left">SGP</SheetTitle>
              <SheetDescription className="text-left">Navigate the site</SheetDescription>
            </SheetHeader>
            <nav className="mt-4 space-y-1">
              {routes.map((r) => (
                <Button
                  key={r.href}
                  onClick={() => {
                    router.push(r.href)
                    close()
                  }}
                  className={listItemClasses}
                  variant="ghost"
                >
                  {r.label}
                </Button>
              ))}
              <Accordion type="single" collapsible className="mt-2">
                <AccordionItem value="services">
                  <AccordionTrigger className="px-4">Our services</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col">
                      <Button
                        onClick={() => {
                          router.push('/services')
                          close()
                        }}
                        className={listItemClasses}
                        variant="ghost"
                      >
                        All services
                      </Button>
                      {services.map((service: any, idx: number) => (
                        <Button
                          key={idx}
                          onClick={() => {
                            router.push(`/services/${String(service.id)}`)
                            close()
                          }}
                          className={listItemClasses}
                          variant="ghost"
                        >
                          {String(service.value)}
                        </Button>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Separator className="my-3" />
              <div className="px-4 text-xs opacity-70">© {new Date().getFullYear()} SGP</div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex items-center justify-end gap-2 relative z-50 font-sabre">
        {/* Primary links */}
        {routes.map((r) => (
          <Link href={r.href} key={r.href} legacyBehavior>
            <a className={baseButtonClasses}>{r.label}</a>
          </Link>
        ))}

        {/* Services dropdown (shadcn DropdownMenu) */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="text-black">
            <Button className={`${baseButtonClasses} text-[16px]`} aria-haspopup="menu">
              Our Services
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" sideOffset={8} className="font-sabre min-w-[220px] ">
            <DropdownMenuLabel>Services</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => router.push('/services')}>
              All services
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            {services.map((service: any, index: number) => (
              <DropdownMenuItem
                key={index}
                onClick={() => router.push(`/services/${String(service.id)}`)}
              >
                {String(service.value)}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

export default NavBar
