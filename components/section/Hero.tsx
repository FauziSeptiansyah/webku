"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const words = ["Inovasi", "Kredibilitas", "Keunggulan", "Pertumbuhan"];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-indigo-50 to-purple-50 pt-32 pb-48">
      {/* Background Blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-purple-400/40 blur-3xl" />
        <div className="absolute top-32 -right-40 h-[480px] w-[480px] rounded-full bg-indigo-400/40 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-5xl"
        >
          {/* Badge */}
          <motion.span
            variants={item}
            className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-1 text-xs font-semibold text-indigo-600"
          >
            Solusi Website untuk Bisnis Modern
          </motion.span>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="mt-8 text-4xl font-bold leading-[1.15] text-gray-900 md:text-5xl"
          >
            Solusi Platform Digital untuk Menciptakan{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {words[index]}
            </span>
            <br />
            Bagi Bisnis Anda
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={item}
            className="mt-8 max-w-5xl text-lg text-gray-600"
          >
            Kami merancang platform digital modern, berkecepatan tinggi, dan
            teroptimasi untuk konversi. Platform digital Anda siap membangun
            kepercayaan instan dan memimpin kompetisi.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <button
              onClick={() =>
                window.open("https://wa.me/628xxxxxxxxxx", "_blank")
              }
              className="
                rounded-full bg-gradient-to-r from-indigo-600 to-purple-600
                px-9 py-3.5 text-sm font-semibold text-white
                shadow-lg shadow-indigo-600/30
                transition hover:opacity-90
              "
            >
              Konsultasi Gratis
            </button>

            <button
              className="
                rounded-full border border-gray-300
                px-9 py-3.5 text-sm font-semibold text-gray-700
                transition hover:bg-white/70
              "
            >
              Lihat Layanan
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
