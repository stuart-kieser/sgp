// app/layout.tsx (or app/(site)/layout.tsx)
import type { Metadata } from 'next'
import './globals.css'
import Logo from '@/components/logo'
import NavBar from '@/components/navbar'
import Footer from '@/components/Footer'
import DetailsTag from '@/components/detailstag'
import { getPayload } from 'payload'
import config from '@payload-config'
import type { Viewport } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://sgperf.co.za'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'SGPerformance — Redefining Motorsport Excellence',
    template: '%s | SGPerformance',
  },
  description:
    'SGPerformance delivers ECU remapping, turbo upgrades, and motorsport-grade tuning for 4x4s and performance cars. Dyno-proven gains, reliable setups, and expert support across South Africa.',
  keywords: [
    'SGPerformance',
    'SG Performance',
    'ECU remapping',
    'turbo upgrades',
    'performance tuning',
    'dyno tuning',
    '4x4 performance',
    'Suzuki Jimny',
    'motorsport',
    'South Africa',
    'turbo kit',
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'SGPerformance',
    title: 'SGPerformance — Redefining Motorsport Excellence',
    description:
      'ECU mapping, turbo systems, and dyno-proven performance upgrades for street and off-road builds.',
    images: [
      // swap in a real social image hosted on your domain
      { url: '/exhaust-system.jpg' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SGPerformance — Redefining Motorsport Excellence',
    description:
      'ECU remaps, turbo upgrades, and motorsport-grade tuning. Dyno-proven gains and reliable setups.',
    images: ['/exhaust-system.jpg'],
  },
  robots: { index: true, follow: true },
  applicationName: 'SGPerformance',
  category: 'Automotive',
}

export const viewport: Viewport = {
  themeColor: 'black',
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const payload = await getPayload({ config })

  async function getServices() {
    const services = await payload.db.find({ collection: 'services' })
    return services.docs
  }

  let services: any[] = []
  try {
    services = (await getServices()) ?? []
  } catch {
    services = []
  }

  return (
    <html lang="en-ZA">
      <body className="antialiased">
        <div className="hidden sm:block">
          <DetailsTag />
        </div>
        <div className="bg-[#00a79d] px-8 py-6 w-full flex flex-row place-content-center lg:justify-between">
          <div className="hidden lg:block">
            <Logo />
          </div>
          <div className="flex flex-col justify-center place-items-end">
            <NavBar className="" services={services} />
          </div>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  )
}
