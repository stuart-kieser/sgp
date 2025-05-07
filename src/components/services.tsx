import { Card, CardTitle, CardDescription } from '@/components/ui/card'
import data from '../data'

const services = data.getServices()

export default function Service() {
  return (
    <section className="h-auto py-10 bg-[#101010] content-center">
      <h1 className="text-4xl py-12 text-white font-sabre text-center px-1">Our Services</h1>
      <div className="flex justify-center flex-wrap gap-20">
        {services.map((service, index) => (
          <Card
            className={`my-4 px-4 w-80 bg-inherit border-none shadow-none transform transition duration-700 ease-in-out flex flex-col place-items-center`}
            key={index}
          >
            <CardTitle className="py-4 underline text-center h-20 text-white text-2xl font-bold">
              {service.value}
            </CardTitle>
            <CardDescription className="h-20 text-white mb-8 text-center">
              {service.info}
            </CardDescription>
          </Card>
        ))}
      </div>
    </section>
  )
}
