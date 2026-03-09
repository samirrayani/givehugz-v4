"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 20% 40%, rgba(16, 132, 116, 0.12) 0%, transparent 60%),
              radial-gradient(ellipse 60% 80% at 80% 30%, rgba(255, 207, 199, 0.18) 0%, transparent 50%),
              radial-gradient(ellipse 70% 50% at 50% 80%, rgba(237, 245, 245, 0.3) 0%, transparent 60%),
              linear-gradient(180deg, #fff8e1 0%, #fdfaf0 100%)
            `,
          }}
        />
        {/* Organic blobs */}
        <div
          className="absolute top-[10%] left-[5%] w-[500px] h-[500px] opacity-[0.06]"
          style={{
            background: "radial-gradient(circle, #108474, transparent 70%)",
            animation: "blob-morph 20s ease-in-out infinite",
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          }}
        />
        <div
          className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #ffcfc7, transparent 70%)",
            animation: "blob-morph 25s ease-in-out infinite reverse",
            borderRadius: "40% 60% 70% 30% / 40% 70% 30% 60%",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-28 lg:py-0">
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
              className="inline-block font-poppins text-[11px] font-semibold uppercase tracking-[0.25em] text-teal mb-5"
            >
              Weighted for calm
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="font-petrona text-[2.75rem] sm:text-6xl lg:text-[4.25rem] font-bold text-deep-teal leading-[1.05] mb-5"
            >
              The feeling of{" "}
              <span className="italic text-teal">being held</span>,{" "}
              whenever you need it
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base sm:text-[17px] text-deep-teal/55 leading-relaxed mb-7 max-w-md"
            >
              Weighted stuffed animals designed for anxiety relief, better sleep, 
              and the simple comfort of something that holds you back.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-3"
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
              className="flex items-center gap-3 mt-8"
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

          {/* Hero image — real product */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            className="relative flex justify-center items-center"
          >
            {/* Organic blob behind image */}
            <div
              className="absolute w-[90%] aspect-square opacity-15"
              style={{
                background: "linear-gradient(135deg, #108474, #ffcfc7, #edf5f5)",
                animation: "blob-morph 18s ease-in-out infinite",
                borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
              }}
            />

            {/* Product image */}
            <div
              className="relative w-full max-w-[480px] aspect-square"
              style={{ animation: "float 8s ease-in-out infinite" }}
            >
              <div className="absolute inset-4 rounded-[30%_70%_60%_40%/50%_40%_60%_50%] overflow-hidden shadow-2xl shadow-deep-teal/10">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0666/9130/1682/files/Horse_Tube_1fcceba2-0fc1-4732-8c41-154580c739a5.jpg?v=1771395856"
                  alt="Chestnut the Horse — a weighted stuffed companion"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 90vw, 480px"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                className="absolute -bottom-2 -left-2 sm:bottom-4 sm:left-0 bg-white rounded-2xl px-4 py-3 shadow-lg shadow-deep-teal/5"
              >
                <div className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 32 32" fill="#108474">
                    <path d="M16 28s-12-7.4-12-16C4 7.6 7.6 4 12 4c2.4 0 4.4 1.2 4 3.2C15.6 5.2 17.6 4 20 4c4.4 0 8 3.6 8 8 0 8.6-12 16-12 16z"/>
                  </svg>
                  <div>
                    <p className="font-petrona text-xs font-semibold text-deep-teal">Weighted 2 lbs</p>
                    <p className="text-[10px] text-deep-teal/40">Calming deep pressure</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge top right */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
                className="absolute -top-2 -right-2 sm:top-4 sm:right-0 bg-soft-pink/80 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-md"
              >
                <p className="font-poppins text-[10px] font-semibold text-deep-teal">As seen on Today Show</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-9 rounded-full border-2 border-deep-teal/15 flex items-start justify-center pt-2"
        >
          <div className="w-0.5 h-2 bg-teal/30 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
