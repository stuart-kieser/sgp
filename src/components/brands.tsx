import { BrandGlobal } from '@/globals/BrandGlobal'
import Image from 'next/image'

interface BrandsProps {
  brands: BrandGlobal
}

const Brands: React.FC<BrandsProps> = ({ brands }) => {
  const items = brands?.brands ?? []

  if (!items.length) {
    return <p className="text-center py-10 bg-[#101010] text-gray-500">No brands to display.</p>
  }
  return (
    <section className="h-auto py-10 bg-[#101010] content-center">
      <h1 className="text-4xl py-12 text-white font-sabre text-center">Our Brands</h1>
      <div className="flex flex-col- justify-center flex-wrap gap-20">
        {items.map((brand: any, key: number) => {
          return (
            <div className=" p-5 w-full max-w-md flex flex-col items-center gap-4" key={key}>
              <Image
                unoptimized
                src={brand.photos.url || '/placeholder.png'}
                alt={brand.make || `Brand ${key + 1}`}
                height={180}
                width={180}
                className="rounded-md"
              />
              <h3 className="text-xl font-semibold text-accent">{brand.make}</h3>
              <div>
                {brand.notes ? (
                  <p className="text-sm text-gray-700 italic">Note: {brand.notes}</p>
                ) : (
                  <p className="text-xs text-gray-400"></p>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Brands
