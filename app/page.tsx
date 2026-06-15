import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Philosophy from "@/components/sections/Philosophy";
import Product from "@/components/sections/Product";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Philosophy />
        <Product />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
