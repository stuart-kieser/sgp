import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { Archive } from '../../blocks/ArchiveBlock/config'
import { Accordion } from '../../blocks/Accordion/config'
import { CaseStudyPreview } from '../../blocks/CaseStudyPreview/config'
import { CallToAction } from '../../blocks/CallToAction/config'
import { ComparisonTable } from '../../blocks/ComparisonTable/config'
import { Content } from '../../blocks/Content/config'
import { CtaBand } from '../../blocks/CtaBand/config'
import { EventSchedule } from '../../blocks/EventSchedule/config'
import { FaqGrid } from '../../blocks/FaqGrid/config'
import { FeatureShowcase } from '../../blocks/FeatureShowcase/config'
import { FeatureTabs } from '../../blocks/FeatureTabs/config'
import { FormBlock } from '../../blocks/Form/config'
import { LogoRail } from '../../blocks/LogoRail/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'
import { MediaMosaic } from '../../blocks/MediaMosaic/config'
import { MetricsDashboard } from '../../blocks/MetricsDashboard/config'
import { PricingGrid } from '../../blocks/PricingGrid/config'
import { ProcessSteps } from '../../blocks/ProcessSteps/config'
import { QuoteMarquee } from '../../blocks/QuoteMarquee/config'
import { StatsBand } from '../../blocks/StatsBand/config'
import { StickyStory } from '../../blocks/StickyStory/config'
import { TeamGrid } from '../../blocks/TeamGrid/config'
import { TestimonialStack } from '../../blocks/TestimonialStack/config'
import { Timeline } from '../../blocks/Timeline/config'
import { hero } from '@/heros/config'
import { slugField } from 'payload'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { revalidateDelete, revalidatePage } from './hooks/revalidatePage'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

export const Pages: CollectionConfig<'pages'> = {
  slug: 'pages',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  // This config controls what's populated by default when a page is referenced
  // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
  // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'pages'>
  defaultPopulate: {
    title: true,
    slug: true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) =>
        generatePreviewPath({
          slug: data?.slug,
          collection: 'pages',
          req,
        }),
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: data?.slug as string,
        collection: 'pages',
        req,
      }),
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          fields: [hero],
          label: 'Hero',
        },
        {
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [
                CallToAction,
                Content,
                MediaBlock,
                Archive,
                FormBlock,
                Timeline,
                FeatureShowcase,
                Accordion,
                StatsBand,
                LogoRail,
                TestimonialStack,
                PricingGrid,
                ProcessSteps,
                MetricsDashboard,
                ComparisonTable,
                StickyStory,
                MediaMosaic,
                FeatureTabs,
                FaqGrid,
                CtaBand,
                TeamGrid,
                CaseStudyPreview,
                EventSchedule,
                QuoteMarquee,
              ],
              required: true,
              admin: {
                initCollapsed: true,
              },
            },
          ],
          label: 'Content',
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    slugField(),
  ],
  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
