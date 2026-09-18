import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutKissan from "@/components/AboutKissan";
import GlobalGully from "@/components/GlobalGully";
import ProductShowcase from "@/components/ProductShowcase";
import GirlMoment from "@/components/GirlMoment";
import Founders from "@/components/Founders";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* 01 — Hero */}
        <Hero />

        {/* 02 — About Kissan */}
        <AboutKissan />

        {/* 03 — Global Gully */}
        <GlobalGully />

        {/* 05 — Four Products */}
        <ProductShowcase />

        {/* 06 — Girl / Human Moment */}
        <GirlMoment />

        {/* 08 — Founders */}
        <Founders />
      </main>

      {/* 09 — Footer */}
      <Footer />
    </>
  );
}
