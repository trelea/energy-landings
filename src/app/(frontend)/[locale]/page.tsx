import Hero from '@/components/Landing/Hero';
import Footer from '@/components/Footer';
import AboutUs from '@/components/Landing/AboutUs';
import WhyUs from '@/components/Landing/WhyUs';
import ServicesLanding from '@/components/Landing/ServicesLanding';
import CtaBlock from '@/components/CtaBlock';
import NewsLanding from '@/components/Landing/NewsLanding';
import Contact from '@/components/Contact';
import Statistics from '@/components/Landing/Statistics';
import Testimonials from '@/components/Landing/Testimonials';

export default async function Home() {
  return (
    <main className="flex flex-col w-full items-center justify-center">
      <Hero />

      <AboutUs />

      <Statistics />

      <WhyUs />

      <div id="services">
        <ServicesLanding />
      </div>

      <Testimonials />

      <CtaBlock />

      <NewsLanding />

      <Contact />

      <Footer />
    </main>
  )
}
