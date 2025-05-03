import Image from 'next/image'
import React from 'react'

const BrandCard = ({ brand }: any) => {
  return (
    <div className=" p-5 w-full max-w-md flex flex-col items-center gap-4">
      <Image
        src={brand.photos.url}
        alt={brand.make}
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
}

export default BrandCard
