"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

export function Newsletter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section ref={ref} className="relative py-16 lg:py-20 bg-cream overflow-hidden">
      {/* Newsletter background */}
      <div className="absolute inset-0 opacity-[0.06]">
        <Image
          src="/brand/newsletter-desktop.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
      </div>

      {/* Decorative SVGs */}
      <Image src="/brand/svg-50.svg" alt="" width={80} height={80} className="absolute top-8 right-12 opacity-[0.05] hidden lg:block" aria-hidden />
      <Image src="/brand/svg-51.svg" alt="" width={60} height={60} className="absolute bottom-8 left-10 opacity-[0.04] hidden lg:block" aria-hidden />

      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-petrona text-2xl sm:text-3xl font-bold text-deep-teal mb-2">
            Stay close
          </h2>
          <p className="text-sm text-deep-teal/40 mb-6">
            New companions, wellness tips, and exclusive offers. No spam, just warmth.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-2 text-teal font-poppins text-sm font-medium"
            >
              <Image src="/brand/heart.png" alt="" width={20} height={20} />
              Welcome to the family.
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="flex-1 px-5 py-3.5 rounded-full border border-deep-teal/10 bg-white text-sm text-deep-teal placeholder-deep-teal/30 focus:outline-none focus:border-teal/40 focus:ring-2 focus:ring-teal/10 transition-all"
              />
              <button
                type="submit"
                className="px-6 py-3.5 bg-teal text-white font-poppins text-sm font-semibold rounded-full hover:bg-teal-light transition-colors shadow-lg shadow-teal/20"
              >
                Join us
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
