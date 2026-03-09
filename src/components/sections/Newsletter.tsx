"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export function Newsletter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-cream">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-petrona text-2xl sm:text-3xl font-bold text-deep-teal mb-3">
            Stay close
          </h2>
          <p className="text-sm text-deep-teal/45 mb-8">
            New companions, wellness tips, and exclusive offers. No spam, just warmth.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-2 text-teal font-poppins text-sm font-medium"
            >
              <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
                <path d="M16 28s-12-7.4-12-16C4 7.6 7.6 4 12 4c2.4 0 4.4 1.2 4 3.2C15.6 5.2 17.6 4 20 4c4.4 0 8 3.6 8 8 0 8.6-12 16-12 16z" fill="#108474"/>
              </svg>
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
