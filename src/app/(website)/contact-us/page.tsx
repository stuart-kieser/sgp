import ContactDetails from '@/components/contact-details'
import Contactform from '@/components/contact-form'
import Image from 'next/image'
export default function ContactUs() {
  return (
    <div className=" bg-[#101010] ">
      <div className="border-b-6 border-orange-600">
        <Image
          className="w-full h-[300px] object-cover"
          src="/images/bmw.jpg"
          alt="Bmw image"
          height={1500}
          width={1500}
          loading="lazy"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-8">
        <div className="flex justify-center items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.6024796992647!2d27.97001987509577!3d-26.079244877153783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9575861eed12cb%3A0xc1f266ef90e9dc92!2sInospace%20-%20Tungsten%20Works!5e0!3m2!1sen!2sza!4v1722698894128!5m2!1sen!2sza"
            width="450"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <Contactform />
        <ContactDetails />
      </div>
    </div>
  )
}
