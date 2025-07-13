import Navbar from "@/components/Navbar";
import CtaBlock from "@/components/CtaBlock";
import Footer from "@/components/Footer";

import OurStory from "@/components/About/OurStory";
import Certifications from "@/components/About/Certifications";
import Process from "@/components/About/Process";

export default function AboutUsPage() {
  return (
    <main className="flex flex-col w-full items-center justify-center">

      <Navbar isDarkMode />

      <OurStory />

      <Process />

      <Certifications />

      <CtaBlock />

      <Footer />
    </main>
  );
}