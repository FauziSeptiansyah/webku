"use client";

import { motion } from "framer-motion";
import { Code2, Palette, LifeBuoy } from "lucide-react";

const services = [
  {
    icon: Code2,
    number: "01",
    title: "Web Development",
    subtitle: "Website Cepat & Terstruktur",
    description:
      "Pengembangan website modern dengan performa tinggi, struktur bersih, dan siap dikembangkan sesuai kebutuhan bisnis.",
  },
  {
    icon: Palette,
    number: "02",
    title: "UI / UX Design",
    subtitle: "Desain yang Berorientasi Pengguna",
    description:
      "Perancangan tampilan website yang estetis dan mudah digunakan untuk meningkatkan pengalaman serta kepercayaan pengguna.",
  },
  {
    icon: LifeBuoy,
    number: "03",
    title: "Maintenance & Support",
    subtitle: "Website Aman & Terawat",
    description:
      "Layanan perawatan dan dukungan teknis agar website tetap stabil, aman, dan selalu up-to-date.",
  },
];

export default function ServiceSection() {
  return (
    <section id="services" className="relative bg-white py-32">
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
            Layanan Kami
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-gray-900">
            Solusi Website untuk
            <br />
            Bisnis Modern
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Kami menyediakan layanan website yang dirancang untuk membantu
            bisnis tampil profesional, kredibel, dan siap berkembang secara
            digital.
          </p>
        </motion.div>

        {/* SERVICES */}
        <div className="grid gap-10 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="
                  group rounded-3xl bg-white/70 p-8
                  backdrop-blur-xl ring-1 ring-black/5
                  transition-shadow hover:shadow-xl
                "
              >
                {/* TOP */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    {/* ICON */}
                    <div
                      className="
                        flex h-12 w-12 items-center justify-center
                        rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600
                        shadow-md
                      "
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </div>

                    {/* TITLE */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-sm font-medium text-indigo-600">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* NUMBER */}
                  <span className="text-3xl font-bold text-gray-200">
                    {service.number}
                  </span>
                </div>

                {/* DIVIDER */}
                <div className="my-6 h-px bg-gray-200" />

                {/* DESCRIPTION */}
                <p className="text-sm leading-relaxed text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
