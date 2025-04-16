import type { Payload } from 'payload'

export const getVehicles = async (payload: Payload) => {
  const vehicles = await payload.find({
    collection: 'vehicles',
  })

  return vehicles
}
