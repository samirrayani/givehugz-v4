"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const pressLogos = [
  { name: "Today Show", src: "/brand/press-today-show.png" },
  { name: "USA Today", src: "/brand/press-usa-today.png" },
  { name: "Rolling Stone", src: "/brand/press-rolling-stone.png" },
  { name: "Cosmopolitan", src: "/brand/press-cosmopolitan.png" },
  { name: "Yahoo", src: "/brand/press-yahoo.png" },
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
              <div key={i} className="flex-shrink-0 opacity-40 hover:opacity-70 transition-opacity">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={120}
                  height={40}
                  className="h-7 sm:h-8 w-auto object-contain grayscale"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
