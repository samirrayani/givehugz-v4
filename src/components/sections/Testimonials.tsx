"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote: "I bought this for my daughter's anxiety and she hasn't let go of it since. She sleeps with it every night. The weight makes it feel like a real hug.",
    author: "Sarah M.",
    context: "Bought for her 8-year-old",
  },
  {
    quote: "I'm a grown adult and this thing genuinely helps me fall asleep faster. The weight is just right.",
    author: "James L.",
    context: "Adult buyer",
  },
  {
    quote: "Gave this as a gift to my friend going through a tough time. She cried. In a good way.",
    author: "Priya K.",
    context: "Gift purchase",
  },
  {
    quote: "My therapist actually recommended a weighted plush. This is the best one I've tried by far.",
    author: "Alex T.",
    context: "Therapist-recommended",
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block font-poppins text-[11px] font-semibold uppercase tracking-[0.25em] text-teal mb-4">
            Real people, real comfort
          </span>
          {/* Signature Moment: oversized social proof */}
          <h2 className="font-petrona text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-bold text-deep-teal leading-[1.05]">
            50,000+ people sleep better{" "}
            <span className="italic text-teal">tonight</span>.
          </h2>
        </motion.div>

        {/* Staggered testimonial grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Featured testimonial — large */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="relative bg-cream rounded-3xl p-8 lg:p-10 h-full">
              {/* Decorative heart */}
              <svg width="36" height="36" viewBox="0 0 32 32" fill="none" className="absolute top-6 right-6 opacity-10">
                <path d="M16 28s-12-7.4-12-16C4 7.6 7.6 4 12 4c2.4 0 4.4 1.2 4 3.2C15.6 5.2 17.6 4 20 4c4.4 0 8 3.6 8 8 0 8.6-12 16-12 16z" fill="#108474"/>
              </svg>

              <blockquote className="font-petrona text-xl sm:text-2xl lg:text-[1.65rem] text-deep-teal leading-[1.4] italic mb-6">
                &ldquo;{testimonials[0].quote}&rdquo;
              </blockquote>
              <div>
                <span className="font-poppins text-sm font-semibold text-deep-teal block">
                  {testimonials[0].author}
                </span>
                <span className="font-poppins text-xs text-deep-teal/40">
                  {testimonials[0].context}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Secondary testimonials — stacked */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {testimonials.slice(1).map((t, i) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="bg-soft-pink/15 rounded-2xl p-5 lg:p-6"
              >
                <blockquote className="font-poppins text-sm text-deep-teal/65 leading-relaxed mb-3">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div>
                  <span className="font-poppins text-xs font-semibold text-deep-teal">
                    {t.author}
                  </span>
                  <span className="font-poppins text-xs text-deep-teal/30 ml-2">
                    {t.context}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
