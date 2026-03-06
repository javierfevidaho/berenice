const reasons = [
  {
    icon: "🛡️",
    title: "Fully Insured & Bonded",
    description:
      "Your home and belongings are protected. We carry full liability insurance and are bonded for your peace of mind.",
  },
  {
    icon: "✅",
    title: "Trusted & Background-Checked",
    description:
      "Every cleaner on our team is personally vetted by Berenice. 20 years of building trust with Idaho families.",
  },
  {
    icon: "💵",
    title: "Affordable & Transparent Pricing",
    description:
      "No hidden fees. We offer competitive cleaning prices for Boise, Nampa, Caldwell, and Meridian residents.",
  },
  {
    icon: "⚡",
    title: "Same-Day Service Available",
    description:
      "Need a last-minute clean? We offer same-day availability for residential and office cleaning across Treasure Valley.",
  },
  {
    icon: "🌎",
    title: "Bilingual — English & Spanish",
    description:
      "Berenice and her team are fully bilingual. We serve both English and Spanish-speaking clients throughout Idaho.",
  },
  {
    icon: "⭐",
    title: "100% Satisfaction Guarantee",
    description:
      "Not happy? We come back at no extra cost. We stand behind every cleaning service we provide.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-widest">Why Choose Us</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Boise&apos;s Most Trusted Cleaning Service
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-slate-500 text-lg">
            With {20}+ years of experience, Berenice&apos;s Sparkle Clean is the name Treasure Valley
            families and businesses trust.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="bg-white rounded-2xl border border-slate-100 p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-3xl">{r.icon}</span>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{r.title}</h3>
              <p className="mt-2 text-slate-500 text-sm leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { value: "20+", label: "Years Experience" },
            { value: "500+", label: "Homes Cleaned" },
            { value: "100%", label: "Satisfaction Guarantee" },
            { value: "English / Español", label: "Bilingual Team" },
          ].map((s) => (
            <div key={s.label} className="bg-teal-600 rounded-2xl py-6 px-4 text-center text-white">
              <div className="text-2xl font-extrabold">{s.value}</div>
              <div className="text-teal-100 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
