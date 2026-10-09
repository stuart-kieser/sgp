import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type MotionPagesArgs = {
  image1: Media
  image2: Media
  image3: Media
  heroImage: Media
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

export const motionLabPage = ({
  heroImage,
  image1,
  image2,
  image3,
}: MotionPagesArgs): RequiredDataFromCollectionSlug<'pages'> => ({
  slug: 'motion-lab',
  _status: 'published',
  title: 'Motion Lab',
  hero: {
    type: 'highImpact',
    media: heroImage.id,
    links: [customLink('Open Motion Showcase', '/motion-showcase'), customLink('Browse Posts', '/posts', 'outline')],
    richText: richText('A showcase page packed with animated marketing blocks and intentionally dramatic reveal settings.'),
  },
  layout: [
    {
      blockType: 'statsBand',
      eyebrow: 'Exaggerated Scale',
      title: 'Stats That Slam Into View',
      intro: richText('This section is tuned to make the initial reveal impossible to miss.'),
      motion: { sectionAnimation: 'soft-scale', introAnimation: 'fly-up', itemAnimation: 'fly-up', stagger: 320 },
      items: [
        { value: '420%', label: 'Reveal Intensity', description: 'Slow stagger and oversized numbers make the animation obvious.' },
        { value: '1.8s', label: 'Section Presence', description: 'A theatrical pace that makes each card easy to notice.' },
        { value: '64px', label: 'Vertical Drift', description: 'Bigger spacing and timing for debug-friendly motion.' },
        { value: '12/10', label: 'Demo Drama', description: 'Designed to prove the animation system is alive.' },
      ],
    },
    {
      blockType: 'timeline',
      eyebrow: 'Alternate Sides',
      title: 'Timeline Fly-Ins',
      intro: richText('Every entry alternates direction with a large stagger so the pattern is easy to inspect.'),
      motion: { introAnimation: 'fly-up', itemAnimation: 'alternate-sides', stagger: 360 },
      items: [
        { period: 'Step 01', title: 'Watch the first reveal', description: richText('The first card should slide in from one side once it enters the viewport.') },
        { period: 'Step 02', title: 'Notice the direction swap', description: richText('The second row flips direction to confirm the alternate-sides preset is working.') },
        { period: 'Step 03', title: 'Feel the long stagger', description: richText('The delay is intentionally slow so each reveal happens as a distinct event.') },
        {
          period: 'Step 04',
          title: 'Continue to the second demo page',
          description: richText('The final card keeps the pattern going and points you to the rest of the block pack.'),
          links: [customLink('Open Motion Showcase', '/motion-showcase', 'outline')],
        },
      ],
    },
    {
      blockType: 'accordion',
      eyebrow: 'Fly + Stagger',
      title: 'Accordion With Deliberate Entry Motion',
      intro: richText('Scroll until these panels enter view, then open them to confirm the interaction still feels natural.'),
      motion: { introAnimation: 'fly-left', itemAnimation: 'alternate-sides', stagger: 280 },
      items: [
        { title: 'What should I notice first?', content: richText('The heading column should fly in before the panels cascade.'), defaultOpen: true },
        { title: 'What makes this exaggerated?', content: richText('The stagger is intentionally slow and the direction alternates by panel.'), defaultOpen: false },
        { title: 'Does this stay server-rendered?', content: richText('Yes. The content renders on the server and motion progressively enhances after hydration.'), defaultOpen: false },
        { title: 'How do I tone it down later?', content: richText('Reduce the stagger, switch the preset, or remove side-based motion in the Motion Settings group.'), defaultOpen: false },
      ],
    },
    {
      blockType: 'logoRail',
      eyebrow: 'Proof Rail',
      title: 'Logo Rail',
      intro: richText('A compact partner strip that works nicely above or below stronger sections.'),
      motion: { introAnimation: 'fly-up', itemAnimation: 'fly-up', stagger: 70 },
      logos: [
        { name: 'Northstar', media: image1.id, url: '/posts' },
        { name: 'Vector Labs', media: image2.id, url: '/posts' },
        { name: 'Signal Works', media: image3.id, url: '/posts' },
        { name: 'Summit One', media: heroImage.id, url: '/posts' },
      ],
    },
    {
      blockType: 'testimonialStack',
      eyebrow: 'Social Proof',
      title: 'Testimonial Stack',
      intro: richText('These cards use alternating motion and layered surfaces to feel a little more editorial.'),
      motion: { introAnimation: 'fly-up', itemAnimation: 'alternate-sides', stagger: 180 },
      testimonials: [
        { quote: 'The new motion builder makes launch pages feel premium without adding client-side chaos.', author: 'Maya Chen', role: 'Design Director', company: 'Northstar', avatar: image1.id },
        { quote: 'Editors can control the pacing directly in Payload, which makes experimentation much easier.', author: 'Alex Rowan', role: 'Marketing Lead', company: 'Signal Works', avatar: image2.id },
        { quote: 'This is the first time our content team has had a visual system that still feels developer-friendly.', author: 'Priya Moyo', role: 'Content Strategist', company: 'Vector Labs', avatar: image3.id },
      ],
    },
    {
      blockType: 'pricingGrid',
      eyebrow: 'Commercial Layout',
      title: 'Pricing Grid',
      intro: richText('A reusable pricing section that works well for SaaS, services, and membership pages.'),
      motion: { introAnimation: 'fly-up', itemAnimation: 'fly-up', stagger: 110 },
      plans: [
        {
          name: 'Starter',
          price: '$29',
          billingNote: 'per month',
          summary: 'A clean starting point for smaller teams shipping content regularly.',
          features: [{ label: '3 active campaigns' }, { label: 'Basic analytics' }, { label: 'Shared components' }],
          links: [customLink('Choose Starter', '/contact')],
        },
        {
          name: 'Growth',
          price: '$79',
          billingNote: 'per month',
          summary: 'The most balanced option for teams running multiple landing pages.',
          featured: true,
          features: [{ label: 'Unlimited campaigns' }, { label: 'Editor motion controls' }, { label: 'Team workflows' }],
          links: [customLink('Choose Growth', '/contact', 'outline')],
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          billingNote: 'tailored rollout',
          summary: 'For teams that want systemized storytelling across many pages and stakeholders.',
          features: [{ label: 'Advanced governance' }, { label: 'Custom block extensions' }, { label: 'Priority support' }],
          links: [customLink('Talk to Sales', '/contact')],
        },
      ],
    },
    {
      blockType: 'processSteps',
      eyebrow: 'Operational Story',
      title: 'Process Steps',
      intro: richText('A polished alternative to timelines when you want to explain how work flows, not just when it happens.'),
      motion: { introAnimation: 'fly-up', itemAnimation: 'alternate-sides', stagger: 150 },
      steps: [
        { stepLabel: '01', title: 'Model the content', description: richText('Create the block schema in Payload so editors can assemble pages safely.'), media: image1.id },
        { stepLabel: '02', title: 'Seed the patterns', description: richText('Populate demo pages so the team can see real examples in context.'), media: image2.id },
        { stepLabel: '03', title: 'Tune the motion', description: richText('Use stagger, intro, and item presets to find the right pacing for each section.'), media: image3.id },
      ],
    },
    {
      blockType: 'metricsDashboard',
      eyebrow: 'Dense Data',
      title: 'Metrics Dashboard',
      intro: richText('For product or SaaS pages that need more dashboard-style proof points than a standard stat band.'),
      motion: { sectionAnimation: 'soft-scale', introAnimation: 'fly-up', itemAnimation: 'fly-up', stagger: 90 },
      metrics: [
        { label: 'Conversion lift', value: '+38%', trend: 'Up this quarter', description: 'Pages built with richer structure kept people exploring longer.' },
        { label: 'Editor speed', value: '2.1x', trend: 'Operational gain', description: 'Teams can launch variations without waiting on engineering for each section.' },
        { label: 'Preview confidence', value: '94%', trend: 'High trust', description: 'Live preview and motion controls reduced surprise at publish time.' },
        { label: 'Reusable sections', value: '18', trend: 'Growing system', description: 'A wider library gives content teams more range without ad hoc designs.' },
      ],
    },
    {
      blockType: 'comparisonTable',
      eyebrow: 'Decision Support',
      title: 'Comparison Table',
      intro: richText('A practical structure for comparing plans, services, packages, or implementation approaches.'),
      motion: { introAnimation: 'fly-up', itemAnimation: 'fly-up', stagger: 60 },
      columns: [{ label: 'Starter' }, { label: 'Growth' }, { label: 'Enterprise' }],
      rows: [
        { label: 'Motion controls', cells: [{ value: 'Basic' }, { value: 'Advanced' }, { value: 'Advanced + custom' }] },
        { label: 'Content governance', cells: [{ value: 'Manual' }, { value: 'Structured' }, { value: 'Structured + reviewed' }] },
        { label: 'Support model', cells: [{ value: 'Email' }, { value: 'Priority' }, { value: 'Dedicated partner' }] },
      ],
    },
  ],
  meta: {
    title: 'Motion Lab',
    description: 'A demo page showcasing animated marketing blocks built with Payload and Next.js.',
    image: heroImage.id,
  },
})

export const motionShowcasePage = ({
  heroImage,
  image1,
  image2,
  image3,
}: MotionPagesArgs): RequiredDataFromCollectionSlug<'pages'> => ({
  slug: 'motion-showcase',
  _status: 'published',
  title: 'Motion Showcase',
  hero: {
    type: 'mediumImpact',
    media: heroImage.id,
    links: [customLink('Return to Motion Lab', '/motion-lab')],
    richText: richText('A second demo page focused on richer visual storytelling blocks, stickier layouts, and denser editorial patterns.'),
  },
  layout: [
    {
      blockType: 'featureShowcase',
      eyebrow: 'Big Card Motion',
      title: 'Feature Cards With Slow, Obvious Reveals',
      intro: richText('This section demonstrates slower reveals, optional media, and stronger parallax once images are attached.'),
      motion: { introAnimation: 'fly-up', itemAnimation: 'fly-up', stagger: 380, parallaxStrength: 48 },
      items: [
        { kicker: 'Card One', title: 'Slow reveal card', description: 'This card arrives slowly enough that you can clearly track the entrance.', media: image1.id, links: [customLink('Back to Motion Lab', '/motion-lab')] },
        { kicker: 'Card Two', title: 'Hover and motion test', description: 'A useful combination of hover polish and bold reveal pacing.', media: image2.id },
        { kicker: 'Card Three', title: 'Parallax-ready slot', description: 'This card uses media so the stronger parallax setting is actually visible.', media: image3.id, links: [customLink('Open Page Admin', '/admin/collections/pages', 'outline')] },
      ],
    },
    {
      blockType: 'stickyStory',
      eyebrow: 'Narrative Layout',
      title: 'Sticky Story',
      intro: richText('This pattern pairs a sticky visual with a scrollable series of story panels.'),
      motion: { introAnimation: 'fly-up', itemAnimation: 'alternate-sides', stagger: 180 },
      panels: [
        { eyebrow: 'Scene 01', title: 'Anchor the visual', content: richText('The first panel supplies the sticky media that remains pinned on larger screens.'), media: heroImage.id },
        { eyebrow: 'Scene 02', title: 'Tell the story in beats', content: richText('Each panel enters separately, creating a more deliberate narrative rhythm.'), media: image1.id },
        { eyebrow: 'Scene 03', title: 'Swap content without redesigning', content: richText('Editors can refresh the story without needing a new custom page every time.'), media: image2.id },
      ],
    },
    {
      blockType: 'mediaMosaic',
      eyebrow: 'Visual Density',
      title: 'Media Mosaic',
      intro: richText('An asymmetrical media collage that adds variety to the middle of a long landing page.'),
      motion: { introAnimation: 'fly-up', itemAnimation: 'alternate-sides', stagger: 110 },
      items: [
        { title: 'Hero frame', media: heroImage.id },
        { title: 'Detail shot', media: image1.id },
        { title: 'Secondary crop', media: image2.id },
        { title: 'Editorial moment', media: image3.id },
      ],
    },
    {
      blockType: 'featureTabs',
      eyebrow: 'Progressive Disclosure',
      title: 'Feature Tabs',
      intro: richText('An editor-friendly way to group richer product or service narratives.'),
      motion: { introAnimation: 'fly-up', itemAnimation: 'fly-up', stagger: 90 },
      tabs: [
        { label: 'Overview', title: 'Tell the big story first', content: richText('Use the first panel to frame the core value proposition clearly and quickly.'), media: image1.id, links: [customLink('Explore Posts', '/posts')] },
        { label: 'Depth', title: 'Layer in product detail', content: richText('Additional panels can move into more specific workflows, proof points, or examples.'), media: image2.id },
        { label: 'Action', title: 'Finish with a strong CTA', content: richText('The final panel can transition naturally into a next-step action or conversion path.'), media: image3.id, links: [customLink('Contact Sales', '/contact', 'outline')] },
      ],
    },
    {
      blockType: 'faqGrid',
      eyebrow: 'Answer Objections',
      title: 'FAQ Grid',
      intro: richText('A wider alternative to a single accordion, useful when you want multiple themes side by side.'),
      motion: { introAnimation: 'fly-up', itemAnimation: 'fly-up', stagger: 70 },
      categories: [
        {
          title: 'Implementation',
          items: [
            { question: 'Is this still server-rendered?', answer: richText('Yes. The content renders on the server and the motion layer enhances it after hydration.') },
            { question: 'Can editors tune the motion?', answer: richText('Yes. The shared Motion Settings group gives editors control over pacing and presets.') },
          ],
        },
        {
          title: 'Content Strategy',
          items: [
            { question: 'Do I need every block on every page?', answer: richText('No. The idea is to have a flexible library so each page can choose the right structure.') },
            { question: 'Can these patterns be reused for campaigns?', answer: richText('Absolutely. They work well for launches, feature pages, events, and evergreen marketing content.') },
          ],
        },
      ],
    },
    {
      blockType: 'ctaBand',
      eyebrow: 'Conversion Moment',
      title: 'CTA Band',
      intro: richText('A stronger visual CTA section than the simple CTA card, useful near the bottom of a page.'),
      motion: { sectionAnimation: 'soft-scale', introAnimation: 'fly-up', itemAnimation: 'fly-up' },
      links: [customLink('Start a Project', '/contact'), customLink('See More Blocks', '/motion-lab', 'outline')],
      media: image2.id,
    },
    {
      blockType: 'teamGrid',
      eyebrow: 'People Section',
      title: 'Team Grid',
      intro: richText('A reusable team section for agencies, startups, or service businesses.'),
      motion: { introAnimation: 'fly-up', itemAnimation: 'fly-up', stagger: 100 },
      members: [
        { name: 'Maya Chen', role: 'Creative Director', bio: 'Shapes visual systems and editorial pacing across campaigns.', photo: image1.id, links: [customLink('LinkedIn', '/posts')] },
        { name: 'Alex Rowan', role: 'Product Marketer', bio: 'Turns product detail into structured stories that people actually read.', photo: image2.id, links: [customLink('Portfolio', '/posts')] },
        { name: 'Priya Moyo', role: 'Content Strategist', bio: 'Builds reusable block combinations for launch pages and evergreen content.', photo: image3.id, links: [customLink('Read Posts', '/posts')] },
      ],
    },
    {
      blockType: 'caseStudyPreview',
      eyebrow: 'Proof Section',
      title: 'Case Study Preview',
      intro: richText('A flexible pattern for showing results, screenshots, and a clear next step.'),
      motion: { introAnimation: 'fly-up', itemAnimation: 'alternate-sides', stagger: 140 },
      studies: [
        {
          client: 'Northstar',
          title: 'Launching a reusable campaign system',
          summary: 'Northstar moved from bespoke landing pages to a structured builder with a much faster editorial cycle.',
          media: heroImage.id,
          results: [{ label: '+38% conversion lift' }, { label: '2.1x faster publishing' }],
          links: [customLink('Read More', '/posts'), customLink('Talk to Us', '/contact', 'outline')],
        },
      ],
    },
    {
      blockType: 'eventSchedule',
      eyebrow: 'Program Content',
      title: 'Event Schedule',
      intro: richText('Useful for summits, webinars, launch events, and editorial series.'),
      motion: { introAnimation: 'fly-up', itemAnimation: 'fly-up', stagger: 90 },
      days: [
        {
          label: 'Day One',
          sessions: [
            { time: '09:00', title: 'Opening keynote', speaker: 'Maya Chen', location: 'Main Stage', description: 'A short keynote on building editorial systems that still feel expressive.' },
            { time: '11:00', title: 'Block design workshop', speaker: 'Alex Rowan', location: 'Studio A', description: 'A hands-on session on choosing the right section types for campaign narratives.' },
          ],
        },
        {
          label: 'Day Two',
          sessions: [
            { time: '10:00', title: 'Motion tuning clinic', speaker: 'Priya Moyo', location: 'Studio B', description: 'Learn how to balance subtle, medium, and dramatic reveal settings.' },
          ],
        },
      ],
    },
    {
      blockType: 'quoteMarquee',
      eyebrow: 'Rolling Proof',
      title: 'Quote Marquee',
      intro: richText('A lightweight rolling quote rail for the lower part of a long page.'),
      motion: { introAnimation: 'fly-up', itemAnimation: 'fly-up' },
      quotes: [
        { quote: 'Editors now have enough structure to move fast without making pages feel repetitive.', author: 'Maya Chen', company: 'Northstar' },
        { quote: 'The new block library feels like a system, not a pile of one-off sections.', author: 'Alex Rowan', company: 'Signal Works' },
        { quote: 'It is expressive enough for launches but still predictable enough for operations teams.', author: 'Priya Moyo', company: 'Vector Labs' },
      ],
    },
  ],
  meta: {
    title: 'Motion Showcase',
    description: 'A second demo page for the larger animated marketing block library.',
    image: heroImage.id,
  },
})
