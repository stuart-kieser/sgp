import Image from 'next/image'
import { GalleryGlobal } from '@/globals/GalleryGlobal'

async function getGallery(): Promise<GalleryGlobal> {
  const res = await fetch(`${process.env.PAYLOAD_PUBLIC_API_URL}/api/globals/gallery`, {
    next: { revalidate: 360 },
  })

  if (!res.ok) throw new Error('Failed to fetch Gallery')
  return res.json()
}

export default async function Gallery() {
  let gallery: GalleryGlobal = { images: [] } // fallback structure
  try {
    gallery = await getGallery()
  } catch (err) {
    console.warn('Could not fetch Gallery data at build time:', err)
  }
  return (
    <div className="">
      <div className="h-[500px] w-full overflow-hidden bg-[url('/images/bmw.jpg')] bg-cover bg-center flex items-center justify-center border-b-2 border-orange-500">
        <p className="font-sabre text-3xl sm:text-7xl text-accent">Gallery</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 bg-[#101010] p-10">
        {gallery.images.map((image, index) => (
          <div className="rounded-lg bg-inherit" key={index}>
            <Image
              src={
                typeof image.image === 'string'
                  ? image.image
                  : image.image && typeof image.image === 'object'
                    ? image.image.url
                    : '/placeholder.png'
              }
              alt="Image"
              className="rounded-lg"
              width={300}
              height={300}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
