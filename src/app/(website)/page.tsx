import Introduction from '@/components/introduction'
import OurStory from '@/components/our-story'
import PhotoBar from '@/components/photobar'
import Service from '@/components/services'
import ContactUs from './contact-us/page'
import { PhotoBarGlobal } from '@/globals/PhotoBarGlobal'
import { BrandGlobal } from '@/globals/BrandGlobal'
import Brands from '@/components/brands'

export const dynamic = 'force-dynamic'

export default async function Home() {
  async function getPhotoBar(): Promise<PhotoBarGlobal> {
    const res = await fetch(`${process.env.PAYLOAD_PUBLIC_API_URL}/api/globals/photo-bar`, {
      cache: 'no-store',
      next: { revalidate: 0 },
    })

    if (!res.ok) throw new Error('Failed to fetch PhotoBar')
    return res.json()
  }

  async function getBrands(): Promise<BrandGlobal> {
    const res = await fetch(`${process.env.PAYLOAD_PUBLIC_API_URL}/api/globals/brands`, {
      cache: 'no-store',
      next: { revalidate: 0 },
    })

    if (!res.ok) throw new Error('Failed to fetch Brands')
    return res.json()
  }
  let gallery: PhotoBarGlobal = { images: [] } // fallback structure
  let brands: BrandGlobal = { brands: [] } // fallback structure
  try {
    gallery = await getPhotoBar()
    brands = await getBrands()
  } catch (err) {
    console.warn('Could not fetch PhotoBar data at build time:', err)
  }

  return (
    <div>
      <Introduction />
      <Service />
      <div
        className="bg-[url('/images/turbocharger.jpg')] bg-cover bg-center w-auto"
        style={{ backgroundPositionY: '23%' }}
      >
        <ul className="text-white font-sabre text-xl sm:text-right flex flex-col justify-center text-left px-10 py-8 min-h-[550px]">
          <li className="pb-4">
            The <span className="text-2xl">SG Jimny</span>
          </li>
          <li>SGPerformance Garrett GT17 Turbo</li>
          <li>+ 130kW and 250Nm</li>
        </ul>
      </div>

      <Brands brands={brands} />
      <PhotoBar gallery={gallery} />
      <OurStory />
      <ContactUs />
    </div>
  )
}
