import Link from "next/link";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { BUSINESS, SERVICES } from "@/lib/constants";

type Props = {
  city: string;
  state: string;
  headline: string;
  intro: string;
  localDetails: string;
  neighborhoods: string[];
};

export default function CityPageTemplate({
  city,
  state,
  headline,
  intro,
  localDetails,
  neighborhoods,
}: Props) {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block bg-teal-500/20 border border-teal-400/30 text-teal-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              📍 Serving {city}, {state}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              {headline}
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">{intro}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="bg-teal-500 hover:bg-teal-400 text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105"
              >
                Get Free Quote in {city}
              </Link>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="border-2 border-white/40 hover:border-white/70 text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:bg-white/10"
              >
                📞 {BUSINESS.phone}
              </a>
            </div>
          </div>
        </section>

        {/* Local info */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-5">
              Why {city} Trusts Berenice&apos;s Sparkle Clean
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">{localDetails}</p>

            {/* Neighborhoods */}
            <h3 className="text-xl font-bold text-slate-800 mb-4">
              Neighborhoods We Serve in {city}
            </h3>
            <div className="flex flex-wrap gap-3">
              {neighborhoods.map((n) => (
                <span
                  key={n}
                  className="bg-teal-50 border border-teal-200 text-teal-700 text-sm font-medium px-4 py-2 rounded-full"
                >
                  {n}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Services in this city */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-8 text-center">
              Our Cleaning Services in {city}, {state}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((s) => (
                <div
                  key={s.title}
                  className="bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="text-2xl">{s.icon}</span>
                  <h3 className="mt-3 text-base font-bold text-slate-900">{s.title} — {city}</h3>
                  <p className="mt-2 text-slate-500 text-sm">{s.shortDesc}</p>
                  {s.slug && (
                    <Link
                      href={`/services/${s.slug}`}
                      className="mt-4 inline-block text-teal-600 text-sm font-semibold hover:underline"
                    >
                      Learn more →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
