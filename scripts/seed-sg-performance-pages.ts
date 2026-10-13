import 'dotenv/config'

import { copyFile, mkdir, readFile, readdir, stat } from 'node:fs/promises'
import { homedir } from 'node:os'
import path from 'node:path'

import { createLocalReq, getPayload, type File, type RequiredDataFromCollectionSlug } from 'payload'

import config from '../src/payload.config'

const desktop = path.join(homedir(), 'OneDrive', 'Desktop')
const sourceDirectory = path.join(desktop, 'SG VEHICLES')
const photoDirectory = path.join(desktop, 'SG Performance Photos')

const photoAlt: Record<string, string> = {
  'BMW.jpg': 'BMW M4 at SG Performance',
  'BMW2.jpg': 'BMW M4 on the workshop lift',
  'BMW5.jpg': 'Rear detail of the BMW M4 build',
  'engineblock.jpg': 'Performance engine detail',
  'J3.jpg': 'Five-door Jimny turbo conversion',
  'J4.jpg': 'Jimny Rock Bird build',
  'J7.jpg': 'Jimny turbo conversion detail',
  'J8.jpg': 'Jimny 4x4 upgrades',
  'LUMINA1.jpg': 'Blue Chevrolet SS Lumina',
  'LUMINA2.jpg': 'Chevrolet SS Lumina build',
  'LUMINA3.jpg': 'Chevrolet SS Lumina exterior',
  'LUMINA4.jpg': 'Chevrolet SS Lumina detail',
  'LUMINA5.jpg': 'Chevrolet SS Lumina build detail',
  'LUMINA7.jpg': 'Chevrolet SS Lumina at SG Performance',
  'S2.jpg': 'Honda S2000 at SG Performance',
  'S3.jpg': 'Honda S2000 supercharger build',
  'S6.jpg': 'Honda S2000 detail',
  'S7.jpg': 'Honda S2000 supercharger project',
  'S8.jpg': 'Honda S2000 project detail',
}

type LexicalNode = Record<string, unknown>

const textNode = (text: string): LexicalNode => ({
  detail: 0,
  format: 0,
  mode: 'normal',
  style: '',
  text,
  type: 'text',
  version: 1,
})

const photoLabel = (filename: string) =>
  photoAlt[filename] ??
  `SG Performance vehicle photo ${filename.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ')}`

const paragraph = (text: string): LexicalNode => ({
  children: [textNode(text)],
  direction: 'ltr',
  format: '',
  indent: 0,
  textFormat: 0,
  type: 'paragraph',
  version: 1,
})

const heading = (text: string, tag: 'h2' | 'h3' = 'h2'): LexicalNode => ({
  children: [textNode(text)],
  direction: 'ltr',
  format: '',
  indent: 0,
  tag,
  type: 'heading',
  version: 1,
})

const richText = (...nodes: LexicalNode[]) => ({
  root: {
    children: nodes,
    direction: 'ltr',
    format: '',
    indent: 0,
    type: 'root',
    version: 1,
  },
})

const customLink = (label: string, url: string, newTab = false) => ({
  link: {
    type: 'custom' as const,
    appearance: 'default' as const,
    label,
    newTab,
    url,
  },
})

