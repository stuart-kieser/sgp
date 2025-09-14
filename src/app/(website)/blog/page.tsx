import Block from '@/components/blocks/ContentBlock'
import { getPayload } from 'payload'
import config from '@payload-config'

export default async function Blog() {
  const payload = await getPayload({ config })
  async function getBlockSelect() {
    const block = await payload.findGlobal({
      slug: 'custom-link',
    })

    return block
  }

  let global: any
  try {
    // global = getBlockSelect()
  } catch (e) {
    global = []
  }
  // nav to under construction page
  // return <Block />
  return <></>
}
