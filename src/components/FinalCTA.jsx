"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { products } from "@/data/products";


export default function FinalCTA() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      id="final-cta"
      className="relative overflow-hidden"
      style={{ background: "#F7C843" }}
    >
      {/* Clean top border */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#17130F]/20 to-transparent" />

      <div className="section-container py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div className="text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="font-body text-[#17130F]/60 text-xs tracking-[0.4em] uppercase font-semibold block mb-6"
            >
              The Promise
            </motion.span>

            <div className="space-y-2 mb-10">
              {["REAL FARM", "HERITAGE.", "RAW GULLY", "ENERGY.", "NO COMPROMISES."].map(
                (line, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: i * 0.1 }}
                    className="font-display text-[#17130F] leading-none"
                    style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
                  >
                    {line}
                  </motion.p>
                )
              )}
            </div>

            <div className="flex justify-center lg:justify-start">
              <motion.button
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="font-body font-bold text-base tracking-widest uppercase px-10 py-5 rounded-full transition-all duration-300"
                style={{ background: "#E32127", color: "#FFF5DF" }}
              >
                Explore Global Gully
              </motion.button>
            </div>

            {/* Decorative bar */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-10 h-1.5 w-24 rounded-full origin-center lg:origin-left mx-auto lg:mx-0"
              style={{ background: "#E32127" }}
            />
          </div>

          {/* Products art-directed 4-jar showcase */}
          <div className="flex flex-col items-center justify-center w-full">
            {/* The 4 Jars Fan Formation */}
            <div className="flex items-end justify-center -space-x-4 sm:-space-x-6 md:-space-x-7 lg:-space-x-6 xl:-space-x-8 w-full py-4 px-2">
              {products.map((product, i) => {
                const fanSettings = [
                  { rotate: -12, yOffset: 16, zIndex: 1 },
                  { rotate: -4, yOffset: -8, zIndex: 3 },
                  { rotate: 4, yOffset: -8, zIndex: 4 },
                  { rotate: 12, yOffset: 16, zIndex: 2 },
                ][i];

                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    animate={
                      isInView
                        ? { opacity: 1, y: fanSettings.yOffset, scale: 1 }
                        : {}
                    }
                    transition={{
                      duration: 0.7,
                      delay: 0.3 + i * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{
                      y: -18,
                      scale: 1.12,
                      rotate: 0,
                      zIndex: 25,
                      transition: { duration: 0.25 },
                    }}
                    className="group relative cursor-pointer select-none"
                    style={{ zIndex: fanSettings.zIndex }}
                    onClick={() => {
                      document
                        .getElementById("products")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <div
                      className="transition-transform duration-300"
                      style={{
                        transform: `rotate(${fanSettings.rotate}deg)`,
                        filter:
                          "drop-shadow(0 18px 24px rgba(0,0,0,0.35)) drop-shadow(0 6px 8px rgba(0,0,0,0.18))",
                      }}
                    >
                      <div className="w-[21vw] sm:w-[125px] md:w-[145px] lg:w-[135px] xl:w-[155px] max-w-[170px] min-w-[95px]">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={320}
                          height={320}
                          className="object-contain w-full h-auto pointer-events-none"
                        />
                      </div>
                    </div>

                    {/* Hover Tooltip */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#17130F] text-[#F7C843] px-2.5 py-1 rounded-full text-[10px] font-body font-bold tracking-wider uppercase shadow-xl pointer-events-none z-30">
                      {product.name}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Ambient Ground Shadow */}
            <div className="w-3/4 h-5 bg-[#17130F]/25 rounded-full blur-md mx-auto -mt-2 pointer-events-none" />

            {/* Flavor Squad Pills */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-8 w-full max-w-lg"
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    document
                      .getElementById("products")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-[#17130F]/10 hover:bg-[#17130F]/18 transition-all duration-200 border border-[#17130F]/15 rounded-xl px-2.5 py-2 text-center cursor-pointer hover:scale-105"
                >
                  <div className="text-[10px] font-body font-bold text-[#E32127] uppercase tracking-wider">
                    {product.region}
                  </div>
                  <div className="text-xs font-display text-[#17130F] font-bold truncate">
                    {product.name}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Clean bottom border */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#17130F]/20 to-transparent" />
    </section>
  );
}
