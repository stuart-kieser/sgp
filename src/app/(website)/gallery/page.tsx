import Image from 'next/image'
import { getPayload } from 'payload'
import config from '@payload-config'

const payload = await getPayload({ config })

const gallery = await payload.find({
  collection: 'media',
})

export default function Gallery() {
  return (
    <div className="">
      <div
        className="h-[500px] w-full overflow-hidden bg-cover bg-center flex items-center justify-center border-b-2 border-orange-500"
        style={{ backgroundImage: 'url(/images/bmw.jpg)' }}
      >
        <p className="font-sabre text-3xl sm:text-7xl text-accent">Gallery</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 bg-[#101010] p-10">
        {gallery.docs.map((image, index) => (
          <div className="rounded-lg bg-inherit" key={index}>
            <Image
              src={image?.url || '/placeholder.png'}
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
