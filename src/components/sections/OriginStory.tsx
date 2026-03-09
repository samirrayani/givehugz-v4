"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function OriginStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-20 lg:py-28 bg-cream overflow-hidden">
      {/* Subtle paw print decoration */}
      <div className="absolute top-16 right-10 opacity-[0.03]">
        <svg width="140" height="140" viewBox="0 0 100 100" fill="#024a4a">
          <ellipse cx="50" cy="65" rx="22" ry="18"/>
          <ellipse cx="30" cy="40" rx="8" ry="10" transform="rotate(-15 30 40)"/>
          <ellipse cx="70" cy="40" rx="8" ry="10" transform="rotate(15 70 40)"/>
          <ellipse cx="22" cy="55" rx="6" ry="8" transform="rotate(-30 22 55)"/>
          <ellipse cx="78" cy="55" rx="6" ry="8" transform="rotate(30 78 55)"/>
        </svg>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-block font-poppins text-[11px] font-semibold uppercase tracking-[0.25em] text-teal mb-5"
        >
          You know the feeling
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-petrona text-3xl sm:text-4xl lg:text-[3.25rem] font-bold text-deep-teal leading-[1.1] mb-7"
        >
          Anxiety lives in the body.{" "}
          <span className="italic text-teal">So does relief.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="space-y-5"
        >
          <p className="text-[15px] sm:text-base text-deep-teal/55 leading-[1.75]">
            The chest tightens. The breath shortens. The body curls inward, looking for something 
            to hold onto. This is what anxiety feels like, and no amount of telling yourself to 
            &ldquo;calm down&rdquo; changes the fact that your nervous system needs something physical.
          </p>
          <p className="text-[15px] sm:text-base text-deep-teal/55 leading-[1.75]">
            That&apos;s why weighted blankets work. Why babies are swaddled. Why a tight hug from 
            the right person can stop a panic attack mid-breath. Deep pressure therapy isn&apos;t new. 
            It&apos;s as old as being human.
          </p>
          <p className="font-petrona text-xl sm:text-2xl text-deep-teal/80 italic leading-relaxed pt-3">
            We just made it portable, soft, and named Chestnut.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
