"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import type { ShopifyProduct, ShopifyVariant } from "@/lib/shopify";
import { formatPrice, getCheckoutUrl } from "@/lib/shopify";
import { addToCart } from "@/lib/cart";

interface Props {
  product: ShopifyProduct;
  related: ShopifyProduct[];
}

/* ─── Press logos ─── */
const pressLogos = [
  { name: "Today Show", src: "/brand/press-today-show.png" },
  { name: "USA Today", src: "/brand/press-usa-today.png" },
  { name: "Rolling Stone", src: "/brand/press-rolling-stone.png" },
  { name: "Cosmopolitan", src: "/brand/press-cosmopolitan.png" },
  { name: "Yahoo", src: "/brand/press-yahoo.png" },
];

/* ─── Stats ─── */
const stats = [
  { icon: "/brand/heart.png", label: "2 lbs of comfort" },
  { icon: "/brand/icon-better-sleep.png", label: "Premium fill" },
  { icon: "/brand/svg-38.svg", label: "Machine washable" },
  { icon: "/brand/svg-39.svg", label: "Free shipping" },
];

/* ─── Benefits ─── */
const benefits = [
  {
    title: "Stress & Anxiety Relief",
    description: "Deep pressure activates your parasympathetic nervous system, slowing heart rate and signaling safety.",
    icon: "/brand/icon-stress-anxiety.png",
    illustration: "/brand/benefit-feel.png",
  },
  {
    title: "Better Sleep",
    description: "Like being gently held through the night. The weight tells your body it's time to rest.",
    icon: "/brand/icon-better-sleep.png",
    illustration: "/brand/benefit-sleep.png",
  },
  {
    title: "Emotional Support",
    description: "Each Hugz has a name and personality because comfort isn't generic. Made for you.",
    icon: "/brand/icon-emotional-support.png",
    illustration: "/brand/benefit-emotional.png",
  },
  {
    title: "Gift of Hugz",
    description: "Give someone the feeling of being held, even when you can't be there.",
    icon: "/brand/icon-gift-of-hugz.png",
    illustration: "/brand/illust-joyful.png",
  },
];

/* ─── Testimonials ─── */
const testimonials = [
  {
    quote: "I bought this for my daughter's anxiety and she hasn't let go of it since. The weight makes it feel like a real hug.",
    author: "Sarah M.",
    context: "Bought for her 8-year-old",
  },
  {
    quote: "I'm a grown adult and this thing genuinely helps me fall asleep faster. The weight is just right.",
    author: "James L.",
    context: "Adult buyer",
  },
  {
    quote: "My therapist actually recommended a weighted plush. This is the best one I've tried by far.",
    author: "Alex T.",
    context: "Therapist-recommended",
  },
];

