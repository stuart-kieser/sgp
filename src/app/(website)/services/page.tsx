import getServices from "@/data";
import Image from "next/image";

export default async function ServicesPage() {

    const services = await getServices.getServices();
    return (<>
        <div className="bg-[#101010] text-white">
            {
                services.map((service: any, index: number) => (
                    <div className="flex border-b-4 border-orange-600" key={index}>
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
                                <h2 className="text-3xl pb-8">
                                    {service ? service.value : ""}
                                </h2>
                                <p className="px-2 lg:px-28 text-center text-xl">
                                    {service ? service.info : "Error, Service Not Found."}
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </>)
}