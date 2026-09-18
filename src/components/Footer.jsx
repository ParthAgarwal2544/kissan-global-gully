"use client";
import Image from "next/image";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Global Gully", href: "#global-gully" },
  { label: "Products", href: "#products" },
  { label: "The Team", href: "#founders" },
];

export default function Footer() {
  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "#17130F",
        borderTop: "1px solid rgba(247,200,67,0.15)",
        paddingTop: "3.5rem",
        paddingBottom: "3rem",
      }}
    >
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3.5 mb-5">
              <Image
                src="/images/logo.png"
                alt="Kissan Logo"
                width={100}
                height={50}
                className="h-8 sm:h-9 w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
              />
              <div className="h-6 w-px bg-white/20" />
              <div>
                <p className="font-display text-[#FFF5DF] text-sm md:text-base tracking-widest leading-none">GLOBAL GULLY</p>
                <p className="font-body text-[#F7C843] text-[10px] tracking-[0.2em] font-bold uppercase mt-0.5">
                  Rooted in India
                </p>
              </div>
            </div>
            <p className="font-body text-[#FFF5DF]/50 text-sm leading-relaxed max-w-xs">
              Rooted in India. Crafted for the Street. Four regional flavours. Zero
              compromises.
            </p>
            {/* Social links */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[#FFF5DF]/20 flex items-center justify-center text-[#FFF5DF]/60 hover:border-[#E32127] hover:text-[#E32127] transition-all duration-300 text-sm font-bold"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[#FFF5DF]/20 flex items-center justify-center text-[#FFF5DF]/60 hover:border-[#4F8F32] hover:text-[#4F8F32] transition-all duration-300 text-sm font-bold"
                aria-label="WhatsApp"
              >
                WA
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p className="font-body font-bold text-[#FFF5DF]/40 text-xs tracking-widest uppercase mb-5">
              Navigate
            </p>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="font-body text-[#FFF5DF]/70 hover:text-[#F7C843] transition-colors duration-300 text-sm font-medium"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products quick list */}
          <div>
            <p className="font-body font-bold text-[#FFF5DF]/40 text-xs tracking-widest uppercase mb-5">
              Products
            </p>
            <ul className="space-y-3">
              {[
                "Achari BBQ — ₹169",
                "Thecha Salsa — ₹179",
                "Chettinad Pepper Dip — ₹189",
                "Bhut Jolokia Cream Cheese — ₹219",
              ].map((p) => (
                <li key={p}>
                  <span className="font-body text-[#FFF5DF]/50 text-sm">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px w-full mb-8"
          style={{ background: "linear-gradient(to right, transparent, rgba(247,200,67,0.2), transparent)" }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-[#FFF5DF]/30 text-xs">
            © 2024 Kissan Global Gully · A Hindustan Unilever initiative
          </p>
          <p className="font-display text-[#FFF5DF]/10 text-xs tracking-widest">
            REAL FARM HERITAGE · RAW GULLY ENERGY · NO COMPROMISES
          </p>
        </div>
      </div>

      {/* Background wordmark */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none overflow-hidden">
        <p
          className="font-display text-[#FFF5DF]/3 whitespace-nowrap"
          style={{ fontSize: "clamp(4rem, 12vw, 10rem)" }}
        >
          GLOBAL GULLY
        </p>
      </div>
    </footer>
  );
}
