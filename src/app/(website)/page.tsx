import Brands from '@/components/brands'
import Introduction from '@/components/introduction'
import OurStory from '@/components/our-story'
import PhotoBar from '@/components/photobar'
import Service from '@/components/services'
import ContactUs from './contact-us/page'

export default function Home() {
  return (
    <div>
      <Introduction />
      <Service />
      <section
        className="flex justify-end content-start "
        style={{
          backgroundImage: `url(/images/turbocharger.jpg)`,
          backgroundRepeat: 'repeat-y',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPositionY: '-100px',
          width: 'auto',
          height: '500px',
        }}
      >
        <ul className="text-white font-sabre text-xl flex flex-col justify-center text-left text-wrap px-10">
          <li className="pb-4">
            The <span className="text-2xl">SG Jimny</span>
          </li>
          <li>SG Performance Garrett GT17 Turbo</li>
          <li>+ 130kW and 250Nm</li>
        </ul>
      </section>
      <Brands />
      <PhotoBar />
      <OurStory />
      <ContactUs />
    </div>
  )
}