const projectDetails = [
  {
    slug: 'chevrolet-ss-lumina',
    title: 'Chevrolet SS Lumina',
    eyebrow: 'Mechanical refresh and performance upgrades',
    description:
      'A full mechanical makeover combining exhaust, ECU, driveline and suspension work.',
    heroImage: 'LUMINA1.jpg',
    gallery: ['LUMINA2.jpg', 'LUMINA3.jpg', 'LUMINA5.jpg', 'LUMINA7.jpg'],
    body: [
      'This Chevrolet SS Lumina came to SG Performance for a comprehensive mechanical refresh and a series of carefully matched upgrades.',
      'The work included an SG Performance Cerakoted header, an HP Tuners ECU remap, fresh spark plugs with MSD leads and heat socks, and a racing clutch replacement.',
      'The build was completed with 20-inch Flowforged wheels, BC Racing coilovers, and SuperPro front and rear bushes.',
    ],
  },
  {
    slug: 'supercharged-honda-s2000',
    title: 'Supercharged Honda S2000',
    eyebrow: 'Supercharger care and mechanical maintenance',
    description:
      'A JDM icon receiving a thorough checkover, maintenance work and supercharger-system attention.',
    heroImage: 'S7.jpg',
    gallery: ['S2.jpg', 'S3.jpg', 'S6.jpg', 'S8.jpg'],
    body: [
      'This Honda S2000 arrived for maintenance and repairs, with a top-to-bottom checkover to assess the car and keep it in dependable running condition.',
      'The service included an oil change and safety check, replacement of the supercharger oil-feed pipe, a front brake-caliper rebuild, brake-fluid flush, and battery replacement.',
      'The project also included a collaboration around the Vortech supercharger system.',
    ],
  },
  {
    slug: 'mega-turbo-jimny',
    title: 'Mega Turbo Jimny',
    eyebrow: 'Garrett GT17 turbo conversion',
    description:
      'The five-door Rock Bird Jimny received a Garrett turbo conversion and trail-ready 4x4 upgrades.',
    heroImage: 'J4.jpg',
    gallery: ['J3.jpg', 'J7.jpg', 'J8.jpg', 'J4.jpg'],
    body: [
      'The Rock Bird is a five-door Jimny build developed around an SG Performance Garrett GT17 turbo conversion.',
      'The published build figures show power increasing from 75 kW to 130 kW and torque from 130 Nm to 250 Nm after the conversion.',
      'The Jimny also received TRE 4x4 electronic differential lockers at the front and rear, complementing its off-road setup.',
    ],
  },
  {
    slug: 'm4-performance-monday',
    title: 'BMW M4 Performance Build',
    eyebrow: 'Stainless downpipes and dyno-tested ECU remap',
    description:
      'A BMW M4 build pairing in-house stainless-steel downpipes with a custom ECU remap.',
    heroImage: 'BMW5.jpg',
    gallery: ['BMW.jpg', 'BMW2.jpg', 'BMW5.jpg'],
    body: [
      'This BMW M4 came to SG Performance for stainless-steel downpipes and a custom ECU remap.',
      'The downpipes were built in-house, then the vehicle was tested on a dyno so the ECU calibration could be fine-tuned for the completed setup.',
    ],
  },
] as const

const brandDetails = [
  {
    slug: 'toyota-services',
    title: 'Toyota',
    mediaFilename: 'land-cruiser.jpg',
    eyebrow: 'From Land Cruisers to GR Yaris',
    description:
      'SG Performance works across the Toyota range, from Land Cruisers to GR Yaris, with service and performance work scoped to the vehicle.',
    body: [
      'Toyota work at SG Performance spans Land Cruisers and GR Yaris models, with maintenance and performance modifications tailored to each vehicle.',
      'Tell us the model, year, and what you want to improve. The workshop can help establish an appropriate service plan or performance direction.',
    ],
    projectSlug: null,
  },
  {
    slug: 'bmw-services',
    title: 'BMW',
    mediaFilename: 'bmw.jpg',
    eyebrow: 'Performance, fabrication and calibration',
    description:
      'Explore SG Performance work for BMW, including a documented M4 downpipe and ECU calibration build.',
    body: [
      'A recent BMW M4 build paired in-house stainless-steel downpipes with a custom ECU remap, then used dyno testing to fine-tune the completed setup.',
      'Every vehicle and modification is different. Share your BMW model and goals so the workshop can discuss suitable next steps.',
    ],
    projectSlug: 'm4-performance-monday',
  },
  {
    slug: 'audi-services',
    title: 'Audi',
    mediaFilename: 'audi-1.jpg',
    eyebrow: 'Audi servicing and performance enquiries',
    description:
      'Talk to SG Performance about maintenance, diagnostics and performance options for your Audi.',
    body: [
      'SG Performance works on Audi vehicles. Start with the model, year, symptoms or performance goals, and the workshop can help define the right scope.',
      'Available work can include maintenance, diagnostics, ECU tuning and exhaust upgrades, subject to vehicle compatibility.',
    ],
    projectSlug: null,
  },
  {
    slug: 'volkswagen-services',
    title: 'Volkswagen',
    mediaFilename: 'engineblock.jpg',
    eyebrow: 'Volkswagen servicing and performance enquiries',
    description:
      'Talk to SG Performance about maintenance, diagnostics and performance options for your Volkswagen.',
    body: [
      'SG Performance works on Volkswagen vehicles. Share the model, year and what you would like to address so the workshop can recommend a suitable starting point.',
      'Available work can include maintenance, diagnostics, ECU tuning and exhaust upgrades, subject to vehicle compatibility.',
    ],
    projectSlug: null,
  },
  {
    slug: 'porsche-services',
    title: 'Porsche',
    mediaFilename: 'porsche.jpg',
    eyebrow: 'Porsche servicing and performance enquiries',
    description:
      'Talk to SG Performance about maintenance, diagnostics and performance options for your Porsche.',
    body: [
      'SG Performance works on Porsche vehicles. Each enquiry starts with the model, year, vehicle history and the work you have in mind.',
      'Contact the workshop to discuss a service, diagnostic or performance brief tailored to your vehicle.',
    ],
    projectSlug: null,
  },
  {
    slug: 'suzuki-services',
    title: 'Suzuki',
    mediaFilename: 'jimny9.jpg',
    eyebrow: 'Jimny upgrades and 4x4 performance',
    description:
      'Explore Suzuki Jimny work, including the documented five-door Garrett turbo conversion and 4x4 upgrades.',
    body: [
      'The Mega Turbo Jimny project features an SG Performance Garrett GT17 turbo conversion and front and rear electronic differential lockers.',
      'The published build figures show output increasing from 75 kW and 130 Nm to 130 kW and 250 Nm. Discuss your Jimny model and intended use with the workshop.',
    ],
    projectSlug: 'mega-turbo-jimny',
  },
] as const

