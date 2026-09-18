"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GirlMoment() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax zoom
      gsap.to(imageRef.current, {
        yPercent: -8,
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
      id="girl-moment"
      className="relative overflow-hidden"
      style={{ background: "#17130F" }}
    >
      <div className="relative h-[90vh] md:h-screen overflow-hidden">
        {/* Background image */}
        <div ref={imageRef} className="absolute inset-0 scale-110">
          <Image
            src="/images/global-gully-girl-eating.jpeg"
            alt="Enjoying Global Gully — Your snacks, your way"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Gradient overlay — top and bottom, not covering center/face */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(23,19,15,0.7) 0%, rgba(23,19,15,0.1) 30%, rgba(23,19,15,0.1) 60%, rgba(23,19,15,0.75) 100%)",
          }}
        />

        {/* Top content */}
        <div className="absolute top-0 left-0 right-0 px-8 md:px-16 lg:px-20 pt-12 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="font-body text-[#F7C843] text-xs tracking-[0.4em] uppercase font-semibold"
          >
            The Moment
          </motion.span>
        </div>

        {/* Bottom overlay content */}
        <div className="absolute bottom-0 left-0 right-0 px-8 md:px-16 lg:px-20 pb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2
              className="font-display text-[#FFF5DF] leading-none mb-3"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
            >
              YOUR SNACKS.
            </h2>
            <h2
              className="font-display text-[#F7C843] leading-none"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
            >
              YOUR WAY.
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
