import { getVehicles } from "@/actions/getVehicles"
import config from '@payload-config'
import CarCard from "@/components/CarCard"
import { getPayload } from "payload"

const payload = await getPayload({ config })
const vehicles = await getVehicles(payload)

export default async function Vehicles() {

    console.log(vehicles.docs);
    return (
        <div className="bg-[#101010] text-white flex gap-4 p-4">
            <div className="min-w-3xs">
                <div className="bg-white rounded-lg w-full text-black p-6 flex flex-col gap-4">
                    <div>
                        <input placeholder="Search for a vehicle" className="p-2 rounded-md bg-accent" />
                    </div>
                    <h1 className="font-sabre text-xl">Filters</h1>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-2 justify-between">
                            <label htmlFor="brand" className="font-sabre align-middle">Brand</label>
                            <select id="brand" name="brand" className="bg-gray-200 rounded-md p-2">
                                <option value="">All</option>
                                {vehicles.docs.map((vehicle: any) => (
                                    <option key={vehicle.id} value={vehicle.make}>{vehicle.make}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-row gap-2 justify-between">
                            <label htmlFor="model" className="font-sabre align-middle">Model</label>
                            <select id="model" name="model" className="bg-gray-200 rounded-md p-2">
                                <option value="">All</option>
                                {vehicles.docs.map((vehicle: any) => (
                                    <option key={vehicle.id} value={vehicle.model}>{vehicle.model}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {
                    vehicles.docs.map((vehicle: any) => (
                        <CarCard key={vehicle.id} car={vehicle} />
                    ))
                }
            </div>

        </div>

    )
}