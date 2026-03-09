"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pressLogos = [
  { name: "Today Show", width: 120 },
  { name: "USA Today", width: 110 },
  { name: "Rolling Stone", width: 130 },
  { name: "Cosmopolitan", width: 140 },
  { name: "Yahoo", width: 90 },
];

export function PressMarquee() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative py-8 bg-white/50 border-y border-deep-teal/5 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="text-center font-poppins text-[9px] font-semibold uppercase tracking-[0.35em] text-deep-teal/30 mb-4">
          As featured in
        </p>
        <div className="relative">
          <div
            className="flex gap-16 items-center whitespace-nowrap"
            style={{ animation: "marquee 30s linear infinite" }}
          >
            {[...pressLogos, ...pressLogos].map((logo, i) => (
              <span
                key={i}
                className="font-petrona text-lg sm:text-xl font-semibold text-deep-teal/20 italic select-none flex-shrink-0"
                style={{ minWidth: logo.width }}
              >
                {logo.name}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
