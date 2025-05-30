import type { Metadata } from 'next'
import './globals.css'
import Logo from '@/components/logo'
import NavBar from '@/components/navbar'
import Footer from '@/components/Footer'
import DetailsTag from '@/components/detailstag'

export const metadata: Metadata = {
  title: 'SGPerformance | Redefining Motorsport Excellence',
  description: 'Built By Webblock',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <div className="hidden sm:block">
          <DetailsTag />
        </div>
        <div className="bg-[#00a79d] px-8 py-6 w-full flex flex-row place-content-center lg:justify-between">
          <div className="hidden lg:block">
            <Logo />
          </div>
          <div className="flex flex-col justify-center place-items-end">
            <NavBar className="" />
          </div>
        </div>

        {children}
        <Footer />
      </body>
    </html>
  )
}
