import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <main className="flex flex-col w-full items-center justify-center">

      <Navbar isDarkMode />

      <Contact />

      <Footer />
    </main>
  );
}