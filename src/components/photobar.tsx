import { Carousel, CarouselContent, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'

import Image from 'next/image'
import { getPayload } from 'payload'
import config from '@payload-config'

const payload = await getPayload({ config })

const gallery = await payload.find({
  collection: 'media',
})

const PhotoBar: React.FC = () => {
  return (
    <Carousel className="w-full">
      <CarouselContent className="flex flex-row h-auto">
        {gallery.docs.map((image, index) => (
          <Image
            unoptimized
            src={image?.url || '/placeholder.png'}
            key={index}
            className="w-auto h-[250px]"
            alt="Picture of the author"
            width={250}
            height={250}
            loading="lazy"
          />
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  )
}

export default PhotoBar
