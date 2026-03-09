import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — GiveHugz",
  description: "Frequently asked questions about GiveHugz weighted stuffed animals. Shipping, returns, care instructions, and more.",
};

const faqs = [
  {
    q: "How heavy are Hugz?",
    a: "Regular Hugz weigh approximately 2 lbs, and Mini Hugz weigh about 1 lb. The weight comes from food-grade glass beads distributed evenly throughout, creating gentle, even pressure when held.",
  },
  {
    q: "Are Hugz safe for children?",
    a: "Yes. All Hugz are designed for ages 3 and up. They're made with child-safe materials, double-stitched seams, and food-grade glass bead filling. The weight is gentle enough for children while still providing the calming deep pressure effect.",
  },
  {
    q: "How do weighted stuffed animals help with anxiety?",
    a: "Weighted products use deep pressure therapy (DPT) to activate your parasympathetic nervous system. The even, gentle pressure reduces cortisol (the stress hormone) while increasing serotonin and melatonin. It's the same principle behind weighted blankets, but in a form you can hug, hold, and carry with you.",
  },
  {
    q: "Can adults use Hugz?",
    a: "Absolutely. A significant portion of our customers are adults who use Hugz for anxiety relief, sleep support, or simply the comfort of holding something with weight. There's nothing childish about needing comfort.",
  },
  {
    q: "How do I wash my Hugz?",
    a: "Spot clean with a damp cloth and mild soap. For deeper cleaning, hand wash in cold water and lay flat to dry. Do not machine wash or dry, as the glass beads can be damaged by agitation and heat.",
  },
  {
    q: "What is your return policy?",
    a: "We offer a 30-day comfort guarantee. If your Hugz isn't right for you, return it in its original condition for a full refund. See our Returns page for details.",
  },
  {
    q: "Do you ship internationally?",
    a: "Currently, we ship within the United States. International shipping is coming soon. Sign up for our newsletter to be notified when we expand.",
  },
  {
    q: "What portion goes to charity?",
    a: "10% of every purchase is donated to the Inspiring Children Foundation, supporting mental health resources for at-risk and underserved youth. This is a permanent part of our business model, not a limited campaign.",
  },
  {
    q: "Do you offer wholesale?",
    a: "Yes! We work with therapists, wellness centers, hospitals, schools, and retail partners. Visit our Wholesale page or email support@givehugz.co for pricing and minimum orders.",
  },
];

export default function FAQPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="bg-cream py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-petrona text-4xl sm:text-5xl font-bold text-deep-teal mb-4">
            Frequently asked questions
          </h1>
          <p className="text-base text-deep-teal/45">
            Everything you need to know about Hugz.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group border-b border-deep-teal/8"
            >
              <summary className="flex items-center justify-between cursor-pointer py-6 font-petrona text-lg font-semibold text-deep-teal hover:text-teal transition-colors list-none">
                {faq.q}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="flex-shrink-0 ml-4 transition-transform group-open:rotate-45"
                >
                  <line x1="10" y1="4" x2="10" y2="16" />
                  <line x1="4" y1="10" x2="16" y2="10" />
                </svg>
              </summary>
              <p className="text-sm text-deep-teal/50 leading-relaxed pb-6 pl-0">
                {faq.a}
              </p>
            </details>
          ))}
        </div>

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.a,
                },
              })),
            }),
          }}
        />
      </div>
    </div>
  );
}
