"use client";

import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative -top-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-24 md:grid-cols-2">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <span className="inline-block rounded-full bg-indigo-100 px-4 py-1 text-xs font-semibold text-indigo-600">
                Tentang Webku
              </span>

              <h2 className="text-4xl font-bold leading-tight text-gray-900">
                Website Profesional untuk
                <br />
                Bisnis yang Ingin Bertumbuh
              </h2>

              <p className="max-w-xl text-lg text-gray-600">
                Webku adalah jasa pembuatan website yang membantu bisnis tampil
                lebih profesional di dunia digital. Kami menggabungkan desain
                modern, performa cepat, dan struktur yang siap berkembang.
              </p>
            </div>

            {/* Visi & Misi */}
            <div className="grid gap-6 sm:grid-cols-2">
              {/* VISI */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl bg-white/70 p-6 backdrop-blur-xl ring-1 ring-black/5 hover:shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600">
                    <Eye className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Visi Kami
                  </h4>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  Menjadi partner digital terpercaya yang membantu bisnis tampil
                  profesional, kredibel, dan siap bersaing di dunia digital.
                </p>
              </motion.div>

              {/* MISI */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl bg-white/70 p-6 backdrop-blur-xl ring-1 ring-black/5 hover:shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Misi Kami
                  </h4>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  Merancang website yang rapi, cepat, dan mudah dikembangkan
                  sesuai kebutuhan bisnis modern tanpa ribet teknis.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            animate={{ y: [0, -18, 0] }}
            className="relative"
          >
            {/* Glow Background */}
            <div className="absolute -inset-6 rounded-3xl bg-indigo-100/40 blur-2xl" />

            <div className="relative p-6">
              <img
                src="/about-3d.png"
                alt="Webku Illustration"
                className="w-full rounded-2xl"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
