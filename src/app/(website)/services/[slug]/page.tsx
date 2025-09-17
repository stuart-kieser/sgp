// app/services/[slug]/page.tsx
import Image from 'next/image'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'
import { toAbsolute } from '@/lib/utils'
import renderBlocks from '@/lib/renderBlocks'

type ServiceDoc = {
  id: string | number
  title?: string
  slug: string
  info?: string
  layout?: any[]
  meta?: {
    title?: string
    description?: string
    image?: { url?: string } | null
    canonicalURL?: string
    noIndex?: boolean
    noFollow?: boolean
  }
  image: {
    id: number
    alt: string
    thumbnailURL: null
    filename: string
    mimeType: string
    filesize: number
    width: number
    height: number
    focalX: number
    focalY: number
    updatedAt?: string
    createdAt?: string
    url: string
  }
  updatedAt?: string
  createdAt?: string
}

const SITE_URL = 'https://sgpref.co.za' // <-- set your real canonical origin here

async function getServiceBySlug(slug: string) {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'services',
    where: { slug: { equals: slug } },
    depth: 2, // resolve meta.image.url if it's an upload
    limit: 1,
  })
  return docs?.[0]
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const { slug } = await params
  const svc: ServiceDoc = (await getServiceBySlug(slug)) as ServiceDoc
  if (!svc) return { title: 'Service not found — SGP Ref' }

  const m = svc.meta ?? {}
  const title = (m.title || svc.title || 'Service')?.trim()
  const description = (m.description || svc.info || '').trim() || undefined

  // canonical
  const canonical = `${SITE_URL}/services/${slug}`.trim()

  // image: prefer meta.image.url, else hero url/file
  const heroCandidates = [
    (m.image as any)?.url,
    svc.image.url ? toAbsolute(svc.image.url) : undefined,
    svc.image.filename ? `${SITE_URL}/media/${svc.image.filename}` : undefined,
  ].filter(Boolean) as string[]
  const ogImage = heroCandidates[0]

  const index = true
  const follow = true

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'article',
      siteName: 'SGP Ref',
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
    twitter: {
      card: ogImage ? 'summary_large_image' : 'summary',
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
    robots: {
      index,
      follow,
    },
    other: svc.updatedAt ? { 'last-modified': new Date(svc.updatedAt).toUTCString() } : undefined,
  }
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const service: ServiceDoc = (await getServiceBySlug(slug)) as ServiceDoc
  if (!service) return notFound()
  console.log(service.image.url)

  let heroSrc = ''
  if (service?.image.url) {
    heroSrc = toAbsolute(service.image.url)
  } else if (service?.image.filename) {
    heroSrc = `${SITE_URL}/media/${service.image.filename}`
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.meta?.title || service.title || 'Service',
    description: service.meta?.description || service.info || undefined,
    url: `${SITE_URL}/services/${slug}`,
    image: heroSrc || undefined,
    areaServed: 'ZA',
    provider: {
      '@type': 'Organization',
      name: 'SGP Ref',
      url: SITE_URL,
    },
  }

  return (
    <div className="bg-[#101010] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative h-[450px] w-full border-b-4 border-orange-600">
        {heroSrc ? (
          <Image
            src={heroSrc}
            alt={service?.title || 'Service hero image'}
            fill
            priority
            className="object-cover md:object-center"
            sizes="(max-width: 640px) 100vw, 100vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-sm text-white/60">
            No image available
          </div>
        )}
      </div>

      <div className="flex flex-col p-8 z-40">
        <div className="prose prose-invert max-w-none">
          {Array.isArray(service.layout) && service.layout.length > 0 ? (
            service.layout.map((block, i) => <div key={block.id || i}>{renderBlocks(block)}</div>)
          ) : (
            <p>No content yet.</p>
          )}
        </div>
      </div>
    </div>
  )
}
