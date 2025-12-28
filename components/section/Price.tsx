"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Bronze",
    price: "Rp 1.500.000+",
    subtitle: "Website Dasar & Cepat Online",
    description:
      "Solusi cepat untuk bisnis yang ingin segera hadir secara profesional di dunia digital.",
    features: [
      "Landing page / website statis",
      "WordPress / HTML sederhana",
      "Informasi bisnis & layanan",
      "Halaman kontak",
    ],
  },
  {
    name: "Silver",
    price: "Rp 4.000.000+",
    subtitle: "Website Interaktif & Operasional",
    popular: true,
    description:
      "Website yang lebih interaktif untuk mendukung operasional dan pengelolaan konten bisnis.",
    features: [
      "Dashboard input data",
      "Form terhubung WhatsApp",
      "Halaman lebih lengkap & detail",
      "Struktur konten rapi",
    ],
  },
  {
    name: "Gold",
    price: "Rp 8.000.000+",
    subtitle: "Sistem Web & Otomasi Bisnis",
    description:
      "Solusi sistem web kompleks untuk otomatisasi proses dan pengolahan data bisnis.",
    features: [
      "Dashboard kompleks",
      "Chart & visual data",
      "CRUD & manipulasi konten",
      "Integrasi pembayaran & ongkir",
      "Data real-time ke dashboard",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="relative bg-gradient-to-b from-indigo-50 to-white py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-2xl text-center"
        >
          <span className="inline-block rounded-full bg-indigo-100 px-4 py-1 text-xs font-semibold text-indigo-600">
            Harga Layanan
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Pilih Paket Sesuai
            <br />
            Kebutuhan Bisnis Anda
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Harga fleksibel dan dapat disesuaikan dengan kompleksitas serta
            kebutuhan website Anda.
          </p>
        </motion.div>

        {/* PRICING */}
        <div className="grid gap-10 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              transition={{
                delay: index * 0.12,
                duration: 0.55,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className={`
                relative rounded-3xl p-8
                backdrop-blur-xl ring-1 ring-black/5
                transition-shadow
                ${
                  plan.popular
                    ? "bg-white shadow-xl"
                    : "bg-white/70 hover:shadow-lg"
                }
              `}
            >
              {/* POPULAR */}
              {plan.popular && (
                <span className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-1 text-xs font-semibold text-white">
                  Paling Populer
                </span>
              )}

              <h3 className="text-xl font-semibold text-gray-900">
                {plan.name}
              </h3>

              <p className="mt-1 text-sm font-medium text-indigo-600">
                {plan.subtitle}
              </p>

              <p className="mt-6 text-3xl font-bold text-gray-900">
                {plan.price}
              </p>

              <p className="mt-4 text-sm text-gray-600">
                {plan.description}
              </p>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <Check className="mt-1 h-4 w-4 text-indigo-600" />
                    <span className="text-sm text-gray-600">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() =>
                  window.open("https://wa.me/628xxxxxxxxxx", "_blank")
                }
                className="
                  mt-10 w-full rounded-xl
                  bg-gradient-to-r from-indigo-600 to-purple-600
                  py-3 text-sm font-semibold text-white
                  transition hover:opacity-90
                "
              >
                Konsultasi Paket
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
