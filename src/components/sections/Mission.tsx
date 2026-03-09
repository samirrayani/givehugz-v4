"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export function Mission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Wave transition top */}
      <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-10 lg:h-16 block">
        <path d="M0,80 C360,20 720,60 1080,30 C1260,15 1380,40 1440,30 L1440,80 L0,80 Z" fill="#024a4a"/>
      </svg>

      <div className="bg-deep-teal py-16 lg:py-24 relative">
        {/* Decorative SVGs */}
        <Image src="/brand/svg-13.svg" alt="" width={120} height={120} className="absolute top-10 left-6 opacity-[0.06] hidden lg:block" aria-hidden />
        <Image src="/brand/svg-14.svg" alt="" width={100} height={100} className="absolute bottom-10 right-8 opacity-[0.05] hidden lg:block" aria-hidden />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block font-poppins text-[11px] font-semibold uppercase tracking-[0.25em] text-tan mb-5"
          >
            Every Hugz holds something bigger
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-petrona text-4xl sm:text-5xl lg:text-[3.75rem] font-bold text-cream leading-[1.05] mb-6"
          >
            Mental health{" "}
            <span className="italic text-tan">is</span> health.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[15px] sm:text-base text-cream/70 leading-[1.75] max-w-2xl mx-auto mb-8"
          >
            10% of every Hugz purchase goes directly to the Inspiring Children Foundation, 
            supporting mental health resources for children who need them most. Because comfort 
            shouldn&apos;t be a privilege.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-10"
          >
            <div className="text-center">
              <span className="font-petrona text-4xl sm:text-5xl font-bold text-tan block">10%</span>
              <span className="text-[11px] text-cream/50 tracking-wide">Of every purchase donated</span>
            </div>
            <div className="hidden sm:block w-px h-12 bg-cream/15" />
            <div className="text-center flex flex-col items-center gap-2">
              <Image
                src="/brand/icf-logo.png"
                alt="Inspiring Children Foundation"
                width={80}
                height={50}
                className="object-contain brightness-150"
              />
              <span className="text-[11px] text-cream/50 tracking-wide">Inspiring Children Foundation</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="mt-8"
          >
            <Link
              href="/mission"
              className="inline-flex items-center gap-2 font-poppins text-sm font-medium text-tan hover:text-tan-light transition-colors"
            >
              Read our full mission
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 8h10M9 4l4 4-4 4"/>
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Wave transition bottom */}
      <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-10 lg:h-16 block">
        <path d="M0,0 C360,60 720,20 1080,50 C1260,65 1380,40 1440,50 L1440,0 L0,0 Z" fill="#024a4a"/>
      </svg>
    </section>
  );
}
