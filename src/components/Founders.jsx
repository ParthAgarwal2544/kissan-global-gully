"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { founders } from "@/data/founders";

export default function Founders() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      ref={sectionRef}
      id="founders"
      className="relative overflow-hidden"
      style={{
        background: "#17130F",
        paddingTop: "5rem",
        paddingBottom: "4.5rem",
      }}
    >
      {/* Decorative top accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[#E32127]/50 to-transparent" />

      {/* Ambient background glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[160px] pointer-events-none opacity-20"
        style={{ background: "#E32127" }}
      />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E32127]/30 bg-[#E32127]/10 mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[#E32127]" />
            <span className="font-body text-[#FFF5DF]/90 text-xs tracking-[0.3em] uppercase font-semibold">
              The Team
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-[#FFF5DF] mt-2"
            style={{ fontSize: "clamp(2.5rem, 6.5vw, 5.5rem)", lineHeight: 1.0 }}
          >
            THE{" "}
            <span className="text-[#E32127]">FOUNDERS</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="font-body text-[#FFF5DF]/60 tracking-[0.25em] text-xs sm:text-sm uppercase mt-3"
          >
            Global Gully by Kissan
          </motion.p>
        </div>

        {/* Founders grid — Balanced, Centered 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-5xl mx-auto items-stretch justify-center">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col bg-[#211B15] border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-[#E32127]/50"
            >
              {/* Image container with white studio background */}
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-white border-b border-white/10">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Founder Details Box */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3
                    className="font-display text-[#FFF5DF] uppercase tracking-wide group-hover:text-[#F7C843] transition-colors duration-300"
                    style={{ fontSize: "clamp(1.2rem, 2vw, 1.5rem)", lineHeight: 1.15 }}
                  >
                    {founder.name}
                  </h3>
                  {founder.role && (
                    <p className="font-body text-[#FFF5DF]/50 text-xs tracking-wider uppercase mt-1">
                      {founder.role}
                    </p>
                  )}
                </div>

                <div
                  className="mt-4 h-0.5 w-8 group-hover:w-16 transition-all duration-300 rounded-full"
                  style={{ background: "#E32127" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
