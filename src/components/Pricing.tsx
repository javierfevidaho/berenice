import Link from "next/link";

const tiers = [
  {
    name: "Small Home / Studio",
    price: "From $80",
    subtitle: "Up to 700 sq ft",
    features: [
      "Kitchen & Bathrooms",
      "Vacuuming & Mopping",
      "Dusting all surfaces",
      "Trash removal",
      "1–2 Bedrooms",
    ],
    highlight: false,
  },
  {
    name: "Medium Home",
    price: "From $130",
    subtitle: "700–1,500 sq ft",
    features: [
      "Everything in Small",
      "3 Bedrooms",
      "2 Bathrooms",
      "Living & Dining rooms",
      "Inside appliances on request",
    ],
    highlight: true,
  },
  {
    name: "Large Home",
    price: "From $200",
    subtitle: "1,500–3,000+ sq ft",
    features: [
      "Everything in Medium",
      "4+ Bedrooms",
      "3+ Bathrooms",
      "Bonus rooms & basement",
      "Priority scheduling",
    ],
    highlight: false,
  },
  {
    name: "Office / Commercial",
    price: "Custom Quote",
    subtitle: "Any size",
    features: [
      "Offices & break rooms",
      "Restrooms & lobbies",
      "Flexible schedule",
      "Daily / weekly / monthly",
      "Free on-site estimate",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-widest">Transparent Pricing</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Affordable Cleaning Prices — Boise &amp; Treasure Valley
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-slate-500 text-lg">
            No hidden fees. No surprises. Just honest, affordable cleaning across Boise, Nampa,
            Caldwell, and Meridian Idaho.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl p-7 flex flex-col border transition-shadow hover:shadow-xl ${
                t.highlight
                  ? "bg-teal-600 border-teal-600 text-white shadow-lg shadow-teal-200"
                  : "bg-white border-slate-100 text-slate-800"
              }`}
            >
              {t.highlight && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                  Most Popular
                </span>
              )}

              <h3 className={`text-lg font-bold ${t.highlight ? "text-white" : "text-slate-900"}`}>
                {t.name}
              </h3>
              <p className={`text-xs mt-0.5 ${t.highlight ? "text-teal-200" : "text-slate-400"}`}>
                {t.subtitle}
              </p>

              <div className="mt-4 mb-6">
                <span className={`text-3xl font-extrabold ${t.highlight ? "text-white" : "text-teal-600"}`}>
                  {t.price}
                </span>
              </div>

              <ul className="space-y-2.5 flex-grow">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <svg
                      className={`w-4 h-4 mt-0.5 shrink-0 ${t.highlight ? "text-teal-200" : "text-teal-500"}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={t.highlight ? "text-teal-100" : "text-slate-600"}>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/#contact"
                className={`mt-8 block text-center font-semibold py-3 rounded-xl text-sm transition-colors ${
                  t.highlight
                    ? "bg-white text-teal-700 hover:bg-teal-50"
                    : "bg-teal-600 text-white hover:bg-teal-700"
                }`}
              >
                {t.name === "Office / Commercial" ? "Get Custom Quote" : "Book This Plan"}
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-sm mt-8">
          * Prices vary based on home condition and location. Deep cleaning and move-in/out services may incur additional fees.{" "}
          <Link href="/#contact" className="text-teal-600 hover:underline font-medium">
            Contact us for an exact quote.
          </Link>
        </p>
      </div>
    </section>
  );
}
