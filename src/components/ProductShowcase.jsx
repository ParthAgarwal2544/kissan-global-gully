"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { products } from "@/data/products";

function ProductJar({ product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex items-center justify-center py-6 select-none w-full"
    >
      <motion.div
        animate={{
          y: [0, -14, 0],
          rotate: [-2, 1.5, -2],
        }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        {/* Soft shadow */}
        <div
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-8 rounded-full blur-xl pointer-events-none"
          style={{ background: "rgba(0,0,0,0.45)" }}
        />
        <div className="w-[65vw] sm:w-[320px] md:w-[360px] lg:w-[410px] max-w-[450px]">
          <Image
            src={product.image}
            alt={product.name}
            width={450}
            height={450}
            className="object-contain w-full h-auto pointer-events-none"
            style={{
              filter: "drop-shadow(0 25px 45px rgba(0,0,0,0.4))",
            }}
            priority
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProductInfo({ product, isEven }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col justify-center text-center lg:text-left py-6"
    >
      {/* Region & Location Badge */}
      <div className="mb-5 flex items-center gap-3.5 justify-center lg:justify-start">
        <div
          className="px-4 py-1.5 rounded-full font-body text-xs font-bold tracking-widest uppercase inline-flex items-center gap-2 shadow-md"
          style={{
            background: product.accentColor,
            color: "#17130F",
          }}
        >
          <span>{product.spiceElement}</span>
          <span>{product.region} India</span>
        </div>
        <span
          className="font-body text-xs font-semibold tracking-[0.25em] uppercase opacity-75"
          style={{ color: product.textColor }}
        >
          {product.location}
        </span>
      </div>

      {/* Product Name */}
      <h3
        className="font-display leading-none mb-6"
        style={{
          fontSize: "clamp(2.75rem, 5.5vw, 5rem)",
          color: product.textColor,
        }}
      >
        {product.name.toUpperCase()}
      </h3>

      {/* Description */}
      <p
        className="font-body text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 opacity-90 font-light"
        style={{ color: product.textColor }}
      >
        {product.description}
      </p>

      {/* Specs bar: Price, Weight, Region */}
      <div className="flex items-center gap-8 mb-4 justify-center lg:justify-start">
        <div>
          <p
            className="font-display text-4xl sm:text-5xl"
            style={{ color: product.accentColor }}
          >
            {product.price}
          </p>
          <p
            className="font-body text-xs uppercase tracking-widest opacity-70 mt-1"
            style={{ color: product.textColor }}
          >
            Net Wt: {product.weight}
          </p>
        </div>

        <div
          className="h-12 w-px opacity-30"
          style={{ background: product.textColor }}
        />

        <div>
          <p
            className="font-body font-bold text-base sm:text-lg"
            style={{ color: product.textColor }}
          >
            {product.location}
          </p>
          <p
            className="font-body text-xs uppercase tracking-widest opacity-70 mt-1"
            style={{ color: product.textColor }}
          >
            Origin Field
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductShowcase() {
  return (
    <div id="products" className="relative">
      {/* Intro Header Section with full-bleed food background */}
      <section
        className="relative text-center overflow-hidden flex items-center justify-center"
        style={{
          minHeight: "55vh",
          paddingTop: "6rem",
          paddingBottom: "6rem",
          background: "#17130F",
        }}
      >
        {/* Full-bleed background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/rooted-in-the-soil-food.jpeg"
            alt="Farm-fresh street food ingredients"
            fill
            className="object-cover object-center scale-105"
            sizes="100vw"
            priority
          />
        </div>

        {/* Cinematic gradient overlay for crisp text readability */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(23,19,15,0.82) 0%, rgba(23,19,15,0.55) 45%, rgba(23,19,15,0.85) 100%)",
          }}
        />

        <div className="section-container relative z-10 py-12">
          <h2
            className="font-display text-[#FFF5DF] leading-tight"
            style={{
              fontSize: "clamp(3rem, 7.5vw, 6.5rem)",
              textShadow: "0 4px 25px rgba(0,0,0,0.85)",
            }}
          >
            FOUR CREATIONS.{" "}
            <span
              style={{
                WebkitTextStroke: "2px #F7C843",
                color: "transparent",
                filter: "drop-shadow(0 2px 12px rgba(247,200,67,0.35))",
              }}
            >
              FOUR REGIONS.
            </span>
          </h2>
          <p
            className="font-body text-[#FFF5DF]/85 text-xs sm:text-sm tracking-[0.3em] uppercase mt-5 font-semibold"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}
          >
            Scroll through each regional creation
          </p>
        </div>
      </section>

      {/* 4 Individual Product Pages / Sections */}
      {products.map((product, index) => {
        const isEven = index % 2 === 0;

        return (
          <section
            key={product.id}
            id={`product-${product.id}`}
            className="relative overflow-hidden flex items-center"
            style={{
              background: product.bgColor,
              minHeight: "90vh",
              paddingTop: "5rem",
              paddingBottom: "5rem",
            }}
          >
            {/* Giant watermark background region name */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none select-none opacity-10 font-display text-[16vw] font-bold whitespace-nowrap"
              style={{ color: product.textColor }}
            >
              {product.region.toUpperCase()}
            </div>

            {/* Subtle ambient light gradient */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[60vh] rounded-full blur-[140px] pointer-events-none opacity-15"
              style={{ background: product.accentColor }}
            />

            {/* Content Container */}
            <div className="section-container relative z-10 w-full">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                {/* Alternating layout for variety on desktop */}
                {isEven ? (
                  <>
                    <div className="order-1 lg:order-1">
                      <ProductJar product={product} />
                    </div>
                    <div className="order-2 lg:order-2">
                      <ProductInfo product={product} isEven={isEven} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="order-2 lg:order-1">
                      <ProductInfo product={product} isEven={isEven} />
                    </div>
                    <div className="order-1 lg:order-2">
                      <ProductJar product={product} />
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Clean dividing line at the bottom of each product slide */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </section>
        );
      })}
    </div>
  );
}
