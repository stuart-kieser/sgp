'use server'
import CarCard from '@/components/CarCard'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function Vehicles() {
  async function getVehicles() {
    const res = await fetch(`${process.env.PAYLOAD_PUBLIC_API_URL}/api/vehicles`, {
      cache: 'no-store',
      next: { revalidate: 0 },
    })
    const data = await res.json()
    if (!res.ok) throw new Error('Failed to fetch Vehicles')
    return data.docs
  }

  const doc = await getVehicles()

  return (
    <div className="bg-[#101010] text-white gap-4">
      <div className="h-[500px] w-full overflow-hidden bg-cover bg-center flex items-center justify-center border-b-2 border-orange-500 bg-[url('/images/bmw.jpg')]">
        <p className="font-sabre sm:text-7xl text-4xl">Vehicles</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 p-8">
        {doc ? (
          doc.map((vehicle: any) => (
            <Link key={vehicle.id} href={`/vehicles/${vehicle.id}`} className="block">
              <CarCard key={vehicle.id} car={vehicle} />
            </Link>
          ))
        ) : (
          <>No Vehicles To Display</>
        )}
      </div>
    </div>
  )
}
