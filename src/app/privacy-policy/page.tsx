import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — GiveHugz",
  description: "GiveHugz privacy policy. How we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="bg-cream py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-petrona text-4xl font-bold text-deep-teal">Privacy Policy</h1>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-deep-teal/55 space-y-6 text-sm leading-relaxed">
        <p>Last updated: March 2026</p>
        <p>GiveHugz (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) is committed to protecting your privacy. This policy describes how we collect, use, and share information when you visit givehugz.co.</p>
        <h2 className="font-petrona text-xl font-bold text-deep-teal !mt-8">Information We Collect</h2>
        <p>We collect information you provide directly (name, email, shipping address when you make a purchase) and automatically (browser type, pages visited, IP address via standard web analytics).</p>
        <h2 className="font-petrona text-xl font-bold text-deep-teal !mt-8">How We Use Your Information</h2>
        <p>To fulfill orders, communicate about your purchase, improve our website, and send marketing communications you&apos;ve opted into.</p>
        <h2 className="font-petrona text-xl font-bold text-deep-teal !mt-8">Third Parties</h2>
        <p>We use Shopify for order processing and payment. We do not sell your personal information. See Shopify&apos;s privacy policy for details on their data handling.</p>
        <h2 className="font-petrona text-xl font-bold text-deep-teal !mt-8">Contact</h2>
        <p>Questions about this policy? Email <a href="mailto:support@givehugz.co" className="text-teal">support@givehugz.co</a>.</p>
      </div>
    </div>
  );
}
