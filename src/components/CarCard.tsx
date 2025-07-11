import Image from 'next/image'
import React from 'react'

const CarCard = ({ car }: any) => {
  return (
    <div className="bg-white shadow-xl rounded-2xl w-full max-w-md">
      <Image
        src={car.photos.url}
        alt={`${car.make} ${car.model}`}
        width={200}
        height={200}
        className="rounded-t-lg w-full"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {car.make} {car.model}
        </h2>
        <p className="text-sm text-gray-500 mb-4">Year: {car.year}</p>

        <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
          <div>
            <span className="font-semibold">Engine:</span> {car.engineType}
          </div>
          <div>
            <span className="font-semibold">Transmission:</span> {car.transmission}
          </div>
          <div>
            <span className="font-semibold">Drivetrain:</span> {car.drivetrain.toUpperCase()}
          </div>
          <div>
            <span className="font-semibold">Mods:</span> {car.modifications?.length || 0}
          </div>
        </div>

        <div className="mt-4">
          {car.notes ? (
            <p className="text-sm text-gray-600 italic">{car.notes}</p>
          ) : (
            <p className="text-xs text-gray-400">No notes added.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default CarCard
