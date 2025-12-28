"use client";

import { useEffect, useState } from "react";

const menus = [
  { label: "Home", href: "#hero" },
  { label: "Tentang Webku", href: "#about" },
  { label: "Layanan", href: "#services" },
  { label: "Portofolio", href: "#portfolio" },
  { label: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`
            flex items-center justify-between
            px-6 py-3 rounded-2xl
            transition-all duration-300
            ${
              scrolled
                ? `
                  bg-gradient-to-r
                  from-white/60 via-indigo-50/40 to-purple-50/40
                  backdrop-blur-xl
                  shadow-lg shadow-indigo-500/10
                  ring-1 ring-white/30
                `
                : "bg-transparent"
            }
          `}
        >
          {/* Brand */}
          <div className="text-xl font-semibold text-gray-900">
            Webku
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            {menus.map((menu) => (
              <a
                key={menu.href}
                href={menu.href}
                className="relative transition hover:text-indigo-600"
              >
                {menu.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <button
            onClick={() =>
              window.open("https://wa.me/628xxxxxxxxxx", "_blank")
            }
            className="
              rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600
              px-5 py-2 text-sm font-semibold text-white
              shadow-md shadow-indigo-600/30
              transition hover:opacity-90
            "
          >
            Konsultasi
          </button>
        </div>
      </div>
    </header>
  );
}
