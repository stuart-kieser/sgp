'use client'
import * as React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

import data from '@/data'

import { useRouter } from 'next/navigation'

const services = data.getServices()

const NavBar: React.FC<{ className: string }> = ({ className }) => {
  const router = useRouter()
  return (
    <>
      {/* Mobile Dropdown Menu */}
      <div className={`lg:hidden ${className} w-full`}>
        <NavigationMenu className="font-sabre self-end">
          <NavigationMenuList className="flex flex-row justify-end w-full">
            <NavigationMenuItem className="w-max ml-auto">
              <NavigationMenuTrigger className="w-max bg-[#00a79d] hover:bg-teal-500">
                SGP
              </NavigationMenuTrigger>
              <NavigationMenuContent className="w-max">
                <div className="flex flex-col text-left">
                  <button
                    onClick={() => router.push('/')}
                    className="group inline-flex h-9 w-full items-center justify-start rounded-md px-4 py-2 font-medium hover:scale-105 active:scale-95"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => router.push('/vehicles')}
                    className="group inline-flex h-9 w-full items-center justify-start rounded-md px-4 py-2 font-medium hover:scale-105 active:scale-95"
                  >
                    Vehicles
                  </button>
                  <button
                    onClick={() => router.push(`/services`)}
                    className="group inline-flex h-9 w-full items-center justify-start rounded-md px-4 py-2 font-medium hover:scale-105 active:scale-95"
                  >
                    Our services
                  </button>
                  <button
                    onClick={() => router.push('/gallery')}
                    className="group inline-flex h-9 w-full items-center justify-start rounded-md px-4 py-2 font-medium hover:scale-105 active:scale-95"
                  >
                    Gallery
                  </button>
                  <button
                    onClick={() => router.push('/contact-us')}
                    className="group inline-flex h-9 w-full items-center justify-start rounded-md px-4 py-2 font-medium hover:scale-105 active:scale-95"
                  >
                    Contact us
                  </button>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {/* Desktop Menu */}
      <NavigationMenu className={`font-sabre ${className} self-end hidden lg:flex`}>
        <NavigationMenuList className="flex flex-col lg:flex-row font-medium">
          <NavigationMenuItem>
            <button
              onClick={() => router.push('/')}
              className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 font-medium transition-colors hover:text-accent-foreground focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 group bg-[#00a79d] hover:bg-teal-500"
            >
              Home
            </button>
          </NavigationMenuItem>
          <NavigationMenuItem
            className="text-[16px] active:bg-[#00a79d] text-l group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 font-medium transition-colors hover:text-accent-foreground focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 group bg-[#00a79d] hover:bg-teal-500"
            onClick={() => router.push('/vehicles')}
          >
            Vehicles
          </NavigationMenuItem>
          <NavigationMenuItem className="bg-transparent">
            <NavigationMenuTrigger
              className="text-[16px] active:bg-[#00a79d] text-l group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 font-medium transition-colors hover:text-accent-foreground focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 group bg-[#00a79d] hover:bg-teal-500"
              onClick={() => router.push('/services')}
            >
              Our Services
            </NavigationMenuTrigger>

            <NavigationMenuContent>
              <div className="flex flex-col text-left text-l">
                {services.map((service: any, index: any) => (
                  <button
                    onClick={() => router.push(`/services/${String(service.id)}`)}
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 font-medium hover:scale-105 active:scale-95 "
                    key={index}
                  >
                    {String(service.value)}
                  </button>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <button
              onClick={() => router.push('/gallery')}
              className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 font-medium transition-colors hover:text-accent-foreground focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 group bg-[#00a79d] hover:bg-teal-500"
            >
              Gallery
            </button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <button
              onClick={() => router.push('/contact-us')}
              className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 font-medium transition-colors hover:text-accent-foreground focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 group bg-[#00a79d] hover:bg-teal-500"
            >
              Contact us
            </button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  )
}
export default NavBar
