import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — GiveHugz",
  description: "GiveHugz terms of service.",
};

export default function TermsPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="bg-cream py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-petrona text-4xl font-bold text-deep-teal">Terms of Service</h1>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-deep-teal/55 space-y-6 text-sm leading-relaxed">
        <p>Last updated: March 2026</p>
        <p>By using givehugz.co, you agree to these terms. Please read them carefully.</p>
        <h2 className="font-petrona text-xl font-bold text-deep-teal !mt-8">Products</h2>
        <p>Product descriptions and pricing are subject to change. We reserve the right to limit quantities and refuse orders at our discretion.</p>
        <h2 className="font-petrona text-xl font-bold text-deep-teal !mt-8">Orders & Payment</h2>
        <p>All orders are processed through Shopify&apos;s secure checkout. By placing an order, you represent that all information provided is accurate.</p>
        <h2 className="font-petrona text-xl font-bold text-deep-teal !mt-8">Intellectual Property</h2>
        <p>All content on this site, including text, images, logos, and designs, is the property of GiveHugz and may not be reproduced without permission.</p>
        <h2 className="font-petrona text-xl font-bold text-deep-teal !mt-8">Contact</h2>
        <p>Questions? Email <a href="mailto:support@givehugz.co" className="text-teal">support@givehugz.co</a>.</p>
      </div>
    </div>
  );
}
