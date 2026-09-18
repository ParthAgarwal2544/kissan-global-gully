"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Global Gully", href: "#global-gully" },
  { label: "Products", href: "#products" },
  { label: "Our Story", href: "#rooted" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navBg = "bg-[#17130F]/95 backdrop-blur-md border-b border-white/10 shadow-xl";

  const textColor = "text-[#FFF5DF]";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg} h-20 flex items-center`}
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-3.5 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="h-9 sm:h-10 flex items-center">
              <Image
                src="/images/logo.png"
                alt="Kissan Logo"
                width={100}
                height={50}
                className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
                priority
              />
            </div>
            <div className="h-6 w-px bg-white/20 hidden sm:block" />
            <div className="hidden sm:flex flex-col">
              <span className="font-display text-[#FFF5DF] text-sm tracking-widest leading-none">
                GLOBAL GULLY
              </span>
              <span className="text-[10px] tracking-[0.2em] text-[#F7C843] font-body uppercase font-bold mt-0.5">
                Street Fusion
              </span>
            </div>
          </motion.div>

          {/* Desktop Nav Links */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex items-center gap-8"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`font-body text-sm font-semibold tracking-widest uppercase ${textColor} opacity-80 hover:opacity-100 hover:text-[#F7C843] transition-all duration-300`}
              >
                {link.label}
              </button>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden md:flex items-center gap-4"
          >
            <button
              onClick={() => handleNavClick("#products")}
              className="font-body font-bold text-sm tracking-widest uppercase px-6 py-2.5 rounded-full bg-[#E32127] text-[#FFF5DF] hover:bg-[#F7C843] hover:text-[#17130F] transition-all duration-300 hover:scale-105"
            >
              Explore
            </button>
          </motion.div>

          {/* Hamburger */}
          <button
            className={`md:hidden flex flex-col gap-1.5 p-2 ${textColor}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-current origin-center transition-all"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-current"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-current origin-center transition-all"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#17130F] flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-10">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => handleNavClick(link.href)}
                  className="font-display text-5xl text-[#FFF5DF] hover:text-[#F7C843] transition-colors"
                >
                  {link.label.toUpperCase()}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: 0.4 }}
                onClick={() => handleNavClick("#products")}
                className="mt-4 font-body font-bold text-lg tracking-widest uppercase px-10 py-4 rounded-full bg-[#E32127] text-[#FFF5DF]"
              >
                Explore Global Gully
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
