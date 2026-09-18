"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const statements = [
  { text: "EVERYDAY FOOD.", emphasis: false },
  { text: "MADE MORE ENJOYABLE.", emphasis: true },
  { text: "PLAYFUL.", emphasis: false },
  { text: "ACCESSIBLE.", emphasis: false },
  { text: "TASTY.", emphasis: true },
];

export default function AboutKissan() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image parallax
      gsap.to(imageRef.current, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
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
      id="about"
      className="relative overflow-hidden"
      style={{ background: "#FFF5DF" }}
    >
      {/* Clean top divider line */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#E32127]/30 to-transparent" />

      <div className="section-container py-20 md:py-28">
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="font-display text-[#17130F] mb-4"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1.0 }}
          >
            ABOUT <span className="text-[#E32127]">KISSAN</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-[#17130F]/70 text-base md:text-lg tracking-wide uppercase font-medium"
          >
            Everyday Food. Made More Enjoyable Since 1935.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Editorial Text */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <div className="space-y-3 mb-8">
              {statements.map((s, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  className={`font-display ${
                    s.emphasis
                      ? "text-[#E32127]"
                      : "text-[#17130F]"
                  }`}
                  style={{ fontSize: "clamp(1.5rem, 3.2vw, 2.6rem)", lineHeight: 1.15 }}
                >
                  {s.text}
                </motion.p>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-body text-[#17130F]/80 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Kissan is a popular Indian food brand owned by Hindustan Unilever (HUL),
              known for its ketchup, sauces, spreads and jams. The brand focuses on
              making everyday meals more enjoyable, convenient and playful, especially
              for families and younger consumers. Kissan is strongly associated with
              tomato ketchup and has built its identity around accessible, tasty
              products that complement everyday Indian food.
            </motion.p>

            {/* Accent bar */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-8 h-1.5 w-28 rounded-full origin-center lg:origin-left mx-auto lg:mx-0"
              style={{ background: "#F7C843" }}
            />
          </div>

          {/* Right: Large image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative lg:h-[700px] h-[400px] rounded-3xl overflow-hidden"
          >
            <div ref={imageRef} className="absolute inset-0 scale-110">
              <Image
                src="/images/about-kissan.jpeg"
                alt="About Kissan"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 60%, rgba(23,19,15,0.4) 100%)",
              }}
            />
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute bottom-6 left-6 bg-[#E32127] text-[#FFF5DF] px-5 py-3 rounded-2xl"
            >
              <p className="font-display text-2xl">SINCE 1935</p>
              <p className="font-body text-sm opacity-80">India's Favourite</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#E32127]/30 to-transparent" />
    </section>
  );
}
