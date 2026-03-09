import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Returns & Refunds — GiveHugz",
  description: "GiveHugz 30-day comfort guarantee. Returns and refund policy.",
};

export default function ReturnsPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="bg-cream py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-petrona text-4xl font-bold text-deep-teal">Returns & Refunds</h1>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose-sm text-deep-teal/55">
        <h2 className="font-petrona text-xl font-bold text-deep-teal mt-8 mb-4">30-Day Comfort Guarantee</h2>
        <p className="mb-4 leading-relaxed">We want you to love your Hugz. If for any reason you&apos;re not completely satisfied, you may return your purchase within 30 days of delivery for a full refund.</p>
        <h2 className="font-petrona text-xl font-bold text-deep-teal mt-8 mb-4">How to Return</h2>
        <p className="mb-4 leading-relaxed">Email <a href="mailto:support@givehugz.co" className="text-teal">support@givehugz.co</a> with your order number and reason for return. We&apos;ll provide a prepaid return label.</p>
        <h2 className="font-petrona text-xl font-bold text-deep-teal mt-8 mb-4">Conditions</h2>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Items must be in original, unused condition</li>
          <li>Gift cards are non-refundable</li>
          <li>Refunds are processed within 5-7 business days of receiving the return</li>
        </ul>
      </div>
    </div>
  );
}
