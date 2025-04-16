import { getBrands } from "@/actions/getBrands";
import config from '@payload-config'
import { getPayload } from 'payload'
import BrandCard from "./BrandCard";

export default async function Brands() {
  const payload = await getPayload({ config })

  const brands = await getBrands(payload);
  console.log(brands.docs[0]);
  return (
    <section className="h-auto py-10 bg-[#101010] content-center">
      <h1 className="text-4xl py-12 text-white font-sabre text-center">Our Brands</h1>
      <div className="flex flex-col- justify-center flex-wrap gap-20">
        {brands.docs.map((brand: any, key: number) => (
          <BrandCard brand={brand} key={key} />
        ))}
      </div>
    </section>
  );
}
