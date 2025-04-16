import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";

interface CardCarouselProps {
  images: string[];
}
const CardCarousel: React.FC<CardCarouselProps> = ({ images }) => {
  return (
    <Carousel className="w-auto mb-8">
      <CarouselContent>
        {images.map((image, key) => (
          <CarouselItem key={key}>
            <div className="p-1 rounded-xl">
              <Image
                loading="lazy"
                src={`/images/${image}`}
                alt={`Image${key}`}
                className="rounded-xl"
                width={150}
                height={150}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  );
};

export default CardCarousel;
