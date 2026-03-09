import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-deep-teal text-white/80">
      {/* Wave transition */}
      <div className="relative -mt-1">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-16 lg:h-20">
          <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" fill="#024a4a"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <path d="M16 28s-12-7.4-12-16C4 7.6 7.6 4 12 4c2.4 0 4.4 1.2 4 3.2C15.6 5.2 17.6 4 20 4c4.4 0 8 3.6 8 8 0 8.6-12 16-12 16z" fill="#108474"/>
              </svg>
              <span className="font-petrona text-lg font-bold text-white">GiveHugz</span>
            </div>
            <p className="text-sm leading-relaxed text-white/60 max-w-xs">
              Weighted companions designed for calm. Because everyone deserves the feeling of being held.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://instagram.com/giveahugz" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-teal transition-colors" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://www.tiktok.com/@giveahugz" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-teal transition-colors" aria-label="TikTok">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-.81-.2z"/></svg>
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-poppins text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-6">Shop</h3>
            <ul className="space-y-3">
              {[
                { href: "/collections/all-hugz", label: "All Hugz" },
                { href: "/collections/best-sellers", label: "Best Sellers" },
                { href: "/collections/mini-hugz", label: "Mini Hugz" },
                { href: "/collections/bundles", label: "Bundles" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-teal transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-poppins text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-6">Company</h3>
            <ul className="space-y-3">
              {[
                { href: "/mission", label: "Our Mission" },
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Contact" },
                { href: "/wholesale", label: "Wholesale" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-teal transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-poppins text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-6">Support</h3>
            <ul className="space-y-3">
              <li><a href="mailto:support@givehugz.co" className="text-sm hover:text-teal transition-colors">support@givehugz.co</a></li>
              <li><Link href="/returns" className="text-sm hover:text-teal transition-colors">Returns & Refunds</Link></li>
              <li><Link href="/privacy-policy" className="text-sm hover:text-teal transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-sm hover:text-teal transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} GiveHugz. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Designed by{" "}
            <a href="https://treehaus.site" target="_blank" rel="noopener noreferrer" className="text-teal hover:text-teal-light transition-colors">
              Treehaus
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
