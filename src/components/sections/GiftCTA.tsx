"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export function GiftCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-soft-pink/20 relative overflow-hidden">
      {/* Organic decorative blobs */}
      <div
        className="absolute -top-20 -right-20 w-[300px] h-[300px] opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, #ffcfc7, transparent 70%)",
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block font-poppins text-[10px] font-semibold uppercase tracking-[0.3em] text-teal/60 mb-6">
            Give comfort
          </span>
          <h2 className="font-petrona text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-teal leading-tight mb-6">
            The gift of a hug they can{" "}
            <span className="italic text-teal">hold forever</span>
          </h2>
          <p className="text-base text-deep-teal/50 leading-relaxed max-w-xl mx-auto mb-8">
            Whether it&apos;s a friend going through a hard season, a child who needs comfort at night, 
            or someone who just deserves to feel held, a Hugz says what words can&apos;t.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/collections/best-sellers"
              className="inline-flex items-center gap-2 bg-teal text-white font-poppins text-sm font-semibold px-8 py-4 rounded-full shadow-lg shadow-teal/20 hover:bg-teal-light hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Shop best sellers
            </Link>
            <Link
              href="/collections/bundles"
              className="inline-flex items-center gap-2 border-2 border-soft-pink text-deep-teal/70 font-poppins text-sm font-medium px-8 py-4 rounded-full hover:bg-soft-pink/20 transition-all duration-300"
            >
              Gift bundles
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
