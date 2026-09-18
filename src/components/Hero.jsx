"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const heroProducts = [
  {
    id: 1,
    name: "Achari BBQ",
    region: "North India",
    src: "/images/product-achari-bbq.png",
    rotate: -7,
    yOffset: 12,
    zIndex: 2,
    tag: "North · 🌶️",
  },
  {
    id: 2,
    name: "Thecha Salsa",
    region: "Maharashtra",
    src: "/images/product-thecha-salsa.png",
    rotate: -2,
    yOffset: -6,
    zIndex: 4,
    tag: "West · 🌿",
  },
  {
    id: 4,
    name: "Bhut Jolokia Cream Cheese",
    region: "Assam",
    src: "/images/product-bhut-jolokia-cream-cheese.png",
    rotate: 2,
    yOffset: -16,
    zIndex: 5,
    tag: "East · 🔥",
    featured: true,
  },
  {
    id: 3,
    name: "Chettinad Pepper Dip",
    region: "Tamil Nadu",
    src: "/images/product-chettinad-pepper-dip.png",
    rotate: 8,
    yOffset: 10,
    zIndex: 3,
    tag: "South · ⚫",
  },
];

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const stageRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(overlayRef.current, { opacity: 1, duration: 0.6 })
        .from(
          ".hero-tag",
          { y: -30, opacity: 0, duration: 0.7, ease: "back.out(1.5)" },
          0.1
        )
        .from(
          ".hero-title-1",
          { y: 80, opacity: 0, duration: 0.9, ease: "power4.out" },
          0.2
        )
        .from(
          ".hero-title-2",
          { y: 80, opacity: 0, duration: 0.9, ease: "power4.out" },
          0.35
        )
        .from(
          ".hero-subtitle",
          { y: 25, opacity: 0, duration: 0.7 },
          0.55
        )
        .from(
          ".hero-cta",
          { y: 20, opacity: 0, duration: 0.6, scale: 0.92 },
          0.7
        )
        .from(
          ".hero-jar-item",
          {
            y: 80,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "back.out(1.4)",
          },
          0.6
        )
        .from(
          ".hero-scroll-indicator",
          { opacity: 0, y: 15, duration: 0.5 },
          1.1
        );

      // Scroll parallax
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.2,
        onUpdate: (self) => {
          const prog = self.progress;
          if (titleRef.current) {
            gsap.set(titleRef.current, { y: prog * 100, opacity: 1 - prog * 1.4 });
          }
          if (stageRef.current) {
            gsap.set(stageRef.current, { y: prog * 60 });
          }
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen overflow-hidden flex flex-col justify-between items-center pb-12 px-4"
      style={{
        background:
          "radial-gradient(ellipse at 50% 60%, #9E1015 0%, #700B0F 50%, #200709 100%)",
        paddingTop: "calc(80px + 6rem)",
      }}
    >
      {/* Subtle texture overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Warm ambient backlight */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[40vh] max-w-[800px] rounded-full blur-[140px] pointer-events-none opacity-25"
        style={{ background: "#F7C843" }}
      />

      {/* Hero Typography & CTA Block (Top / Middle) */}
      <div
        ref={titleRef}
        className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center"
      >
        <div className="hero-tag mb-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F7C843]/40 bg-[#17130F]/40 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#F7C843] animate-pulse" />
          <span className="font-body text-[#F7C843] text-xs md:text-sm tracking-[0.35em] uppercase font-semibold">
            KISSAN PRESENTS
          </span>
        </div>

        <div className="overflow-hidden">
          <h1
            className="hero-title-1 font-display text-[#FFF5DF] tracking-tight leading-none"
            style={{ fontSize: "clamp(3.75rem, 11vw, 9.5rem)" }}
          >
            KISSAN
          </h1>
        </div>

        <div className="overflow-hidden mt-1 mb-4">
          <h2
            className="hero-title-2 font-display leading-tight tracking-wider"
            style={{
              fontSize: "clamp(2.25rem, 6.5vw, 5.5rem)",
              background: "linear-gradient(135deg, #FFE8A3 0%, #F7C843 50%, #D49E10 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 2px 16px rgba(247,200,67,0.3))",
            }}
          >
            GLOBAL GULLY
          </h2>
        </div>

        <div className="hero-subtitle mb-6 max-w-2xl">
          <p className="font-body text-[#FFF5DF]/85 text-base sm:text-lg md:text-xl tracking-[0.2em] uppercase font-light">
            Rooted in India.{" "}
            <span className="text-[#F7C843] font-semibold">
              Crafted for the Street.
            </span>
          </p>
        </div>

        <div className="hero-cta">
          <button
            onClick={() => {
              document
                .getElementById("products")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-body font-bold text-xs sm:text-sm md:text-base tracking-[0.2em] uppercase px-8 py-3.5 sm:px-10 sm:py-4 rounded-full border-2 border-[#F7C843] text-[#17130F] bg-[#F7C843] hover:bg-transparent hover:text-[#F7C843] transition-all duration-300 shadow-[0_0_25px_rgba(247,200,67,0.35)] hover:scale-105 active:scale-95"
          >
            Explore Global Gully
          </button>
        </div>
      </div>

      {/* Art-Directed Product Stage (Positioned below text in visual flow) */}
      <div
        ref={stageRef}
        className="relative z-10 w-full max-w-6xl mx-auto mt-6 mb-2 flex flex-col items-center"
      >
        {/* The 4 Jars Fan Formation */}
        <div className="flex items-end justify-center -space-x-4 sm:-space-x-8 md:-space-x-12 lg:-space-x-14 px-4 w-full">
          {heroProducts.map((prod) => (
            <motion.div
              key={prod.id}
              className="hero-jar-item group relative cursor-pointer select-none"
              style={{
                zIndex: prod.zIndex,
                y: prod.yOffset,
              }}
              whileHover={{
                y: -24,
                scale: 1.12,
                rotate: 0,
                zIndex: 20,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              onClick={() => {
                document
                  .getElementById("products")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {/* Product Jar Container with crisp drop shadow */}
              <div
                className="transition-transform duration-300"
                style={{
                  transform: `rotate(${prod.rotate}deg)`,
                  filter:
                    "drop-shadow(0 25px 35px rgba(0,0,0,0.65)) drop-shadow(0 8px 12px rgba(0,0,0,0.4))",
                }}
              >
                <div className="w-[24vw] sm:w-[20vw] md:w-[17vw] max-w-[240px] min-w-[110px]">
                  <Image
                    src={prod.src}
                    alt={prod.name}
                    width={400}
                    height={400}
                    className="object-contain w-full h-auto pointer-events-none"
                    priority
                  />
                </div>
              </div>

              {/* Hover Badge */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#17130F]/90 border border-[#F7C843]/60 px-3 py-1 rounded-full text-[11px] font-body text-[#F7C843] tracking-wider uppercase backdrop-blur-md shadow-lg pointer-events-none">
                {prod.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator relative z-10 flex flex-col items-center gap-1.5 mt-2">
        <span className="font-body text-[#FFF5DF]/40 text-[10px] tracking-[0.25em] uppercase font-medium">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-0.5 h-6 bg-gradient-to-b from-[#F7C843] to-transparent rounded-full"
        />
      </div>
    </section>
  );
}
