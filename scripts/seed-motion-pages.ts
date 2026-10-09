import 'dotenv/config'

import { createRequire } from 'node:module'
import { createLocalReq, getPayload, type File } from 'payload'

import config from '../src/payload.config'

const require = createRequire(import.meta.url)
const { Client } = require('../node_modules/.pnpm/pg@8.20.0/node_modules/pg')

const mediaSources = {
  heroImage: {
    alt: 'Motion demo hero image',
    url: 'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/3.x/templates/website/src/endpoints/seed/image-hero1.webp',
  },
  image1: {
    alt: 'Motion demo image 1',
    url: 'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/3.x/templates/website/src/endpoints/seed/image-post1.webp',
  },
  image2: {
    alt: 'Motion demo image 2',
    url: 'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/3.x/templates/website/src/endpoints/seed/image-post2.webp',
  },
  image3: {
    alt: 'Motion demo image 3',
    url: 'https://raw.githubusercontent.com/payloadcms/payload/refs/heads/3.x/templates/website/src/endpoints/seed/image-post3.webp',
  },
} as const

async function fetchFileByURL(url: string): Promise<File> {
  const res = await fetch(url, {
    credentials: 'include',
    method: 'GET',
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch file from ${url}, status: ${res.status}`)
  }

  const data = await res.arrayBuffer()

  return {
    name: url.split('/').pop() || `file-${Date.now()}`,
    data: Buffer.from(data),
    mimetype: `image/${url.split('.').pop()}`,
    size: data.byteLength,
  }
}

async function createMedia(
  payload: Awaited<ReturnType<typeof getPayload>>,
  req: Awaited<ReturnType<typeof createLocalReq>>,
  source: (typeof mediaSources)[keyof typeof mediaSources],
) {
  return payload.create({
    collection: 'media',
    data: {
      alt: source.alt,
    },
    depth: 0,
    file: await fetchFileByURL(source.url),
    overrideAccess: true,
    req,
  })
}

const richText = (text: string): any => ({
  root: {
    type: 'root',
    children: [
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            detail: 0,
            format: 0,
            mode: 'normal',
            style: '',
            text,
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        textFormat: 0,
        version: 1,
      },
    ],
    direction: 'ltr',
    format: '',
    indent: 0,
    version: 1,
  },
})

const customLink = (
  label: string,
  url: string,
  appearance: 'default' | 'outline' = 'default',
): any => ({
  link: {
    type: 'custom',
    appearance,
    label,
    url,
  },
})

const motionLabPage = (heroImageId: number) => ({
  slug: 'motion-lab',
  _status: 'published' as const,
  title: 'Motion Lab',
  hero: {
    type: 'lowImpact',
    richText: richText(
      'A seeded demo page with intentionally exaggerated motion so reveals, fly-ins, and stagger timing are easy to notice.',
    ),
  },
  layout: [
    {
      blockType: 'statsBand',
      eyebrow: 'Exaggerated Scale',
      title: 'Stats That Slam Into View',
      intro: richText(
        'This block uses a strong soft-scale entrance and slow stagger so the motion is obvious on first load.',
      ),
      motion: {
        sectionAnimation: 'soft-scale',
        introAnimation: 'fly-up',
        itemAnimation: 'fly-up',
        stagger: 320,
      },
      items: [
        { value: '420%', label: 'Reveal Intensity', description: 'Slow stagger and oversized values make the entrance hard to miss.' },
        { value: '1.8s', label: 'Section Presence', description: 'The section scales in first, then the cards cascade behind it.' },
        { value: '64px', label: 'Vertical Drift', description: 'Designed to feel theatrical instead of subtle for testing.' },
        { value: '12/10', label: 'Demo Drama', description: 'Useful when you need to confirm motion is actually working.' },
      ],
    },
    {
      blockType: 'timeline',
      eyebrow: 'Alternate Sides',
      title: 'Timeline Fly-Ins',
      intro: richText(
        'Each row alternates direction with a long stagger so the pattern is easy to inspect.',
      ),
      motion: {
        introAnimation: 'fly-up',
        itemAnimation: 'alternate-sides',
        stagger: 360,
      },
      items: [
        { period: 'Pass 01', title: 'First reveal', description: richText('The first row should slide in cleanly as it enters the viewport.') },
        { period: 'Pass 02', title: 'Direction swap', description: richText('The second row flips direction so the alternating preset is easy to confirm.') },
        { period: 'Pass 03', title: 'Slow stagger', description: richText('The delay is intentionally dramatic so you can watch each reveal separately.') },
        { period: 'Pass 04', title: 'Open the second demo', description: richText('Use the link below to compare the second motion test page.'), links: [customLink('Open Motion Showcase', '/motion-showcase', 'outline')] },
      ],
    },
    {
      blockType: 'accordion',
      eyebrow: 'Fly + Stagger',
      title: 'Accordion With Deliberate Entry Motion',
      intro: richText(
        'Scroll this section into view, then open the panels to verify content interaction still feels natural.',
      ),
      motion: {
        introAnimation: 'fly-left',
        itemAnimation: 'alternate-sides',
        stagger: 280,
      },
      items: [
        { title: 'What should I notice first?', content: richText('The heading column should fly in before the panels cascade.'), defaultOpen: true },
        { title: 'Why is this so dramatic?', content: richText('The stagger is intentionally slow and the direction alternates by panel.'), defaultOpen: false },
        { title: 'Is this useful for debugging?', content: richText('Yes. These settings make it very obvious when a motion preset is not applied.'), defaultOpen: false },
      ],
    },
  ],
  meta: {
    title: 'Motion Lab',
    description: 'A seeded demo page for the currently migrated animated blocks.',
    image: heroImageId,
  },
})

const motionShowcasePage = (heroImageId: number) => ({
  slug: 'motion-showcase',
  _status: 'published' as const,
  title: 'Motion Showcase',
  hero: {
    type: 'lowImpact',
    richText: richText(
      'A second seeded demo page for comparing different pacing, order, and stacked motion behavior.',
    ),
  },
  layout: [
    {
      blockType: 'accordion',
      eyebrow: 'Top-of-Page Motion',
      title: 'Accordion First',
      intro: richText(
        'This page starts with accordion motion so you can compare how the first visible animated block feels versus the layout on Motion Lab.',
      ),
      motion: {
        introAnimation: 'fly-up',
        itemAnimation: 'fly-up',
        stagger: 160,
      },
      items: [
        { title: 'Why lead with accordion?', content: richText('It helps compare how different block types feel when they are the first animated section on a page.'), defaultOpen: true },
        { title: 'What changed?', content: richText('The pacing is quicker here so the reveal feels more practical than theatrical.'), defaultOpen: false },
        { title: 'Where next?', content: richText('Scroll further to check a second timeline and stat section on the same page.'), defaultOpen: false },
      ],
    },
    {
      blockType: 'timeline',
      eyebrow: 'Follow-up Motion',
      title: 'A Secondary Timeline To Test Stacking',
      intro: richText(
        'This page stacks multiple animated blocks to confirm the motion controller affects more than one section.',
      ),
      motion: {
        introAnimation: 'fly-up',
        itemAnimation: 'alternate-sides',
        stagger: 300,
      },
      items: [
        { period: 'Pass 01', title: 'Top block enters', description: richText('You should see the accordion reveal before this timeline begins.') },
        { period: 'Pass 02', title: 'Timeline alternates', description: richText('This confirms the presets still apply further down the page.') },
        { period: 'Pass 03', title: 'CTA row appears', description: richText('The final row includes a link so the section still feels like realistic content.'), links: [customLink('Review The First Demo Page', '/motion-lab')] },
      ],
    },
    {
      blockType: 'statsBand',
      eyebrow: 'Lower Page Motion',
      title: 'Stats Near The Bottom',
      intro: richText(
        'This final block helps confirm that lower-page sections still animate after you have already triggered multiple reveals above it.',
      ),
      motion: {
        sectionAnimation: 'soft-scale',
        introAnimation: 'fly-up',
        itemAnimation: 'fly-up',
        stagger: 180,
      },
      items: [
        { value: '3', label: 'Animated blocks', description: 'A compact second page for repeated testing.' },
        { value: '300ms', label: 'Timeline stagger', description: 'Useful for visually confirming row separation.' },
        { value: '180ms', label: 'Stats stagger', description: 'A faster cadence than the first demo page.' },
      ],
    },
  ],
  meta: {
    title: 'Motion Showcase',
    description: 'A second seeded demo page for the currently migrated animated blocks.',
    image: heroImageId,
  },
})

async function createPage(
  payload: Awaited<ReturnType<typeof getPayload>>,
  req: Awaited<ReturnType<typeof createLocalReq>>,
  data: ReturnType<typeof motionLabPage> | ReturnType<typeof motionShowcasePage>,
) {
  return payload.create({
    collection: 'pages',
    data,
    depth: 0,
    overrideAccess: true,
    req,
  })
}

async function deleteExistingDemoPages() {
  const client = new Client({ connectionString: process.env.DATABASE_URL })

  await client.connect()
  try {
    await client.query(`
      DELETE FROM _pages_v
      WHERE parent_id IN (
        SELECT id FROM pages WHERE slug IN ('motion-lab', 'motion-showcase')
      );
    `)

    await client.query(`
      DELETE FROM pages
      WHERE slug IN ('motion-lab', 'motion-showcase');
    `)
  } finally {
    await client.end()
  }
}

async function main() {
  const payload = await getPayload({ config })
  const req = await createLocalReq({}, payload)

  payload.logger.info('Seeding motion showcase pages...')
  await deleteExistingDemoPages()

  const [heroImage] = await Promise.all([
    createMedia(payload, req, mediaSources.heroImage),
  ])

  const lab = await createPage(
    payload,
    req,
    motionLabPage(heroImage.id),
  )
  const showcase = await createPage(
    payload,
    req,
    motionShowcasePage(heroImage.id),
  )

  payload.logger.info({
    motionLabId: lab.id,
    motionShowcaseId: showcase.id,
    msg: 'Motion showcase pages are ready.',
  })
}

await main()
