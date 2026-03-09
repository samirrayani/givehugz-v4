"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ShopifyProduct } from "@/lib/shopify";
import { formatPrice } from "@/lib/shopify";

interface Props {
  products: ShopifyProduct[];
  title?: string;
  subtitle?: string;
  label?: string;
  bgClass?: string;
}

export function FeaturedProducts({
  products,
  title = "Meet the Hugz",
  subtitle = "Each one has a name, a personality, and a weight that settles into you like a deep breath.",
  label = "Companions, not products",
  bgClass = "bg-mint",
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const display = products.slice(0, 8);

  return (
    <section ref={ref} className={`py-24 lg:py-32 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-poppins text-[10px] font-semibold uppercase tracking-[0.3em] text-teal/60 mb-4">
            {label}
          </span>
          <h2 className="font-petrona text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-teal mb-4">
            {title}
          </h2>
          <p className="text-base text-deep-teal/45 max-w-lg mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Bento-style product grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {display.map((product, i) => {
            const isFeature = i === 0;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group ${isFeature ? "col-span-2 row-span-2" : ""}`}
              >
                <Link href={`/products/${product.handle}`} className="block">
                  <div className={`relative overflow-hidden rounded-2xl ${isFeature ? "rounded-3xl" : ""} bg-white shadow-sm group-hover:shadow-lg transition-shadow duration-300`}>
                    <div className={`relative ${isFeature ? "aspect-square" : "aspect-[3/4]"}`}>
                      {product.images[0] ? (
                        <Image
                          src={product.images[0].src}
                          alt={product.images[0].alt || product.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes={isFeature ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                        />
                      ) : (
                        <div className="absolute inset-0 bg-cream flex items-center justify-center">
                          <svg width="48" height="48" viewBox="0 0 32 32" fill="none">
                            <path d="M16 28s-12-7.4-12-16C4 7.6 7.6 4 12 4c2.4 0 4.4 1.2 4 3.2C15.6 5.2 17.6 4 20 4c4.4 0 8 3.6 8 8 0 8.6-12 16-12 16z" fill="#108474" opacity="0.2"/>
                          </svg>
                        </div>
                      )}

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Quick view on hover */}
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <span className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm text-deep-teal font-poppins text-xs font-semibold px-4 py-2.5 rounded-full">
                          Meet {product.title.split(" ")[0]}
                          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <path d="M3 8h10M9 4l4 4-4 4"/>
                          </svg>
                        </span>
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className={`font-petrona font-semibold text-deep-teal ${isFeature ? "text-xl" : "text-base"}`}>
                        {product.title}
                      </h3>
                      <p className="font-poppins text-sm text-teal font-medium mt-1">
                        {formatPrice(product.variants[0]?.price || "0")}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/collections/all-hugz"
            className="inline-flex items-center gap-2 bg-teal text-white font-poppins text-sm font-semibold px-8 py-4 rounded-full shadow-lg shadow-teal/20 hover:bg-teal-light hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            View all companions
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 8h10M9 4l4 4-4 4"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
