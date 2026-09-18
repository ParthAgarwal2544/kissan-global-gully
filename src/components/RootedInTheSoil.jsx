"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const storyBlocks = [
  {
    text: "Long before it became an iconic household name, Kissan was born on the fertile lands of India—a brand built on a simple promise to connect local farmers directly to Indian homes.",
    highlight: false,
  },
  {
    text: "For generations, Kissan has partnered with thousands of small-holder farmers across the country, turning their hard-earned, sun-ripened harvests into the flavors we grew up loving.",
    highlight: false,
  },
  {
    text: "With Kissan Global Gully, that legacy takes a bold step forward.",
    highlight: true,
  },
  {
    text: "We brought together farm-fresh ingredients straight from regional fields—from fiery Assam Ghost Peppers and pungent Maharashtrian green chilies to aromatic South Indian black pepper—and infused them into modern global snack formats.",
    highlight: false,
  },
  {
    text: "Every jar celebrates the dedication of the Indian kisan, delivering authentic street-style heat and rich local spices directly to your table.",
    highlight: false,
  },
];

export default function RootedInTheSoil() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image parallax zoom
      gsap.to(imageRef.current, {
        scale: 1.12,
        ease: "none",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="rooted"
      className="relative overflow-hidden"
      style={{ background: "#E32127" }}
    >
      <div className="section-container py-24 md:py-32">
        {/* Centered Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="block font-body text-[#F7C843] text-xs tracking-[0.4em] uppercase font-semibold mb-3"
          >
            Our Heritage
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-[#FFF5DF] mb-3"
            style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)", lineHeight: 0.95 }}
          >
            ROOTED IN THE SOIL
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-display text-[#F7C843]"
            style={{ fontSize: "clamp(1.2rem, 2.5vw, 2rem)" }}
          >
            CRAFTED FOR THE STREET
          </motion.p>
        </div>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Story copy */}
          <div className="space-y-8 text-center lg:text-left">
            {storyBlocks.map((block, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
                className={`font-body leading-relaxed ${
                  block.highlight
                    ? "text-[#F7C843] text-xl font-bold"
                    : "text-[#FFF5DF]/90 text-lg"
                }`}
              >
                {block.text}
              </motion.p>
            ))}
          </div>

          {/* Decorative text column */}
          <div className="flex flex-col justify-center gap-8 lg:pl-10 text-center lg:text-left">
            {["REAL FARM HERITAGE.", "RAW GULLY ENERGY.", "NO COMPROMISES."].map(
              (line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.5 + i * 0.15 }}
                  className="font-display text-[#FFF5DF]"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3.5rem)",
                    lineHeight: 1.0,
                    WebkitTextStroke: i === 1 ? "1px #F7C843" : undefined,
                    color: i === 1 ? "transparent" : "#FFF5DF",
                  }}
                >
                  {line}
                </motion.p>
              )
            )}
          </div>
        </div>
      </div>

      {/* Full-bleed food image */}
      <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <div
          ref={imageRef}
          className="absolute inset-0 scale-100"
        >
          <Image
            src="/images/rooted-in-the-soil-food.jpeg"
            alt="Farm-fresh ingredients for Global Gully"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        {/* Gradient overlays */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, #E32127 0%, transparent 20%, transparent 70%, #17130F 100%)",
          }}
        />
        {/* Overlay text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-center px-6"
          >
            <p
              className="font-display text-[#FFF5DF]"
              style={{ fontSize: "clamp(1.5rem, 4vw, 3.5rem)", textShadow: "0 4px 20px rgba(0,0,0,0.6)" }}
            >
              FARM-FRESH INGREDIENTS.
            </p>
            <p
              className="font-display text-[#F7C843] mt-2"
              style={{ fontSize: "clamp(1.5rem, 4vw, 3.5rem)", textShadow: "0 4px 20px rgba(0,0,0,0.6)" }}
            >
              GLOBAL FORMATS.
            </p>
            <p
              className="font-display text-[#FFF5DF] mt-2"
              style={{ fontSize: "clamp(1.5rem, 4vw, 3.5rem)", textShadow: "0 4px 20px rgba(0,0,0,0.6)" }}
            >
              ONE BOLD GULLY.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
