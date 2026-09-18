"use client";
import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { products } from "@/data/products";

gsap.registerPlugin(ScrollTrigger);

function FloatingProduct({ product, isActive }) {
  return (
    <motion.div
      key={product.id}
      initial={{ scale: 0.65, rotate: 10, opacity: 0, y: 60 }}
      animate={
        isActive
          ? { scale: 1, rotate: -3, opacity: 1, y: 0 }
          : { scale: 0.65, rotate: 10, opacity: 0, y: 60 }
      }
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {isActive && (
        <motion.div
          animate={{
            y: [0, -12, 0],
            rotate: [-3, -1, -3],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Shadow */}
          <motion.div
            animate={{ scaleX: [1, 0.92, 1], opacity: [0.5, 0.3, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-3/4 h-6 rounded-full blur-xl"
            style={{ background: "rgba(0,0,0,0.4)" }}
          />
          <Image
            src={product.image}
            alt={product.name}
            width={420}
            height={420}
            className="object-contain relative z-10"
            style={{
              filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.35))",
              maxWidth: "min(380px, 55vw)",
              width: "100%",
              height: "auto",
            }}
            priority
          />
        </motion.div>
      )}
    </motion.div>
  );
}

export default function ProductShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  const goNext = useCallback(() => {
    setActiveIndex((i) => Math.min(i + 1, products.length - 1));
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((i) => Math.max(i - 1, 0));
  }, []);

  // Keyboard nav
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goNext();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev]);

  const product = products[activeIndex];

  return (
    <section
      ref={sectionRef}
      id="products"
      className="relative overflow-hidden"
    >
      {/* Section label */}
      <div
        className="relative py-12 text-center"
        style={{ background: "#17130F" }}
      >
        <span className="font-body text-[#F7C843] text-xs tracking-[0.4em] uppercase font-semibold">
          The Products
        </span>
        <h2
          className="font-display text-[#FFF5DF] mt-3"
          style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", lineHeight: 0.95 }}
        >
          FOUR CREATIONS.
          <br />
          <span style={{ WebkitTextStroke: "2px #E32127", color: "transparent" }}>
            FOUR REGIONS.
          </span>
        </h2>
      </div>

      {/* Product scene */}
      <AnimatePresence mode="wait">
        <motion.div
          key={product.id}
          ref={containerRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative min-h-screen flex items-center"
          style={{ background: product.bgColor }}
        >
          {/* Background abstract shapes */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.08 }}
            transition={{ duration: 1 }}
            className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] rounded-full pointer-events-none"
            style={{ background: product.accentColor }}
          />
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.05 }}
            transition={{ duration: 1.2, delay: 0.1 }}
            className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full pointer-events-none"
            style={{ background: product.textColor }}
          />

          {/* Decorative spice label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 0.15, x: 0 }}
            transition={{ duration: 1 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 pointer-events-none"
          >
            <span
              className="font-display text-[12vw] font-bold"
              style={{ color: product.textColor, letterSpacing: "0.1em" }}
            >
              {product.region.toUpperCase()}
            </span>
          </motion.div>

          <div className="section-container py-20 w-full relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Product image */}
              <div className="flex items-center justify-center order-2 lg:order-1">
                <FloatingProduct product={product} isActive={true} />
              </div>

              {/* Product info */}
              <div className="order-1 lg:order-2 text-center lg:text-left">
                {/* Region & Navigation Dots */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-6 flex items-center gap-4 justify-center lg:justify-start"
                >
                  <div
                    className="px-4 py-1.5 rounded-full font-body text-xs font-bold tracking-widest uppercase flex items-center gap-2"
                    style={{
                      background: product.accentColor,
                      color: "#17130F",
                    }}
                  >
                    <span>{product.spiceElement}</span>
                    <span>{product.region} India</span>
                  </div>
                  <div className="flex gap-1.5">
                    {products.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className="rounded-full transition-all duration-300"
                        style={{
                          width: i === activeIndex ? 24 : 8,
                          height: 8,
                          background:
                            i === activeIndex
                              ? product.accentColor
                              : "rgba(255,255,255,0.3)",
                        }}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Region */}
                <motion.p
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="font-body text-sm font-bold tracking-[0.3em] uppercase mb-3"
                  style={{ color: product.accentColor }}
                >
                  {product.region} · {product.location}
                </motion.p>

                {/* Product name */}
                <motion.h3
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="font-display mb-6"
                  style={{
                    fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                    lineHeight: 0.95,
                    color: product.textColor,
                  }}
                >
                  {product.name.toUpperCase()}
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="font-body text-lg leading-relaxed mb-8"
                  style={{ color: `${product.textColor}CC` }}
                >
                  {product.description}
                </motion.p>

                {/* Price + Weight */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.45 }}
                  className="flex items-center gap-6 mb-10 justify-center lg:justify-start"
                >
                  <div>
                    <p
                      className="font-display text-4xl"
                      style={{ color: product.accentColor }}
                    >
                      {product.price}
                    </p>
                    <p
                      className="font-body text-sm opacity-70"
                      style={{ color: product.textColor }}
                    >
                      {product.weight}
                    </p>
                  </div>
                  <div
                    className="h-12 w-px opacity-30"
                    style={{ background: product.textColor }}
                  />
                  <div>
                    <p
                      className="font-body text-xs tracking-widest uppercase opacity-70"
                      style={{ color: product.textColor }}
                    >
                      Region
                    </p>
                    <p
                      className="font-body font-bold text-sm"
                      style={{ color: product.textColor }}
                    >
                      {product.location}
                    </p>
                  </div>
                </motion.div>

                {/* Navigation */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center gap-4 justify-center lg:justify-start"
                >
                  <button
                    onClick={goPrev}
                    disabled={activeIndex === 0}
                    className="w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 disabled:opacity-30 hover:scale-110"
                    style={{
                      borderColor: product.textColor,
                      color: product.textColor,
                    }}
                    aria-label="Previous product"
                  >
                    ←
                  </button>
                  <button
                    onClick={goNext}
                    disabled={activeIndex === products.length - 1}
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-30 hover:scale-110 font-bold"
                    style={{
                      background: product.accentColor,
                      color: "#17130F",
                    }}
                    aria-label="Next product"
                  >
                    →
                  </button>
                  <span
                    className="font-body text-sm font-semibold tracking-widest ml-2"
                    style={{ color: `${product.textColor}80` }}
                  >
                    {activeIndex + 1} / {products.length}
                  </span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Bottom nav dots for mobile */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 lg:hidden">
            {products.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === activeIndex ? 28 : 10,
                  height: 10,
                  background:
                    i === activeIndex
                      ? product.accentColor
                      : "rgba(255,255,255,0.3)",
                }}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
