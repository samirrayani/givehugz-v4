"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { ShopifyProduct, ShopifyVariant } from "@/lib/shopify";
import { formatPrice, getCheckoutUrl } from "@/lib/shopify";
import { addToCart } from "@/lib/cart";

interface Props {
  product: ShopifyProduct;
  related: ShopifyProduct[];
}

export function ProductPageClient({ product, related }: Props) {
  const [selectedVariant, setSelectedVariant] = useState<ShopifyVariant>(product.variants[0]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      variantId: selectedVariant.id,
      productId: product.id,
      title: product.title,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      image: product.images[0]?.src || "",
      handle: product.handle,
    });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const description = product.body_html?.replace(/<[^>]*>/g, "") || "";

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex items-center gap-2 text-xs text-deep-teal/40">
          <Link href="/" className="hover:text-teal transition-colors">Home</Link>
          <span>/</span>
          <Link href="/collections/all-hugz" className="hover:text-teal transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-deep-teal/60">{product.title}</span>
        </nav>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Images */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative aspect-square rounded-3xl overflow-hidden bg-cream mb-4"
            >
              {product.images[selectedImage] ? (
                <Image
                  src={product.images[selectedImage].src}
                  alt={product.images[selectedImage].alt || product.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="80" height="80" viewBox="0 0 32 32" fill="none">
                    <path d="M16 28s-12-7.4-12-16C4 7.6 7.6 4 12 4c2.4 0 4.4 1.2 4 3.2C15.6 5.2 17.6 4 20 4c4.4 0 8 3.6 8 8 0 8.6-12 16-12 16z" fill="#108474" opacity="0.15"/>
                  </svg>
                </div>
              )}
            </motion.div>

            {/* Thumbnail strip */}
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {product.images.slice(0, 6).map((img, i) => (
                  <button
                    key={img.id}
                    onClick={() => setSelectedImage(i)}
                    className={`relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-colors ${
                      selectedImage === i ? "border-teal" : "border-transparent"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt || `${product.title} view ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Buy Box */}
          <div className="lg:py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="font-petrona text-3xl sm:text-4xl font-bold text-deep-teal mb-2">
                {product.title}
              </h1>

              <p className="font-petrona text-2xl text-teal font-semibold mb-6">
                {formatPrice(selectedVariant.price)}
                {selectedVariant.compare_at_price && parseFloat(selectedVariant.compare_at_price) > parseFloat(selectedVariant.price) && (
                  <span className="text-base text-deep-teal/30 line-through ml-3">
                    {formatPrice(selectedVariant.compare_at_price)}
                  </span>
                )}
              </p>

              {/* Variant selector */}
              {product.variants.length > 1 && (
                <div className="mb-6">
                  <label className="font-poppins text-xs font-semibold uppercase tracking-[0.2em] text-deep-teal/40 block mb-3">
                    {product.options[0]?.name || "Size"}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((v) => (
                      <button
                        key={v.id}
                        onClick={() => setSelectedVariant(v)}
                        disabled={!v.available}
                        className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                          selectedVariant.id === v.id
                            ? "bg-teal text-white shadow-lg shadow-teal/20"
                            : v.available
                            ? "bg-cream text-deep-teal/70 hover:bg-cream-dark"
                            : "bg-cream/50 text-deep-teal/20 cursor-not-allowed"
                        }`}
                      >
                        {v.title}
                        <span className="ml-1.5 text-xs opacity-60">{formatPrice(v.price)}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Description */}
              {description && (
                <p className="text-sm text-deep-teal/50 leading-relaxed mb-8 max-w-md">
                  {description.slice(0, 300)}{description.length > 300 ? "..." : ""}
                </p>
              )}

              {/* Add to cart */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={handleAddToCart}
                  disabled={!selectedVariant.available}
                  className={`w-full py-4 rounded-full font-poppins text-sm font-semibold transition-all duration-300 ${
                    addedToCart
                      ? "bg-teal-dark text-white"
                      : selectedVariant.available
                      ? "bg-teal text-white shadow-lg shadow-teal/20 hover:bg-teal-light hover:shadow-xl hover:-translate-y-0.5"
                      : "bg-deep-teal/10 text-deep-teal/30 cursor-not-allowed"
                  }`}
                >
                  {addedToCart ? "Added to bag ♥" : selectedVariant.available ? "Add to bag" : "Sold out"}
                </button>
                <a
                  href={getCheckoutUrl(selectedVariant.id)}
                  className="w-full py-4 rounded-full font-poppins text-sm font-medium text-center border-2 border-deep-teal/10 text-deep-teal/60 hover:border-teal/30 hover:text-teal transition-all"
                >
                  Buy now
                </a>
              </div>

              {/* Trust signals */}
              <div className="mt-8 flex flex-col gap-3">
                {[
                  { icon: "♥", text: "10% donated to mental health" },
                  { icon: "✦", text: "Free shipping over $75" },
                  { icon: "↻", text: "30-day comfort guarantee" },
                ].map((signal) => (
                  <div key={signal.text} className="flex items-center gap-3 text-xs text-deep-teal/35">
                    <span className="text-teal">{signal.icon}</span>
                    {signal.text}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-24">
            <h2 className="font-petrona text-2xl font-bold text-deep-teal mb-8">
              You might also love
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {related.map((p) => (
                <Link key={p.id} href={`/products/${p.handle}`} className="group">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-cream mb-3">
                    {p.images[0] ? (
                      <Image
                        src={p.images[0].src}
                        alt={p.images[0].alt || p.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="#108474" opacity="0.15">
                          <path d="M16 28s-12-7.4-12-16C4 7.6 7.6 4 12 4c2.4 0 4.4 1.2 4 3.2C15.6 5.2 17.6 4 20 4c4.4 0 8 3.6 8 8 0 8.6-12 16-12 16z"/>
                        </svg>
                      </div>
                    )}
                  </div>
                  <h3 className="font-petrona text-sm font-semibold text-deep-teal">{p.title}</h3>
                  <p className="text-xs text-teal font-medium mt-0.5">{formatPrice(p.variants[0]?.price || "0")}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
