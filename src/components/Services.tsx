import Link from "next/link";
import { SERVICES } from "@/lib/constants";

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-widest">What We Do</span>
          {/* H2 — secondary SEO keyword */}
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
            House Cleaning Boise ID &amp; Beyond
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-500 text-lg">
            From regular home cleaning to large-scale commercial jobs, Berenice&apos;s Sparkle Clean
            has the experience and dedication to get it done right.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s) => {
            const card = (
              <div className="group h-full bg-white rounded-2xl border border-slate-100 p-7 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-2xl mb-5 group-hover:bg-teal-600 group-hover:border-teal-600 transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{s.headline}</h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-grow">{s.description}</p>
                {s.slug && (
                  <div className="mt-6">
                    <span className="inline-flex items-center gap-1 text-teal-600 text-sm font-semibold group-hover:gap-2 transition-all">
                      Learn more
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                )}
              </div>
            );

            return s.slug ? (
              <Link key={s.title} href={`/services/${s.slug}`} className="block h-full" aria-label={s.headline}>
                {card}
              </Link>
            ) : (
              <div key={s.title} className="h-full">
                {card}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/#contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold px-10 py-4 rounded-full text-lg transition-all hover:scale-105 hover:shadow-lg"
          >
            Get a Free Quote on Any Service
          </Link>
        </div>
      </div>
    </section>
  );
}
