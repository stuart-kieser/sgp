import CarCard from '@/components/CarCard'
import { VehiclesGlobal } from '@/globals/VehilcesGlobal'

export const dynamic = 'force-dynamic'

export default async function Vehicles() {
  async function getVehicles(): Promise<VehiclesGlobal> {
    const res = await fetch(`${process.env.PAYLOAD_PUBLIC_API_URL}/api/globals/vehicles`, {
      cache: 'no-store',
      next: { revalidate: 0 },
    })

    if (!res.ok) throw new Error('Failed to fetch Vehicles')
    return res.json()
  }

  let vehicles: VehiclesGlobal = {
    vehicles: [],
  }
  try {
    vehicles = await getVehicles()
  } catch (err) {
    console.warn('Could not fetch Vehicles data at build time:', err)
  }

  return (
    <div className="bg-[#101010] text-white gap-4">
      <div className="h-[500px] w-full overflow-hidden bg-cover bg-center flex items-center justify-center border-b-2 border-orange-500 bg-[url('/images/bmw.jpg')]">
        <p className="font-sabre sm:text-7xl text-4xl">Vehicles</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 p-8">
        {vehicles.vehicles.map((vehicle: any) => (
          <CarCard key={vehicle.id} car={vehicle} />
        ))}
      </div>
    </div>
  )
}
