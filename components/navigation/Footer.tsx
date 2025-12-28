"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#0f172a] to-[#020617] text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-24">

        {/* TOP */}
        <div className="grid gap-16 md:grid-cols-4">

          {/* BRAND */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Webku</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Jasa pembuatan website profesional untuk bisnis yang ingin tampil
              lebih kredibel, modern, dan siap berkembang di dunia digital.
            </p>
          </div>

          {/* MENU */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Menu
            </h4>
            <ul className="mt-6 space-y-3 text-sm">
              <li><a href="#home" className="hover:text-white transition">Home</a></li>
              <li><a href="#about" className="hover:text-white transition">Tentang Webku</a></li>
              <li><a href="#services" className="hover:text-white transition">Layanan</a></li>
              <li><a href="#portfolio" className="hover:text-white transition">Portofolio</a></li>
              <li><a href="#contact" className="hover:text-white transition">Kontak</a></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Layanan
            </h4>
            <ul className="mt-6 space-y-3 text-sm">
              <li>Website Development</li>
              <li>UI / UX Design</li>
              <li>Maintenance & Support</li>
              <li>Custom Web System</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Kontak
            </h4>
            <div className="mt-6 space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-indigo-400" />
                <span>hello@webku.id</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-indigo-400" />
                <span>+62 812-3456-7890</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-indigo-400 mt-0.5" />
                <span>Indonesia</span>
              </div>
            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="mt-20 h-px bg-white/10" />

        {/* BOTTOM */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-sm text-gray-400 md:flex-row">
          <p>© {new Date().getFullYear()} Webku. All rights reserved.</p>
          <p>
            Dibuat dengan <span className="text-indigo-400">dedikasi</span> untuk
            bisnis Anda.
          </p>
        </div>

      </div>
    </footer>
  );
}
