"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleCart = () => {
      try {
        const cart = JSON.parse(localStorage.getItem("givehugz-cart") || "[]");
        setCartCount(cart.reduce((s: number, i: { quantity: number }) => s + i.quantity, 0));
      } catch { setCartCount(0); }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("cart-updated", handleCart);
    handleCart();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("cart-updated", handleCart);
    };
  }, []);

  const navLinks = [
    { href: "/collections/all-hugz", label: "Shop All" },
    { href: "/collections/best-sellers", label: "Best Sellers" },
    { href: "/collections/mini-hugz", label: "Mini Hugz" },
    { href: "/mission", label: "Our Mission" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-cream/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="transition-transform group-hover:scale-110">
                <path d="M16 28s-12-7.4-12-16C4 7.6 7.6 4 12 4c2.4 0 4.4 1.2 4 3.2C15.6 5.2 17.6 4 20 4c4.4 0 8 3.6 8 8 0 8.6-12 16-12 16z" fill="#108474"/>
                <circle cx="12" cy="11" r="1.5" fill="white" opacity="0.8"/>
                <circle cx="20" cy="11" r="1.5" fill="white" opacity="0.8"/>
                <path d="M13 15c0 0 1.5 2 3 2s3-2 3-2" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.8"/>
              </svg>
              <span className="font-petrona text-xl font-bold text-deep-teal tracking-tight">
                GiveHugz
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-deep-teal/70 hover:text-teal transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal rounded-full transition-all group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-4">
              <Link
                href="/cart"
                className="relative p-2 text-deep-teal hover:text-teal transition-colors"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <path d="M16 10a4 4 0 01-8 0"/>
                </svg>
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-teal text-white text-[10px] font-bold rounded-full flex items-center justify-center"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-deep-teal"
                aria-label="Toggle menu"
              >
                <div className="w-5 h-4 flex flex-col justify-between">
                  <span className={`block h-0.5 bg-current transition-all ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                  <span className={`block h-0.5 bg-current transition-all ${mobileOpen ? "opacity-0" : ""}`} />
                  <span className={`block h-0.5 bg-current transition-all ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-cream pt-20"
          >
            <nav className="flex flex-col items-center gap-8 pt-12">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-petrona text-2xl text-deep-teal hover:text-teal transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
