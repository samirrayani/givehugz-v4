"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export function GiftCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-dusty-blue-pale relative overflow-hidden">
      {/* Decorative illustration */}
      <div className="absolute -top-8 -right-8 w-[200px] h-[200px] opacity-[0.08] hidden lg:block">
        <Image src="/brand/illust-joyful.png" alt="" fill className="object-contain" aria-hidden="true" />
      </div>

      {/* Decorative SVGs */}
      <Image src="/brand/svg-52.svg" alt="" width={80} height={80} className="absolute bottom-8 left-6 opacity-[0.05] hidden lg:block" aria-hidden />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Lifestyle photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/brand/lifestyle-holding-cow.png"
                alt="Child holding weighted cow companion"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block font-poppins text-[11px] font-semibold uppercase tracking-[0.25em] text-teal mb-5">
              Give comfort
            </span>
            <h2 className="font-petrona text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-deep-teal leading-[1.1] mb-5">
              The gift of a hug they can{" "}
              <span className="italic text-teal">hold forever</span>
            </h2>
            <p className="text-[15px] text-deep-teal/60 leading-[1.75] max-w-xl mx-auto lg:mx-0 mb-7">
              Whether it&apos;s a friend going through a hard season, a child who needs comfort at night, 
              or someone who just deserves to feel held, a Hugz says what words can&apos;t.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <Link
                href="/collections/best-sellers"
                className="inline-flex items-center gap-2 bg-teal text-white font-poppins text-sm font-semibold px-8 py-4 rounded-full shadow-lg shadow-teal/20 hover:bg-teal-light hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Shop best sellers
              </Link>
              <Link
                href="/collections/bundles"
                className="inline-flex items-center gap-2 border-2 border-deep-teal/20 text-deep-teal/70 font-poppins text-sm font-medium px-8 py-4 rounded-full hover:bg-white/40 transition-all duration-300"
              >
                Gift bundles
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
