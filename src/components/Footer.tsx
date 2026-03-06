import Link from "next/link";
import { BUSINESS, SERVICES, SERVICE_AREAS } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top grid */}
        <div className="py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand / NAP */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-teal-600 flex items-center justify-center text-white font-bold text-lg select-none">
                ✦
              </div>
              <div className="leading-tight">
                <span className="block text-sm font-extrabold text-white">Berenice&apos;s</span>
                <span className="block text-xs font-semibold text-teal-400 tracking-wide">Sparkle Clean</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Professional house cleaning, office cleaning, and commercial cleaning in Boise,
              Nampa, Caldwell, Meridian, and the Treasure Valley, Idaho.
            </p>
            {/* NAP — critical for local SEO */}
            <address className="not-italic mt-5 space-y-1.5 text-sm">
              <div itemProp="name" className="text-white font-semibold">{BUSINESS.name}</div>
              <div>📍 {BUSINESS.address.full}</div>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="block hover:text-teal-400 transition-colors"
                itemProp="telephone"
              >
                📞 {BUSINESS.phone}
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="block hover:text-teal-400 transition-colors"
                itemProp="email"
              >
                ✉️ {BUSINESS.email}
              </a>
            </address>
            <p className="mt-3 text-xs text-slate-500">Mon–Fri 7am–7pm · Sat 8am–5pm</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((s) =>
                s.slug ? (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="hover:text-teal-400 transition-colors">
                      {s.title}
                    </Link>
                  </li>
                ) : (
                  <li key={s.title}>
                    <Link href="/#services" className="hover:text-teal-400 transition-colors">
                      {s.title}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Service Areas</h4>
            <ul className="space-y-2 text-sm">
              {SERVICE_AREAS.filter((a) => a.slug).map((a) => (
                <li key={a.name}>
                  <Link href={`/${a.slug}`} className="hover:text-teal-400 transition-colors">
                    {a.name}, {a.state}
                  </Link>
                </li>
              ))}
              {SERVICE_AREAS.filter((a) => !a.slug).map((a) => (
                <li key={a.name}>
                  <span>{a.name}, {a.state}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>
            © {year} {BUSINESS.name}. All rights reserved. · Boise, Idaho
          </p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-teal-400 transition-colors">Terms of Service</Link>
            <Link href="/#contact" className="hover:text-teal-400 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
