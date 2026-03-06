"use client";

import { useState } from "react";
import { BUSINESS } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

type FormState = {
  name: string; phone: string; email: string;
  serviceType: string; city: string; date: string; message: string;
};

const initial: FormState = {
  name: "", phone: "", email: "", serviceType: "", city: "", date: "", message: "",
};

export default function ContactForm() {
  const { t } = useLanguage();
  const c = t.contact;
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setForm(initial);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-teal-700 via-teal-800 to-slate-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-teal-300 font-semibold text-sm uppercase tracking-widest">{c.badge}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">{c.h2}</h2>
          <p className="mt-4 text-teal-200">{c.description}</p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
            >
              📞 {BUSINESS.phone}
            </a>
            <a
              href={`mailto:${BUSINESS.email}`}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
            >
              ✉️ {BUSINESS.email}
            </a>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 space-y-6"
          aria-label="Contact form"
          noValidate
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">{c.fields.name}</label>
              <input
                id="name" name="name" required value={form.name} onChange={onChange}
                placeholder={c.placeholders.name}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition text-sm"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">{c.fields.phone}</label>
              <input
                id="phone" name="phone" type="tel" required value={form.phone} onChange={onChange}
                placeholder={c.placeholders.phone}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">{c.fields.email}</label>
            <input
              id="email" name="email" type="email" required value={form.email} onChange={onChange}
              placeholder={c.placeholders.email}
              className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition text-sm"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="serviceType" className="block text-sm font-semibold text-slate-700 mb-2">{c.fields.serviceType}</label>
              <select
                id="serviceType" name="serviceType" required value={form.serviceType} onChange={onChange}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-teal-400 transition text-sm"
              >
                <option value="">{c.placeholders.serviceType}</option>
                {c.serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-semibold text-slate-700 mb-2">{c.fields.city}</label>
              <select
                id="city" name="city" required value={form.city} onChange={onChange}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-teal-400 transition text-sm"
              >
                <option value="">{c.placeholders.city}</option>
                {c.cityOptions.map((city) => (
                  <option key={city} value={city}>{city}, ID</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-semibold text-slate-700 mb-2">{c.fields.date}</label>
            <input
              id="date" name="date" type="date" required value={form.date} onChange={onChange}
              min={new Date().toISOString().split("T")[0]}
              className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-400 transition text-sm"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">{c.fields.message}</label>
            <textarea
              id="message" name="message" value={form.message} onChange={onChange} rows={4}
              placeholder={c.placeholders.message}
              className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition text-sm resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-teal-300 text-white font-bold py-4 rounded-xl text-lg transition-all hover:scale-[1.01] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
          >
            {status === "loading" ? c.sending : c.submit}
          </button>

          {status === "success" && (
            <div role="alert" className="bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl p-4 text-center text-sm font-medium">
              {c.success}
            </div>
          )}
          {status === "error" && (
            <div role="alert" className="bg-red-50 border border-red-200 text-red-600 rounded-xl p-4 text-center text-sm font-medium">
              {c.error}{" "}
              <a href={`tel:${BUSINESS.phone}`} className="underline font-bold">{BUSINESS.phone}</a>.
            </div>
          )}

          <p className="text-center text-xs text-slate-400">{c.privacy}</p>
        </form>
      </div>
    </section>
  );
}
