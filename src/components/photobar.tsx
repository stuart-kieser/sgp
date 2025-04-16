import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

import Image from 'next/image';

interface PhotoBarProps {
  images: string[];
}

const PhotoBar: React.FC<PhotoBarProps> = ({ images }) => {
  return (
    <Carousel className="w-full">
      <CarouselContent className="flex flex-row h-auto">
        {images.map((image, index) => (
          <Image
            unoptimized
            src={`/images/${image}`}
            key={index}
            className="w-auto h-[250px]"
            alt="Picture of the author"
            width={250}
            height={250}
          />
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  );
};

export default PhotoBar;