const brandServices = [
  {
    title: 'Service and maintenance',
    description:
      'Routine inspections, servicing and diagnostics, scoped around the vehicle and its needs.',
  },
  {
    title: 'ECU tuning',
    description: 'Discuss calibration options for compatible vehicles and modifications.',
  },
  {
    title: 'Exhaust and performance upgrades',
    description:
      'Explore fabrication and upgrade options based on the vehicle, intended use and brief.',
  },
]

async function saveDesktopPhotos() {
  await mkdir(photoDirectory, { recursive: true })
  const files = (await readdir(sourceDirectory)).filter((filename) => /\.jpe?g$/i.test(filename))

  for (const filename of files) {
    const source = path.join(sourceDirectory, filename)
    const destination = path.join(photoDirectory, filename)

    try {
      await stat(destination)
    } catch {
      await copyFile(source, destination)
    }
  }

  return files.length
}

async function getMediaId(payload: Awaited<ReturnType<typeof getPayload>>, filename: string) {
  const found = await payload.find({
    collection: 'media',
    depth: 0,
    limit: 1,
    overrideAccess: true,
    where: { filename: { equals: filename } },
  })

  if (found.docs[0]) {
    if (!found.docs[0].alt) {
      await payload.update({
        collection: 'media',
        id: found.docs[0].id,
        data: { alt: photoLabel(filename) },
        overrideAccess: true,
      })
    }

    return found.docs[0].id
  }

  const data = await readFile(path.join(sourceDirectory, filename))
  const file: File = {
    data,
    mimetype: 'image/jpeg',
    name: filename,
    size: data.byteLength,
  }

  const media = await payload.create({
    collection: 'media',
    data: { alt: photoLabel(filename) },
    file,
    overrideAccess: true,
  })

  return media.id
}

async function savePage(
  payload: Awaited<ReturnType<typeof getPayload>>,
  req: Awaited<ReturnType<typeof createLocalReq>>,
  data: RequiredDataFromCollectionSlug<'pages'>,
) {
  const found = await payload.find({
    collection: 'pages',
    depth: 0,
    limit: 1,
    overrideAccess: true,
    where: { slug: { equals: data.slug } },
  })

  if (found.docs[0]) {
    return payload.update({
      collection: 'pages',
      id: found.docs[0].id,
      data,
      depth: 0,
      overrideAccess: true,
      req,
    })
  }

  return payload.create({
    collection: 'pages',
    data,
    depth: 0,
    overrideAccess: true,
    req,
  })
}

