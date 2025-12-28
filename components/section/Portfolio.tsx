"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Company Profile UMKM",
    description: "Website company profile modern untuk bisnis lokal.",
    image: "./portfolio.png",
    url: "https://example.com",
  },
  {
    title: "Landing Page Startup",
    description: "Landing page konversi tinggi untuk produk digital.",
    image: "./portfolio.png",
    url: "https://example.com",
  },
  {
    title: "Sistem Dashboard Internal",
    description: "Dashboard manajemen data dan laporan real-time.",
    image: "./portfolio.png",
    url: "https://example.com",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="relative bg-white py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-20 max-w-2xl"
        >
          <span className="inline-block rounded-full bg-indigo-100 px-4 py-1 text-xs font-semibold text-indigo-600">
            Portofolio
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Beberapa Project
            <br />
            yang Telah Kami Kerjakan
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Setiap project dirancang dengan fokus pada kualitas, performa,
            dan kebutuhan bisnis klien.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              transition={{
                delay: index * 0.12,
                duration: 0.55,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl ring-1 ring-black/5"
            >
              {/* IMAGE */}
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="
                  h-[360px] w-full object-cover
                  transition-transform duration-500
                  group-hover:scale-105
                "
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute inset-0
                  flex flex-col justify-end
                  bg-black/45
                  p-6
                  opacity-0
                  backdrop-blur-sm
                  transition-opacity duration-300
                  group-hover:opacity-100
                "
              >
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="space-y-2"
                >
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-200">
                    {project.description}
                  </p>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-2
                      text-sm font-semibold text-white
                      transition hover:opacity-80
                    "
                  >
                    Lihat Project
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
