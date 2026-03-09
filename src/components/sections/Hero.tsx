"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 20% 40%, rgba(16, 132, 116, 0.15) 0%, transparent 60%),
              radial-gradient(ellipse 60% 80% at 80% 30%, rgba(255, 207, 199, 0.2) 0%, transparent 50%),
              radial-gradient(ellipse 70% 50% at 50% 80%, rgba(237, 245, 245, 0.4) 0%, transparent 60%),
              linear-gradient(180deg, #fff8e1 0%, #fdfaf0 100%)
            `,
          }}
        />
        {/* Organic blobs */}
        <div
          className="absolute top-[10%] left-[5%] w-[500px] h-[500px] opacity-[0.07]"
          style={{
            background: "radial-gradient(circle, #108474, transparent 70%)",
            animation: "blob-morph 20s ease-in-out infinite",
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          }}
        />
        <div
          className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, #ffcfc7, transparent 70%)",
            animation: "blob-morph 25s ease-in-out infinite reverse",
            borderRadius: "40% 60% 70% 30% / 40% 70% 30% 60%",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-32 lg:py-0">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block font-poppins text-[10px] font-semibold uppercase tracking-[0.3em] text-teal/80 mb-6"
            >
              Weighted for calm
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="font-petrona text-5xl sm:text-6xl lg:text-7xl font-bold text-deep-teal leading-[1.05] mb-6"
            >
              The feeling of{" "}
              <span className="italic text-teal">being held</span>,{" "}
              whenever you need it
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base sm:text-lg text-deep-teal/60 leading-relaxed mb-8 max-w-md"
            >
              Weighted stuffed animals designed for anxiety relief, better sleep, 
              and the simple comfort of something that holds you back.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/collections/all-hugz"
                className="inline-flex items-center gap-2 bg-teal text-white font-poppins text-sm font-semibold px-8 py-4 rounded-full shadow-lg shadow-teal/20 hover:bg-teal-light hover:shadow-xl hover:shadow-teal/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                Meet the Hugz
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M3 8h10M9 4l4 4-4 4"/>
                </svg>
              </Link>
              <Link
                href="/mission"
                className="inline-flex items-center gap-2 border-2 border-deep-teal/15 text-deep-teal/70 font-poppins text-sm font-medium px-8 py-4 rounded-full hover:border-teal/30 hover:text-teal transition-all duration-300"
              >
                Our Story
              </Link>
            </motion.div>

            {/* Micro social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center gap-3 mt-10"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 16 16" fill="#108474" className="-ml-0.5 first:ml-0">
                    <path d="M8 0l2.5 5 5.5.8-4 3.9.9 5.3L8 12.5 3.1 15l.9-5.3-4-3.9L5.5 5z"/>
                  </svg>
                ))}
              </div>
              <span className="text-xs text-deep-teal/40 font-medium">
                Loved by 50,000+ families
              </span>
            </motion.div>
          </motion.div>

          {/* Hero visual — floating product with organic shape */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            className="relative hidden lg:flex justify-center items-center"
          >
            <div
              className="absolute w-[420px] h-[420px] opacity-20"
              style={{
                background: "linear-gradient(135deg, #108474, #ffcfc7)",
                animation: "blob-morph 15s ease-in-out infinite",
                borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
              }}
            />
            <div
              className="relative w-[380px] h-[380px] rounded-[40%_60%_50%_50%/40%_50%_60%_50%] overflow-hidden shadow-2xl"
              style={{ animation: "float 6s ease-in-out infinite" }}
            >
              {/* Product image placeholder — will be replaced with actual Shopify image */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal/10 via-cream to-soft-pink/20 flex items-center justify-center">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="opacity-30">
                  <path d="M60 110s-45-28-45-60C15 28 28.6 15 45 15c9 0 16.5 4.5 15 12-1.5-7.5 6-12 15-12 16.4 0 30 13 30 35 0 32-45 60-45 60z" fill="#108474"/>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-deep-teal/20 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2.5 bg-teal/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
