'use client'

import Link from 'next/link'
import { Carousel, CarouselContent } from './ui/carousel'
import { useEffect, useState } from 'react'

export default function Introduction() {
  const [positionX, setPostionX] = useState(0)

  useEffect(() => {
    const position = setInterval(() => {
      setPostionX((prevIndex) => (prevIndex + 1) % 3)
    }, 4000)

    return () => clearInterval(position)
  }, [])

  const intro = [
    {
      heading: 'SGPerformance',
      para: 'Unleash the Power Within. Redefining Motorsport Excellence.',
      link: '/contact-us',
      link_text: 'Contact Us',
      backgroundImage: `url('/images/exhaust-system.jpg')`,
    },
    {
      heading: 'SG Suzuki Jimny',
      para: "With our Jimny Turbo conversion kit. By upgrading to the SGPerformance Garrett GT17 Turbo, boosting the engine's output to 130kW and 250Nm.",
      link: '/services',
      link_text: 'Explore The Jimny',
      backgroundImage: `url('/images/jimny6.jpg')`,
    },
    {
      heading: 'Land Cruiser',
      para: 'The Toyota Land Cruiser is a legendary choice among off-road enthusiasts, celebrated for its rugged durability and exceptional off-road prowess.',
      link: '/services',
      link_text: 'Explore all terrains',
      backgroundImage: `url('/images/land-cruiser.jpg')`,
    },
  ]

  return (
    <Carousel className="overflow-hidden m-0 p-0">
      <CarouselContent
        className="w-[300%] h-[200px] lg:h-[600px] flex flex-row m-0"
        style={{
          transform: `translateX(-${(positionX * 100) / 3}%)`,
          transition: `transform 0.7s ease-in-out`,
        }}
      >
        {intro.map((vec, index) => (
          <section
            key={index}
            style={{
              backgroundImage: vec.backgroundImage,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPositionY: '20%',
              width: '100%',
              height: 'auto',
            }}
            className="content-center"
          >
            <div className="text-white text-bold text-2xl relative text-center flex flex-col gap-8 p-8">
              <h1 className="text-xl md:text-5xl font-sabre">{vec.heading}</h1>

              <p className="text-transparent sm:text-white text-center text-wrap p-4 hidden md:block">
                {vec.para}
              </p>

              <Link href={vec?.link}>
                <button className="rounded-2xl bg-orange-500 p-2 hover:bg-orange-400 text-xl">
                  {vec.link_text}
                </button>
              </Link>
            </div>
          </section>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
