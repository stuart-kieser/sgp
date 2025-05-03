import getServices from '@/data'
import Image from 'next/image'

export default async function ServicesPage() {
  const services = await getServices.getServices()
  return (
    <div className="bg-[#101010] text-white">
      <div
        className="h-[500px] w-full overflow-hidden bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: 'url(/images/service-maintenance.jpg)' }}
      >
        <p className="font-sabre sm:text-7xl text-4xl">Services</p>
      </div>
      <div className="flex flex-col">
        {services.map((service: any, index: number) => (
          <div className="flex border-b-4 border-orange-600 flex-col sm:flex-row" key={index}>
            <div className="h-[550px] w-full flex flex-col justify-center items-center  p-10">
              <Image
                src={`/images/${service?.myimgs}`}
                alt="Background Image"
                className="object-cover h-full w-full rounded-lg"
                width={1300}
                height={0}
              />
            </div>
            <div className="flex flex-col lg:flex-row p-8 w-full items-center">
              <div className="w-full flex flex-col align-center my-12 text-center">
                <h2 className="text-3xl pb-8">{service ? service.value : ''}</h2>
                <p className="px-2 lg:px-28 text-center text-xl">
                  {service ? service.info : 'Error, Service Not Found.'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
