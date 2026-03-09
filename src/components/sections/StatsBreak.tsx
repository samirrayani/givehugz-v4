"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { number: "50,000+", label: "Families sleeping better" },
  { number: "43", label: "Unique companions" },
  { number: "10%", label: "Of proceeds to mental health" },
];

export function StatsBreak() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Wave top */}
      <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-8 lg:h-12 block">
        <path d="M0,60 C480,0 960,60 1440,20 L1440,60 L0,60 Z" fill="#024a4a"/>
      </svg>

      <div className="bg-deep-teal py-14 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <span className="font-petrona text-5xl sm:text-6xl font-bold text-teal block mb-1.5">
                  {stat.number}
                </span>
                <span className="font-poppins text-xs text-white/40 tracking-wide">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-8 lg:h-12 block">
        <path d="M0,0 C480,60 960,0 1440,40 L1440,0 L0,0 Z" fill="#024a4a"/>
      </svg>
    </section>
  );
}
