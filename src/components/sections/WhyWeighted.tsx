"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const benefits = [
  {
    title: "Calms anxiety",
    description: "Deep pressure activates your parasympathetic nervous system, slowing heart rate and signaling safety to your brain.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#108474" strokeWidth="1.5">
        <path d="M14 26s-10-6-10-13.5C4 7.4 7.4 4 11.5 4c2 0 3.7 1 2.5 2.5C12.8 5 15.5 4 17.5 4 21.6 4 25 7.4 25 12.5 25 20 14 26 14 26z" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Better sleep",
    description: "Like being gently held through the night. The weight tells your body it's time to rest.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#108474" strokeWidth="1.5">
        <path d="M21 13.5A7.5 7.5 0 0113.5 6 9 9 0 1022 17a7.5 7.5 0 01-1-3.5z" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Emotional comfort",
    description: "Each Hugz has a name and personality because comfort isn't generic. The right companion was made for you.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#108474" strokeWidth="1.5">
        <circle cx="14" cy="14" r="10"/>
        <path d="M10 16s1.5 2 4 2 4-2 4-2M10.5 11h.01M17.5 11h.01" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Portable calm",
    description: "Not just for bedtime. Hold one during a meeting, on a flight, through a hard conversation.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#108474" strokeWidth="1.5">
        <path d="M14 4v20M4 14h20M8 8l12 12M20 8L8 20" strokeLinecap="round" opacity="0.6"/>
        <circle cx="14" cy="14" r="3" fill="#108474" opacity="0.2"/>
      </svg>
    ),
  },
];

export function WhyWeighted() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: editorial content */}
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
            <p className="text-[15px] text-deep-teal/50 leading-[1.75]">
              It&apos;s the same reason a weighted blanket helps you sleep, but shaped like 
              something you can hug, hold, and take anywhere.
            </p>
          </motion.div>

          {/* Right: benefit cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className="group bg-cream/60 rounded-2xl p-6 lg:p-7 hover:bg-cream transition-colors duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-teal/8 flex items-center justify-center mb-4 group-hover:bg-teal/12 transition-colors">
                    {benefit.icon}
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
