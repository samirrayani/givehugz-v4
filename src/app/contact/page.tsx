import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — GiveHugz",
  description: "Get in touch with GiveHugz. Questions, wholesale inquiries, or just want to say hi.",
};

export default function ContactPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="bg-cream py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-petrona text-4xl sm:text-5xl font-bold text-deep-teal mb-4">
            Get in touch
          </h1>
          <p className="text-base text-deep-teal/45">
            Questions, feedback, or just want to say hi? We&apos;d love to hear from you.
          </p>
        </div>
      </div>

      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="font-petrona text-xl font-semibold text-deep-teal mb-4">Email us</h2>
            <a
              href="mailto:support@givehugz.co"
              className="text-teal hover:text-teal-light transition-colors font-medium"
            >
              support@givehugz.co
            </a>
            <p className="text-sm text-deep-teal/40 mt-2">
              We typically respond within 24 hours.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="font-petrona text-xl font-semibold text-deep-teal mb-4">Follow us</h2>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/giveahugz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-teal hover:text-teal-light transition-colors font-medium"
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@giveahugz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-teal hover:text-teal-light transition-colors font-medium"
              >
                TikTok
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="font-petrona text-xl font-semibold text-deep-teal mb-4">Wholesale</h2>
            <p className="text-sm text-deep-teal/50 leading-relaxed mb-3">
              Therapists, wellness centers, hospitals, schools, and retail partners: 
              we&apos;d love to work with you.
            </p>
            <a
              href="mailto:support@givehugz.co?subject=Wholesale%20Inquiry"
              className="text-sm text-teal hover:text-teal-light transition-colors font-medium"
            >
              Email us about wholesale
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
