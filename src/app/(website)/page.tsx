import Introduction from '@/components/Introduction'
import OurStory from '@/components/OurStory'
import PhotoBar from '@/components/Photobar'
import Service from '@/components/Services'
import ContactUs from './contact-us/page'
import { PhotoBarGlobal } from '@/globals/PhotoBarGlobal'
import { BrandGlobal } from '@/globals/BrandGlobal'
import Brands from '@/components/Brands'
import { getPayload } from 'payload'
import config from '@payload-config'
import PageBreak from '@/components/PageBreak'

export default async function Home() {
  const payload = await getPayload({ config })

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

  async function getIntro() {
    const result = await payload.find({
      collection: 'intros', // required
      sort: '-createdAt',
    })
    console.log(result.docs[0].image)
    return result.docs.reverse()
  }

  async function getServices() {
    const result = await payload.find({
      collection: 'services', // required
      sort: '-createdAt',
    })
    return result.docs.reverse()
  }

  async function getPageBreak() {
    const { docs } = await payload.find({
      collection: 'page-breaks',
      depth: 1,
      limit: 1,
    })

    const doc = docs[0]
    if (!doc) return null
    return doc
  }

  let gallery: PhotoBarGlobal = { images: [] } // fallback structure
  let brands: BrandGlobal = { brands: [] } // fallback structure
  let intro: any = { intro: [] }
  let services: any = { intro: [] }
  let page_break: any

  try {
    gallery = await getPhotoBar()
    brands = await getBrands()
    intro = await getIntro()
    services = await getServices()
    page_break = await getPageBreak()
  } catch (err) {
    console.warn('Could not fetch PhotoBar data at build time:', err)
  }

  return (
    <div>
      <Introduction intro={intro} />
      <Service services={services} />
      <PageBreak doc={page_break} />
      <Brands brands={brands} />
      <PhotoBar gallery={gallery} />
      <OurStory />
      <ContactUs />
    </div>
  )
}
