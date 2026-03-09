"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const benefits = [
  {
    title: "Stress & Anxiety Relief",
    description: "Deep pressure activates your parasympathetic nervous system, slowing heart rate and signaling safety to your brain.",
    icon: "/brand/icon-stress-anxiety.png",
  },
  {
    title: "Better Sleep",
    description: "Like being gently held through the night. The weight tells your body it's time to rest.",
    icon: "/brand/icon-better-sleep.png",
  },
  {
    title: "Emotional Support",
    description: "Each Hugz has a name and personality because comfort isn't generic. The right companion was made for you.",
    icon: "/brand/icon-emotional-support.png",
  },
  {
    title: "Gift of Hugz",
    description: "Give someone the feeling of being held, even when you can't be there. The perfect gift for anyone who needs comfort.",
    icon: "/brand/icon-gift-of-hugz.png",
  },
];

export function WhyWeighted() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-soft-pink-light relative overflow-hidden">
      {/* Decorative SVGs */}
      <Image src="/brand/svg-10.svg" alt="" width={100} height={100} className="absolute top-12 left-6 opacity-[0.04] hidden lg:block" aria-hidden />
      <Image src="/brand/svg-11.svg" alt="" width={80} height={80} className="absolute bottom-16 right-10 opacity-[0.04] hidden lg:block" aria-hidden />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: editorial content with illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <span className="inline-block font-poppins text-[11px] font-semibold uppercase tracking-[0.25em] text-teal mb-4">
              The science of comfort
            </span>
            <h2 className="font-petrona text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-deep-teal leading-[1.1] mb-5">
              Why <span className="italic text-teal">weighted</span>?
            </h2>
            <p className="text-[15px] text-deep-teal/50 leading-[1.75] mb-4">
              Deep pressure therapy has been used by occupational therapists for decades. 
              The gentle, distributed weight of a Hugz mimics the sensation of being held, 
              triggering serotonin and melatonin release while reducing cortisol.
            </p>
            <p className="text-[15px] text-deep-teal/50 leading-[1.75] mb-6">
              It&apos;s the same reason a weighted blanket helps you sleep, but shaped like 
              something you can hug, hold, and take anywhere.
            </p>

            {/* Comfort illustration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative w-48 h-48 mx-auto lg:mx-0"
            >
              <Image
                src="/brand/illust-comfort.png"
                alt="Comfort illustration"
                fill
                className="object-contain"
                sizes="192px"
              />
            </motion.div>
          </motion.div>

          {/* Right: benefit cards with real icons */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className="group bg-white/70 rounded-2xl p-6 lg:p-7 hover:bg-white transition-colors duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-teal/8 flex items-center justify-center mb-4 group-hover:bg-teal/12 transition-colors overflow-hidden">
                    <Image
                      src={benefit.icon}
                      alt={benefit.title}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-petrona text-lg font-semibold text-deep-teal mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-deep-teal/45 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
