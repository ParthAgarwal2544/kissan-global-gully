"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const regions = [
  {
    id: "north",
    label: "NORTH",
    product: "Achari BBQ",
    region: "North India",
    top: "20%",
    left: "35%",
    color: "#F7C843",
  },
  {
    id: "west",
    label: "WEST",
    product: "Thecha Salsa",
    region: "Maharashtra",
    top: "52%",
    left: "20%",
    color: "#4F8F32",
  },
  {
    id: "south",
    label: "SOUTH",
    product: "Chettinad Pepper Dip",
    region: "Tamil Nadu",
    top: "78%",
    left: "40%",
    color: "#E32127",
  },
  {
    id: "east",
    label: "EAST",
    product: "Bhut Jolokia Cream Cheese",
    region: "Assam",
    top: "28%",
    left: "65%",
    color: "#FFF5DF",
  },
];

export default function GlobalGully() {
  const sectionRef = useRef(null);
  const mapRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Map scale reveal
      gsap.from(mapRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top 80%",
        },
      });

      // Stagger region dots
      gsap.from(".region-dot", {
        scale: 0,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top 70%",
        },
      });

      gsap.from(".region-label", {
        x: -20,
        opacity: 0,
        stagger: 0.15,
        duration: 0.5,
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="global-gully"
      className="relative overflow-hidden"
      style={{ background: "#4F8F32" }}
    >
      {/* Clean section transition border */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#F7C843]/30 to-transparent" />

      <div className="section-container py-24 md:py-32">
        {/* Header */}
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="font-body text-[#F7C843] text-xs tracking-[0.4em] uppercase font-semibold"
          >
            The Concept
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-[#FFF5DF] mt-3"
            style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)", lineHeight: 0.95 }}
          >
            GLOBAL{" "}
            <span className="text-[#F7C843]">GULLY</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-display text-[#FFF5DF]/90 mt-4"
            style={{ fontSize: "clamp(1.2rem, 2.2vw, 1.8rem)" }}
          >
            NEW FLAVOURS. ROOTED IN INDIA.
          </motion.p>
        </div>

        {/* Copy blocks - Centered */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
          {[
            "Bridging global food formats with authentic Indian regional flavours through fusion, to cater to a new generation of consumers who seek both familiarity and experimentation.",
            "Tired of boring ketchups and plain mayo? Elevate your everyday snacking with four fiery, farm-fresh fusion creations.",
            "We've paired iconic regional spice routes—sourced directly from local Indian farmers—with your favorite global formats.",
            "Whether dipping, spreading, or grilling, turn chips, wraps, and toasts into an effortless gourmet street-food feast in seconds.",
          ].map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              className="border-l-4 border-[#F7C843] pl-5"
            >
              <p className="font-body text-[#FFF5DF]/90 text-lg leading-relaxed">
                {text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bold tagline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-center mb-20"
        >
          <p
            className="font-display text-[#FFF5DF]"
            style={{ fontSize: "clamp(1.5rem, 4vw, 3.5rem)" }}
          >
            BOLD FLAVORS. ZERO HASSLE.{" "}
            <span className="text-[#F7C843]">YOUR SNACKS, ELEVATED.</span>
          </p>
        </motion.div>

        {/* India Map + Regional Callouts */}
        <div ref={mapRef} className="relative max-w-3xl mx-auto">
          <div className="relative">
            <Image
              src="/images/global-gully-india-map.jpeg"
              alt="India Regional Map — Global Gully"
              width={800}
              height={900}
              className="w-full h-auto rounded-2xl"
              style={{
                filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.4))",
              }}
            />

            {/* Regional dots and labels */}
            {regions.map((r) => (
              <div
                key={r.id}
                className="region-dot absolute"
                style={{ top: r.top, left: r.left, transform: "translate(-50%, -50%)" }}
              >
                <div className="relative group">
                  {/* Pulse */}
                  <motion.div
                    animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-full"
                    style={{ background: r.color }}
                  />
                  {/* Dot */}
                  <div
                    className="relative w-5 h-5 rounded-full border-2 border-white cursor-pointer"
                    style={{ background: r.color }}
                  />
                  {/* Label */}
                  <div
                    className="region-label absolute left-7 top-1/2 -translate-y-1/2 whitespace-nowrap"
                  >
                    <div
                      className="px-3 py-1.5 rounded-lg"
                      style={{ background: "rgba(23,19,15,0.85)" }}
                    >
                      <p
                        className="font-body font-bold text-xs tracking-wider"
                        style={{ color: r.color }}
                      >
                        {r.label}
                      </p>
                      <p className="font-body text-[#FFF5DF] text-xs font-semibold">
                        {r.product}
                      </p>
                      <p className="font-body text-[#FFF5DF]/60 text-xs">
                        {r.region}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map caption */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2 }}
            className="text-center font-body text-[#FFF5DF]/60 text-sm mt-6 tracking-wider"
          >
            INDIA → REGIONS → LOCAL INGREDIENTS → GLOBAL FORMATS → GLOBAL GULLY
          </motion.p>
        </div>
      </div>

      {/* Bottom divider line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#F7C843]/30 to-transparent" />
    </section>
  );
}
