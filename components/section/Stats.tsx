"use client";

import {
  Briefcase,
  Smile,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const stats = [
{
  icon: Briefcase,
  value: "Meningkatkan Kredibilitas Bisnis",
  title: "Website yang Dipercaya Klien",
  desc: "Tampilan profesional dan struktur yang jelas untuk membangun kepercayaan sejak kesan pertama.",
},
{
  icon: Rocket,
  value: "Performa Website Lebih Cepat",
  title: "Akses Cepat, Bounce Rate Rendah",
  desc: "Optimasi kecepatan dan struktur agar pengunjung betah dan mudah mengambil keputusan.",
},
{
  icon: ShieldCheck,
  value: "Stabil & Aman untuk Jangka Panjang",
  title: "Fondasi Teknis yang Kuat",
  desc: "Kode rapi, scalable, dan siap dikembangkan tanpa bikin sistem rapuh di kemudian hari.",
},
{
  icon: Smile,
  value: "Solusi yang Relevan dengan Kebutuhan",
  title: "Bukan Sekadar Tampilan",
  desc: "Website dibangun berdasarkan tujuan bisnis, bukan hanya estetika.",
},

];

/* Animation Variants */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

export default function StatsSection() {
  return (
    <section className="relative -top-28">
       <div className="mx-auto max-w-7xl px-6">

        <motion.div
          className="
            grid grid-cols-1 
            gap-4
            md:grid-cols-2 
            lg:grid-cols-4
          "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="
                  group rounded-3xl
                  bg-white/60 backdrop-blur-xl
                  ring-1 ring-black/5
                  shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.25)]
                "
              >
                <div className="flex h-full flex-col gap-5 p-8">

                  {/* Header: Icon sejajar */}
                  <div className="flex items-start gap-4">
                    <div
                      className="
                        flex h-11 w-11 shrink-0
                        items-center justify-center
                        rounded-lg
                        bg-indigo-600/10 text-indigo-600
                      "
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="space-y-0.5">
                      <div className="text-base font-semibold text-gray-900">
                        {item.value}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-gray-600">
                    {item.desc}
                  </p>

                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
