"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getCart, updateQuantity, removeFromCart, getCartTotal, getCheckoutUrl, type CartItem } from "@/lib/cart";
import { formatPrice } from "@/lib/shopify";

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const update = () => setItems(getCart());
    update();
    window.addEventListener("cart-updated", update);
    return () => window.removeEventListener("cart-updated", update);
  }, []);

  const total = getCartTotal();

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-petrona text-3xl sm:text-4xl font-bold text-deep-teal mb-2">
          Your bag
        </h1>
        <p className="text-sm text-deep-teal/40 mb-12">
          {items.length === 0 ? "Nothing here yet." : `${items.reduce((s, i) => s + i.quantity, 0)} items`}
        </p>

        {items.length === 0 ? (
          <div className="text-center py-16">
            <svg width="48" height="48" viewBox="0 0 32 32" fill="none" className="mx-auto mb-6 opacity-20">
              <path d="M16 28s-12-7.4-12-16C4 7.6 7.6 4 12 4c2.4 0 4.4 1.2 4 3.2C15.6 5.2 17.6 4 20 4c4.4 0 8 3.6 8 8 0 8.6-12 16-12 16z" fill="#108474"/>
            </svg>
            <p className="text-deep-teal/40 mb-6">Your bag is empty.</p>
            <Link
              href="/collections/all-hugz"
              className="inline-flex items-center gap-2 bg-teal text-white font-poppins text-sm font-semibold px-8 py-4 rounded-full shadow-lg shadow-teal/20 hover:bg-teal-light transition-all"
            >
              Find your companion
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-6">
              {items.map((item) => (
                <motion.div
                  key={item.variantId}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex gap-4 bg-white rounded-2xl p-4 shadow-sm"
                >
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-cream flex-shrink-0">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 32 32" fill="#108474" opacity="0.2">
                          <path d="M16 28s-12-7.4-12-16C4 7.6 7.6 4 12 4c2.4 0 4.4 1.2 4 3.2C15.6 5.2 17.6 4 20 4c4.4 0 8 3.6 8 8 0 8.6-12 16-12 16z"/>
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link href={`/products/${item.handle}`} className="font-petrona font-semibold text-deep-teal text-sm hover:text-teal transition-colors">
                      {item.title}
                    </Link>
                    {item.variantTitle !== "Default Title" && (
                      <p className="text-xs text-deep-teal/40 mt-0.5">{item.variantTitle}</p>
                    )}
                    <p className="text-sm text-teal font-medium mt-1">{formatPrice(item.price)}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => removeFromCart(item.variantId)}
                      className="text-xs text-deep-teal/30 hover:text-coral transition-colors"
                    >
                      Remove
                    </button>
                    <div className="flex items-center gap-2 bg-cream rounded-full">
                      <button
                        onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center text-deep-teal/40 hover:text-deep-teal transition-colors"
                      >
                        -
                      </button>
                      <span className="text-sm font-medium text-deep-teal w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center text-deep-teal/40 hover:text-deep-teal transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 border-t border-deep-teal/10 pt-6">
              <div className="flex justify-between items-center mb-6">
                <span className="font-poppins text-sm text-deep-teal/50">Subtotal</span>
                <span className="font-petrona text-2xl font-bold text-deep-teal">
                  ${total.toFixed(2)}
                </span>
              </div>
              <a
                href={getCheckoutUrl()}
                className="block w-full py-4 bg-teal text-white font-poppins text-sm font-semibold text-center rounded-full shadow-lg shadow-teal/20 hover:bg-teal-light hover:shadow-xl transition-all hover:-translate-y-0.5"
              >
                Checkout
              </a>
              <p className="text-center text-xs text-deep-teal/30 mt-4">
                Taxes and shipping calculated at checkout
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