async function getContactForm(payload: Awaited<ReturnType<typeof getPayload>>) {
  const title = 'SG Performance Enquiries'
  const found = await payload.find({
    collection: 'forms',
    depth: 0,
    limit: 1,
    overrideAccess: true,
    where: { title: { equals: title } },
  })

  if (found.docs[0]) return found.docs[0]

  return payload.create({
    collection: 'forms',
    data: {
      title,
      fields: [
        { blockType: 'text', name: 'name', label: 'Your name', required: true, width: 50 },
        { blockType: 'email', name: 'email', label: 'Email address', required: true, width: 50 },
        { blockType: 'text', name: 'phone', label: 'Phone number', required: true, width: 50 },
        { blockType: 'text', name: 'vehicle', label: 'Vehicle make and model', width: 50 },
        { blockType: 'textarea', name: 'message', label: 'How can we help?', required: true },
      ],
      submitButtonLabel: 'Send enquiry',
      confirmationType: 'message',
      confirmationMessage: richText(
        heading('Thanks for getting in touch'),
        paragraph('Your enquiry has been received by SG Performance.'),
      ),
    },
    depth: 0,
    overrideAccess: true,
  })
}

async function findMediaId(payload: Awaited<ReturnType<typeof getPayload>>, filename: string) {
  const result = await payload.find({
    collection: 'media',
    depth: 0,
    limit: 1,
    overrideAccess: true,
    where: { filename: { equals: filename } },
  })

  const media = result.docs[0]
  if (!media) return undefined

  if (!media.alt) {
    await payload.update({
      collection: 'media',
      id: media.id,
      data: { alt: photoLabel(filename) },
      overrideAccess: true,
    })
  }

  return media.id
}

