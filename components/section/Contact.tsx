"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Building2, User } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-36">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-start gap-24 lg:grid-cols-2">

          {/* LEFT - COPY */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:pt-20"
          >
            <span className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-1 text-xs font-semibold text-indigo-600">
              Hubungi Kami
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              Diskusikan Kebutuhan
              <br />
              Website Anda
            </h2>

            <p className="mt-6 max-w-xl text-lg text-gray-600">
              Kami siap membantu Anda membangun website yang profesional,
              cepat, dan siap berkembang. Konsultasi awal gratis tanpa komitmen.
            </p>

            <div className="mt-12 space-y-5">
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-indigo-600" />
                <span className="text-gray-700">hello@webku.id</span>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-indigo-600" />
                <span className="text-gray-700">+62 812-3456-7890</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT - FORM */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
              relative rounded-3xl bg-white p-10
              shadow-2xl ring-1 ring-black/5
            "
          >
            <h3 className="text-2xl font-bold text-gray-900">
              Form Konsultasi
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Isi data berikut, tim kami akan menghubungi Anda.
            </p>

            <form className="mt-10 space-y-6">

              {/* NAME & COMPANY */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Nama Lengkap
                  </label>
                  <div className="relative mt-2">
                    <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Nama Anda"
                      className="
                        w-full rounded-xl border border-gray-300
                        py-3 pl-11 pr-4 text-sm
                        focus:border-indigo-500 focus:outline-none
                        focus:ring-2 focus:ring-indigo-500/20
                      "
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Nama Perusahaan
                  </label>
                  <div className="relative mt-2">
                    <Building2 className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="PT / UMKM / Brand"
                      className="
                        w-full rounded-xl border border-gray-300
                        py-3 pl-11 pr-4 text-sm
                        focus:border-indigo-500 focus:outline-none
                        focus:ring-2 focus:ring-indigo-500/20
                      "
                    />
                  </div>
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="relative mt-2">
                  <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    placeholder="email@perusahaan.com"
                    className="
                      w-full rounded-xl border border-gray-300
                      py-3 pl-11 pr-4 text-sm
                      focus:border-indigo-500 focus:outline-none
                      focus:ring-2 focus:ring-indigo-500/20
                    "
                  />
                </div>
              </div>

              {/* ADDRESS */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Alamat
                </label>
                <div className="relative mt-2">
                  <MapPin className="absolute left-4 top-4 h-4 w-4 text-gray-400" />
                  <textarea
                    rows={3}
                    placeholder="Alamat lengkap perusahaan"
                    className="
                      w-full rounded-xl border border-gray-300
                      py-3 pl-11 pr-4 text-sm
                      focus:border-indigo-500 focus:outline-none
                      focus:ring-2 focus:ring-indigo-500/20
                    "
                  />
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Pesan
                </label>
                <textarea
                  rows={4}
                  placeholder="Ceritakan kebutuhan website Anda..."
                  className="
                    mt-2 w-full rounded-xl border border-gray-300
                    px-4 py-3 text-sm
                    focus:border-indigo-500 focus:outline-none
                    focus:ring-2 focus:ring-indigo-500/20
                  "
                />
              </div>

              {/* CTA */}
              <button
                type="submit"
                className="
                  w-full rounded-xl bg-indigo-600 py-3
                  text-sm font-semibold text-white
                  transition-all duration-200
                  hover:bg-indigo-700 hover:shadow-lg
                "
              >
                Kirim Permintaan Konsultasi
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