/* ─── Scroll animation wrapper ─── */
function ScrollReveal({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ProductPageClient({ product, related }: Props) {
  const [selectedVariant, setSelectedVariant] = useState<ShopifyVariant>(product.variants[0]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

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

  const handleSwipe = (dir: "left" | "right") => {
    if (dir === "left" && selectedImage < product.images.length - 1) {
      setSelectedImage(selectedImage + 1);
    } else if (dir === "right" && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  // Determine if product has size options
  const hasSizes = product.variants.length > 1;
  const isRegular = selectedVariant.title?.toLowerCase().includes("regular") || (!selectedVariant.title?.toLowerCase().includes("mini") && product.variants.length === 1);

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

      {/* ═══════════ 1. BUY BOX ═══════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image gallery — swipeable on mobile */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative aspect-square rounded-3xl overflow-hidden bg-cream mb-4"
              onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
              onTouchEnd={(e) => {
                if (touchStart === null) return;
                const diff = touchStart - e.changedTouches[0].clientX;
                if (Math.abs(diff) > 50) handleSwipe(diff > 0 ? "left" : "right");
                setTouchStart(null);
              }}
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
                  <Image src="/brand/heart.png" alt="" width={80} height={80} className="opacity-15" />
                </div>
              )}

              {/* Image counter dots (mobile) */}
              {product.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 lg:hidden">
                  {product.images.slice(0, 6).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`w-2 h-2 rounded-full transition-all ${selectedImage === i ? "bg-teal w-5" : "bg-deep-teal/20"}`}
                    />
                  ))}
                </div>
              )}
            </motion.div>

            {/* Thumbnail strip */}
            {product.images.length > 1 && (
              <div className="hidden lg:flex gap-2 overflow-x-auto pb-2">
                {product.images.slice(0, 6).map((img, i) => (
                  <button
                    key={img.id}
                    onClick={() => setSelectedImage(i)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${
                      selectedImage === i ? "border-teal shadow-md" : "border-transparent hover:border-deep-teal/10"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt || `${product.title} view ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Buy Box */}
          <div className="lg:py-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="font-petrona text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-teal mb-3">
                {product.title}
              </h1>

              <p className="font-petrona text-2xl text-teal font-semibold mb-4">
                {formatPrice(selectedVariant.price)}
                {selectedVariant.compare_at_price && parseFloat(selectedVariant.compare_at_price) > parseFloat(selectedVariant.price) && (
                  <span className="text-base text-deep-teal/30 line-through ml-3">
                    {formatPrice(selectedVariant.compare_at_price)}
                  </span>
                )}
              </p>

              {/* Star rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#108474">
                      <path d="M8 0l2.5 5 5.5.8-4 3.9.9 5.3L8 12.5 3.1 15l.9-5.3-4-3.9L5.5 5z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-deep-teal/40">50,000+ happy families</span>
              </div>

              {/* Variant selector */}
              {hasSizes && (
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
                        className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
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
                <p className="text-sm text-deep-teal/50 leading-relaxed mb-6 max-w-md">
                  {description.slice(0, 400)}{description.length > 400 ? "..." : ""}
                </p>
              )}

              {/* Add to cart */}
              <div className="flex flex-col gap-3 mb-6">
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
              <div className="flex flex-col gap-3">
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

              {/* "As seen on" press strip */}
              <div className="mt-8 pt-6 border-t border-deep-teal/5">
                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-deep-teal/25 mb-3">As seen on</p>
                <div className="flex items-center gap-4 flex-wrap">
                  {pressLogos.map((logo) => (
                    <Image
                      key={logo.name}
                      src={logo.src}
                      alt={logo.name}
                      width={80}
                      height={28}
                      className="h-5 w-auto object-contain opacity-30 grayscale"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ═══════════ 2. STATS BAR ═══════════ */}
      <ScrollReveal>
        <div className="relative overflow-hidden">
          <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-8 lg:h-12 block">
            <path d="M0,60 C480,0 960,60 1440,20 L1440,60 L0,60 Z" fill="#024a4a"/>
          </svg>
          <div className="bg-deep-teal py-10 lg:py-14">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <Image src={stat.icon} alt="" width={32} height={32} className="object-contain brightness-200" />
                    </div>
                    <span className="font-poppins text-xs text-cream/70 tracking-wide">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-8 lg:h-12 block">
            <path d="M0,0 C480,60 960,0 1440,40 L1440,0 L0,0 Z" fill="#024a4a"/>
          </svg>
        </div>
      </ScrollReveal>

      {/* ═══════════ 3. PRESS BADGES ═══════════ */}
      <ScrollReveal>
        <div className="py-10 lg:py-14 bg-dusty-blue-pale">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-[9px] font-semibold uppercase tracking-[0.35em] text-deep-teal/25 mb-6">
              Featured in
            </p>
            <div className="flex items-center justify-center gap-8 lg:gap-12 flex-wrap">
              {pressLogos.map((logo) => (
                <Image
                  key={logo.name}
                  src={logo.src}
                  alt={logo.name}
                  width={120}
                  height={40}
                  className="h-8 lg:h-10 w-auto object-contain opacity-40 hover:opacity-70 transition-opacity grayscale hover:grayscale-0"
                />
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* ═══════════ 4. BENEFITS SECTION ═══════════ */}
      <section className="py-20 lg:py-28 bg-soft-pink-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12 lg:mb-16">
            <span className="inline-block font-poppins text-[11px] font-semibold uppercase tracking-[0.25em] text-teal mb-4">
              Why people love Hugz
            </span>
            <h2 className="font-petrona text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-teal">
              More than a stuffed animal
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((benefit, i) => (
              <ScrollReveal key={benefit.title} delay={i * 0.1}>
                <div className="group bg-white rounded-2xl p-6 lg:p-7 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-14 h-14 rounded-xl bg-teal/8 flex items-center justify-center mb-4 group-hover:bg-teal/12 transition-colors overflow-hidden">
                    <Image src={benefit.icon} alt="" width={36} height={36} className="object-contain" />
                  </div>
                  <h3 className="font-petrona text-lg font-semibold text-deep-teal mb-2">{benefit.title}</h3>
                  <p className="text-sm text-deep-teal/45 leading-relaxed">{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 5. WHY WEIGHTED ═══════════ */}
      <section className="py-20 lg:py-28 bg-mint relative overflow-hidden">
        <Image src="/brand/svg-12.svg" alt="" width={100} height={100} className="absolute top-10 right-8 opacity-[0.04] hidden lg:block" aria-hidden />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="inline-block font-poppins text-[11px] font-semibold uppercase tracking-[0.25em] text-teal mb-4">
                  The science of comfort
                </span>
                <h2 className="font-petrona text-3xl sm:text-4xl font-bold text-deep-teal leading-[1.1] mb-5">
                  Why <span className="italic text-teal">weighted</span>?
                </h2>
                <div className="space-y-4 text-[15px] text-deep-teal/50 leading-[1.75]">
                  <p>
                    Deep pressure therapy has been used by occupational therapists for decades. 
                    The gentle, distributed weight mimics the sensation of being held — triggering 
                    serotonin and melatonin release while reducing cortisol.
                  </p>
                  <p>
                    Unlike weighted blankets, a Hugz is portable. Hold one during a meeting, on a 
                    flight, through a hard conversation, or while falling asleep. Same science, 
                    shaped like something you can hug.
                  </p>
                  <p>
                    Each Hugz weighs approximately 2 lbs — the ideal weight for deep pressure 
                    stimulation without being too heavy to carry around.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="/brand/lifestyle-bed-cow.png"
                    alt="Weighted cow companion on bed"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-5 py-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <Image src="/brand/illust-comfort.png" alt="" width={40} height={40} className="object-contain" />
                    <div>
                      <p className="font-petrona text-sm font-semibold text-deep-teal">Deep Pressure Therapy</p>
                      <p className="text-[10px] text-deep-teal/40">Backed by occupational therapy research</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════ 6. SIZE COMPARISON ═══════════ */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <span className="inline-block font-poppins text-[11px] font-semibold uppercase tracking-[0.25em] text-teal mb-4">
              Find your fit
            </span>
            <h2 className="font-petrona text-3xl sm:text-4xl font-bold text-deep-teal">
              Regular vs. Mini
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ScrollReveal>
              <div className={`bg-white rounded-2xl p-6 lg:p-8 border-2 transition-colors ${isRegular ? "border-teal" : "border-transparent"}`}>
                <div className="text-center mb-6">
                  <span className="inline-block bg-teal/10 text-teal font-poppins text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    Regular
                  </span>
                  <h3 className="font-petrona text-2xl font-bold text-deep-teal">Original Hugz</h3>
                </div>
                <div className="space-y-3 text-sm text-deep-teal/50">
                  <div className="flex justify-between py-2 border-b border-deep-teal/5">
                    <span>Weight</span><span className="font-semibold text-deep-teal">~2 lbs</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-deep-teal/5">
                    <span>Size</span><span className="font-semibold text-deep-teal">13&quot; × 10&quot;</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-deep-teal/5">
                    <span>Fill</span><span className="font-semibold text-deep-teal">Premium weighted</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-deep-teal/5">
                    <span>Best for</span><span className="font-semibold text-deep-teal">All ages</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>Care</span><span className="font-semibold text-deep-teal">Machine washable</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className={`bg-white rounded-2xl p-6 lg:p-8 border-2 transition-colors ${!isRegular ? "border-teal" : "border-transparent"}`}>
                <div className="text-center mb-6">
                  <span className="inline-block bg-soft-pink/30 text-deep-teal/60 font-poppins text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    Mini
                  </span>
                  <h3 className="font-petrona text-2xl font-bold text-deep-teal">Mini Hugz</h3>
                </div>
                <div className="space-y-3 text-sm text-deep-teal/50">
                  <div className="flex justify-between py-2 border-b border-deep-teal/5">
                    <span>Weight</span><span className="font-semibold text-deep-teal">~1 lb</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-deep-teal/5">
                    <span>Size</span><span className="font-semibold text-deep-teal">8&quot; × 6&quot;</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-deep-teal/5">
                    <span>Fill</span><span className="font-semibold text-deep-teal">Premium weighted</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-deep-teal/5">
                    <span>Best for</span><span className="font-semibold text-deep-teal">Travel & kids</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>Care</span><span className="font-semibold text-deep-teal">Machine washable</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════ 7. REVIEWS / TESTIMONIALS ═══════════ */}
      <section className="py-20 lg:py-28 bg-dusty-blue-pale">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <span className="inline-block font-poppins text-[11px] font-semibold uppercase tracking-[0.25em] text-teal mb-4">
              What people say
            </span>
            <h2 className="font-petrona text-3xl sm:text-4xl font-bold text-deep-teal">
              Loved by 50,000+ families
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.author} delay={i * 0.1}>
                <div className="bg-cream rounded-2xl p-6 lg:p-7 h-full flex flex-col">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} width="14" height="14" viewBox="0 0 16 16" fill="#108474">
                        <path d="M8 0l2.5 5 5.5.8-4 3.9.9 5.3L8 12.5 3.1 15l.9-5.3-4-3.9L5.5 5z"/>
                      </svg>
                    ))}
                  </div>
                  <blockquote className="font-poppins text-sm text-deep-teal/65 leading-relaxed mb-4 flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div>
                    <span className="font-poppins text-xs font-semibold text-deep-teal">{t.author}</span>
                    <span className="font-poppins text-xs text-deep-teal/30 ml-2">{t.context}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 8. RELATED PRODUCTS ═══════════ */}
      {related.length > 0 && (
        <section className="py-16 lg:py-24 bg-mint">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center mb-12">
              <span className="inline-block font-poppins text-[11px] font-semibold uppercase tracking-[0.25em] text-teal/60 mb-4">
                More companions
              </span>
              <h2 className="font-petrona text-3xl sm:text-4xl font-bold text-deep-teal">
                You might also love
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {related.map((p, i) => (
                <ScrollReveal key={p.id} delay={i * 0.08}>
                  <Link href={`/products/${p.handle}`} className="group block">
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-white shadow-sm group-hover:shadow-lg transition-shadow duration-300 mb-3">
                      {p.images[0] ? (
                        <Image
                          src={p.images[0].src}
                          alt={p.images[0].alt || p.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-cream">
                          <Image src="/brand/heart.png" alt="" width={32} height={32} className="opacity-15" />
                        </div>
                      )}
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <span className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm text-deep-teal font-poppins text-xs font-semibold px-4 py-2.5 rounded-full">
                          Meet {p.title.split(" ")[0]}
                        </span>
                      </div>
                    </div>
                    <h3 className="font-petrona text-sm font-semibold text-deep-teal">{p.title}</h3>
                    <p className="text-xs text-teal font-medium mt-0.5">{formatPrice(p.variants[0]?.price || "0")}</p>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
