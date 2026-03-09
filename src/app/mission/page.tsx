import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Mission — GiveHugz",
  description: "GiveHugz donates 10% of every purchase to the Inspiring Children Foundation. Mental health is health.",
};

export default function MissionPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative bg-deep-teal py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none">
            <path d="M200,380 C200,380 40,280 40,160 C40,80 100,40 160,40 C190,40 210,60 200,90 C190,60 210,40 240,40 C300,40 360,80 360,160 C360,280 200,380 200,380Z" stroke="white" strokeWidth="1" fill="none"/>
          </svg>
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block font-poppins text-[10px] font-semibold uppercase tracking-[0.3em] text-teal/60 mb-6">
            Our mission
          </span>
          <h1 className="font-petrona text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Mental health <span className="italic text-teal">is</span> health.
          </h1>
          <p className="text-lg text-white/50 leading-relaxed max-w-xl mx-auto">
            Every Hugz carries more than weight. It carries a commitment to making 
            comfort accessible to every child who needs it.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="space-y-12">
          <div>
            <h2 className="font-petrona text-2xl font-bold text-deep-teal mb-4">The why</h2>
            <p className="text-deep-teal/55 leading-relaxed">
              1 in 5 children in the U.S. experiences a mental health disorder each year. 
              Many don&apos;t have access to the tools and resources they need. We started GiveHugz 
              because we believe that comfort shouldn&apos;t be a privilege, and that something as 
              simple as the right weighted companion can make a real difference in how a child 
              (or adult) navigates their hardest days.
            </p>
          </div>

          <div>
            <h2 className="font-petrona text-2xl font-bold text-deep-teal mb-4">Inspiring Children Foundation</h2>
            <p className="text-deep-teal/55 leading-relaxed mb-4">
              10% of every GiveHugz purchase goes directly to the Inspiring Children Foundation, 
              a nonprofit dedicated to transforming the lives of at-risk and underserved youth 
              through comprehensive education, mentoring, and wellness programs.
            </p>
            <p className="text-deep-teal/55 leading-relaxed">
              This isn&apos;t a seasonal campaign or a marketing initiative. It&apos;s built into 
              every transaction, every day, permanently. When you buy a Hugz, you&apos;re not 
              just getting a companion for yourself. You&apos;re funding mental health support 
              for a child who needs it.
            </p>
          </div>

          <div className="bg-cream rounded-3xl p-10 text-center">
            <span className="font-petrona text-5xl font-bold text-teal block mb-2">10%</span>
            <p className="text-sm text-deep-teal/40">of every purchase, every day, forever.</p>
          </div>

          <div>
            <h2 className="font-petrona text-2xl font-bold text-deep-teal mb-4">Beyond the donation</h2>
            <p className="text-deep-teal/55 leading-relaxed">
              We also work to destigmatize conversations about mental health through our content, 
              our community, and the way we talk about our products. A Hugz isn&apos;t a toy. 
              It&apos;s a tool for emotional regulation, and there&apos;s nothing childish about 
              needing one, no matter how old you are.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/collections/all-hugz"
            className="inline-flex items-center gap-2 bg-teal text-white font-poppins text-sm font-semibold px-8 py-4 rounded-full shadow-lg shadow-teal/20 hover:bg-teal-light transition-all"
          >
            Shop and support the mission
          </Link>
        </div>
      </div>
    </div>
  );
}
