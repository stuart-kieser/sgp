import ContentBlock from '@/components/blocks/ContentBlock'
import ContentBlockReversed from '@/components/blocks/ContentBlockReversed'
import MediaBlock from '@/components/blocks/MediaBlock'
import TextBlock from '@/components/blocks/TextBlock'
import { Page } from '@/payload-types'

// @ts-expect-error:Says layout is not an array but it is
const renderBlocks = (blocks: Page['layout'][0]) => {
  switch (blocks?.blockType) {
    case 'content-block':
      return <ContentBlock block={blocks} key={blocks.id} />
    case 'content-block-reversed':
      return <ContentBlockReversed block={blocks} key={blocks.id} />
    case 'text-block':
      return <TextBlock block={blocks} key={blocks.id} />
    case 'mediaBlock':
      return <MediaBlock block={blocks} key={blocks.id} />
    default:
      return null
  }
}

export default renderBlocks
