import { getPayload } from 'payload'
import config from '../../../payload.config'

import Hero from '@/components/Landing/Hero';
import Footer from '@/components/Footer';
import AboutUs from '@/components/Landing/AboutUs';
import WhyUs from '@/components/Landing/WhyUs';
import ServicesLanding from '@/components/Landing/ServicesLanding';
import CtaBlock from '@/components/CtaBlock';
import NewsLanding from '@/components/Landing/NewsLanding';
import Contact from '@/components/Contact';

export default async function Home() {
  const payload = await getPayload({ config });
  const services = await payload.find({ collection: 'services', limit: 3 });
  
  return (
    <main className="flex flex-col w-full items-center justify-center">
      <Hero />

      <AboutUs />

      <ServicesLanding />
      <CtaBlock />
      <WhyUs />

      <NewsLanding />



      <Contact />

      <Footer />
    </main>
  )
}
