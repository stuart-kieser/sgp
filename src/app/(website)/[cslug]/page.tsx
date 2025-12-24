// app/<wherever-this-route-lives>/[cslug]/page.tsx
import { getPayload } from 'payload'
import config from '@payload-config'
import UC from '../uc/page'
import { Page } from '@/payload-types'
import renderBlocks from '@/lib/renderBlocks'
import type { Metadata } from 'next'
import { toAbsolute } from '@/lib/utils'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const SITE_URL = process.env.PAYLOAD_PUBLIC_SITE_URL

async function getCustomPageBySlug(slug: string) {
  try {
    const payload = await getPayload({ config })
    const page = await payload.find({
      collection: 'page',
      where: { 'custom-slug': { equals: slug } },
      depth: 2, // resolve any upload fields used in meta.image
      limit: 1,
    })
    return (page?.docs?.[0] as unknown as Page) || null
  } catch (error) {
    console.error('Error fetching custom page:', error)
    return null
  }
}

// ---- Metadata ----
export async function generateMetadata({
  params,
}: {
  params: { cslug: string }
}): Promise<Metadata> {
  const { cslug } = await params
  const doc = await getCustomPageBySlug(cslug)

  if (!doc) {
    return {
      title: 'Page not found — SGP Ref',
      robots: { index: false, follow: false },
      alternates: { canonical: `${SITE_URL}/custom/${cslug}` },
    }
  }

  const m: any = (doc as any).meta ?? {}
  const baseTitle = 'SGP Ref'
  const titleCore = (m.title || doc.title || 'Page').trim()
  const title = `${titleCore} — ${baseTitle}`
  const description =
    (m.description || (doc as any).description || '').toString().trim() || undefined

  // canonical (prefer CMS, else fallback)
  const canonical = (
    typeof m.canonicalURL === 'string' && m.canonicalURL.trim()
      ? toAbsolute(m.canonicalURL.trim())
      : `${SITE_URL}/custom/${cslug}`
  ) as string

  // image candidates -> normalize to absolute
  const heroCandidates = [
    (m.image as any)?.url,
    // If your Page type has other image fields, add them here:
    (doc as any)?.image?.url,
    (doc as any)?.image?.filename ? `/media/${(doc as any).image.filename}` : undefined,
  ]
    .filter(Boolean)
    .map((u) => toAbsolute(u as string)) as string[]

  const ogImage = heroCandidates[0]

  // robots from CMS flags (default allow)
  const index = m.noIndex === true ? false : true
  const follow = m.noFollow === true ? false : true

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
    robots: { index, follow },
    other: (doc as any)?.updatedAt
      ? { 'last-modified': new Date((doc as any).updatedAt).toUTCString() }
      : undefined,
  }
}

// ---- Page ----
export default async function CustomPage({ params }: { params: { cslug: string } }) {
  const { cslug } = await params
  const matchedPage = await getCustomPageBySlug(cslug)
  console.log(matchedPage)

  if (!matchedPage) {
    // fallback if no match
    return <UC />
  }

  // if match found, render the block or custom component
  return (
    <div className="bg-[#101010] p-10">
      <div className="flex flex-col">{matchedPage.layout?.map((block) => renderBlocks(block))}</div>
    </div>
  )
}
