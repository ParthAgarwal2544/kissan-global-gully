"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export default function GlobalGully() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      id="global-gully"
      className="relative overflow-hidden"
      style={{
        background: "#4F8F32",
        paddingTop: "5.5rem",
        paddingBottom: "5.5rem",
      }}
    >
      {/* Anchor for any legacy #rooted navigation */}
      <div id="rooted" className="absolute -top-20" />

      {/* Clean top divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#F7C843]/40 to-transparent" />

      {/* Wide Container allowing content further to the left and larger map on the right */}
      <div
        className="w-full"
        style={{
          maxWidth: "1600px",
          margin: "0 auto",
          paddingLeft: "clamp(1.5rem, 5vw, 5rem)",
          paddingRight: "clamp(1.5rem, 5vw, 4rem)",
        }}
      >
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          {/* Left Column: Shifted to the left edge */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center text-left">
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="font-display text-[#FFF5DF] leading-none"
              style={{ fontSize: "clamp(3rem, 5.5vw, 5.25rem)" }}
            >
              GLOBAL <span className="text-[#F7C843]">GULLY</span>
            </motion.h2>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-body text-[#F7C843] font-bold text-xs sm:text-sm tracking-[0.25em] uppercase mt-3 mb-5"
            >
              Rooted in India · Crafted for the Street
            </motion.p>

            {/* Subtle accent bar */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="h-1 w-20 bg-[#F7C843] origin-left rounded-full mb-8"
            />

            {/* Editorial Content */}
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-body text-[#FFF5DF] text-base sm:text-lg leading-relaxed font-normal opacity-95"
              >
                Kissan’s legacy is rooted in Indian farms, local farmers and the
                authentic hyperlocal flavours we grew up with. Global Gully takes
                a bold step forward, bringing farm fresh regional ingredients
                and iconic Indian spices into exciting global food formats.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="font-body text-[#FFF5DF] text-base sm:text-lg leading-relaxed font-normal opacity-95"
              >
                From Assam Ghost Pepper and Maharashtrian green chilli to South
                Indian black pepper, each flavour combines India’s regional
                richness with modern snacking. Global Gully makes everyday fries,
                chips, wraps and toast more exciting, bringing bold Indian
                flavour to global favourites.
              </motion.p>
            </div>

            {/* Explore Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-9"
            >
              <button
                onClick={() => {
                  document
                    .getElementById("products")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2.5 font-body font-bold text-xs sm:text-sm tracking-[0.2em] uppercase px-8 py-3.5 rounded-full border-2 border-[#F7C843] text-[#17130F] bg-[#F7C843] hover:bg-transparent hover:text-[#F7C843] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.25)] hover:scale-105 active:scale-95"
              >
                <span>Explore All 4 Flavours</span>
                <span>→</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Prominent, Extra-Large Transparent Map */}
          <div className="lg:col-span-7 xl:col-span-7 flex items-center justify-center relative">
            {/* Ambient backlight */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] rounded-full blur-[100px] pointer-events-none opacity-25"
              style={{ background: "#F7C843" }}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.85,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-full max-w-[850px] select-none"
            >
              <Image
                src="/images/global-gully-india-map.png"
                alt="India Regional Sourcing Map — Global Gully by Kissan"
                width={985}
                height={653}
                className="w-full h-auto object-contain pointer-events-none"
                style={{
                  filter:
                    "drop-shadow(0 25px 45px rgba(0,0,0,0.35)) drop-shadow(0 8px 16px rgba(0,0,0,0.2))",
                }}
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Clean bottom divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#F7C843]/40 to-transparent mt-16" />
    </section>
  );
}
