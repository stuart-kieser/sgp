import { Carousel, CarouselContent, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'
import { PhotoBarGlobal } from '@/globals/PhotoBarGlobal'
import Image from 'next/image'

export const dynamic = 'force-dynamic'

interface PhotoBarProps {
  gallery: PhotoBarGlobal
}

const PhotoBar: React.FC<PhotoBarProps> = ({ gallery }) => {
  return (
    <Carousel className="w-full">
      <CarouselContent className="flex flex-row h-auto">
        {gallery.images.map((item, index) => {
          // Handle image URL from Payload media upload field
          const imageUrl =
            typeof item.image === 'string' ? item.image : item.image?.url || '/placeholder.png'

          return (
            <Image
              unoptimized
              src={imageUrl}
              key={index}
              className="w-auto h-[250px]"
              alt={item.caption || `Photo ${index + 1}`}
              width={250}
              height={250}
              loading="lazy"
            />
          )
        })}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  )
}

export default PhotoBar
