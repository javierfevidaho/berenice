import Link from "next/link";
import { SERVICE_AREAS } from "@/lib/constants";

const cityDetails = [
  {
    name: "Boise",
    slug: "boise-cleaning-services",
    description: "Serving all Boise neighborhoods — North End, East End, Bench, Southwest Boise, and more.",
    icon: "🏙️",
  },
  {
    name: "Nampa",
    slug: "nampa-cleaning-services",
    description: "Reliable house cleaning and office cleaning services throughout Nampa, Idaho.",
    icon: "🏘️",
  },
  {
    name: "Caldwell",
    slug: "caldwell-cleaning-services",
    description: "Commercial cleaning Caldwell Idaho — offices, businesses, and residential homes.",
    icon: "🏡",
  },
  {
    name: "Meridian",
    slug: "meridian-cleaning-services",
    description: "Affordable cleaning in Meridian Idaho — one of the fastest growing cities in the state.",
    icon: "✨",
  },
];

export default function ServiceAreas() {
  return (
    <section id="areas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-widest">Where We Serve</span>
          {/* H2 — local SEO */}
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Office Cleaning Nampa Idaho &amp; All of Treasure Valley
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-500 text-lg">
            Berenice&apos;s Sparkle Clean proudly serves homeowners, renters, and businesses
            across the entire Treasure Valley area.
          </p>
        </div>

        {/* City cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cityDetails.map((city) => (
            <Link
              key={city.name}
              href={`/${city.slug}`}
              className="group block bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:border-teal-300 hover:bg-teal-50 hover:shadow-lg transition-all duration-300"
              aria-label={`Cleaning services in ${city.name}, Idaho`}
            >
              <span className="text-3xl">{city.icon}</span>
              <h3 className="mt-3 text-lg font-bold text-slate-900 group-hover:text-teal-700">
                {city.name}, Idaho
              </h3>
              <p className="mt-2 text-slate-500 text-sm leading-relaxed">{city.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-teal-600 text-sm font-semibold">
                View services
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        {/* Additional areas list */}
        <div className="bg-teal-50 border border-teal-100 rounded-2xl p-8">
          <h3 className="text-lg font-bold text-slate-900 mb-4 text-center">
            Also Serving These Idaho Communities
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Eagle, ID", "Star, ID", "Kuna, ID", "Garden City, ID", "Middleton, ID", "Parma, ID", "Notus, ID", "Wilder, ID", "All of Treasure Valley, ID"].map(
              (area) => (
                <span
                  key={area}
                  className="bg-white border border-teal-200 text-teal-700 text-sm font-medium px-4 py-2 rounded-full"
                >
                  📍 {area}
                </span>
              )
            )}
          </div>
          <p className="text-center text-slate-500 text-sm mt-5">
            Not sure if we cover your area?{" "}
            <Link href="/#contact" className="text-teal-600 hover:underline font-medium">
              Contact us
            </Link>{" "}
            — we&apos;ll let you know right away.
          </p>
        </div>
      </div>
    </section>
  );
}
