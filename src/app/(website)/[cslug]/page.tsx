import { getPayload } from 'payload'
import config from '@payload-config'
import UC from '../uc/page'
import { Page } from '@/payload-types'
import renderBlocks from '@/lib/renderBlocks'

export default async function CustomPage({ params }: { params: Promise<{ cslug: string }> }) {
  const { cslug } = await params
  const payload = await getPayload({ config })

  async function getCustomPageBySlug(slug: string) {
    try {
      const page = await payload.find({
        collection: 'page',
        where: {
          'custom-slug': {
            equals: slug,
          },
        },
      })
      const customPage = page.docs[0]

      return customPage as unknown as Page
      // if (!global || !global['custom-page-links']) return null
      // return global['custom-page-links'].find((page) => page['custom-slug'] === slug)
    } catch (error) {
      console.error('Error fetching global:', error)
      return null
    }
  }

  const matchedPage = await getCustomPageBySlug(cslug)

  if (!matchedPage) {
    // fallback if no match
    return <UC />
  }

  // if match found, render the block or custom component
  return (
    <div className="bg-[#101010] p-10">
      <h1 className="text-white font-sabre text-2xl md:text-4xl mb-5 md:md-10">
        {matchedPage.name}
      </h1>
      <div className="flex flex-col">{matchedPage.layout?.map((block) => renderBlocks(block))}</div>
    </div>
  )
}
