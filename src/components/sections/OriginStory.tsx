"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function OriginStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-20 lg:py-28 bg-cream overflow-hidden">
      {/* Decorative SVG */}
      <Image src="/brand/svg-08.svg" alt="" width={140} height={140} className="absolute top-16 right-10 opacity-[0.04]" aria-hidden />
      <Image src="/brand/svg-09.svg" alt="" width={100} height={100} className="absolute bottom-20 left-8 opacity-[0.03] hidden lg:block" aria-hidden />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: lifestyle image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/brand/lifestyle-hugging-elephant.png"
                alt="Child hugging a weighted elephant"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Small floating lifestyle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -right-4 w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden shadow-lg border-4 border-cream hidden sm:block"
            >
              <Image
                src="/brand/lifestyle-sleeping-sloth.png"
                alt="Child sleeping with weighted sloth"
                fill
                className="object-cover"
                sizes="160px"
              />
            </motion.div>
          </motion.div>

          {/* Right: content */}
          <div className="order-1 lg:order-2">
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
        </div>
      </div>
    </section>
  );
}
