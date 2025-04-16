import { Card, CardTitle, CardDescription } from "@/components/ui/card";
// import CardCarousel from "./cardcarousel";
// import { Link } from "react-router-dom";
import data from "../data";

const services = data.getServices();

export default function Service() {
  return (
    <section className="h-auto py-10 bg-[#101010] content-center">
      <h1 className="text-4xl py-12 text-white font-sabre text-center">Our Services</h1>
      <div className="flex flex-col- justify-center flex-wrap gap-20">
        {services.map((service, index) => (
          <Card
            className={`my-4 px-4 w-80 bg-inherit border-none shadow-none transform transition duration-700 ease-in-out`}
            key={index}
          >
            <CardTitle className="py-4 underline text-center h-20 text-white text-2xl font-bold">
              {service.value}
            </CardTitle>
            <CardDescription className="h-20 text-white mb-8">
              {service.info}
            </CardDescription>
            {/* <CardCarousel images={service.myimgs} /> */}
            {/* <Link to={`/services/${service.value}`}>
              <button className="m-4 bg-orange-600 px-4 py-2 rounded-2xl hover:bg-orange-400 text-white">
                Learn More!
              </button>
            </Link> */}
          </Card>
        ))}
      </div>
    </section>
  );
}
