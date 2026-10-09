import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { AccordionBlock } from '@/blocks/Accordion/Component'
import { CaseStudyPreviewBlock } from '@/blocks/CaseStudyPreview/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ComparisonTableBlock } from '@/blocks/ComparisonTable/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { CtaBandBlock } from '@/blocks/CtaBand/Component'
import { EventScheduleBlock } from '@/blocks/EventSchedule/Component'
import { FaqGridBlock } from '@/blocks/FaqGrid/Component'
import { FeatureShowcaseBlock } from '@/blocks/FeatureShowcase/Component'
import { FeatureTabsBlock } from '@/blocks/FeatureTabs/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { LogoRailBlock } from '@/blocks/LogoRail/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { MediaMosaicBlock } from '@/blocks/MediaMosaic/Component'
import { MetricsDashboardBlock } from '@/blocks/MetricsDashboard/Component'
import { PricingGridBlock } from '@/blocks/PricingGrid/Component'
import { ProcessStepsBlock } from '@/blocks/ProcessSteps/Component'
import { QuoteMarqueeBlock } from '@/blocks/QuoteMarquee/Component'
import { StatsBandBlock } from '@/blocks/StatsBand/Component'
import { StickyStoryBlock } from '@/blocks/StickyStory/Component'
import { TeamGridBlock } from '@/blocks/TeamGrid/Component'
import { TestimonialStackBlock } from '@/blocks/TestimonialStack/Component'
import { TimelineBlock } from '@/blocks/Timeline/Component'

const blockComponents = {
  accordion: AccordionBlock,
  archive: ArchiveBlock,
  caseStudyPreview: CaseStudyPreviewBlock,
  comparisonTable: ComparisonTableBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  ctaBand: CtaBandBlock,
  eventSchedule: EventScheduleBlock,
  faqGrid: FaqGridBlock,
  featureShowcase: FeatureShowcaseBlock,
  featureTabs: FeatureTabsBlock,
  formBlock: FormBlock,
  logoRail: LogoRailBlock,
  mediaBlock: MediaBlock,
  mediaMosaic: MediaMosaicBlock,
  metricsDashboard: MetricsDashboardBlock,
  pricingGrid: PricingGridBlock,
  processSteps: ProcessStepsBlock,
  quoteMarquee: QuoteMarqueeBlock,
  statsBand: StatsBandBlock,
  stickyStory: StickyStoryBlock,
  teamGrid: TeamGridBlock,
  testimonialStack: TestimonialStackBlock,
  timeline: TimelineBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="my-16" key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
