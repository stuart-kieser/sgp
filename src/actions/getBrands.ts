import type { Payload } from 'payload'

export const getBrands = async (payload: Payload) => {
  const brands = await payload.find({
    collection: 'brands',
  })

  return brands
}