async function main() {
  const copiedPhotoCount = await saveDesktopPhotos()
  const galleryFilenames = (await readdir(sourceDirectory))
    .filter((filename) => /\.jpe?g$/i.test(filename))
    .sort((left, right) =>
      left.localeCompare(right, undefined, { numeric: true, sensitivity: 'base' }),
    )
  const payload = await getPayload({ config })
  const req = await createLocalReq({ context: { disableRevalidate: true } }, payload)
  const usedFilenames = [
    ...new Set([
      ...projectDetails.flatMap((project) => [project.heroImage, ...project.gallery]),
      ...galleryFilenames,
    ]),
  ]
  const mediaIds = new Map<string, number>()

  for (const filename of usedFilenames) {
    mediaIds.set(filename, await getMediaId(payload, filename))
  }

  const brandMediaIds = new Map<string, number>()
  for (const brand of brandDetails) {
    if (brand.mediaFilename) {
      const mediaId = await findMediaId(payload, brand.mediaFilename)
      if (mediaId) brandMediaIds.set(brand.slug, mediaId)
    }
  }

  const homePage: RequiredDataFromCollectionSlug<'pages'> = {
    slug: 'home',
    _status: 'published',
    title: 'Home',
    hero: {
      type: 'highImpact',
      media: mediaIds.get('J4.jpg') ?? mediaIds.get('BMW5.jpg')!,
      richText: richText(
        heading('Built for drivers who want more', 'h1'),
        paragraph(
          'SG Performance combines service, diagnosis and performance upgrades to keep cars reliable and exciting on every drive.',
        ),
      ),
      links: [
        customLink('View projects', '/projects'),
        customLink('Book an enquiry', '/contact-us'),
      ],
    },
    layout: [
      {
        blockType: 'featureShowcase',
        eyebrow: 'What we do',
        title: 'Performance work that respects the vehicle',
        intro: richText(
          paragraph(
            'Whether it is routine maintenance, turbo conversions, clutch work or ECU tuning, the workshop focuses on practical gains and long-term reliability.',
          ),
        ),
        motion: {
          introAnimation: 'fly-up',
          itemAnimation: 'fly-up',
          stagger: 90,
          parallaxStrength: 16,
        },
        items: [
          {
            kicker: 'Mechanical care',
            title: 'Service and diagnostics',
            description:
              'Keep the car reliable, efficient and ready for the road with thorough maintenance and fault-finding.',
            media: mediaIds.get('LUMINA1.jpg')!,
            links: [customLink('See Toyota services', '/toyota-services')],
          },
          {
            kicker: 'Power and response',
            title: 'Turbo and ECU upgrades',
            description:
              'From boost-ready builds to dyno-tuned calibrations, performance work is tailored to the vehicle and the brief.',
            media: mediaIds.get('J4.jpg')!,
            links: [customLink('See Jimny build', '/mega-turbo-jimny')],
          },
          {
            kicker: 'Road-ready detail',
            title: 'Fabrication and drivability',
            description:
              'Exhausts, clutch work, bushes and tuning are combined to create more confidence under load and at speed.',
            media: mediaIds.get('BMW5.jpg')!,
            links: [customLink('See BMW build', '/m4-performance-monday')],
          },
        ],
      },
      {
        blockType: 'content',
        columns: [
          {
            size: 'full',
            richText: richText(
              heading('Why SG Performance'),
              paragraph(
                'The workshop keeps each project specific: what the vehicle needs, how it is driven, and what the owner expects from it.',
              ),
            ),
          },
          {
            size: 'oneThird',
            richText: richText(
              heading('Maintenance', 'h3'),
              paragraph(
                'Comprehensive servicing, diagnostics and mechanical checks that look beyond the obvious symptoms.',
              ),
            ),
          },
          {
            size: 'oneThird',
            richText: richText(
              heading('Performance', 'h3'),
              paragraph(
                'Turbo conversions, ECU adjustments and fabrication work tuned for everyday driveability and enjoyable power.',
              ),
            ),
          },
          {
            size: 'oneThird',
            richText: richText(
              heading('4x4 focus', 'h3'),
              paragraph(
                'Off-road capability and trail-ready setups are built around real-world use and reliable operation.',
              ),
            ),
          },
        ],
      },
      {
        blockType: 'mediaMosaic',
        eyebrow: 'Workshop moments',
        title: 'Recent builds and detail work',
        intro: richText(
          paragraph('Browse recent projects and workshop photos from the SG Performance garage.'),
        ),
        motion: {
          introAnimation: 'fly-up',
          itemAnimation: 'alternate-sides',
          stagger: 60,
        },
        items: ['J4.jpg', 'LUMINA1.jpg', 'BMW5.jpg', 'S7.jpg'].map((filename, index) => ({
          title: `SG Performance build ${index + 1}`,
          media: mediaIds.get(filename)!,
        })),
      },
      {
        blockType: 'ctaBand',
        eyebrow: 'Start your next build',
        title: 'Tell us what your car should do',
        intro: richText(
          paragraph(
            'Whether it is maintenance, tuning or a full conversion, the workshop can advise on the right next step.',
          ),
        ),
        links: [customLink('Contact the workshop', '/contact-us')],
        media: mediaIds.get('J4.jpg')!,
      },
    ],
    meta: {
      title: 'SG Performance | Automotive Services & Performance Builds',
      description:
        'SG Performance specialises in maintenance, diagnostics, ECU tuning, turbo conversions and performance builds for modern vehicles and 4x4 platforms.',
      image: mediaIds.get('J4.jpg')!,
    },
  }

  const projectPage: RequiredDataFromCollectionSlug<'pages'> = {
    slug: 'projects',
    _status: 'published',
    title: 'Projects',
    hero: {
      type: 'autoScroll',
      scrollSpeed: 'slow',
      slides: projectDetails.map((project) => ({
        eyebrow: project.eyebrow,
        title: project.title,
        description: project.description,
        media: mediaIds.get(project.heroImage)!,
        links: [customLink('View the build', `/${project.slug}`)],
      })),
    },
    layout: [
      {
        blockType: 'featureShowcase',
        eyebrow: 'Selected work',
        title: 'Built for the way you drive',
        intro: richText(
          paragraph(
            'From considered maintenance to substantial performance and off-road builds, explore recent work from the SG Performance workshop.',
          ),
        ),
        motion: {
          introAnimation: 'fly-up',
          itemAnimation: 'alternate-sides',
          stagger: 100,
          parallaxStrength: 18,
        },
        items: projectDetails.map((project) => ({
          kicker: project.eyebrow,
          title: project.title,
          description: project.description,
          media: mediaIds.get(project.heroImage)!,
          links: [customLink('Explore project', `/${project.slug}`)],
        })),
      },
    ],
    meta: {
      title: 'Performance Projects | SG Performance',
      description:
        'Explore SG Performance vehicle projects, from turbo conversions and ECU tuning to detailed mechanical refreshes.',
    },
  }

  const pages: RequiredDataFromCollectionSlug<'pages'>[] = [homePage, projectPage]

  const galleryCoverId = mediaIds.get(galleryFilenames[0])!
  const galleryPage: RequiredDataFromCollectionSlug<'pages'> = {
    slug: 'gallery',
    _status: 'published',
    title: 'Workshop Gallery',
    hero: {
      type: 'highImpact',
      media: galleryCoverId,
      richText: richText(
        heading('Workshop Gallery', 'h1'),
        paragraph('A collection of vehicles and workshop details from SG Performance.'),
      ),
      links: [customLink('Discuss your vehicle', '/contact-us')],
    },
    layout: [
      {
        blockType: 'mediaMosaic',
        eyebrow: 'SG Performance',
        title: 'Vehicles from the workshop',
        intro: richText(
          paragraph('Browse the complete photo collection from the supplied SG VEHICLES archive.'),
        ),
        motion: {
          introAnimation: 'fly-up',
          itemAnimation: 'alternate-sides',
          stagger: 55,
        },
        items: galleryFilenames.map((filename) => ({
          title: photoLabel(filename),
          media: mediaIds.get(filename)!,
        })),
      },
      {
        blockType: 'ctaBand',
        eyebrow: 'Planning your next project?',
        title: 'Talk to SG Performance',
        intro: richText(
          paragraph('Tell the workshop about your vehicle and what you would like to do.'),
        ),
        links: [customLink('Send an enquiry', '/contact-us')],
        media: galleryCoverId,
      },
    ],
    meta: {
      title: 'Workshop Gallery | SG Performance',
      description:
        'Browse vehicle and workshop photos from SG Performance, including customer builds and performance upgrades.',
      image: galleryCoverId,
    },
  }
  pages.push(galleryPage)

  for (const project of projectDetails) {
    const heroImageId = mediaIds.get(project.heroImage)!
    const galleryImageIds = project.gallery.map((filename) => mediaIds.get(filename)!)
    const contactLink = customLink('Discuss your build', '/contact-us')

    pages.push({
      slug: project.slug,
      _status: 'published',
      title: project.title,
      hero: {
        type: 'highImpact',
        media: heroImageId,
        richText: richText(heading(project.title, 'h1'), paragraph(project.description)),
        links: [contactLink],
      },
      layout: [
        {
          blockType: 'content',
          columns: [
            {
              size: 'full',
              richText: richText(
                heading('The build'),
                ...project.body.map((copy) => paragraph(copy)),
              ),
            },
          ],
        },
        {
          blockType: 'mediaMosaic',
          eyebrow: 'Workshop gallery',
          title: project.title,
          intro: richText(paragraph('A closer look at the details and finished setup.')),
          motion: {
            introAnimation: 'fly-up',
            itemAnimation: 'alternate-sides',
            stagger: 90,
          },
          items: project.gallery.map((filename, index) => ({
            title: `${project.title} | ${index + 1}`,
            media: galleryImageIds[index],
          })),
        },
        {
          blockType: 'ctaBand',
          eyebrow: 'Your next build',
          title: 'Let’s talk about your vehicle',
          intro: richText(
            paragraph(
              'Contact SG Performance to discuss servicing, tuning, fabrication or your next project.',
            ),
          ),
          links: [contactLink],
          media: heroImageId,
        },
      ],
      meta: {
        title: `${project.title} | SG Performance Projects`,
        description: project.description,
        image: heroImageId,
      },
    })
  }

  const brandPage: RequiredDataFromCollectionSlug<'pages'> = {
    slug: 'brands',
    _status: 'published',
    title: 'Brands',
    hero: {
      type: 'autoScroll',
      scrollSpeed: 'slow',
      slides: brandDetails.map((brand) => ({
        eyebrow: brand.eyebrow,
        title: brand.title,
        description: brand.description,
        media: brandMediaIds.get(brand.slug),
        links: [customLink('Explore ' + brand.title, `/${brand.slug}`)],
      })),
    },
    layout: [
      {
        blockType: 'featureShowcase',
        eyebrow: 'Makes we work on',
        title: 'Expert care, tailored to your vehicle',
        intro: richText(
          paragraph(
            'Explore the makes we work on and get in touch to discuss maintenance, diagnostics or a considered performance upgrade.',
          ),
        ),
        motion: {
          introAnimation: 'fly-up',
          itemAnimation: 'alternate-sides',
          stagger: 90,
          parallaxStrength: 18,
        },
        items: brandDetails.map((brand) => ({
          kicker: brand.eyebrow,
          title: brand.title,
          description: brand.description,
          media: brandMediaIds.get(brand.slug),
          links: [customLink('View brand services', `/${brand.slug}`)],
        })),
      },
      {
        blockType: 'ctaBand',
        eyebrow: 'Have a vehicle in mind?',
        title: 'Tell us what you drive',
        intro: richText(
          paragraph(
            'Share your vehicle and what you need. The workshop will help you plan the next step.',
          ),
        ),
        links: [customLink('Contact the workshop', '/contact-us')],
        media: brandMediaIds.get('toyota'),
      },
    ],
    meta: {
      title: 'Vehicle Brands | SG Performance',
      description:
        'Explore vehicle makes supported by SG Performance and find a starting point for maintenance and performance enquiries.',
    },
  }
  pages.push(brandPage)

  for (const brand of brandDetails) {
    const mediaId = brandMediaIds.get(brand.slug)
    const relatedProject = brand.projectSlug
      ? projectDetails.find((project) => project.slug === brand.projectSlug)
      : undefined
    const relatedProjectMediaId = relatedProject
      ? mediaIds.get(relatedProject.heroImage)
      : undefined

    pages.push({
      slug: brand.slug,
      _status: 'published',
      title: brand.title,
      hero: {
        type: mediaId ? 'highImpact' : 'lowImpact',
        media: mediaId,
        richText: richText(heading(`${brand.title} services`, 'h1'), paragraph(brand.description)),
        links: [
          customLink('Explore all services', '/services'),
          customLink('Contact the workshop', '/contact-us', false),
        ],
      },
      layout: [
        {
          blockType: 'content',
          columns: [
            {
              size: 'full',
              richText: richText(
                heading(`Working with your ${brand.title}`),
                ...brand.body.map((copy) => paragraph(copy)),
              ),
            },
          ],
        },
        {
          blockType: 'featureShowcase',
          eyebrow: 'Workshop capabilities',
          title: 'Start with the right scope',
          intro: richText(
            paragraph(
              'The right approach depends on the vehicle and your goals. Contact the workshop to confirm compatibility and discuss the work.',
            ),
          ),
          motion: {
            introAnimation: 'fly-up',
            itemAnimation: 'fly-up',
            stagger: 80,
          },
          items: brandServices.map((service) => ({
            title: service.title,
            description: service.description,
          })),
        },
        ...(relatedProject && relatedProjectMediaId
          ? [
              {
                blockType: 'caseStudyPreview' as const,
                eyebrow: 'Related project',
                title: relatedProject.title,
                intro: richText(paragraph(relatedProject.description)),
                motion: {
                  introAnimation: 'fly-up' as const,
                  itemAnimation: 'fly-up' as const,
                },
                studies: [
                  {
                    client: brand.title,
                    title: relatedProject.title,
                    summary: relatedProject.description,
                    media: relatedProjectMediaId,
                    links: [customLink('View project', `/${relatedProject.slug}`)],
                  },
                ],
              },
            ]
          : []),
        {
          blockType: 'ctaBand',
          eyebrow: 'Your vehicle',
          title: `Discuss your ${brand.title}`,
          intro: richText(
            paragraph('Send the workshop your vehicle details and the work you are considering.'),
          ),
          links: [customLink('Send an enquiry', '/contact-us')],
          media: mediaId,
        },
      ],
      meta: {
        title: `${brand.title} Services | SG Performance`,
        description: brand.description,
        image: mediaId,
      },
    })
  }

  const contactForm = await getContactForm(payload)
  pages.push({
    slug: 'contact-us',
    _status: 'published',
    title: 'Contact SG Performance',
    hero: {
      type: 'lowImpact',
      richText: richText(
        heading('Talk to the workshop', 'h1'),
        paragraph(
          'Tell us what you drive, what you are looking to do, and how we can help. We will use the details you provide to follow up on your enquiry.',
        ),
      ),
      links: [customLink('Explore our services', '/services')],
    },
    layout: [
      {
        blockType: 'content',
        columns: [
          {
            size: 'full',
            richText: richText(
              heading('What to include'),
              paragraph(
                'Add your vehicle make and model, year, the service or upgrade you have in mind, and any useful details about the vehicle.',
              ),
            ),
          },
        ],
      },
      {
        blockType: 'formBlock',
        form: contactForm.id,
        enableIntro: true,
        introContent: richText(
          heading('Send an enquiry'),
          paragraph('Fields marked required must be completed.'),
        ),
      },
    ],
    meta: {
      title: 'Contact | SG Performance',
      description:
        'Contact SG Performance about vehicle maintenance, diagnostics, fabrication and performance upgrades.',
    },
  })

  const savedPages: { id: number; slug: string }[] = []

  const malformedBrandSlugs = [
    'brandstoyota',
    'brandsbmw',
    'brandsaudi',
    'brandsvolkswagen',
    'brandsporsche',
    'brandssuzuki',
  ]
  const malformedBrandPages = await payload.find({
    collection: 'pages',
    depth: 0,
    limit: malformedBrandSlugs.length,
    overrideAccess: true,
    where: { slug: { in: malformedBrandSlugs } },
  })
  for (const page of malformedBrandPages.docs) {
    await payload.delete({
      collection: 'pages',
      id: page.id,
      overrideAccess: true,
      req,
    })
  }

  for (const page of pages) {
    const saved = await savePage(payload, req, page)
    savedPages.push({ id: saved.id, slug: saved.slug })
  }

  const header = await payload.findGlobal({ slug: 'header', depth: 0, overrideAccess: true })
  const navItems = header.navItems ?? []
  const pageIDs = new Map(savedPages.map((page) => [page.slug, page.id]))
  const navPages = [
    { label: 'Projects', slug: 'projects' },
    { label: 'Brands', slug: 'brands' },
    { label: 'Gallery', slug: 'gallery' },
    { label: 'Contact', slug: 'contact-us' },
  ]
  const nextNavItems = [...navItems]
  for (const item of navPages) {
    if (!nextNavItems.some((existing) => existing.link?.label === item.label)) {
      nextNavItems.push({
        link: {
          type: 'reference',
          reference: { relationTo: 'pages', value: pageIDs.get(item.slug)! },
          label: item.label,
        },
      })
    }
  }
  if (nextNavItems.length !== navItems.length) {
    await payload.updateGlobal({
      slug: 'header',
      data: { navItems: nextNavItems },
      depth: 0,
      overrideAccess: true,
      req,
    })
  }

  const footer = await payload.findGlobal({ slug: 'footer', depth: 0, overrideAccess: true })
  const footerItems = footer.navItems ?? []
  const nextFooterItems = [...footerItems]
  for (const item of [
    { label: 'Gallery', slug: 'gallery' },
    { label: 'Contact', slug: 'contact-us' },
  ]) {
    if (!nextFooterItems.some((existing) => existing.link?.label === item.label)) {
      nextFooterItems.push({
        link: {
          type: 'reference',
          reference: { relationTo: 'pages', value: pageIDs.get(item.slug)! },
          label: item.label,
        },
      })
    }
  }
  if (nextFooterItems.length !== footerItems.length) {
    await payload.updateGlobal({
      slug: 'footer',
      data: { navItems: nextFooterItems },
      depth: 0,
      overrideAccess: true,
      req,
    })
  }

  payload.logger.info({ copiedPhotoCount, photoDirectory, pages: savedPages })
  await payload.destroy()
}

main().then(
  () => process.exit(0),
  (error: unknown) => {
    console.error(error)
    process.exit(1)
  },
)
