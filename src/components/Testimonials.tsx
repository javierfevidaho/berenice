const testimonials = [
  {
    name: "Jennifer M.",
    location: "Boise, Idaho",
    avatar: "JM",
    rating: 5,
    service: "Weekly House Cleaning",
    text: "Berenice and her team are absolutely amazing! I've been using their cleaning services in Boise for over a year now and my house has never been cleaner. They are punctual, professional, and incredibly thorough. I especially love that they're bilingual — it makes communication so easy. Highly recommend for anyone in the Treasure Valley looking for reliable maid service!",
  },
  {
    name: "Carlos R.",
    location: "Nampa, Idaho",
    avatar: "CR",
    rating: 5,
    service: "Office Cleaning — Nampa",
    text: "We hired Berenice's Sparkle Clean for our small office in Nampa and the results have been outstanding. They come every week and our workspace is always spotless. The team is respectful and efficient. Affordable pricing for the quality you get. Best office cleaning Nampa Idaho has to offer!",
  },
  {
    name: "Lisa T.",
    location: "Meridian, Idaho",
    avatar: "LT",
    rating: 5,
    service: "Move-Out Deep Cleaning",
    text: "I needed a move-out deep cleaning in Meridian on very short notice and Berenice made it happen same day. The apartment looked brand new — I got my full deposit back! These ladies work incredibly hard and leave no corner untouched. The most affordable and reliable cleaning service in Meridian Idaho. 10/10 would hire again!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-widest">Reviews</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
            What Treasure Valley Clients Say
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-slate-500 text-lg">
            Real reviews from real clients in Boise, Nampa, and Meridian Idaho.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl border border-slate-100 p-7 flex flex-col hover:shadow-lg transition-shadow duration-300"
              itemScope
              itemType="https://schema.org/Review"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4" aria-label="5 stars">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-amber-400" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-2.5 py-1 rounded-full w-fit mb-3">
                {t.service}
              </span>

              <p className="text-slate-600 text-sm leading-relaxed flex-grow" itemProp="reviewBody">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-slate-100">
                <div
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-700 flex items-center justify-center text-white text-sm font-bold shrink-0"
                  aria-hidden="true"
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm" itemProp="author">{t.name}</div>
                  <div className="text-slate-400 text-xs">📍 {t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
