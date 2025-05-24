import { getVehicles } from '@/actions/getVehicles'
import config from '@payload-config'
import CarCard from '@/components/CarCard'
import { getPayload } from 'payload'

const payload = await getPayload({ config })
const vehicles = await getVehicles(payload)

export default async function Vehicles() {
  return (
    <div className="bg-[#101010] text-white gap-4">
      <div
        className="h-[500px] w-full overflow-hidden bg-cover bg-center flex items-center justify-center border-b-2 border-orange-500"
        style={{ backgroundImage: 'url(/images/bmw.jpg)' }}
      >
        <p className="font-sabre sm:text-7xl text-4xl">Vehicles</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 p-8">
        {vehicles.docs.map((vehicle: any) => (
          <CarCard key={vehicle.id} car={vehicle} />
        ))}
      </div>
    </div>
  )
}
