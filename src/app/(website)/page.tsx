import OurStory from '@/components/ourStory'
import ContactUs from './contact-us/page'
import { PhotoBarGlobal } from '@/globals/PhotoBarGlobal'
import { BrandGlobal } from '@/globals/BrandGlobal'
import { getPayload } from 'payload'
import config from '@payload-config'
import PageBreak from '@/components/pageBreak'
import Introduction from '@/components/introduction'
import Service from '@/components/services'
import Brands from '@/components/brands'
import PhotoBar from '@/components/photobar'

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
    return result.docs.reverse()
  }

  async function getServices() {
    const result = await payload.find({
      collection: 'services', // required
      sort: '-createdAt',
    })
    console.log(result)
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
  let intro: any[] = []
  let services: any[] = []
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
      {intro.length > 0 ? <Introduction intro={intro} /> : null}
      <Service services={services} />
      <PageBreak doc={page_break} />
      <Brands brands={brands} />
      <PhotoBar gallery={gallery} />
      <OurStory />
      <ContactUs />
    </div>
  )
}
