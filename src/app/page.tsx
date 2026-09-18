import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutKissan from "@/components/AboutKissan";
import GlobalGully from "@/components/GlobalGully";
import RootedInTheSoil from "@/components/RootedInTheSoil";
import ProductShowcase from "@/components/ProductShowcase";
import GirlMoment from "@/components/GirlMoment";
import FinalCTA from "@/components/FinalCTA";
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

        {/* 03 — Global Gully + India Map */}
        <GlobalGully />

        {/* 04 — Rooted in the Soil + Food Image */}
        <RootedInTheSoil />

        {/* 05 — Four Products */}
        <ProductShowcase />

        {/* 06 — Girl / Human Moment */}
        <GirlMoment />

        {/* 07 — Final CTA */}
        <FinalCTA />

        {/* 08 — Founders */}
        <Founders />
      </main>

      {/* 09 — Footer */}
      <Footer />
    </>
  );
}
