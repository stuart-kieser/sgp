import getServices from '@/data'
import Image from 'next/image'

export default async function service({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params
  const services = await getServices.getServices()
  const foundservice = await services.find((ser: any) => Number(id) === ser.id)

  return (
    <div className="bg-[#101010] text-white">
      <div className="h-[550px] w-full flex flex-col justify-center items-center border-b-4 border-orange-600">
        <Image
          src={`/images/${foundservice?.myimgs}`}
          alt="Background Image"
          className="object-cover h-full w-full"
          width={1600}
          height={0}
        />
      </div>
      <div className="flex flex-col lg:flex-row p-8 z-40">
        <div className="w-full flex flex-col align-center my-12 text-center">
          <h2 className="text-3xl pb-8">{foundservice ? foundservice.value : ''}</h2>
          <p className="px-2 lg:px-28 text-center text-xl">
            {foundservice ? foundservice.info : 'Error, Service Not Found.'}
          </p>
        </div>
      </div>
    </div>
  )
}
