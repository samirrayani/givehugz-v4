import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wholesale — GiveHugz",
  description: "Partner with GiveHugz. Wholesale pricing for therapists, wellness centers, hospitals, schools, and retailers.",
};

export default function WholesalePage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="bg-cream py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-petrona text-4xl sm:text-5xl font-bold text-deep-teal mb-4">
            Wholesale partnerships
          </h1>
          <p className="text-base text-deep-teal/45 max-w-lg mx-auto">
            Bring the comfort of Hugz to your clients, patients, students, or customers.
          </p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {[
            { title: "Therapists & Counselors", desc: "Weighted companions as tools in therapy sessions and grounding exercises." },
            { title: "Wellness Centers & Spas", desc: "Add a tactile comfort element to your wellness offerings." },
            { title: "Hospitals & Clinics", desc: "Calming support for pediatric patients and waiting rooms." },
            { title: "Retailers", desc: "Stock the weighted companion that customers are searching for." },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-petrona text-lg font-semibold text-deep-teal mb-2">{item.title}</h3>
              <p className="text-sm text-deep-teal/45 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center bg-mint rounded-3xl p-10">
          <h2 className="font-petrona text-2xl font-bold text-deep-teal mb-4">Interested?</h2>
          <p className="text-sm text-deep-teal/45 mb-6">
            Email us with your business name, location, and estimated order volume.
          </p>
          <a
            href="mailto:support@givehugz.co?subject=Wholesale%20Inquiry"
            className="inline-flex items-center gap-2 bg-teal text-white font-poppins text-sm font-semibold px-8 py-4 rounded-full shadow-lg shadow-teal/20 hover:bg-teal-light transition-all"
          >
            Email us about wholesale
          </a>
        </div>
      </div>
    </div>
  );
}
